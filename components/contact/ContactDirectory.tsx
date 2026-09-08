import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { contact, whatsapp } from "@/lib/site";
import { padIndex } from "@/lib/utils";

function phoneLabelKey(label: (typeof contact.phones)[number]["label"]) {
  return label === "switchboard"
    ? "contactPage.phoneSwitchboard"
    : "contactPage.phoneMobile";
}

type Row = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

export async function ContactDirectory() {
  const t = createT(await getLocale());

  const rows: Row[] = [
    ...contact.phones.map((phone) => ({
      label: t(phoneLabelKey(phone.label)),
      value: phone.display,
      href: phone.href,
    })),
    {
      label: "WhatsApp",
      value: whatsapp.display,
      href: whatsapp.href,
      external: true,
    },
    {
      label: t("contactPage.email"),
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      label: t("contactPage.fax"),
      value: contact.fax.display,
      href: contact.fax.href,
    },
    {
      label: t("contactPage.hours"),
      value: `${t("contactPage.weekday")} · ${t("contactPage.saturday")}`,
    },
    {
      label: t("contactPage.address"),
      value: contact.address,
      href: "#konum",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <FadeIn className="max-w-[640px]">
          <p className="type-kicker">{t("contactPage.writeKicker")}</p>
          <h2 className="type-h2 mt-4 text-ink">{t("contactPage.detailsTitle")}</h2>
          <p className="type-body mt-5 max-w-[48ch]">{t("contactPage.detailsLead")}</p>
        </FadeIn>

        <ul className="mt-10 border-b border-line lg:mt-16">
          {rows.map((row, index) => {
            const content = (
              <article className="group relative grid gap-2 border-t border-line py-7 sm:gap-3 sm:py-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-9">
                <span
                  className="absolute left-0 top-7 hidden h-[calc(100%-3.5rem)] w-px origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100 motion-reduce:transition-none lg:top-9 lg:block lg:h-[calc(100%-4.5rem)]"
                  aria-hidden="true"
                />
                <p className="type-kicker lg:col-span-1">{padIndex(index)}</p>
                <p className="type-small text-muted lg:col-span-2">{row.label}</p>
                <p className="min-w-0 break-words text-[17px] font-medium tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-primary sm:text-[18px] lg:col-span-8">
                  {row.value}
                </p>
                <span className="hidden lg:col-span-1 lg:flex lg:justify-end">
                  {row.href ? (
                    <ArrowRight
                      className="size-4 text-ink/25 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-primary motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  ) : null}
                </span>
              </article>
            );

            return (
              <li key={`${row.label}-${row.value}`}>
                <FadeIn delay={Math.min(index, 5) * 0.03}>
                  {row.href ? (
                    <a
                      href={row.href}
                      {...(row.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="block outline-none focus-visible:bg-studio/60"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
