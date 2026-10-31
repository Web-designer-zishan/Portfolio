import { useState } from "react";

export default function Navbar({ onContactClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <a
        href="#"
        className="wordmark"
        aria-label="Mo Zishan Home"
        data-cursor="HOME"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span>MZ</span>
        <span className="wordmark-dot" />
      </a>

      <button
        type="button"
        className="menu-button"
        aria-label="Toggle Navigation"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        data-cursor="MENU"
      >
        {mobileMenuOpen ? "CLOSE" : "MENU"}
      </button>

      <nav aria-label="Primary navigation">
        <a
          href="#capabilities"
          className="nav-link"
          data-cursor="GO"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("capabilities");
          }}
        >
          TECH STACK
        </a>
        <a
          href="#projects"
          className="nav-link"
          data-cursor="GO"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
        >
          PROJECTS
        </a>
        <a
          href="#about"
          className="nav-link"
          data-cursor="GO"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          ABOUT
        </a>
        <a
          href="#contact"
          className="nav-link"
          data-cursor="TALK"
          onClick={(e) => {
            e.preventDefault();
            if (onContactClick) onContactClick();
            else scrollToSection("contact");
          }}
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
}
