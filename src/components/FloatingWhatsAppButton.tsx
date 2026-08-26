import { MessageCircle } from "lucide-react";
import { links } from "@/config/site";
import { cn } from "@/lib/utils";
import { trackGroupClick } from "@/lib/tracking";

export function FloatingWhatsAppButton({ className }: { className?: string }) {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackGroupClick("whatsapp-flutuante")}
      aria-label="Falar no WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-105 hover:shadow-xl",
        className,
      )}
    >
      <MessageCircle className="h-6 w-6 fill-white text-white" />
      <span className="font-bold text-white text-sm hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
