import { motion } from "framer-motion";

import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/virusse7/repos?sort=updated&per_page=10",
    )
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        const filtered = data.filter(
          (repo) => !repo.fork && repo.name !== "virusse7",
        );
        setProjects(filtered.slice(0, 6));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

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

      {loading && (
        <div className="flex justify-center py-20">
          <div className="border-signal h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
        </div>
      )}

      {error && (
        <p className="text-mist text-center font-mono text-sm">
          Nie udało się pobrać projektów. Spróbuj później.
        </p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index * 0.1}
              className="group card flex flex-col gap-4"
            >
              <h3 className="text-lg">{project.name}</h3>
              <p className="text-mist text-sm leading-relaxed">
                {project.description || "Brak opisu"}
              </p>

              {project.language && (
                <span className="text-signal bg-signal/10 border-signal/20 w-fit rounded-full border px-2.5 py-1 font-mono text-xs">
                  {project.language}
                </span>
              )}

              <div className="mt-auto flex gap-3 pt-2">
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 text-xs"
                  >
                    Zobacz stronę
                  </a>
                )}
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost px-4 py-2 text-xs"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
