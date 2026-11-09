import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Lock, Mail, ChevronDown, AlertTriangle, Zap, Wind, PenLine, HeartHandshake, MoonStar, FileDown, CircleCheck, ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatBRL, marketTotal, masterclass, offer } from "@/lib/offer";

const HOTMART_URL = offer.checkoutUrl;

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
];
const precos = [
  "Livros técnicos e cursos teóricos sobre controle da ansiedade",
  "Protocolos avulsos e guias pontuais de respiração e relaxamento",
  "O Roteiro Completo do Desarme Mental (21 dias com micropráticas somáticas de 5 min)",
  "Diário de Registro e Rastreamento de Gatilhos e Tensões Diárias",
];
const faq = [
  ["Quanto tempo vou precisar por dia?", "Apenas de 3 a 5 minutos. O protocolo foi pensado para caber em rotinas corridas, sem exigir horas de meditação."],
  ["Como vou receber o material?", "Logo após a confirmação do pagamento, você recebe o acesso completo no seu e-mail. O acesso é imediato."],
  ["Preciso ter experiência com meditação ou terapia?", "Não. Os exercícios são simples, guiados passo a passo e feitos para qualquer pessoa aplicar desde o primeiro dia."],
  ["Posso ler no celular?", "Sim! O material funciona no celular, tablet ou computador, e você também pode imprimir as fichas se preferir."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia incondicional. Se aplicar e não sentir alívio, devolvemos 100% do seu dinheiro, sem perguntas."],
];

function Cta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className={`btn-cta ${className}`}>
      {children}
    </a>
  );
}

