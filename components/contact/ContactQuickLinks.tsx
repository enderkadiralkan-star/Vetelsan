import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { contact } from "@/lib/site";
import { cn, padIndex } from "@/lib/utils";

function locationLabel(address: string) {
  const parts = address.split("/").map((part) => part.trim());
  return parts[parts.length - 1] ?? address;
}

export async function ContactQuickLinks() {
  const t = createT(await getLocale());
  const phone = contact.phones[0];
  const items = [
    {
      href: phone.href,
      label: t("contactPage.phone"),
      value: phone.display,
      hint: t("contactPage.callDirect"),
    },
    {
      href: `mailto:${contact.email}`,
      label: t("contactPage.email"),
      value: contact.email,
      hint: t("contactPage.sendMail"),
    },
    {
      href: undefined,
      label: t("contactPage.hours"),
      value: t("contactPage.weekday"),
      hint: t("contactPage.saturday"),
    },
    {
      href: "#konum",
      label: t("contactPage.location"),
      value: locationLabel(contact.address),
      hint: t("contactPage.viewOnMap"),
    },
  ];

  return (
    <section className="border-b border-line bg-white">
      <Container>
        <FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => {
              const inner = (
                <>
                  <p className="type-kicker">{padIndex(index)}</p>
                  <p className="type-small mt-4 text-muted">{item.label}</p>
                  <p className="mt-2 break-words text-[16px] font-medium tracking-[-0.02em] text-ink sm:text-[17px]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.5] text-muted">{item.hint}</p>
                </>
              );

              return (
                <li
                  key={item.label}
                  className={cn(
                    "min-w-0 border-t border-line py-7 first:border-t-0 sm:border-t-0 sm:px-6 sm:py-10 sm:even:border-l sm:even:border-line lg:px-8 lg:border-t-0 lg:first:pl-0 lg:even:border-l-0 lg:[&:not(:first-child)]:border-l",
                    index > 1 && "sm:border-t sm:border-line lg:border-t-0",
                  )}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block min-h-11 transition-colors duration-300 hover:text-primary"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
