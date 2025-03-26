import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaFireAlt,
  FaGhost,
  FaMeteor,
  FaBolt,
  FaEye,
  FaCodeBranch,
} from "react-icons/fa";

// Tipagem para props do GlitchText
type GlitchTextProps = {
  text: string;
};

// Tipagem para as páginas
type PageKey = "home" | "explodir" | "mutar" | "contato" | "realidade";

const GlitchText = ({ text }: GlitchTextProps) => (
  <h1 className="animate-pulse bg-gradient-to-r from-[#ff00cc] to-[#3333ff] bg-clip-text text-center text-6xl font-extrabold uppercase text-transparent drop-shadow-xl md:text-8xl">
    {text}
  </h1>
);

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageKey>("home");

  const transitionProps = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 },
    transition: { duration: 0.6, ease: "anticipate" },
  };

  const IconGrid = [FaFireAlt, FaGhost, FaMeteor, FaBolt, FaEye, FaCodeBranch];

  const pages: Record<PageKey, JSX.Element> = {
    home: (
      <motion.div key="home" {...transitionProps}>
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0f0f0f] px-6 text-center">
          <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle,_#ff00cc_0%,_#0f0f0f_100%)] opacity-20" />
          <GlitchText text="INTERF4CE" />
          <motion.p className="mt-6 max-w-xl text-lg text-white/70">
            Uma explosão visual para Cristiane, Guilherme e quem vive no ritmo
            da inovação.
          </motion.p>
          <div className="z-10 mt-10 flex flex-wrap justify-center gap-6">
            {["Explodir", "Mutar", "Contato", "Realidade"].map((label, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(label.toLowerCase() as PageKey)}
                className="bg-gradient-to-br from-pink-500 to-indigo-500 px-6 py-3 font-black uppercase tracking-wider text-white shadow-lg transition-all hover:rotate-1 hover:scale-105"
              >
                {label}
              </button>
            ))}
          </div>
        </section>
      </motion.div>
    ),

    explodir: (
      <motion.section
        key="explodir"
        {...transitionProps}
        className="bg-black px-6 py-24 text-center text-white"
      >
        <h2 className="mb-16 animate-pulse text-5xl font-extrabold tracking-widest text-[#ff00cc]">
          FUNÇÕES INSANAS
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {IconGrid.map((Icon, i) => (
            <div
              key={i}
              className="rounded-3xl border border-[#ff00cc] bg-[#111] p-8 shadow-[0_0_30px_#ff00cc55] transition-all hover:scale-105"
            >
              <Icon className="mx-auto mb-4 animate-bounce text-4xl text-[#ff00cc]" />
              <h3 className="text-lg font-bold text-white">Módulo #{i + 1}</h3>
            </div>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage("home")}
          className="mt-16 border border-pink-500 px-6 py-3 text-white transition hover:bg-pink-500"
        >
          Voltar
        </button>
      </motion.section>
    ),

    mutar: (
      <motion.section
        key="mutar"
        {...transitionProps}
        className="bg-gradient-to-br from-[#330066] via-[#0f0f0f] to-[#ff0055] px-6 py-24 text-center text-white"
      >
        <h2 className="mb-10 text-5xl font-black tracking-wide text-white drop-shadow">
          Transformação Total
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-white/80">
          Prepare-se para um layout que quebra limites e muta sua presença
          digital com glitchs, camadas e poder visual.
        </p>
        <button
          onClick={() => setCurrentPage("home")}
          className="mt-12 bg-pink-500 px-6 py-3 font-bold uppercase text-white hover:bg-pink-600"
        >
          Voltar ao Início
        </button>
      </motion.section>
    ),

    contato: (
      <motion.section
        key="contato"
        {...transitionProps}
        className="bg-black px-6 py-24 text-center text-white"
      >
        <h2 className="mb-6 text-4xl font-extrabold text-[#ff00cc]">
          Fale com o núcleo
        </h2>
        <form className="mx-auto mt-6 grid max-w-xl gap-6">
          <input
            type="text"
            placeholder="Nome"
            className="w-full rounded-xl border border-pink-400 bg-white/10 px-4 py-3 text-white placeholder:text-pink-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-pink-400 bg-white/10 px-4 py-3 text-white placeholder:text-pink-300"
          />
          <textarea
            placeholder="Mensagem"
            className="h-32 w-full rounded-xl border border-pink-400 bg-white/10 px-4 py-3 text-white placeholder:text-pink-300"
          ></textarea>
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 px-6 py-3 font-bold text-white transition hover:scale-105"
          >
            ENVIAR AGORA
          </button>
        </form>
        <button
          onClick={() => setCurrentPage("home")}
          className="mt-10 border border-pink-500 px-6 py-3 text-white"
        >
          Voltar ao Início
        </button>
      </motion.section>
    ),

    realidade: (
      <motion.section
        key="realidade"
        {...transitionProps}
        className="bg-[#1a1a1a] px-6 py-24 text-center text-white"
      >
        <h2 className="mb-6 text-5xl font-black text-indigo-400">
          + REALIDADE MENOS PADRÕES
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-white/70">
          Você está prestes a transcender o convencional. Chega de layouts
          previsíveis.
        </p>
        <button
          onClick={() => setCurrentPage("home")}
          className="mt-10 rounded-full bg-indigo-500 px-6 py-3 font-bold text-white hover:bg-indigo-600"
        >
          REINICIAR
        </button>
      </motion.section>
    ),
  };

  return (
    <div className="min-h-screen bg-black font-mono text-white">
      <AnimatePresence mode="wait">{pages[currentPage]}</AnimatePresence>
      <footer className="border-t border-pink-500 bg-black px-6 py-10 text-center text-white">
        <p className="mb-4">© 2025 INTERF4CE Experimental Zone</p>
        <div className="flex justify-center gap-6 text-xl">
          <FaInstagram className="cursor-pointer hover:text-pink-400" />
          <FaTwitter className="cursor-pointer hover:text-indigo-400" />
          <FaFacebook className="cursor-pointer hover:text-pink-500" />
        </div>
      </footer>
    </div>
  );
}
