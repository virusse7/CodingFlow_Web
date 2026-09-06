import { motion } from "framer-motion";
import { pricingExtras, pricingItems } from "./data/pricingItems";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="mb-16 text-center"
      >
        <span className="eyebrow">
          <span>{"<"}</span> Cennik {"/>"}
        </span>
        <h2 className="text-4xl md:text-5xl">
          Przejrzyste <span className="text-signal">ceny</span>
        </h2>
        <p className="text-mist mx-auto mt-4 max-w-xl text-sm leading-relaxed">
          Każdy projekt jest inny — podane ceny to wartości orientacyjne.
          Ostateczna wycena zależy od zakresu i wymagań projektu.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricingItems.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={index + 0.1}
            className="card flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-mist text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-mist font-mono text-xs">od</span>
              <span className="text-signal font-display text-2xl">
                {item.price}
              </span>
              <span className="text-mist font-mono text-xs">{item.unit}</span>
            </div>

            <div className="h-px bg-white/35" />

            <ul className="flex flex-1 flex-col gap-2">
              {item.includes.map((inc) => (
                <li
                  key={inc}
                  className="text-mist flex items-start gap-2 text-sm"
                >
                  <span className="text-signal mt-0.5 shrink-0">✓</span>
                  {inc}
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                const service = encodeURIComponent(item.title);
                window.location.hash = `collaboration?service=${service}`;
                document.getElementById("collaboration")?.scrollIntoView();
              }}
              className="btn-primary mt-2 text-center text-sm"
            >
              Zapytaj o wycenę
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="card mt-16"
      >
        <h3 className="mb-6 text-lg">
          Dodatkowe usługi -{" "}
          <span className="text-mist text-base">
            mogą wpłynąć na końcową wycenę
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pricingExtras.map((extra) => (
            <div
              key={extra}
              className="text-mist flex items-start gap-2 text-sm"
            >
              <span className="text-ember shrink-0">+</span>
              {extra}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
