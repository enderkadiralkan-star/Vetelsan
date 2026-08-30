import Link from "next/link";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export default async function NotFound() {
  const t = createT(await getLocale());

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        404
      </p>
      <h1 className="mt-4 text-4xl">{t("notFound.title")}</h1>
      <p className="mt-4 max-w-md text-muted">{t("notFound.description")}</p>
      <Link href="/" className="btn-primary mt-8">
        {t("notFound.backHome")}
      </Link>
    </section>
  );
}
