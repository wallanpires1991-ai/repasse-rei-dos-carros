import { createFileRoute } from "@tanstack/react-router";
import { Crown, Instagram, MessageCircle, Zap, Star, ShieldCheck } from "lucide-react";

import logo from "@/assets/logo-rei.jpeg.asset.json";
import heroCars from "@/assets/hero-cars.jpg";
import { CtaGrupo } from "@/components/CtaGrupo";
import { AlertasOportunidade } from "@/components/AlertasOportunidade";
import { brl, depoimentos, indicadores, links, veiculos, type Veiculo } from "@/config/site";
import { trackGroupClick } from "@/lib/tracking";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Repasse do Rei dos Carros VGA | Oportunidades de Repasse" },
      {
        name: "description",
        content:
          "Veículos em modalidade de repasse com valores diferenciados. Entre no grupo do Repasse do Rei dos Carros VGA e veja as oportunidades primeiro.",
      },
      { property: "og:title", content: "Repasse do Rei dos Carros VGA" },
      {
        property: "og:description",
        content:
          "Os carros mais fora da curva do mercado estão aqui. Entre no grupo de repasse e veja as oportunidades.",
      },
    ],
  }),
  component: Index,
});

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <img
            src={logo.url}
            alt="Rei dos Carros VGA"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-sm object-cover ring-1 ring-gold/40"
          />
          <span className="min-w-0">
            <span className="font-display block truncate text-sm leading-tight sm:text-base">
              Repasse do Rei
            </span>
            <span className="block truncate text-[10px] tracking-[0.18em] text-gold uppercase">
              dos Carros VGA
            </span>
          </span>
        </a>
        <CtaGrupo local="header" size="md" className="hidden sm:inline-flex">
          <Crown className="h-4 w-4" /> Entrar no grupo
        </CtaGrupo>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <img
        src={heroCars}
        alt="Pátio de veículos seminovos premium à noite"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/80 to-background" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <img
          src={logo.url}
          alt="Logo Rei dos Carros VGA"
          width={220}
          height={220}
          className="glow-pulse mx-auto h-32 w-32 rounded-lg object-cover ring-1 ring-gold/50 sm:h-44 sm:w-44"
        />
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-[11px] tracking-[0.2em] text-gold uppercase">
          Repasse do Rei dos Carros VGA
        </p>
        <h1 className="mt-4 text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
          Os carros mais <span className="text-gold-gradient">fora da curva</span> do mercado estão
          aqui.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-foreground/80 sm:text-lg">
          Tenha acesso a oportunidades de veículos em modalidade de repasse, com preços
          diferenciados e condições que podem não aparecer no mercado tradicional.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaGrupo local="hero" size="xl">
            <Crown className="h-6 w-6" /> Entrar no grupo de repasse
          </CtaGrupo>
        </div>
        <p className="mt-4 text-sm text-gold/90">⚡ As oportunidades podem mudar rapidamente.</p>
      </div>
    </section>
  );
}

