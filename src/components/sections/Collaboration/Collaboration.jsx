import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { socialLinks } from "../../../data/socialLinks";
import SocialIcon from "../../ui/SocialIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export default function Collaboration() {
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); //idle | sending | success | error
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const getServiceFromUrl = () => {
    const hash = window.location.hash;
    const queryString = hash.includes("?") ? hash.split("?")[1] : "";
    const params = new URLSearchParams(queryString);
    const service = params.get("service");
    return service ? `Jestem zainteresowany/a usługą: ${service}` : "";
  };

  useEffect(() => {
    const onHashChange = () => {
      const service = getServiceFromUrl();
      if (service) {
        setForm((prev) => ({ ...prev, message: service }));
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Imię jest wymagane.");
      return;
    }
    if (!form.email.trim()) {
      setError("Email jest wymagany.");
      return;
    }
    setStatus("sending");
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="collaboration" className="section">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="mb-14 text-center"
      >
        <span className="eyebrow">
          <span>{"<"}</span> Współpraca {"/>"}
        </span>
        <h2 className="text-4xl md:text-5xl">
          Zacznijmy <span className="text-signal">współpracę</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-mist font-mono text-xs">Imię</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Wprowadź imię"
              className="bg-surface text-paper placeholder:text-mist/40 focus:border-signal/50 rounded-xl border border-white/10 px-4 py-3 text-sm transition-colors focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-mist font-mono text-xs">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Wprowadź adres email"
                className="bg-surface text-paper placeholder:text-mist/40 focus:border-signal/50 rounded-xl border border-white/10 px-4 py-3 text-sm transition-colors focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-mist font-mono text-xs">Telefon</label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                value={form.phone}
                placeholder="Opcjonalnie - Wprowadź numer telefonu"
                className="bg-surface text-paper placeholder:text-mist/40 focus:border-signal/50 rounded-xl border border-white/10 px-4 py-3 text-sm transition-colors focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-mist font-mono text-xs">Wiadomość</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Opcjonalnie - Opowiedz mi o swoim projekcie..."
              rows={5}
              className="bg-surface text-paper placeholder:text-mist/40 focus:border-signal/50 resize-none rounded-xl border border-white/10 px-4 py-3 text-sm transition-colors focus:outline-none"
            />
          </div>

          {error && <p className="font-mono text-xs text-red-400">{error}</p>}

          {status === "success" && (
            <p className="text-signal font-mono text-xs">
              Wiadomość wysłana! Odezwę się wkrótce.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs text-red-400">
              Coś poszło nie tak. Spróbuj ponownie.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary mt-2 disabled:opacity-50"
          >
            {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>
        </motion.form>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-lg">Wolisz napisać bezpośrednio?</h3>
            <a
              href="mailto:codingflowweb@gmail.com"
              className="text-signal hover:text-paper font-mono text-sm transition-colors"
            >
              codingflowweb@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Znajdź mnie</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mist hover:text-signal flex w-fit items-center gap-2.5 text-sm transition-colors"
                >
                  <SocialIcon label={social.label} />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