export function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-forest px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">
        <Zap className="mr-1 inline h-4 w-4" /> Acesso imediato: receba o seu protocolo completo no e-mail logo após a confirmação.
      </div>

      {/* HERO */}
      <section id="hero" className="bg-gradient-to-b from-sage to-background px-4 pb-16 pt-10">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-block rounded-full bg-forest px-4 py-1.5 text-xs font-extrabold tracking-wider text-primary-foreground">
            PROTOCOLO DIÁRIO DE 21 DIAS • 3 A 5 MINUTOS POR DIA
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-extrabold leading-tight text-forest md:text-5xl">
            E se, em vez de passar noites em claro com a mente acelerada e exausta pela ansiedade, você pudesse desligar o alerta da cabeça em menos de 5 minutos?
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            Um plano de ação prático baseado em Neurociência Aplicada e Psicoterapia Positiva para cortar a ruminação mental, destravar as tensões do corpo e devolver a sua presença. Sem teorias cansativas.
          </p>

          {/* Facilitadora ao centro + 4 pilares ao redor */}
          <div className="mx-auto mt-12 grid max-w-5xl items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-none lg:grid-cols-1">
              {pilares.slice(0, 2).map((p) => (
                <PilarCard key={p.titulo} {...p} />
              ))}
            </div>
            <div className="order-1 flex justify-center lg:order-none">
              <div className="relative">
               <img
                src="/facilitadora.jpg"
                alt="Facilitadora do Roteiro do Desarme Mental"
                width={768}
                height={1024}
                className="aspect-square w-72 max-w-full rounded-full border-8 border-card object-cover shadow-2xl mdw-96 lg:w-[420px]"
              />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-forest px-4 py-1.5 text-xs font-extrabold tracking-wide text-primary-foreground shadow-lg">
                  Sua facilitadora no Desarme Mental
                </span>
              </div>
            </div>
            <div className="order-3 grid gap-4 sm:grid-cols-2 lg:order-none lg:grid-cols-1">
              {pilares.slice(2, 4).map((p) => (
                <PilarCard key={p.titulo} {...p} />
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Cta className="pulse-soft text-lg">QUERO COMEÇAR AGORA</Cta>
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
        <h2 className="text-center text-3xl font-extrabold text-forest md:text-4xl">Tudo incluso no produto</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Ao garantir o seu acesso, estes 4 componentes práticos já fazem parte do seu pacote, sem nada escondido:</p>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
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
        <h2 className="text-center text-3xl font-extrabold text-forest md:text-4xl">Quanto custaria buscar essas respostas por outros caminhos?</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">Entenda a diferença entre investir meses procurando soluções dispersas e ter um método prático e organizado em mãos.</p>
        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl bg-card shadow-lg">
          {precos.map((t, index) => (
            <div key={t} className="flex flex-col gap-3 border-b px-5 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-semibold">{t}</span>
              <span className="shrink-0 whitespace-nowrap text-sm text-muted-foreground line-through sm:text-right">{formatBRL(offer.marketValues[index] ?? 0)}</span>
            </div>
          ))}
          <div className="flex items-center justify-between gap-4 bg-blush px-5 py-4 font-extrabold">
            <span>TOTAL ESTIMADO DE MERCADO</span><span className="whitespace-nowrap text-destructive line-through">{formatBRL(marketTotal)}</span>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-forest p-8 text-center text-primary-foreground shadow-2xl md:p-12">
          <p className="text-lg">Você não pagará nada próximo a isso.</p>
          <p className="mt-6 text-sm uppercase tracking-widest opacity-80">Por apenas</p>
           <p className="font-display text-5xl font-extrabold md:text-6xl">{formatBRL(offer.price)}</p>
           <p className="mt-2 text-lg">à vista (PIX ou cartão)</p>
          <p className="mt-2 text-lg">ou em até <strong>4x de R$ 10,86</strong> no cartão de crédito</p>
          <Cta className="pulse-soft mt-8 w-full">QUERO DESARMAR MINHA MENTE AGORA</Cta>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/90">Aviso: O Roteiro do Desarme Mental é um recurso psicoeducativo e terapêutico integrativo voltado para autorregulação e alívio do estresse diário. Não substitui consulta, diagnóstico ou acompanhamento psiquiátrico/psicológico clínico.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1"><Lock className="h-4 w-4" /> Compra Segura</span>
            <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> Envio Imediato no E-mail</span>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> Garantia de 7 Dias</span>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-2xl rounded-lg border border-authority-border bg-authority-surface p-6 text-authority-copy md:p-8">
          <h3 className="flex items-start gap-3 text-xl font-extrabold text-authority-heading"><MessageCircle className="mt-1 h-6 w-6 shrink-0 text-authority-check" />Participe também da nossa Masterclass Ao Vivo</h3>
          <p className="mt-4 leading-relaxed">Caso deseje dar um passo a mais e vivenciar uma prática terapêutica juntos, você está convidada a participar da nossa próxima Masterclass Ao Vivo, que acontecerá no dia {masterclass.date} às {masterclass.time}.</p>
          <p className="mt-3 leading-relaxed">No nosso grupo do WhatsApp compartilhamos todas as orientações e o link de acesso direto para a aula ao vivo.</p>
          <a href={masterclass.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-cta mt-6 inline-flex w-full flex-col items-center justify-center gap-2 px-5 py-4 text-center text-sm leading-snug sm:flex-row sm:px-8 sm:text-base sm:leading-normal">
            <MessageCircle className="h-5 w-5 shrink-0" /> {masterclass.groupLabel}
          </a>
        </div>
      </section>

      {/* FACILITADORA */}
      <section className="bg-gradient-to-b from-background via-authority-background to-sage px-4 py-16 text-authority-copy">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-center text-sm font-semibold uppercase text-authority-heading">Quem está por trás do método</p>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
            <div className="mx-auto w-full max-w-md rounded-xl border border-authority-border bg-authority-frame p-2">
              <img src="/facilitadora.jpg" alt="Ana Marta, autora do Roteiro do Desarme Mental" width={768} height={1024} loading="lazy" className="aspect-[3/4] w-full rounded-lg object-cover" />
            </div>
            <div className="min-w-0">
              <h2 className="text-4xl font-extrabold text-authority-heading md:text-5xl">Ana Marta | Terapeuta Integrativa</h2>
              <p className="mt-4 text-sm leading-relaxed">Terapeuta Integrativa | Pós-graduada em Neurociência Aplicada ao Aprendizado | Especialista em Psicoterapia Positiva, Sabotadores Mentais e Desenvolvimento Pessoal pelo Instituto Lider Flow</p>
              <ul className="mt-7 space-y-5">
                {[
                  ["Formação com Referências Nacionais", "Dupla certificação em Psicoterapia Positiva com o Dr. Paulo de Tarso e com o Dr. Helder Kamei pelo Instituto Lider Flow."],
                  ["Domínio de Sabotadores Mentais", "Especialização prática para identificar e desarmar os padrões mentais que sustentam a hipervigilância e a ruminação."],
                  ["Base na Neurociência Aplicada", "Intervenções estruturadas a partir da resposta neurofisiológica ao estresse crônico."],
                  ["Prática com Grupos Reais", 'Protocolo validado e refinado no acompanhamento prático do grupo "Viver Sem Ansiedade".'],
                ].map(([title, description]) => (
                  <li key={title} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-authority-check" />
                    <p className="text-sm leading-relaxed"><strong className="block font-extrabold text-authority-heading">{title}</strong><span>{description}</span></p>
                  </li>
                ))}
              </ul>
              <blockquote className="mt-8 rounded-lg border border-authority-border bg-authority-surface p-5 font-display text-lg leading-relaxed text-authority-heading">
                “Minha missão é entregar a você ferramentas práticas para que a sua mente volte a ser um lugar de paz, clareza e descanso, desarmando os sabotadores e o ciclo da sobrecarga mental dia após dia.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FECHAMENTO FRANCO */}
      <section className="bg-sage px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-forest md:text-4xl">Cuidar da sua mente é o primeiro passo para viver com equilíbrio e clareza.</h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed md:text-lg">
            <p>O meu papel aqui não é entregar teorias cansativas, mas sim um método prático e cientificamente embasado em Neurociência Aplicada e Psicologia Positiva para fortalecer o seu bem-estar e recuperar o domínio da sua mente.</p>
            <p>Se você chegou até aqui, seja para prevenir o desgaste do dia a dia ou porque já começou a sentir os impactos da rotina acelerada, este espaço foi pensado para você. Não se trata apenas de relaxar ou de fazer pausas pontuais; trata-se de resgatar a clareza, reduzir o ruído mental e voltar a ter noites de sono verdadeiramente reparadoras.</p>
            <p>Você não precisa continuar sustentando um estado de alerta constante que desgasta a sua energia. Estruturei um caminho seguro, fundamentado na neurobiologia do estresse e da ansiedade, aliado a práticas integrativas simples de aplicar na rotina.</p>
            <p className="font-semibold text-forest">Está pronta para desarmar as tensões diárias e cultivar serenidade e foco ao longo dos próximos 21 dias?</p>
          </div>
          <Cta className="mt-8">Quero Desarmar Minha Mente Agora</Cta>
          <p className="mt-4 text-sm text-muted-foreground">Apenas R$ 39,90 à vista ou em até 4x de R$ 10,86 no cartão</p>
        </div>
      </section>

      {/* ENTREGA */}
      <section className="bg-card px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold text-forest md:text-4xl">Compre agora e receba seu acesso no e-mail imediatamente!</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: Mail, title: "ACESSE SEU E-MAIL", description: "Assim que o seu pagamento for confirmado, você receberá um e-mail oficial da Hotmart com as instruções imediatas de acesso." },
              { icon: FileDown, title: "BAIXE O ROTEIRO COMPLETO", description: "Você recebe o arquivo oficial do Roteiro de 21 Dias, o Protocolo Noturno, o Guia de Intervenção Rápida e as Fichas de Aplicação para começar hoje mesmo." },
              { icon: CircleCheck, title: "TUDO PRONTO!", description: "Agora é só seguir os passos diários de poucos minutos para desativar a sobrecarga mental e recuperar a sua tranquilidade." },
            ].map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="rounded-lg border bg-background p-6">
                <div className="flex items-center justify-between"><Icon className="h-8 w-8 text-cta" /><span className="font-display text-3xl text-muted-foreground/50">0{index + 1}</span></div>
                <h3 className="mt-5 font-sans text-base font-extrabold text-forest">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
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
        <div className="mt-10 text-center"><Cta>QUERO DESARMAR MINHA MENTE AGORA</Cta></div>
      </section>

      <footer className="bg-forest px-4 py-8 text-center text-xs text-primary-foreground/80">
        © {new Date().getFullYear()} O Roteiro do Desarme Mental. Este produto não substitui acompanhamento médico ou psicológico.
      </footer>
      <div className="flex justify-center bg-background px-4 py-5">
        <Button variant="outline" className="gap-2 border-authority-border text-forest" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}>
          <ArrowUp aria-hidden="true" /> Voltar ao início
        </Button>
      </div>
    </div>
  );
}

function PilarCard({ icon: Icon, titulo, texto }: { icon: typeof Wind; titulo: string; texto: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-card p-4 text-left shadow-md">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-forest">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-sans text-sm font-extrabold text-forest">{titulo}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{texto}</p>
      </div>
    </div>
  );
}
