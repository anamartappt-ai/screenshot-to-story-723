import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  Sparkles,
  MessageCircle,
  Leaf,
  Gift,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/GxM7OgqYGidJGI9YutkFBF?s=cl&p=a&iam=2";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      {
        title:
          "Parabéns! Seu acesso está garantido — Ana Marta | Terapeuta Integrativa",
      },
      {
        name: "description",
        content:
          "Confirmação de acesso ao Desarme a sua mente + Masterclass Ao Vivo O Equilíbrio é Possível (14/12 às 19h30).",
      },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#344238] selection:bg-[#A8B5A0]/30">
      {/* Cabeçalho minimalista da marca */}
      <header className="border-b border-[#EDE5D8] bg-[#FAF9F6]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EDE5D8] text-[#344238]">
              <Leaf className="h-4 w-4" />
            </span>
            <div>
              <p className="font-serif text-base font-semibold leading-tight text-[#344238]">
                Ana Marta
              </p>
              <p className="text-xs tracking-wide text-[#344238]/75">
                Terapeuta Integrativa
              </p>
            </div>
          </div>

          <span className="hidden items-center gap-1.5 rounded-full bg-[#EDE5D8]/80 px-3.5 py-1 text-xs font-medium text-[#344238] sm:inline-flex">
            <ShieldCheck className="h-3.5 w-3.5 text-[#344238]" />
            Inscrição confirmada
          </span>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        {/* Bloco 1: Confirmação de Acesso */}
        <section className="text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#A8B5A0]/50 bg-[#A8B5A0]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#344238]">
            <CheckCircle2 className="h-4 w-4 text-[#344238]" />
            Acesso Liberado
          </div>

          <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#344238] sm:text-4xl md:text-5xl">
            Parabéns! Seu acesso está garantido.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#344238]/80 sm:text-lg">
            Seu lugar está reservado. Confira abaixo o resumo do que você
            garantiu e conclua o último passo para receber seu acesso ao
            encontro ao vivo e seu presente.
          </p>
        </section>

        {/* Bloco 2: Resumo do que foi garantido */}
        <section className="mt-8 rounded-2xl border border-[#A8B5A0]/40 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#344238]/70">
            <Sparkles className="h-4 w-4 text-[#344238]" />
            Resumo do que você garantiu
          </div>

          <h2 className="mt-2 font-serif text-2xl font-semibold text-[#344238]">
            Desarme a sua mente + Masterclass Ao Vivo “O Equilíbrio é Possível”
          </h2>

          <div className="mt-5 grid gap-3 rounded-xl bg-[#FAF9F6] p-4 border border-[#EDE5D8] sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EDE5D8] text-[#344238]">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-[#344238]/70">Data</p>
                <p className="text-sm font-semibold text-[#344238]">
                  Dia 14/12
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EDE5D8] text-[#344238]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-[#344238]/70">Horário</p>
                <p className="text-sm font-semibold text-[#344238]">Às 19h30</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EDE5D8] text-[#344238]">
                <Video className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-[#344238]/70">Formato</p>
                <p className="text-sm font-semibold text-[#344238]">
                  Google Meet (Ao Vivo)
                </p>
              </div>
            </div>
          </div>

          <ul className="mt-5 space-y-2.5 text-sm text-[#344238]/85 sm:text-base">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#344238]" />
              <span>
                <strong>Desarme a sua mente:</strong> acesso completo ao seu
                material prático de organização emocional e alívio da ruminação
                mental.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#344238]" />
              <span>
                <strong>
                  Masterclass Ao Vivo “O Equilíbrio é Possível” (14/12 às
                  19h30):
                </strong>{" "}
                encontro online pelo Google Meet com{" "}
                <strong>vivência prática</strong> conduzida por Ana Marta.
              </span>
            </li>
          </ul>
        </section>

        {/* Bloco 3: Passo Final + Botão Principal do WhatsApp */}
        <section className="mt-8 rounded-2xl border-2 border-[#344238] bg-[#EDE5D8]/60 p-6 text-center shadow-sm sm:p-10">
          <span className="inline-block rounded-full bg-[#344238] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#FAF9F6]">
            Atenção — Última etapa
          </span>

          <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-[#344238] sm:text-3xl">
            PRA CONCLUIR, SÓ FALTA MAIS UM PASSO!
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#344238]/85 sm:text-base">
            Toque no botão abaixo para acessar a nossa comunidade fechada e
            silenciosa no WhatsApp. É por lá que toda a comunicação oficial do
            encontro acontece.
          </p>

          <div className="mt-7">
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#344238] px-6 py-4 text-base font-semibold text-[#FAF9F6] shadow-md transition-all hover:bg-[#344238]/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#344238] focus:ring-offset-2 sm:w-auto sm:px-8 sm:text-lg"
            >
              <MessageCircle className="h-6 w-6 shrink-0 text-[#A8B5A0]" />
              <span>Entrar no Grupo Viver sem Ansiedade</span>
              <ArrowRight className="h-5 w-5 shrink-0" />
            </a>
          </div>

          <div className="mx-auto mt-5 flex max-w-lg items-start gap-3 rounded-xl border border-[#A8B5A0]/40 bg-[#FAF9F6] p-4 text-left text-xs leading-relaxed text-[#344238]/85 sm:text-sm">
            <Gift className="mt-0.5 h-5 w-5 shrink-0 text-[#344238]" />
            <p>
              <strong>Importante:</strong> dentro do grupo{" "}
              <strong>Viver sem Ansiedade</strong> você receberá o{" "}
              <strong>link exclusivo da aula ao vivo</strong> no Google Meet, as
              orientações preparatórias para a vivência prática e o seu{" "}
              <strong>Presente de Acolhimento</strong>.
            </p>
          </div>
        </section>

        {/* Rodapé acolhedor */}
        <footer className="mt-12 border-t border-[#EDE5D8] pt-6 text-center">
          <p className="font-serif text-base italic text-[#344238]/80">
            “Você não precisa caminhar sozinha.”
          </p>
          <p className="mt-1 text-xs text-[#344238]/60">
            Ana Marta • Terapeuta Integrativa
          </p>
        </footer>
      </main>
    </div>
  );
}
