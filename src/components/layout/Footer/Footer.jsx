import logo from "../../../assets/CFLogo.svg";
import { navigationLinks } from "../../../data/navigationLinks";
import { socialLinks } from "../../../data/socialLinks";
import SocialIcon from "../../ui/SocialIcon";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5">
      <div className="section py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-5">
            <a href="#" className="group flex items-center gap-2.5">
              <div className="bg-signal/10 border-signal/30 group-hover:bg-signal/20 flex h-9 w-9 items-center justify-center rounded-lg border transition-colors">
                <img src={logo} alt="CodingFlow Web logo" />
              </div>
              <span className="font-display text-paper text-base">
                Coding<span className="text-signal">Flow</span>{" "}
                <span className="text-mist text-sm"> Web</span>
              </span>
            </a>
            <p className="text-paper max-w-xs text-sm leading-relaxed">
              Tworzę nowoczesne strony internetowe dla firm i freelancerów. Od
              projektu do wdrożenia —{" "}
              <span className="text-signal">
                szybko, solidnie i z dbałością o szczegóły
              </span>
              .
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-paper text-md">Odkryj</h4>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  className="text-mist hover:text-paper w-fit text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-paper text-md">Znajdź mnie</h4>
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
        </div>
        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-mist text-xs">
            Coding<span className="text-signal">Flow</span> Web
          </p>
        </div>
      </div>
    </footer>
  );
}
