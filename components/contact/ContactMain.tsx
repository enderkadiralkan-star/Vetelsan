import { Container } from "@/components/Container";
import { ContactDirectory } from "@/components/contact/ContactDirectory";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { contact } from "@/lib/site";
import { padIndex } from "@/lib/utils";

export async function ContactMain() {
  const t = createT(await getLocale());

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-[112px]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16 xl:gap-20">
          <FadeIn className="min-w-0 lg:col-span-5">
            <p className="type-kicker">
              {padIndex(1)} — {t("contactPage.writeKicker")}
            </p>
            <h2 className="type-h2 mt-4 text-ink">{t("contactPage.detailsTitle")}</h2>
            <p className="type-body mt-5 max-w-[40ch]">{t("contactPage.detailsLead")}</p>

            <dl className="mt-10 space-y-8 border-t border-line pt-8 lg:mt-12">
              <div>
                <dt className="type-small text-muted">{t("contactPage.address")}</dt>
                <dd className="mt-2 max-w-[28ch] text-[17px] font-medium tracking-[-0.02em] text-ink sm:text-[18px]">
                  {contact.addressShort}
                </dd>
              </div>
              <div>
                <dt className="type-small text-muted">{t("contactPage.hours")}</dt>
                <dd className="mt-2 space-y-1 text-[17px] font-medium tracking-[-0.02em] text-ink sm:text-[18px]">
                  {contact.hours.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </FadeIn>

          <div className="min-w-0 lg:col-span-7">
            <ContactDirectory />
          </div>
        </div>
      </Container>
    </section>
  );
}
