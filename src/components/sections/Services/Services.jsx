import { motion } from "framer-motion";
import { services } from "./data/servicesData";
import ServiceIcon from "./components/ServiceIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Services() {
  return (
    <section className="section" id="services">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="mb-16 text-center"
      >
        <span className="eyebrow">
          <span>{"<"}</span> Usługi {"/>"}
        </span>
        <h2 className="text-4xl md:text-5xl">
          Co <span className="text-signal">oferuję</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={index * 0.1}
            className="card flex gap-5"
          >
            <div className="bg-signal/10 border-signal/20 text-signal flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border">
              <ServiceIcon name={service.icon} />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg">{service.title}</h3>
              <p className="text-mist text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
