import { motion } from "framer-motion";
import { projects } from "./projectsData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Work() {
  return (
    <section className="section" id="work">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="mb-16 text-center"
      >
        <span className="eyebrow">
          <span>{"<"}</span> Realizacje {"/>"}
        </span>
        <h2 className="text-4xl md:text-5xl">
          Moje <span className="text-signal">projekty</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={index * 0.1}
            className="group card flex flex-col gap-4"
          >
            <h3 className="text-lg">{project.title}</h3>
            <p className="text-mist text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-signal bg-signal/10 border-signal/20 rounded-full border px-2.5 py-1 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-4 py-2 text-xs"
                >
                  Zobacz stronę
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn-ghost px-4 py-2 text-xs"
                >
                  Github
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
