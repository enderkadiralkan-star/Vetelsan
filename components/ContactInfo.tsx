import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { contact } from "@/lib/site";
import { padIndex } from "@/lib/utils";

function phoneLabelKey(label: (typeof contact.phones)[number]["label"]) {
  return label === "switchboard"
    ? "contactPage.phoneSwitchboard"
    : "contactPage.phoneMobile";
}

function addressLines(address: string) {
  const citySep = address.lastIndexOf(" / ");
  if (citySep === -1) return [address];

  const city = address.slice(citySep + 3).trim();
  const before = address.slice(0, citySep).trim();
  const districtSep = before.lastIndexOf(" ");
  if (districtSep === -1) return [before, city];

  return [
    before.slice(0, districtSep).trim(),
    `${before.slice(districtSep + 1)} / ${city}`,
  ];
}

export async function ContactInfo() {
  const t = createT(await getLocale());
  const items = [
    {
      label: t("contactPage.address"),
      href: "#konum",
      lines: addressLines(contact.address),
    },
    {
      label: t("contactPage.phone"),
      href: contact.phones[0].href,
      lines: contact.phones.map(
        (phone) => `${t(phoneLabelKey(phone.label))}: ${phone.display}`,
      ),
      hrefs: contact.phones.map((phone) => phone.href),
    },
    {
      label: t("contactPage.email"),
      href: `mailto:${contact.email}`,
      lines: [contact.email],
    },
    {
      label: t("contactPage.hours"),
      href: undefined,
      lines: [t("contactPage.weekday"), t("contactPage.saturday")],
    },
  ];

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item.label}
          className="border-t border-line py-6 first:border-t-0 lg:py-7"
        >
          <p className="type-kicker">{padIndex(index)}</p>
          <p className="type-small mt-3 text-muted">{item.label}</p>
          <div className="mt-2 space-y-1">
            {"hrefs" in item && item.hrefs ? (
              item.lines.map((line, lineIndex) => (
                <a
                  key={line}
                  href={item.hrefs[lineIndex]}
                  className="block break-words text-[16px] leading-[1.55] text-ink transition-colors duration-300 hover:text-primary sm:text-[17px]"
                >
                  {line}
                </a>
              ))
            ) : item.href ? (
              <a
                href={item.href}
                className="block text-[16px] leading-[1.55] text-ink transition-colors duration-300 hover:text-primary sm:text-[17px]"
              >
                {item.lines.map((line) => (
                  <span key={line} className="block break-words">
                    {line}
                  </span>
                ))}
              </a>
            ) : (
              item.lines.map((line) => (
                <p
                  key={line}
                  className="break-words text-[16px] leading-[1.55] text-ink sm:text-[17px]"
                >
                  {line}
                </p>
              ))
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
