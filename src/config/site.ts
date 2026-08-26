/**
 * PAINEL DE CONTEÚDO DO SITE
 * ---------------------------------------------------------------
 * Edite este arquivo para atualizar links, veículos, depoimentos
 * e números do site. Nenhum outro arquivo precisa ser alterado.
 */


/** Links oficiais — troque o link do grupo aqui. */
export const links = {
  grupo: "https://chat.whatsapp.com/BJVIsi9rPr18ULGYC7z6uB?s=cl&p=a&mlu=0&ilr=0",
  whatsapp: "https://wa.me/message/XUVAAZFYMSRAE1",
  instagram: "https://instagram.com/reidoscarrosvga",
};

export type Veiculo = {
  id: string;
  marcaModelo: string;
  ano: string;
  km: string;
  /** Valor de referência FIPE em reais. Deixe null quando não aplicável. */
  fipe: number | null;
  /** Valor anunciado no repasse, em reais. */
  repasse: number;
  foto: string;
  disponivel: boolean;
  destaque?: string;
};

/** Cadastre / edite os veículos do repasse aqui. */
export const veiculos: Veiculo[] = [];

/**
 * Depoimentos REAIS de clientes. Comece com a lista vazia e insira
 * apenas depoimentos autorizados pelo cliente.
 */
export type Depoimento = {
  nome: string;
  texto: string;
  estrelas: number;
};

export const depoimentos: Depoimento[] = [];

/**
 * Indicadores. Preencha somente com dados reais conferidos pelo
 * administrador. Deixe null para esconder o indicador.
 */
export const indicadores: { label: string; valor: string | null }[] = [
  { label: "👑 Membros em mais de 4 grupos", valor: "+5.000" },
  { label: "🚗 Oportunidades publicadas", valor: "+800" },
  { label: "🤝 Oportunidades vendidas", valor: "+200" },
];


/**
 * Alertas exibidos no canto da tela. São exemplos de DEMONSTRAÇÃO,
 * identificados como tal — não representam compras reais.
 */
export const alertas = [
  {
    titulo: "🔥 NOVA OPORTUNIDADE DISPONÍVEL",
    texto: "Golf 1.6 • 160.000 km • R$ 19.000",
  },
  {
    titulo: "👑 OPORTUNIDADE ACESSADA",
    texto: "Um veículo acabou de ser consultado.",
  },
  {
    titulo: "⚡ NOVO VEÍCULO NO REPASSE",
    texto: "Confira antes que a oportunidade saia.",
  },
];

export const brl = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
