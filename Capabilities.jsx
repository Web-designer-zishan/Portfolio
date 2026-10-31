import { useState } from "react";

export default function Capabilities({ scrollProgress }) {
  // Capabilities is active roughly between 0.25 and 0.45 of page scroll
  const progress = Math.min(Math.max((scrollProgress - 0.25) / 0.16, 0), 1);
  const [activeNode, setActiveNode] = useState(null);

  const frontendCapabilities = [
    { title: "React & Next.js", desc: "Production SPAs, SSR, React Server Components, and modular component architecture.", pct: 0.15 },
    { title: "TypeScript & Core Web", desc: "Strict type safety, modern ECMAScript standards, and clean, self-documenting codebases.", pct: 0.35 },
    { title: "Kinetic UI & Physics", desc: "Fluid SVG animations, custom interactive cursors, and 60fps micro-interactions.", pct: 0.55 },
    { title: "Design Systems & CSS", desc: "Scalable CSS architectures, responsive layouts, accessible tokens, and WCAG standards.", pct: 0.75 },
    { title: "Performance & Vitals", desc: "Sub-second LCP, aggressive code-splitting, tree-shaking, and lightweight asset bundles.", pct: 0.95 },
  ];

  const backendCapabilities = [
    { title: "RESTful & GraphQL APIs", desc: "Strict API schemas, WebSocket channels, rate-limiting, and reliable JSON contracts.", pct: 0.15 },
    { title: "Node.js & Python Services", desc: "Asynchronous backend runtimes, worker pools, event queues, and microservices.", pct: 0.35 },
    { title: "Database & Caching", desc: "PostgreSQL, MongoDB, Prisma ORM, Redis caching layers, and relational indexing.", pct: 0.55 },
    { title: "Cloud, DevOps & CI/CD", desc: "Docker containerization, GitHub Actions automated CI pipelines, and edge deployments.", pct: 0.75 },
    { title: "Web Security & Auth", desc: "OAuth2 / JWT workflows, CSRF / XSS protection, input sanitization, and RBAC models.", pct: 0.95 },
  ];

  // Orbit paths: Left arc (Product) and Right arc (AI)
  // ViewBox: 0 0 1000 1200
  const leftArc = "M 500 0 C 120 200 80 1000 500 1200";
  const rightArc = "M 500 0 C 880 200 920 1000 500 1200";

  return (
    <section className="capabilities" id="capabilities">
      <div className="capability-heading">
        <h2>
          <span>I ARCHITECT FLUID FRONTENDS.</span>
          <span>AND RESILIENT SYSTEMS</span>
          <span>TO POWER THEM.</span>
        </h2>
      </div>

      <div className="capability-orbit">
        {/* Central Split Junction */}
        <div
          className="capability-junction capability-split"
          title="Thread Split Node"
        />

        {/* Orbit SVG dual branch paths */}
        <svg
          className="capability-orbit-svg"
          viewBox="0 0 1000 1200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Faint guide tracks */}
          <path
            d={leftArc}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.12"
          />
          <path
            d={rightArc}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.12"
          />

          {/* Left Vermilion Thread Branch */}
          <path
            d={leftArc}
            className="thread-path"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: `${Math.max(0, (1 - progress) * 2000)}`,
              transition: "stroke-dashoffset 0.08s linear",
            }}
          />

          {/* Right Vermilion Thread Branch */}
          <path
            d={rightArc}
            className="thread-path"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: `${Math.max(0, (1 - progress) * 2000)}`,
              transition: "stroke-dashoffset 0.08s linear",
            }}
          />
        </svg>

        {/* LEFT COLUMN: FRONTEND CRAFT */}
        <div className="capability-discipline capability-product">
          <h3>FRONTEND CRAFT</h3>
          {frontendCapabilities.map((item, index) => {
            const isReached = progress >= item.pct;
            // Radial vertical positions: 14%, 32%, 50%, 68%, 86%
            const topPercent = 14 + index * 18;
            // Elliptical curvature left coordinate: deeper at center (index 2 is furthest left)
            const offsets = [18, 6, 2, 6, 18];
            const leftPercent = offsets[index];

            return (
              <div
                key={item.title}
                className={`capability-node ${isReached ? "is-reached" : ""} ${
                  activeNode === item.title ? "is-active" : ""
                }`}
                style={{ top: `${topPercent}%`, left: `${leftPercent}%` }}
                onMouseEnter={() => setActiveNode(item.title)}
                onMouseLeave={() => setActiveNode(null)}
                data-cursor="EXPAND"
              >
                <div className="capability-node-dot">
                  <div className="capability-node-core" />
                </div>
                <div className="capability-node-text">
                  <strong>{item.title}</strong>
                  <small>{item.desc}</small>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: BACKEND & CLOUD */}
        <div className="capability-discipline capability-ai">
          <h3>BACKEND &amp; CLOUD</h3>
          {backendCapabilities.map((item, index) => {
            const isReached = progress >= item.pct;
            const topPercent = 14 + index * 18;
            const offsets = [82, 94, 98, 94, 82];
            const leftPercent = offsets[index];

            return (
              <div
                key={item.title}
                className={`capability-node ${isReached ? "is-reached" : ""} ${
                  activeNode === item.title ? "is-active" : ""
                }`}
                style={{ top: `${topPercent}%`, left: `${leftPercent}%` }}
                onMouseEnter={() => setActiveNode(item.title)}
                onMouseLeave={() => setActiveNode(null)}
                data-cursor="EXPAND"
              >
                <div className="capability-node-dot">
                  <div className="capability-node-core" />
                </div>
                <div className="capability-node-text">
                  <strong>{item.title}</strong>
                  <small>{item.desc}</small>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Merge Junction */}
        <div
          className="capability-junction capability-merge"
          title="Thread Merge Node"
        />
      </div>
    </section>
  );
}
