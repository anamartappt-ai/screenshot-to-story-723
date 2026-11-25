import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Lock, Mail, ChevronDown, AlertTriangle, Zap, Wind, PenLine, HeartHandshake, MoonStar, FileDown, CircleCheck, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatBRL, marketTotal, offer } from "@/lib/offer";

const HOTMART_URL = "https://pay.hotmart.com/P108316406G?off=oj3ee7ip&checkoutMode=10";
const SITE_URL = "https://roteiro.anamartasaudemental.com.br/";
const SHARE_IMAGE_URL = `${SITE_URL}og-image.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: SHARE_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: SHARE_IMAGE_URL },
      { title: "O Roteiro do Desarme Mental — Protocolo Diário de 21 Dias" },
      { name: "description", content: "Desligue o alerta da cabeça em menos de 5 minutos por dia. Protocolo prático de 21 dias em PDF + Masterclass Ao Vivo dia 14/12 às 19h30." },
      { property: "og:title", content: "O Roteiro do Desarme Mental — 21 Dias" },
      { property: "og:description", content: "Plano prático de 3 a 5 minutos por dia para cortar a ruminação mental e dormir melhor." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

const beneficios = [
  ["Desligar o alerta da cabeça", "Parar de sofrer por antecipação sem precisar meditar horas à força."],
  ["Dormir sem o peso das pendências", "Esvaziando a mente no papel antes de deitar."],
  ["Destravar as tensões físicas", "Soltar a mordida travada, os ombros rígidos e o peito apertado."],
  ["Cortar pensamentos em loop", "Interromper a ruminação de conversas e problemas passados."],
  ["Pausar antes de reagir no impulso", "Ter clareza e autocontrole diante da pressão."],
  ["Recuperar a sua presença diária", "Sentir calma e leveza ao longo de toda a rotina."],
];
const dores = [
  "Deita na cama exausta, mas a cabeça não desliga de jeito nenhum.",
  "Passa o dia com a sensação de estar sempre devendo algo a alguém.",
  "Sente um aperto constante no peito ou uma respiração curta e superficial.",
  "Se pega com a mandíbula travada ou os ombros doloridos de tanta tensão.",
  "Já tentou chás, aplicativos e dicas soltas, mas nada alivia a agitação.",
  "Perde a paciência por bobagens e depois sente culpa e frustração.",
  "Tem dificuldade de foco porque a mente viaja logo para o pior cenário.",
  "Sente que carrega o mundo nas costas e não tem 5 minutos de paz.",
];
const pilares = [
  { icon: Wind, titulo: "Respiração e Desarme Somático", texto: "Técnicas para acalmar o corpo e desligar o alarme físico da ansiedade." },
  { icon: PenLine, titulo: "Escrita e Descarga Terapêutica", texto: "Colocar no papel o que pesa para esvaziar a mente e soltar as tensões." },
  { icon: HeartHandshake, titulo: "Prática Diária da Gratidão", texto: "Reprogramar o foco para o que sustenta, todos os dias, em poucos minutos." },
  { icon: MoonStar, titulo: "Higiene e Descompressão Noturna", texto: "Rotina de fim de dia para cessar o fluxo de pensamentos e dormir reparador." },
];
const entregaveis = [
  ["01", "O Roteiro do Desarme Mental", "Protocolo Prático de 21 Dias: o núcleo da sua rotina diária, estruturado em 3 ciclos práticos (Fisiológico, Cognitivo e Comportamental) para desativar a sobrecarga mental de forma progressiva."],
  ["02", "Protocolo Noturno de Descompressão", "A rotina prática para aplicar antes de deitar, cessando o fluxo acelerado de pensamentos e preparando o corpo para o sono reparador."],
  ["03", "Guia Prático de Intervenção Rápida (Anti-Crise)", "Exercícios somáticos pontuais de 2 a 3 minutos para momentos em que surge o pico de estresse, bloqueio ou sobrecarga no dia a dia."],
  ["04", "Fichas Diárias de Aplicação e Autoavaliação", "Formato imprimível: as matrizes práticas para imprimir ou preencher digitalmente, acompanhando a execução dos exercícios e a sua autoavaliação e o alívio da sobrecarga ao longo dos 21 dias."],
  ["05", "Masterclass Ao Vivo “O Equilíbrio é Possível”", "Encontro ao vivo no dia 14/12, às 19h30, pelo Google Meet, com uma prática terapêutica conduzida por Ana Marta. Ao confirmar sua compra, você entra no grupo Viver Sem Ansiedade para receber todas as informações e orientações do encontro."],
  ["06", "Presente Surpresa de Acolhimento", "Um presente especial preparado para acolher quem participar da Masterclass Ao Vivo e aprofundar a sua jornada de equilíbrio e autorregulação."],
];
const precos = [
  "Livros técnicos e cursos teóricos sobre controle da ansiedade",
  "Protocolos avulsos e guias pontuais de respiração e relaxamento",
  "O Roteiro Completo do Desarme Mental (21 dias com micropráticas somáticas de 5 min)",
  "Diário de Registro e Rastreamento de Gatilhos e Tensões Diárias",
];
const faq = [
  ["Quanto tempo vou precisar por dia?", "Apenas de 3 a 5 minutos. O protocolo foi pensado para caber em rotinas corridas, sem exigir horas de meditação."],
  ["Como vou receber o material?", "Logo após a confirmação do pagamento, você recebe o acesso completo no seu e-mail. Na página de confirmação, você também encontra o botão para entrar no grupo Viver Sem Ansiedade, onde receberá todas as informações da Masterclass Ao Vivo."],
  ["Quando acontece a Masterclass Ao Vivo?", "O encontro ao vivo “O Equilíbrio é Possível” acontece no dia 14/12, às 19h30, pelo Google Meet, com uma prática terapêutica guiada. Todas as informações, orientações e o link da sala são enviados dentro do grupo Viver Sem Ansiedade."],
  ["Preciso ter experiência com meditação ou terapia?", "Não. Os exercícios são simples, guiados passo a passo e feitos para qualquer pessoa aplicar desde o primeiro dia."],
  ["Posso ler no celular?", "Sim! O material funciona no celular, tablet ou computador, e você também pode imprimir as fichas se preferir."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia incondicional. Se aplicar e não sentir alívio, devolvemos 100% do seu dinheiro, sem perguntas."],
];

function Cta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={HOTMART_URL} target="_blank"
