import { useState } from "react";

export default function ProjectWorlds({ scrollProgress, onExplore }) {
  // Interactive state for personal project demos
  const [isCelsius, setIsCelsius] = useState(true);
  const [todoTasks, setTodoTasks] = useState([
    { id: 1, text: "Deploy React Portfolio Architecture", done: true },
    { id: 2, text: "Build Express API & EJS Templates", done: true },
    { id: 3, text: "Integrate MongoDB Atlas Persistent Store", done: false },
    { id: 4, text: "Configure Docker Containerization CI/CD", done: false },
  ]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleTodo = (id) => {
    setTodoTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="project-worlds" id="projects">
      {/* =========================================================================
          WORLD 01: KEEPER APP (React Web Application)
          ========================================================================= */}
      <article
        id="keeper"
        className="project-world world-light"
        data-world="keeper"
      >
        <div className="world-kicker-wrap">
          <p className="world-kicker">01 / React Web Application</p>
          <span className="world-coming-soon-badge">
            <span aria-hidden="true" />
            COMING SOON
          </span>
        </div>

        <p className="world-description">
          Personal note-taking &amp; task management application featuring dynamic card composition, instant state synchronization, and clean modular UI.
        </p>

        <h3 className="world-title">
          <a
            href="#keeper"
            data-cursor="VIEW"
            onClick={(e) => {
              e.preventDefault();
              onExplore?.("KEEPER");
            }}
          >
            KEEPER
          </a>
        </h3>

        <div className="world-composition">
          {/* Main Keeper Note Card */}
          <div className="world-object keeper-note-main">
            <svg
              viewBox="0 0 540 330"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Keeper App Notes Card"
            >
              <rect
                x="1"
                y="1"
                width="538"
                height="328"
                rx="6"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="1"
              />
              {/* Header Bar */}
              <line x1="1" y1="48" x2="539" y2="48" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
              <circle cx="28" cy="24" r="5" fill="var(--signal)" />
              <text x="44" y="28" fill="currentColor" fontSize="12" fontWeight="700" letterSpacing="0.08em">
                KEEPER // NOTE ENGINE
              </text>
              <text x="510" y="28" textAnchor="end" fill="var(--signal)" fontSize="10" fontWeight="600" letterSpacing="0.06em">
                REACT COMPONENT
              </text>

              {/* Note Body */}
              <text x="28" y="85" fill="currentColor" fontSize="18" fontWeight="800">
                Sprint Roadmap &amp; Architecture
              </text>
              <text x="28" y="118" fill="currentColor" fontSize="12" opacity="0.85">
                • Component hierarchy: &lt;Heading /&gt;, &lt;Note /&gt;, &lt;Footer /&gt;
              </text>
              <text x="28" y="146" fill="currentColor" fontSize="12" opacity="0.85">
                • Dynamic array mapping with persistent unique keys
              </text>
              <text x="28" y="174" fill="currentColor" fontSize="12" opacity="0.85">
                • Zero-latency note creation and responsive masonry card layout
              </text>
              <text x="28" y="202" fill="currentColor" fontSize="12" opacity="0.85">
                • Local storage synchronization surviving session refreshes
              </text>

              {/* Tags & Action Footer */}
              <line x1="28" y1="235" x2="512" y2="235" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
              <rect x="28" y="255" width="86" height="24" rx="3" fill="rgba(255, 59, 18, 0.1)" stroke="var(--signal)" strokeWidth="0.8" />
              <text x="71" y="271" textAnchor="middle" fill="var(--signal)" fontSize="10" fontWeight="600">
                #REACT
              </text>
              <rect x="124" y="255" width="112" height="24" rx="3" fill="rgba(0, 0, 0, 0.04)" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <text x="180" y="271" textAnchor="middle" fill="currentColor" fontSize="10">
                #JAVASCRIPT
              </text>
              <rect x="246" y="255" width="102" height="24" rx="3" fill="rgba(0, 0, 0, 0.04)" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <text x="297" y="271" textAnchor="middle" fill="currentColor" fontSize="10">
                #STATE-MGMT
              </text>
              <text x="512" y="272" textAnchor="end" fill="var(--signal)" fontSize="11" fontWeight="700">
                COMING SOON // V2
              </text>
            </svg>
          </div>

          {/* Secondary Sticky Note */}
          <div className="world-object keeper-note-secondary">
            <svg
              viewBox="0 0 340 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Component Code Snippet"
            >
              <rect
                x="1"
                y="1"
                width="338"
                height="238"
                rx="6"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="1"
              />
              <text x="20" y="32" fill="var(--signal)" fontSize="10" fontWeight="700" letterSpacing="0.08em">
                COMPONENT LOGIC
              </text>
              <line x1="20" y1="46" x2="320" y2="46" stroke="currentColor" opacity="0.3" />
              <g fill="currentColor" fontSize="11" fontFamily="monospace">
                <text x="20" y="78" fill="var(--signal)">function</text>
                <text x="82" y="78">createNote(item) &#123;</text>
                <text x="35" y="106">return (</text>
                <text x="50" y="134" fill="var(--signal)">&lt;Note</text>
                <text x="65" y="158">key=&#123;item.key&#125;</text>
                <text x="65" y="182">title=&#123;item.title&#125;</text>
                <text x="50" y="206" fill="var(--signal)">/&gt;</text>
                <text x="35" y="226">); &#125;</text>
              </g>
            </svg>
          </div>

          {/* Code Spec Card */}
          <div className="world-object keeper-note-code">
            <svg viewBox="0 0 380 150" fill="none">
              <rect
                x="1"
                y="1"
                width="378"
                height="148"
                rx="4"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <text x="20" y="30" fill="currentColor" fontSize="11" fontWeight="700">
                ACTIVE STATE STORE
              </text>
              <line x1="20" y1="42" x2="360" y2="42" stroke="currentColor" opacity="0.25" />
              <text x="20" y="72" fontSize="11" fill="currentColor">
                STATUS: <tspan fill="var(--signal)" fontWeight="700">ACTIVE COMPILATION</tspan>
              </text>
              <text x="20" y="100" fontSize="11" fill="currentColor">
                PERFORMANCE: <tspan fill="var(--signal)">60 FPS // ZERO JANK</tspan>
              </text>
              <text x="20" y="128" fontSize="11" fill="currentColor" opacity="0.7">
                VERSION: 2.0.0-PROD (COMING SOON)
              </text>
            </svg>
          </div>
        </div>

        <a
          href="#keeper"
          className="world-link"
          data-cursor="VIEW"
          onClick={(e) => {
            e.preventDefault();
            onExplore?.("KEEPER");
          }}
        >
          EXPLORE PROJECT (COMING SOON) <span>→</span>
        </a>
      </article>

      {/* =========================================================================
          WORLD 02: BLOG WEBSITE (Full-Stack Node.js & EJS)
          ========================================================================= */}
      <article
        id="blogwebsite"
        className="project-world world-dark"
        data-world="blogwebsite"
      >
        <div className="world-kicker-wrap">
          <p className="world-kicker">02 / Full-Stack Node.js &amp; EJS</p>
          <span className="world-coming-soon-badge">
            <span aria-hidden="true" />
            COMING SOON
          </span>
        </div>

        <p className="world-description">
          Dynamic content publishing platform engineered with Express.js, custom EJS templates, parametric routing, and Lodash slug processing.
        </p>

        <h3 className="world-title">
          <a
            href="#blogwebsite"
            data-cursor="VIEW"
            onClick={(e) => {
              e.preventDefault();
              onExplore?.("BLOGWEBSITE");
            }}
          >
            BLOG
          </a>
        </h3>

        <div className="world-composition">
          {/* Terminal Window */}
          <div className="world-object blog-terminal">
            <svg viewBox="0 0 540 330" fill="none">
              <rect
                x="1"
                y="1"
                width="538"
                height="328"
                rx="6"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="1"
              />
              {/* Terminal Window Header */}
              <line x1="1" y1="42" x2="539" y2="42" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
              <circle cx="22" cy="22" r="4.5" fill="#ff5f56" />
              <circle cx="38" cy="22" r="4.5" fill="#ffbd2e" />
              <circle cx="54" cy="22" r="4.5" fill="#27c93f" />
              <text x="80" y="26" fill="currentColor" fontSize="11" fontFamily="monospace" opacity="0.7">
                bash - node app.js (Express v4.18)
              </text>

              {/* Console Logs */}
              <g fill="currentColor" fontSize="11" fontFamily="monospace">
                <text x="22" y="75" fill="var(--signal)">
                  $ node app.js
                </text>
                <text x="22" y="105" opacity="0.9">
                  [EXPRESS] Server running at http://localhost:3000
                </text>
                <text x="22" y="135" fill="green">
                  [ROUTER] GET /posts/:title -&gt; 200 OK (12ms)
                </text>
                <text x="22" y="165" opacity="0.9">
                  [PARAMS] Extracted slug: &quot;full-stack-architecture&quot;
                </text>
                <text x="22" y="195" fill="green">
                  [ROUTER] POST /compose -&gt; 302 Redirect to /
                </text>
                <text x="22" y="225" opacity="0.8">
                  [ENGINE] EJS template partials compiled: 4 views
                </text>
                <text x="22" y="255" fill="var(--signal)">
                  [STATUS] PRODUCTION DEPLOYMENT: COMING SOON
                </text>
              </g>

              {/* Cursor Blinker */}
              <rect x="22" y="280" width="8" height="15" fill="var(--signal)" opacity="0.9" />
              <text x="36" y="292" fill="currentColor" fontSize="11" fontFamily="monospace" opacity="0.7">
                listening for incoming client requests...
              </text>
            </svg>
          </div>

          {/* Article Preview Card */}
          <div className="world-object blog-article-card">
            <svg viewBox="0 0 360 300" fill="none">
              <rect
                x="1"
                y="1"
                width="358"
                height="298"
                rx="6"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="1"
              />
              <text x="24" y="36" fill="var(--signal)" fontSize="10" fontWeight="700" letterSpacing="0.08em">
                PUBLISHED POST
              </text>
              <line x1="24" y1="50" x2="336" y2="50" stroke="currentColor" opacity="0.25" />

              <text x="24" y="82" fill="currentColor" fontSize="15" fontWeight="800">
                Full-Stack Architecture
              </text>
              <text x="24" y="104" fill="currentColor" fontSize="15" fontWeight="800">
                With Node &amp; Express
              </text>

              <text x="24" y="132" fill="var(--signal)" fontSize="10">
                BY MO ZISHAN • 4 MIN READ
              </text>

              <text x="24" y="166" fill="currentColor" fontSize="11" opacity="0.8">
                How we architect parametric routes,
              </text>
              <text x="24" y="188" fill="currentColor" fontSize="11" opacity="0.8">
                manage form serialization, and render
              </text>
              <text x="24" y="210" fill="currentColor" fontSize="11" opacity="0.8">
                dynamic EJS views with high speed...
              </text>

              <line x1="24" y1="242" x2="336" y2="242" stroke="currentColor" opacity="0.25" />
              <text x="24" y="272" fill="currentColor" fontSize="10" opacity="0.6">
                VIEWS: 1,840
              </text>
              <text x="336" y="272" textAnchor="end" fill="var(--signal)" fontSize="10" fontWeight="700">
                COMING SOON
              </text>
            </svg>
          </div>
        </div>

        <a
          href="#blogwebsite"
          className="world-link"
          data-cursor="VIEW"
          onClick={(e) => {
            e.preventDefault();
            onExplore?.("BLOGWEBSITE");
          }}
        >
          EXPLORE PROJECT (COMING SOON) <span>→</span>
        </a>
      </article>

      {/* =========================================================================
          WORLD 03: WEATHER PROJECT (REST API & Live Weather Portal)
          ========================================================================= */}
      <article
        id="weather"
        className="project-world world-light"
        data-world="weather"
      >
        <div className="world-kicker-wrap">
          <p className="world-kicker">03 / REST API &amp; Live Weather Portal</p>
          <span className="world-coming-soon-badge">
            <span aria-hidden="true" />
            COMING SOON
          </span>
        </div>

        <p className="world-description">
          Real-time climate tracking web app integrating OpenWeatherMap API, dynamic meteorological metric conversion, and asynchronous response caching.
        </p>

        <h3 className="world-title">
          <a
            href="#weather"
            data-cursor="VIEW"
            onClick={(e) => {
              e.preventDefault();
              onExplore?.("WEATHER");
            }}
          >
            WEATHER
          </a>
        </h3>

        <div className="world-composition">
          {/* Main Weather Card */}
          <div className="world-object weather-main-card">
            <svg viewBox="0 0 540 330" fill="none">
              <rect
                x="1"
                y="1"
                width="538"
                height="328"
                rx="6"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line x1="1" y1="48" x2="539" y2="48" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />

              <circle cx="28" cy="24" r="5" fill="var(--signal)" />
              <text x="44" y="28" fill="currentColor" fontSize="12" fontWeight="700" letterSpacing="0.08em">
                LIVE METEOROLOGY // OPENWEATHERMAP
              </text>
              <text x="510" y="28" textAnchor="end" fill="var(--signal)" fontSize="10" fontWeight="600">
                REST API v2.5
              </text>

              {/* City and Temp */}
              <text x="28" y="95" fill="currentColor" fontSize="24" fontWeight="850">
                TOKYO, JAPAN
              </text>
              <text x="28" y="120" fill="currentColor" fontSize="12" opacity="0.6">
                LAT: 35.6762° N // LON: 139.6503° E
              </text>

              <text x="28" y="195" fill="currentColor" fontSize="62" fontWeight="900" letterSpacing="-0.04em">
                {isCelsius ? "24°C" : "75°F"}
              </text>
              <text x="210" y="165" fill="var(--signal)" fontSize="18" fontWeight="700">
                CLEAR SKY ☀️
              </text>
              <text x="210" y="192" fill="currentColor" fontSize="12" opacity="0.8">
                AIR QUALITY INDEX: 94 (OPTIMAL)
              </text>

              <line x1="28" y1="235" x2="512" y2="235" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />

              {/* Weather Indicators */}
              <text x="28" y="270" fontSize="11" fill="currentColor" opacity="0.6">HUMIDITY</text>
              <text x="28" y="295" fontSize="14" fontWeight="700" fill="currentColor">48%</text>

              <text x="160" y="270" fontSize="11" fill="currentColor" opacity="0.6">WIND SPEED</text>
              <text x="160" y="295" fontSize="14" fontWeight="700" fill="currentColor">12 KM/H</text>

              <text x="310" y="270" fontSize="11" fill="currentColor" opacity="0.6">PRESSURE</text>
              <text x="310" y="295" fontSize="14" fontWeight="700" fill="currentColor">1014 hPa</text>

              <text x="512" y="292" textAnchor="end" fill="var(--signal)" fontSize="11" fontWeight="700">
                COMING SOON
              </text>
            </svg>
          </div>

          {/* API Payload Inspection Card */}
          <div className="world-object weather-api-card">
            <svg viewBox="0 0 360 260" fill="none">
              <rect
                x="1"
                y="1"
                width="358"
                height="258"
                rx="6"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="1"
              />
              <text x="20" y="30" fill="var(--signal)" fontSize="10" fontWeight="700" letterSpacing="0.08em">
                API REQUEST PAYLOAD
              </text>
              <line x1="20" y1="44" x2="340" y2="44" stroke="currentColor" opacity="0.25" />

              <g fill="currentColor" fontSize="11" fontFamily="monospace">
                <text x="20" y="75" fill="green">GET /data/2.5/weather</text>
                <text x="20" y="100" opacity="0.8">Host: api.openweathermap.org</text>
                <text x="20" y="125" opacity="0.8">Query: ?q=Tokyo&amp;units=metric</text>
                <text x="20" y="155" fill="var(--signal)">HTTP/1.1 200 OK</text>
                <text x="20" y="180" opacity="0.8">Latency: 84ms</text>
                <text x="20" y="205" opacity="0.8">Cache-Control: no-cache</text>
                <text x="20" y="235" fill="var(--signal)" fontWeight="700">
                  STATUS: COMING SOON V2
                </text>
              </g>
            </svg>
          </div>
        </div>

        <a
          href="#weather"
          className="world-link"
          data-cursor="VIEW"
          onClick={(e) => {
            e.preventDefault();
            onExplore?.("WEATHER");
          }}
        >
          EXPLORE PROJECT (COMING SOON) <span>→</span>
        </a>
      </article>

      {/* =========================================================================
          WORLD 04: TODOLIST PRO (Productivity & List Engine)
          ========================================================================= */}
      <article
        id="todolist"
        className="project-world world-dark"
        data-world="todolist"
      >
        <div className="world-kicker-wrap">
          <p className="world-kicker">04 / Productivity &amp; List Engine</p>
          <span className="world-coming-soon-badge">
            <span aria-hidden="true" />
            COMING SOON
          </span>
        </div>

        <p className="world-description">
          Daily task scheduler with dynamic list routing, custom date engine modules, and responsive form submission pipelines.
        </p>

        <h3 className="world-title">
          <a
            href="#todolist"
            data-cursor="VIEW"
            onClick={(e) => {
              e.preventDefault();
              onExplore?.("TODOLIST");
            }}
          >
            TODOLIST
          </a>
        </h3>

        <div className="world-composition">
          {/* Main Todo Card */}
          <div className="world-object todo-main-card">
            <svg viewBox="0 0 540 330" fill="none">
              <rect
                x="1"
                y="1"
                width="538"
                height="328"
                rx="6"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line x1="1" y1="52" x2="539" y2="52" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />

              {/* Date Engine Header */}
              <circle cx="28" cy="26" r="5" fill="var(--signal)" />
              <text x="44" y="30" fill="currentColor" fontSize="12" fontWeight="700" letterSpacing="0.08em">
                TODOLIST // DATE MODULE: date.getDay()
              </text>
              <text x="510" y="30" textAnchor="end" fill="var(--signal)" fontSize="11" fontWeight="600">
                OCTOBER 30
              </text>

              {/* Interactive tasks list representation */}
              {todoTasks.map((task, i) => (
                <g key={task.id} transform={`translate(28, ${85 + i * 40})`} style={{ cursor: "pointer" }} onClick={() => toggleTodo(task.id)}>
                  <rect
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                    rx="3"
                    fill={task.done ? "var(--signal)" : "transparent"}
                    stroke={task.done ? "var(--signal)" : "currentColor"}
                    strokeWidth="1.2"
                  />
                  {task.done && (
                    <path
                      d="M4 9 L7 13 L14 5"
                      stroke="var(--black)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  )}
                  <text
                    x="30"
                    y="14"
                    fill="currentColor"
                    fontSize="13"
                    style={{ textDecoration: task.done ? "line-through" : "none", opacity: task.done ? 0.6 : 1 }}
                  >
                    {task.text}
                  </text>
                </g>
              ))}

              {/* Form Input Mockup */}
              <line x1="28" y1="260" x2="512" y2="260" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
              <rect x="28" y="278" width="370" height="34" rx="3" fill="rgba(255, 255, 255, 0.04)" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
              <text x="42" y="300" fill="currentColor" fontSize="12" opacity="0.5">
                + Add new item and submit...
              </text>
              <rect x="410" y="278" width="102" height="34" rx="3" fill="var(--signal)" />
              <text x="461" y="299" textAnchor="middle" fill="var(--black)" fontSize="11" fontWeight="700">
                ADD TASK
              </text>
            </svg>
          </div>

          {/* Stats Card */}
          <div className="world-object todo-stats-card">
            <svg viewBox="0 0 340 240" fill="none">
              <rect
                x="1"
                y="1"
                width="338"
                height="238"
                rx="6"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="1"
              />
              <text x="24" y="32" fill="var(--signal)" fontSize="10" fontWeight="700" letterSpacing="0.08em">
                ENGINE ARCHITECTURE
              </text>
              <line x1="24" y1="46" x2="316" y2="46" stroke="currentColor" opacity="0.25" />

              <text x="24" y="80" fill="currentColor" fontSize="12" fontWeight="700">
                DATE ENGINE:
              </text>
              <text x="24" y="102" fill="currentColor" fontSize="11" opacity="0.8">
                Custom date.js module exports
              </text>

              <text x="24" y="136" fill="currentColor" fontSize="12" fontWeight="700">
                DYNAMIC ROUTING:
              </text>
              <text x="24" y="158" fill="currentColor" fontSize="11" opacity="0.8">
                app.get(&quot;/:customListName&quot;)
              </text>

              <line x1="24" y1="184" x2="316" y2="184" stroke="currentColor" opacity="0.25" />
              <text x="24" y="214" fill="var(--signal)" fontSize="11" fontWeight="700">
                COMING SOON // PRODUCTION V2
              </text>
            </svg>
          </div>
        </div>

        <a
          href="#todolist"
          className="world-link"
          data-cursor="VIEW"
          onClick={(e) => {
            e.preventDefault();
            onExplore?.("TODOLIST");
          }}
        >
          EXPLORE PROJECT (COMING SOON) <span>→</span>
        </a>
      </article>

      {/* =========================================================================
          WORLD 05: NEWSLETTER (Email Marketing & API Integration)
          ========================================================================= */}
      <article
        id="newsletter"
        className="project-world world-light"
        data-world="newsletter"
      >
        <div className="world-kicker-wrap">
          <p className="world-kicker">05 / Email Marketing &amp; API Integration</p>
          <span className="world-coming-soon-badge">
            <span aria-hidden="true" />
            COMING SOON
          </span>
        </div>

        <p className="world-description">
          Audience subscription web platform connected to Mailchimp API with interactive client validation and automated response webhooks.
        </p>

        <h3 className="world-title">
          <a
            href="#newsletter"
            data-cursor="VIEW"
            onClick={(e) => {
              e.preventDefault();
              onExplore?.("NEWSLETTER");
            }}
          >
            NEWSLETTER
          </a>
        </h3>

        <div className="world-composition">
          {/* Main Newsletter Form Card */}
          <div className="world-object newsletter-main-card">
            <svg viewBox="0 0 540 330" fill="none">
              <rect
                x="1"
                y="1"
                width="538"
                height="328"
                rx="6"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line x1="1" y1="48" x2="539" y2="48" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />

              <circle cx="28" cy="24" r="5" fill="var(--signal)" />
              <text x="44" y="28" fill="currentColor" fontSize="12" fontWeight="700" letterSpacing="0.08em">
                MAILCHIMP API v3.0 // NEWSLETTER PORTAL
              </text>
              <text x="510" y="28" textAnchor="end" fill="var(--signal)" fontSize="10" fontWeight="600">
                HTTPS GATEWAY
              </text>

              <text x="28" y="85" fill="currentColor" fontSize="18" fontWeight="800">
                Developer Newsletter Signup Pipeline
              </text>
              <text x="28" y="110" fill="currentColor" fontSize="12" opacity="0.7">
                Endpoint: POST /signup -&gt; Mailchimp Audience List ID: #8b3c9a
              </text>

              {/* Form Input Mockups */}
              <rect x="28" y="132" width="235" height="36" rx="3" fill="rgba(0, 0, 0, 0.03)" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <text x="40" y="155" fill="currentColor" fontSize="11" opacity="0.7">
                First Name: Mo
              </text>

              <rect x="277" y="132" width="235" height="36" rx="3" fill="rgba(0, 0, 0, 0.03)" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <text x="289" y="155" fill="currentColor" fontSize="11" opacity="0.7">
                Last Name: Zishan
              </text>

              <rect x="28" y="180" width="484" height="36" rx="3" fill="rgba(0, 0, 0, 0.03)" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <text x="40" y="203" fill="currentColor" fontSize="11" opacity="0.7">
                Email Address: zishan.developer@gmail.com
              </text>

              {/* Submit Button */}
              <rect
                x="28"
                y="232"
                width="484"
                height="40"
                rx="3"
                fill={isSubscribed ? "#27c93f" : "var(--signal)"}
                style={{ cursor: "pointer" }}
                onClick={() => setIsSubscribed(!isSubscribed)}
              />
              <text
                x="270"
                y="257"
                textAnchor="middle"
                fill="var(--black)"
                fontSize="12"
                fontWeight="700"
                letterSpacing="0.06em"
                style={{ cursor: "pointer" }}
                onClick={() => setIsSubscribed(!isSubscribed)}
              >
                {isSubscribed ? "✓ SUBSCRIBED SUCCESSFULLY (HTTP 200)" : "SUBSCRIBE TO NEWSLETTER →"}
              </text>

              {/* Footer */}
              <text x="28" y="302" fill="currentColor" fontSize="10" opacity="0.6">
                AUTOMATED RESPONSE: success.html &amp; failure.html
              </text>
              <text x="512" y="302" textAnchor="end" fill="var(--signal)" fontSize="11" fontWeight="700">
                COMING SOON
              </text>
            </svg>
          </div>

          {/* Response & Delivery Card */}
          <div className="world-object newsletter-response-card">
            <svg viewBox="0 0 350 250" fill="none">
              <rect
                x="1"
                y="1"
                width="348"
                height="248"
                rx="6"
                fill="var(--world-bg)"
                stroke="currentColor"
                strokeWidth="1"
              />
              <text x="22" y="32" fill="var(--signal)" fontSize="10" fontWeight="700" letterSpacing="0.08em">
                API GATEWAY STATUS
              </text>
              <line x1="22" y1="46" x2="328" y2="46" stroke="currentColor" opacity="0.25" />

              <g fill="currentColor" fontSize="11" fontFamily="monospace">
                <text x="22" y="78" fill="green">POST /signup -&gt; 200 OK</text>
                <text x="22" y="104" opacity="0.8">Mailchimp Server: us21</text>
                <text x="22" y="130" opacity="0.8">Deliverability: 99.8%</text>
                <text x="22" y="156" opacity="0.8">Double Opt-In: Enabled</text>
                <text x="22" y="184" fill="var(--signal)">Webhook: Active Trigger</text>
                <line x1="22" y1="202" x2="328" y2="202" stroke="currentColor" opacity="0.25" />
                <text x="22" y="228" fill="var(--signal)" fontWeight="700">
                  COMING SOON // PRODUCTION V2
                </text>
              </g>
            </svg>
          </div>
        </div>

        <a
          href="#newsletter"
          className="world-link"
          data-cursor="VIEW"
          onClick={(e) => {
            e.preventDefault();
            onExplore?.("NEWSLETTER");
          }}
        >
          EXPLORE PROJECT (COMING SOON) <span>→</span>
        </a>
      </article>
    </div>
  );
}
