import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { getWhatsAppChatHref } from "@/lib/site";

export async function WhatsAppFloat() {
  const t = createT(await getLocale());

  return (
    <a
      href={getWhatsAppChatHref(t("nav.whatsappPrefill"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("nav.whatsappWrite")}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-[60] inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
