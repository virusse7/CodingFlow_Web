import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section flex min-h-screen flex-col items-center justify-start pt-32 text-center sm:justify-center sm:pt-0">
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        custom={0}
        className="border-signal/30 bg-signal/10 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
      >
        <span className="bg-signal h-1.5 w-1.5 animate-pulse rounded-full" />
        <span className="text-signal font-mono text-xs">
          Dostępny do współpracy
        </span>
      </motion.div>

      <motion.h1
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        custom={0.15}
        className="font-700 mb-6 text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
      >
        Tworzę strony <br />
        które <span className="text-signal">pracują na Twój biznes</span>.
      </motion.h1>

      <motion.p
        variants={fadeRight}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="text-mist mb-10 max-w-xl text-base leading-relaxed md:text-lg"
      >
        Projektuję i buduję nowoczesne strony internetowe dla firm i
        freelancerów. Od pomysłu do gotowej strony — szybko, solidnie i z
        dbałością o każdy detal.
      </motion.p>

      <motion.div
        variants={fadeRight}
        initial="hidden"
        animate="visible"
        custom={0.45}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <a href="#contact" className="btn-primary font-display">
          Zacznijmy współpracę
        </a>
        <a href="#work" className="btn-ghost font-display">
          Zobacz realizację
        </a>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={scrolled ? "hidden" : "visible"}
        custom={0.6}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#37E8C4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
