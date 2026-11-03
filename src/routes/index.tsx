import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ShieldCheck, Lock, Infinity as InfinityIcon, Mail, X, ChevronDown, AlertTriangle, Zap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import mockup from "@/assets/roteiro-mockup.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Roteiro do Desarme Mental — Protocolo Diário de 21 Dias" },
      { name: "description", content: "Desligue o alerta da cabeça em menos de 5 minutos por dia. Protocolo prático de 21 dias em PDF, com garantia de 7 dias." },
      { property: "og:title", content: "O Roteiro do Desarme Mental — 21 Dias" },
      { property: "og:description", content: "Plano prático de 3 a 5 minutos por dia para cortar a ruminação mental e dormir melhor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
const entregaveis = [
  ["01", "O Livro Digital de 21 Dias", "PDF diagramado com 3 ciclos práticos, checklists diários e fichas de alívio."],
  ["02", "Guia SOS de Socorro Rápido", "Técnicas de 1 minuto para travar picos de ansiedade no meio do dia."],
  ["03", "Manual da Descarga Noturna", "Rotina de 10 minutos na cabeceira da cama para descarregar as pendências e dormir bem."],
];
const precos = [
  ["4 a 8 Sessões Terapêuticas Individuais", "R$ 800,00"],
  ["Cursos e Treinamentos Teóricos de Ansiedade", "R$ 297,00"],
  ["Livros de Neurociência e Autoajuda", "R$ 180,00"],
  ["O Roteiro Completo do Desarme Mental (21 Dias)", "R$ 147,00"],
  ["Guia de Descarga Noturna + Fichas SOS", "R$ 97,00"],
];
const faq = [
  ["Quanto tempo vou precisar por dia?", "Apenas de 3 a 5 minutos. O protocolo foi pensado para caber em rotinas corridas, sem exigir horas de meditação."],
  ["Como vou receber o material?", "Logo após a confirmação, você recebe o PDF completo no seu e-mail e no seu WhatsApp. O acesso é imediato."],
  ["Preciso ter experiência com meditação ou terapia?", "Não. Os exercícios são simples, guiados passo a passo e feitos para qualquer pessoa aplicar desde o primeiro dia."],
  ["Posso ler no celular?", "Sim! O PDF funciona no celular, tablet ou computador, e você também pode imprimir as fichas se preferir."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia incondicional. Se aplicar e não sentir alívio, devolvemos 100% do seu dinheiro, sem perguntas."],
];

function Index() {
  const [open, setOpen] = useState(false);
  const abrir = () => setOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-forest px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">
        <Zap className="mr-1 inline h-4 w-4" /> Acesso imediato: receba o seu protocolo completo no e-mail e WhatsApp logo após a confirmação.
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-sage to-background px-4 pb-16 pt-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full bg-forest px-4 py-1.5 text-xs font-extrabold tracking-wider text-primary-foreground">
              PROTOCOLO DIÁRIO DE 21 DIAS • 3 A 5 MINUTOS POR DIA
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-forest md:text-5xl">
              E se, em vez de passar noites em claro fritando de ansiedade, você pudesse desligar o alerta da cabeça em menos de 5 minutos?
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Um plano de ação prático baseado em Neurociência Aplicada e Psicoterapia Positiva para cortar a ruminação mental, destravar as tensões do corpo e devolver a sua presença. Sem teorias cansativas.
            </p>
          </div>
          <div className="rounded-3xl bg-card p-5 shadow-xl">
            <img src={mockup} alt="Mockup do Roteiro do Desarme Mental em PDF" width={1024} height={1024} className="rounded-2xl" />
            <ul className="mt-5 space-y-3">
              {["O freio de emergência do corpo que desliga a agitação", "O truque dos 5 sentidos para puxar a cabeça de volta para a realidade", "A descarga noturna no papel para tirar o peso antes de dormir"].map((t) => (
                <li key={t} className="flex gap-3 font-semibold">
                  <Check className="h-6 w-6 shrink-0 rounded-full bg-cta p-1 text-cta-foreground" />{t}
                </li>
              ))}
            </ul>
            <button onClick={abrir} className="btn-cta pulse-soft mt-6 w-full text-lg">BAIXAR O ROTEIRO AGORA</button>
            <p className="mt-3 text-center text-xs text-muted-foreground">Compra 100% segura • Acesso vitalício • Garantia incondicional de 7 dias</p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-forest px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-primary-foreground md:text-4xl">Ao fim dos 21 dias, você vai:</h2>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map(([t, d]) => (
            <div key={t} className="flex gap-3 rounded-2xl bg-card p-5 shadow-md">
              <Check className="h-7 w-7 shrink-0 rounded-full bg-cta p-1 text-cta-foreground" />
              <div><h3 className="font-sans font-extrabold text-forest">{t}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* DORES */}
      <section className="px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-forest md:text-4xl">O Roteiro é para você que…</h2>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dores.map((d) => <div key={d} className="rounded-2xl bg-blush p-5 text-sm font-semibold">{d}</div>)}
        </div>
        <div className="mx-auto mt-8 flex max-w-4xl gap-4 rounded-2xl border-2 border-warning-foreground/30 bg-warning p-6 text-warning-foreground">
          <AlertTriangle className="h-8 w-8 shrink-0" />
          <p className="font-semibold">Se você se identificou com pelo menos 2 situações acima, o problema não é você: é apenas o alarme do seu corpo que ficou travado. <strong>O Desarme Mental foi feito para você.</strong></p>
        </div>
      </section>

      {/* ENTREGÁVEIS */}
      <section className="bg-sage px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-forest md:text-4xl">O que você vai receber</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {entregaveis.map(([n, t, d]) => (
            <div key={n} className="rounded-2xl bg-card p-6 shadow-md">
              <span className="font-display text-4xl font-extrabold text-cta">{n}</span>
              <h3 className="mt-2 text-xl font-extrabold text-forest">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREÇOS */}
      <section className="px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-forest md:text-4xl">Recapitulando… Quanto tudo isso deveria custar?</h2>
        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl bg-card shadow-lg">
          {precos.map(([t, v]) => (
            <div key={t} className="flex items-center justify-between gap-4 border-b px-5 py-4">
              <span className="text-sm font-semibold">{t}</span><span className="whitespace-nowrap text-muted-foreground line-through">{v}</span>
            </div>
          ))}
          <div className="flex items-center justify-between gap-4 bg-blush px-5 py-4 font-extrabold">
            <span>TOTAL REAL DE TUDO ISSO</span><span className="whitespace-nowrap text-destructive line-through">R$ 1.521,00</span>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-forest p-8 text-center text-primary-foreground shadow-2xl md:p-12">
          <p className="text-lg">Mas hoje você não vai pagar nem uma fração desse valor…</p>
          <p className="mt-6 text-sm uppercase tracking-widest opacity-80">Por apenas</p>
          <p className="font-display text-5xl font-extrabold md:text-6xl">4x de R$ 9,80</p>
          <p className="mt-2 text-lg">ou <strong>R$ 37,00 à vista</strong></p>
          <button onClick={abrir} className="btn-cta pulse-soft mt-8 w-full">SIM, QUERO APROVEITAR A OFERTA AGORA</button>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1"><Lock className="h-4 w-4" /> Compra Segura</span>
            <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> Envio Imediato no E-mail e WhatsApp</span>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> Garantia de 7 Dias</span>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-sage px-4 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row">
          <div className="flex h-40 w-40 shrink-0 flex-col items-center justify-center rounded-full border-8 border-cta bg-card text-forest shadow-xl">
            <span className="font-display text-5xl font-extrabold">7</span><span className="text-xs font-extrabold">DIAS DE GARANTIA</span>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-forest">Garantia blindada de 7 dias</h2>
            <p className="mt-3 text-muted-foreground">Aplique o protocolo por 7 dias. Se você não sentir alívio no sono e no corpo, basta enviar uma mensagem e devolvemos 100% do seu dinheiro, de forma total e imediata. O risco é todo nosso.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-forest md:text-4xl">Perguntas frequentes</h2>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faq.map(([q, a]) => (
            <details key={q} className="group rounded-2xl bg-blush p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold">
                {q}<ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center"><button onClick={abrir} className="btn-cta">BAIXAR O ROTEIRO AGORA</button></div>
      </section>

      <footer className="bg-forest px-4 py-8 text-center text-xs text-primary-foreground/80">
        © {new Date().getFullYear()} O Roteiro do Desarme Mental. Este produto não substitui acompanhamento médico ou psicológico.
      </footer>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}

function Modal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "erro">("idle");
  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setStatus("loading");
    const { error } = await supabase.from("leads").insert({
      nome: String(f.get("nome")).trim(),
      whatsapp: String(f.get("whatsapp")).replace(/\D/g, ""),
      email: String(f.get("email")).trim(),
    });
    setStatus(error ? "erro" : "ok");
  }
  const input = "w-full rounded-xl border-2 border-input bg-background px-4 py-3 outline-none focus:border-cta";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4" onClick={onClose}>
      <div className="relative w-full max-w-md rounded-3xl bg-card p-7 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Fechar" className="absolute right-4 top-4 text-muted-foreground"><X /></button>
        {status === "ok" ? (
          <div className="py-6 text-center">
            <Check className="mx-auto h-14 w-14 rounded-full bg-cta p-3 text-cta-foreground" />
            <h3 className="mt-4 text-2xl font-extrabold text-forest">Recebemos seus dados!</h3>
            <p className="mt-2 text-muted-foreground">Fique de olho no seu e-mail e WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={enviar} className="space-y-4">
            <h3 className="pr-6 text-2xl font-extrabold text-forest">Onde você quer receber o seu Roteiro?</h3>
            <input name="nome" required minLength={2} maxLength={120} placeholder="Nome completo" className={input} />
            <input name="whatsapp" required type="tel" pattern="[\d\s()+-]{10,20}" placeholder="WhatsApp com DDD" className={input} />
            <input name="email" required type="email" maxLength={255} placeholder="E-mail" className={input} />
            {status === "erro" && <p className="text-sm text-destructive">Não foi possível enviar. Confira os dados e tente novamente.</p>}
            <button disabled={status === "loading"} className="btn-cta w-full">{status === "loading" ? "Enviando…" : "Receber Roteiro em PDF Agora"}</button>
          </form>
        )}
      </div>
    </div>
  );
}
