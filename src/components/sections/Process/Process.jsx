import { motion } from "framer-motion";
import { steps } from "./processData";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};
export default function Process() {
  return (
    <section className="section" id="process">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="mb-16 text-center"
      >
        <span className="eyebrow">
          <span>{"<"}</span>Proces {"/>"}
        </span>
        <h2 className="text-4xl md:text-5xl">
          Jak <span className="text-signal">działam</span>
        </h2>
      </motion.div>

      <div className="relative flex flex-col gap-12 overflow-x-hidden">
        <div className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-white/5 md:block" />

        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={step.number}
              variants={isLeft ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col items-center gap-8 md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div
                className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}
              >
                <div
                  className={`card mx-auto max-w-md ${isLeft ? "md:mr-0 md:ml-auto" : "md:mr-auto md:ml-0"}`}
                >
                  <span className="text-signal mb-2 block font-mono text-xs">
                    {step.number}
                  </span>
                  <h3 className="mb-2 text-xl">{step.title}</h3>
                  <p className="text-mist text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="bg-signal ring-signal/20 relative z-10 hidden h-4 w-4 shrink-0 rounded-full ring-4 md:flex" />

              <div className="hidden flex-1 md:block" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
