/**
 * PAINEL DE CONTEÚDO DO SITE
 * ---------------------------------------------------------------
 * Edite este arquivo para atualizar links, veículos, depoimentos
 * e números do site. Nenhum outro arquivo precisa ser alterado.
 */

import carGolf from "@/assets/car-golf.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carPickup from "@/assets/car-pickup.jpg";

/** Links oficiais — troque o link do grupo aqui. */
export const links = {
  grupo: "https://chat.whatsapp.com/",
  whatsapp: "https://wa.me/5500000000000",
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
export const veiculos: Veiculo[] = [
  {
    id: "golf-16",
    marcaModelo: "VW GOLF 1.6",
    ano: "2002/2003",
    km: "160.000 KM",
    fipe: 29775,
    repasse: 19000,
    foto: carGolf,
    disponivel: true,
    destaque: "OPORTUNIDADE",
  },
  {
    id: "suv-compacto",
    marcaModelo: "SUV COMPACTO 1.0 TURBO",
    ano: "2020/2021",
    km: "78.400 KM",
    fipe: 92500,
    repasse: 79900,
    foto: carSuv,
    disponivel: true,
  },
  {
    id: "sedan-automatico",
    marcaModelo: "SEDAN 1.6 AUTOMÁTICO",
    ano: "2018/2019",
    km: "96.200 KM",
    fipe: 74300,
    repasse: 64500,
    foto: carSedan,
    disponivel: true,
  },
  {
    id: "pickup",
    marcaModelo: "PICAPE CABINE DUPLA 4X4",
    ano: "2017/2018",
    km: "142.000 KM",
    fipe: 148900,
    repasse: 129000,
    foto: carPickup,
    disponivel: false,
  },
];

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
