import { cn } from "@/lib/utils";
import { links } from "@/config/site";
import { trackGroupClick } from "@/lib/tracking";

type Props = {
  children: React.ReactNode;
  /** Identificador do local do CTA — usado no rastreamento. */
  local: string;
  size?: "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base sm:text-lg",
  xl: "px-8 py-5 text-lg sm:text-2xl",
};

export function CtaGrupo({ children, local, size = "lg", className }: Props) {
  return (
    <a
      href={links.grupo}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={local}
      onClick={() => trackGroupClick(local)}
      className={cn(
        "btn-gold inline-flex w-full items-center justify-center gap-2 rounded-md text-center font-bold sm:w-auto",
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