function Faixa() {
  const itens = [
    "REPASSE",
    "ABAIXO DA FIPE",
    "LOJISTAS",
    "SEMINOVOS",
    "OPORTUNIDADE",
    "NEGOCIAÇÃO DIRETA",
  ];
  return (
    <div className="overflow-hidden border-y border-border/60 bg-surface/60 py-2.5">
      <div className="marquee-track flex w-max gap-8 pr-8">
        {[...itens, ...itens, ...itens, ...itens].map((t, i) => (
          <span
            key={i}
            className="font-display text-xs tracking-[0.25em] text-muted-foreground uppercase"
          >
            {t} <span className="text-gold">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ComoFunciona() {
  const passos = [
    {
      n: "01",
      t: "Entre no grupo",
      d: "Tenha acesso às oportunidades disponíveis no Repasse do Rei.",
    },
    {
      n: "02",
      t: "Veja as oportunidades",
      d: "Confira veículos, valores, quilometragem e informações disponíveis.",
    },
    {
      n: "03",
      t: "Faça sua negociação",
      d: "Encontrou uma oportunidade? Entre em contato e avance na negociação.",
    },
  ];
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <SectionTitle sobre="Simples e direto" titulo="Como funciona?" />
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {passos.map((p) => (
          <div key={p.n} className="panel relative rounded-lg p-6">
            <span className="font-display text-5xl leading-none text-gold/25">{p.n}</span>
            <h3 className="mt-3 text-xl text-gold">{p.t}</h3>
            <p className="mt-2 text-sm text-foreground/75">{p.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <CtaGrupo local="como-funciona">🔥 Quero ver as oportunidades</CtaGrupo>
      </div>
    </section>
  );
}

function SectionTitle({ sobre, titulo }: { sobre: string; titulo: string }) {
  return (
    <div className="text-center">
      <p className="text-[11px] tracking-[0.25em] text-gold uppercase">{sobre}</p>
      <h2 className="mt-2 text-3xl sm:text-5xl">{titulo}</h2>
      <div className="hairline-gold mx-auto mt-4 w-32" />
    </div>
  );
}

function CardVeiculo({ v }: { v: Veiculo }) {
  const diferenca = v.fipe ? Math.round(((v.fipe - v.repasse) / v.fipe) * 100) : null;
  return (
    <article className="panel group overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
        <img
          src={v.foto}
          alt={`${v.marcaModelo} ${v.ano}`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {diferenca !== null && diferenca > 0 && (
          <span className="btn-gold absolute top-3 left-3 rounded-sm px-2.5 py-1 text-xs font-bold">
            {diferenca}% abaixo da FIPE
          </span>
        )}
        {!v.disponivel && (
          <span className="absolute inset-0 flex items-center justify-center bg-background/75 text-sm tracking-[0.2em] text-muted-foreground uppercase">
            Indisponível
          </span>
        )}
        {v.destaque && v.disponivel && (
          <span className="absolute bottom-3 left-3 rounded-sm border border-gold/50 bg-background/80 px-2 py-0.5 text-[10px] tracking-[0.2em] text-gold uppercase">
            {v.destaque}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl">{v.marcaModelo}</h3>
        <p className="mt-1 text-xs tracking-widest text-muted-foreground uppercase">
          {v.ano} • {v.km}
        </p>
        <dl className="mt-4 space-y-1.5 border-t border-border/60 pt-4 text-sm">
          {v.fipe !== null && (
            <div className="flex items-center justify-between text-muted-foreground">
              <dt>FIPE</dt>
              <dd className="line-through">{brl(v.fipe)}</dd>
            </div>
          )}
          <div className="flex items-baseline justify-between">
            <dt className="text-xs tracking-widest text-gold uppercase">Repasse</dt>
            <dd className="font-display text-2xl text-gold">{brl(v.repasse)}</dd>
          </div>
        </dl>
        <CtaGrupo local={`veiculo-${v.id}`} size="md" className="mt-5 w-full">
          Quero essa oportunidade
        </CtaGrupo>
      </div>
    </article>
  );
}

function Oportunidades() {
  return (
    <section id="oportunidades" className="bg-surface/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle sobre="Estoque de repasse" titulo="🔥 Oportunidades de repasse" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-foreground/70">
          Valores de referência FIPE quando aplicável. Disponibilidade e condições podem mudar sem
          aviso.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {veiculos.map((v) => (
            <CardVeiculo key={v.id} v={v} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CtaGrupo local="oportunidades" size="lg">
            Quero pegar um carro abaixo da FIPE
          </CtaGrupo>
        </div>
      </div>
    </section>
  );
}

function Urgencia() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,oklch(0.83_0.17_90_/_12%),transparent_60%)]" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <Zap className="mx-auto h-8 w-8 text-gold" />
        <h2 className="mt-4 text-3xl sm:text-5xl">
          Você pode ver hoje.
          <br />
          <span className="text-gold-gradient">Amanhã, pode não estar mais disponível.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-foreground/80">
          Veículos de repasse podem mudar rapidamente. Por isso, quem está dentro do grupo recebe
          acesso às oportunidades assim que elas aparecem.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaGrupo local="urgencia" size="lg">
            🔥 Quero entrar no grupo
          </CtaGrupo>
        </div>
      </div>
    </section>
  );
}

function ParaQuem() {
  const perfis = [
    { i: "👑", t: "Lojistas", d: "Encontre oportunidades para abastecer seu estoque." },
    { i: "💰", t: "Compradores de oportunidade", d: "Para quem busca comprar bem e negociar." },
    { i: "🚗", t: "Revendedores", d: "Encontre veículos com potencial de negociação." },
    { i: "📈", t: "Investidores", d: "Oportunidades para quem sabe identificar bons negócios." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <SectionTitle sobre="Perfil" titulo="Para quem é o repasse?" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {perfis.map((p) => (
          <div key={p.t} className="panel rounded-lg p-6">
            <span className="text-3xl">{p.i}</span>
            <h3 className="mt-3 text-lg text-gold">{p.t}</h3>
            <p className="mt-2 text-sm text-foreground/75">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProvaSocial() {
  return (
    <section className="bg-surface/40 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle sobre="Prova social" titulo="Quem está no grupo sabe." />
        {depoimentos.length === 0 ? (
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
            Espaço reservado para depoimentos reais de clientes, publicados apenas com autorização.
          </p>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {depoimentos.map((d) => (
              <figure key={d.nome + d.texto} className="panel rounded-lg p-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: d.estrelas }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm text-foreground/85">“{d.texto}”</blockquote>
                <figcaption className="mt-3 text-xs tracking-widest text-muted-foreground uppercase">
                  — {d.nome}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {indicadores.map((ind) => (
            <div key={ind.label} className="panel rounded-lg p-6 text-center">
              <p className="font-display text-4xl text-gold">{ind.valor ?? "—"}</p>
              <p className="mt-1 text-xs tracking-widest text-muted-foreground uppercase">
                {ind.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

function AutoAvaliar() {
  const itens = [
    "Cadastramos o veículo no Auto Avaliar para o lojista dar o lance.",
    "Negociação registrada em plataforma, com mais segurança e rastreabilidade.",
    "Ideal para lojistas que preferem comprar dentro do processo do Auto Avaliar.",
  ];
  return (
    <section id="auto-avaliar" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <SectionTitle sobre="Para lojistas" titulo="Compra pelo Auto Avaliar" />
      <div className="panel mt-10 rounded-lg p-6 sm:p-10">
        <p className="text-base text-foreground/85 sm:text-lg">
          Quer comprar pelo <span className="text-gold">Auto Avaliar</span>? Sem problema. Se for a
          sua preferência, colocamos o carro no Auto Avaliar para o lojista trabalhar com total
          segurança.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {itens.map((t) => (
            <li key={t} className="flex gap-2 text-sm text-foreground/75">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <CtaGrupo local="auto-avaliar" size="lg">
            <ShieldCheck className="h-5 w-5" /> Quero comprar pelo Auto Avaliar
          </CtaGrupo>
        </div>
      </div>
    </section>
  );
}


function CtaFinal() {
  return (
    <section className="relative overflow-hidden border-y border-gold/30 py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,oklch(0.83_0.17_90_/_14%),transparent_65%)]" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl sm:text-6xl">
          Se você gosta de comprar bem,
          <br />
          <span className="text-gold-gradient">você precisa estar aqui.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-foreground/80">
          Entre para o Repasse do Rei dos Carros VGA e receba acesso às oportunidades.
        </p>
        <div className="mt-9 flex justify-center">
          <CtaGrupo local="cta-final" size="xl">
            <Crown className="h-6 w-6" /> Quero entrar no grupo agora
          </CtaGrupo>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-14 pb-28 sm:pb-14">
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Rei dos Carros VGA"
            width={64}
            height={64}
            loading="lazy"
            className="h-16 w-16 shrink-0 rounded-sm object-cover ring-1 ring-gold/40"
          />
          <div className="min-w-0">
            <p className="font-display text-lg">Repasse do Rei dos Carros VGA</p>
            <p className="text-xs tracking-[0.2em] text-gold uppercase">
              O repasse que te coloca na frente.
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-3 sm:items-end">
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-gold"
          >
            <Instagram className="h-4 w-4" /> @reidoscarrosvga
          </a>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={links.grupo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGroupClick("footer")}
            className="inline-flex items-center gap-2 text-sm text-gold hover:underline"
          >
            <Crown className="h-4 w-4" /> Grupo de Repasse
          </a>
        </nav>
      </div>
      <p className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
        Valores e disponibilidade sujeitos a alteração sem aviso prévio. Valores de FIPE são
        referências de mercado. © {new Date().getFullYear()} Rei dos Carros VGA.
      </p>
    </footer>
  );
}

function CtaFixoMobile() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-background/95 p-3 backdrop-blur sm:hidden">
      <CtaGrupo local="cta-fixo-mobile" size="lg" className="w-full">
        <Crown className="h-5 w-5" /> Entrar no grupo
      </CtaGrupo>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Faixa />
        <ComoFunciona />
        <Oportunidades />
        <Urgencia />
        <ParaQuem />
        <ProvaSocial />
        <CtaFinal />
      </main>
      <Footer />
      <CtaFixoMobile />
      <AlertasOportunidade />
    </div>
  );
}
