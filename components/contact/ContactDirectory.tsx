import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { contact, whatsapp } from "@/lib/site";

type Channel = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
  value: string;
  action?: string;
};

export async function ContactDirectory() {
  const t = createT(await getLocale());

  const channels: Channel[] = [
    {
      id: "phone",
      label: t("contactPage.phone"),
      value: contact.phones[0]?.display ?? "",
      action: t("contactPage.actionCall"),
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: whatsapp.href,
      external: true,
      value: t("contactPage.whatsappCta"),
      action: t("contactPage.actionWhatsapp"),
    },
    {
      id: "email",
      label: t("contactPage.email"),
      href: `mailto:${contact.email}`,
      value: contact.email,
      action: t("contactPage.actionEmail"),
    },
    {
      id: "fax",
      label: t("contactPage.fax"),
      href: contact.fax.href,
      value: contact.fax.display,
    },
  ];

  return (
    <FadeIn delay={0.04} className="min-w-0">
      <ul className="border-t border-line">
        {channels.map((channel) => {
          const isPhone = channel.id === "phone";

          const body = (
            <div className="group flex min-h-12 items-start justify-between gap-5 py-6 sm:min-h-[52px] sm:gap-8 sm:py-7">
              <div className="min-w-0 flex-1">
                <p className="type-small text-muted">{channel.label}</p>
                {isPhone ? (
                  <ul className="mt-2 space-y-2.5">
                    {contact.phones.map((phone) => (
                      <li key={phone.href}>
                        <a
                          href={phone.href}
                          className="block min-h-11 break-words py-0.5 font-display text-[clamp(1.25rem,4vw,1.75rem)] font-medium tracking-[-0.03em] text-ink transition-colors duration-300 hover:text-primary"
                        >
                          {phone.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 break-words font-display text-[clamp(1.25rem,4vw,1.75rem)] font-medium tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-primary">
                    {channel.value}
                  </p>
                )}
              </div>
              {channel.action || channel.href ? (
                <span className="mt-1 inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-ink/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary motion-reduce:transition-none sm:mt-2">
                  {channel.action ? (
                    <span className="hidden sm:inline">{channel.action}</span>
                  ) : null}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              ) : null}
            </div>
          );

          return (
            <li key={channel.id} className="border-b border-line">
              {isPhone ? (
                body
              ) : channel.href ? (
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="block outline-none focus-visible:bg-studio/50"
                >
                  {body}
                </a>
              ) : (
                body
              )}
            </li>
          );
        })}
      </ul>
    </FadeIn>
  );
}
