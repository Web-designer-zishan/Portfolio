export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const projectDetails = {
    KEEPER: {
      title: "KEEPER APP",
      subtitle: "React Notes & Task Management Web Application",
      category: "01 / React Web App • COMING SOON",
      overview:
        "Keeper is a responsive personal note-taking web application inspired by Google Keep, designed for instantaneous thought capture, modular note composition, and real-time state synchronization. Built with a component-driven React architecture, custom hooks, and dynamic list mapping.",
      highlights: [
        "Modular component structure (<Heading />, <Note />, <Footer />) with isolated state",
        "Zero-latency note creation and instant deletion workflows with array immutability",
        "Local storage persistence ensuring notes survive session refreshes",
        "Responsive CSS masonry grid adapting across mobile, tablet, and desktop viewports",
      ],
      stack: ["React", "JavaScript (ES6+)", "CSS3", "HTML5", "Vite"],
    },
    BLOGWEBSITE: {
      title: "BLOG WEBSITE",
      subtitle: "Full-Stack Content Management & Dynamic Publishing Engine",
      category: "02 / Full-Stack Node.js & EJS • COMING SOON",
      overview:
        "A full-stack publishing web application engineered with Node.js and Express. It enables authors to compose, publish, and manage long-form blog articles with dynamic route parameters (/posts/:title), Lodash slug normalization, and custom EJS server-rendered templates.",
      highlights: [
        "Express routing engine with parametric wildcard matching (/posts/:title)",
        "EJS server-side template rendering with reusable partial headers, navigation, and footers",
        "URL slug normalization and title matching using Lodash utility pipelines",
        "RESTful form data ingestion and redirect workflows via Body-Parser",
      ],
      stack: ["Node.js", "Express.js", "EJS", "JavaScript", "Body-Parser", "CSS3"],
    },
    WEATHER: {
      title: "WEATHERCAST",
      subtitle: "Real-Time Global Weather & Atmospheric Telemetry Web App",
      category: "03 / REST API & Live Weather Portal • COMING SOON",
      overview:
        "Weathercast is a live meteorological web portal that communicates with the OpenWeatherMap API to retrieve accurate, real-time climate conditions for any city worldwide. It handles asynchronous HTTP payloads, JSON extraction, temperature metric conversions, and dynamic weather icon rendering.",
      highlights: [
        "Secure backend API integration proxying OpenWeatherMap HTTPS queries",
        "Asynchronous stream buffer parsing with error-tolerant JSON decoding",
        "Real-time conversion between Metric (°C) and Imperial (°F) telemetry",
        "Conditional UI rendering adjusting visual themes to current weather conditions",
      ],
      stack: ["Node.js", "Express.js", "OpenWeatherMap API", "RESTful API", "JavaScript", "CSS3"],
    },
    TODOLIST: {
      title: "TODOLIST PRO",
      subtitle: "Daily Productivity & Task Management Web Engine",
      category: "04 / Productivity & List Engine • COMING SOON",
      overview:
        "TodoList Pro is an interactive task scheduling web application designed for fast daily planning. Engineered with Node.js, Express, and EJS, it features modular custom date engines (date.getDay()), dynamic list categorization, and streamlined task completion workflows.",
      highlights: [
        "Custom reusable date module formatting live localized dates and weekdays",
        "Dynamic list routing supporting custom task categories and work streams",
        "Interactive task completion checkboxes with responsive state feedback",
        "Server-rendered dynamic list collection with persistent item arrays",
      ],
      stack: ["Node.js", "Express.js", "EJS", "JavaScript", "CSS3", "HTML5"],
    },
    NEWSLETTER: {
      title: "NEWSLETTER PORTAL",
      subtitle: "Audience Subscription & Mailchimp API Integration Platform",
      category: "05 / Email Marketing & API Integration • COMING SOON",
      overview:
        "A high-converting newsletter signup web portal integrated with Mailchimp's REST API. It handles client-side form validation, constructs serialized JSON member payloads, and securely subscribes new readers with automated success and failure route handling.",
      highlights: [
        "Direct integration with Mailchimp v3.0 REST API audience endpoint",
        "Client and server input validation mitigating malformed email submissions",
        "Dedicated UX feedback states for instant subscription success and failure retries",
        "Responsive, distraction-free landing page layout designed for maximum conversion",
      ],
      stack: ["Node.js", "Express.js", "Mailchimp API", "HTTPS", "JavaScript", "CSS3"],
    },
  };

  const info = projectDetails[project] || {
    title: project,
    subtitle: "Interactive Case Study",
    category: "Featured Work",
    overview:
      "A deep dive into product architecture, interaction patterns, and intelligence workflows.",
    highlights: ["Scalable architecture", "Kinetic interactions", "Production ready"],
    stack: ["React", "CSS", "TypeScript"],
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        style={{ width: "min(94vw, 680px)", maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--signal)",
              letterSpacing: "0.1em",
              margin: 0,
            }}
          >
            {info.category}
          </p>
          <span className="world-coming-soon-badge">
            <span aria-hidden="true" />
            COMING SOON
          </span>
        </div>

        <h3 style={{ fontSize: "2.2rem", fontWeight: 850 }}>{info.title}</h3>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
          {info.subtitle}
        </p>

        <div style={{ borderTop: "1px solid var(--line)", paddingTop: "1.2rem", marginBottom: "1.5rem" }}>
          <h4
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "var(--ivory)",
              marginBottom: "0.6rem",
            }}
          >
            ARCHITECTURE &amp; OVERVIEW
          </h4>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--ivory)" }}>
            {info.overview}
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--line)", paddingTop: "1.2rem", marginBottom: "1.5rem" }}>
          <h4
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "var(--ivory)",
              marginBottom: "0.6rem",
            }}
          >
            KEY CAPABILITIES &amp; OUTCOMES
          </h4>
          <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {info.highlights.map((h, i) => (
              <li key={i} style={{ fontSize: "0.85rem", color: "var(--ivory)", lineHeight: 1.5 }}>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ borderTop: "1px solid var(--line)", paddingTop: "1.2rem" }}>
          <h4
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "var(--ivory)",
              marginBottom: "0.6rem",
            }}
          >
            TECHNOLOGY STACK
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {info.stack.map((s, i) => (
              <span
                key={i}
                style={{
                  background: "rgba(241, 238, 230, 0.08)",
                  border: "1px solid var(--line)",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "3px",
                  fontSize: "0.72rem",
                  color: "var(--ivory)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--signal)", letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--signal)", display: "inline-block" }} />
              PRODUCTION SYSTEM ARCHITECTURE
            </span>
          </div>
          <button
            type="button"
            className="contact-submit-btn"
            onClick={onClose}
            style={{ display: "inline-block", width: "auto", padding: "0.7rem 1.6rem" }}
          >
            CLOSE CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
}
