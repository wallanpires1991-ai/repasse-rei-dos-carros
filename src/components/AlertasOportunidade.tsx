import { useEffect, useState } from "react";
import { alertas } from "@/config/site";

/**
 * Alertas de movimento no canto inferior.
 * São mensagens de DEMONSTRAÇÃO — sinalizadas como tal na própria etiqueta.
 */
export function AlertasOportunidade() {
  const [index, setIndex] = useState(0);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    let timeoutOut: ReturnType<typeof setTimeout>;
    const ciclo = setInterval(() => {
      setVisivel(true);
      timeoutOut = setTimeout(() => {
        setVisivel(false);
        setIndex((i) => (i + 1) % alertas.length);
      }, 5200);
    }, 9000);
    return () => {
      clearInterval(ciclo);
      clearTimeout(timeoutOut);
    };
  }, []);

  const alerta = alertas[index];
  if (!alerta) return null;

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-24 left-3 z-40 max-w-[19rem] transition-all duration-500 sm:bottom-6 ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="panel rounded-md p-3 shadow-lg backdrop-blur">
        <p className="font-display text-sm font-bold tracking-wide text-gold">{alerta.titulo}</p>
        <p className="mt-1 text-xs text-foreground/85">{alerta.texto}</p>
        <p className="mt-2 text-[10px] tracking-widest text-muted-foreground uppercase">
          Demonstração
        </p>
      </div>
    </div>
  );
}
