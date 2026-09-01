import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { JsonLd } from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export async function generateMetadata(): Promise<Metadata> {
  return defaultMetadata(await getLocale());
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const t = createT(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-charcoal antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <LanguageProvider locale={locale}>
          <a
            href="#icerik"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            {t("nav.skipToContent")}
          </a>
          <Header />
          <main id="icerik" className="min-w-0 flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
