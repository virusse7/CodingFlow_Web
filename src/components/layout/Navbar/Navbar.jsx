import { navigationLinks } from "../../../data/navigationLinks";
import { useState, useEffect } from "react";
import logo from "../../../assets/CFLogo2.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-abyss/95 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2.5">
          <div className="bg-signal/10 border-signal/30 group-hover:bg-signal/20 flex h-9 w-9 items-center justify-center rounded-lg border transition-colors">
            <img src={logo} alt="logo" />
          </div>
          <span className="font-display font-600 text-paper text-base">
            Coding<span className="text-signal">Flow</span>{" "}
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-mist hover:text-paper font-sans text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn-primary hidden text-sm md:block">
          Porozmawiajmy
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-1 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`bg-signal block h-0.5 w-6 transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`bg-signal block h-0.5 w-6 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`bg-signal block h-0.5 w-6 transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mt-3 flex flex-col gap-1 border-t border-white/5 px-6 pt-4 pb-8">
          {navigationLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-mist active:text-paper border-b border-white/5 py-3 font-sans text-base transition-colors last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-2 text-center text-sm">
            Porozmawiajmy
          </a>
        </nav>
      </div>
    </header>
  );
}
