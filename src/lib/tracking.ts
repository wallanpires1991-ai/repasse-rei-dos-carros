/**
 * Rastreamento de cliques nos CTAs do grupo.
 * Pronto para Meta Pixel (fbq) e Google Analytics (gtag) — basta
 * inserir os scripts em src/routes/__root.tsx e os eventos passam a ser enviados.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackGroupClick(local: string) {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.("track", "Lead", { content_name: local, source: "repasse-do-rei" });
    window.gtag?.("event", "clique_grupo_repasse", { local });
    window.dataLayer?.push({ event: "clique_grupo_repasse", local });
  } catch {
    /* rastreamento nunca deve quebrar a navegação */
  }
}
