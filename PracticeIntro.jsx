import { useEffect, useRef } from "react";

export default function PracticeIntro({ scrollProgress }) {
  const sectionFactor = Math.min(Math.max((scrollProgress - 0.12) / 0.14, 0), 1);
  const pathRef = useRef(null);
  const headDotRef = useRef(null);
  const headRingRef = useRef(null);

  const zigzagPath =
    "M 180 70 C 260 70 280 140 220 180 C 160 220 120 230 180 280 C 240 330 290 350 200 420 C 120 480 200 520 280 520";

  useEffect(() => {
    if (!pathRef.current || !headDotRef.current || !headRingRef.current) return;
    try {
      const len = pathRef.current.getTotalLength();
      const currLen = sectionFactor * len;
      const pt = pathRef.current.getPointAtLength(currLen);
      headDotRef.current.setAttribute("cx", pt.x);
      headDotRef.current.setAttribute("cy", pt.y);
      headRingRef.current.setAttribute("cx", pt.x);
      headRingRef.current.setAttribute("cy", pt.y);
    } catch {
      // ignore
    }
  }, [sectionFactor]);

  const isFrontendReached = sectionFactor >= 0.15;
  const isBackendReached = sectionFactor >= 0.55;
  const isInfraReached = sectionFactor >= 0.9;

  return (
    <section className="practice-intro" id="work">
      <div className="practice-copy">
        <h2>
          <span>React UIs.</span>
          <span>Node.js APIs.</span>
          <span>Deployed to</span>
          <span>production.</span>
        </h2>
        <p className="practice-description">
          I craft pixel-precise React interfaces, architect resilient Express &amp;
          Node.js backend services, and wire them to live production cloud
          infrastructure — end-to-end web development, fully owned.
        </p>
      </div>

      <div className="practice-drawing-container">
        <svg
          className="practice-drawing-svg"
          viewBox="0 0 360 600"
          aria-hidden="true"
        >
          {/* Faint structural guide lines */}
          <line
            x1="180"
            y1="40"
            x2="180"
            y2="560"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            opacity="0.15"
          />

          {/* Background track path */}
          <path
            d={zigzagPath}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.12"
          />

          {/* Active drawing thread path */}
          <path
            ref={pathRef}
            d={zigzagPath}
            className="thread-path"
            style={{
              strokeDasharray: 1200,
              strokeDashoffset: `${Math.max(0, (1 - sectionFactor) * 1200)}`,
            }}
          />

          {/* Stage 1: FRONTEND CRAFT */}
          <g transform="translate(180, 70)">
            <circle
              r={isFrontendReached ? "12" : "8"}
              fill="none"
              stroke={isFrontendReached ? "var(--signal)" : "currentColor"}
              strokeWidth="1.5"
              style={{ transition: "all 0.3s ease" }}
            />
            <circle
              r="4"
              fill={isFrontendReached ? "var(--signal)" : "currentColor"}
              opacity={isFrontendReached ? "1" : "0.3"}
            />
          </g>
          <text
            x="210"
            y="75"
            className={`practice-node-label ${isFrontendReached ? "active" : ""}`}
          >
            FRONTEND
          </text>

          {/* Stage 2: BACKEND & APIS */}
          <g transform="translate(180, 280)">
            <circle
              r={isBackendReached ? "12" : "8"}
              fill="none"
              stroke={isBackendReached ? "var(--signal)" : "currentColor"}
              strokeWidth="1.5"
              style={{ transition: "all 0.3s ease" }}
            />
            <circle
              r="4"
              fill={isBackendReached ? "var(--signal)" : "currentColor"}
              opacity={isBackendReached ? "1" : "0.3"}
            />
          </g>
          <text
            x="210"
            y="285"
            className={`practice-node-label ${isBackendReached ? "active" : ""}`}
          >
            API &amp; BACKEND
          </text>

          {/* Stage 3: CLOUD & INFRA */}
          <g transform="translate(280, 520)">
            <circle
              r={isInfraReached ? "12" : "8"}
              fill="none"
              stroke={isInfraReached ? "var(--signal)" : "currentColor"}
              strokeWidth="1.5"
              style={{ transition: "all 0.3s ease" }}
            />
            <circle
              r="4"
              fill={isInfraReached ? "var(--signal)" : "currentColor"}
              opacity={isInfraReached ? "1" : "0.3"}
            />
          </g>
          <text
            x="210"
            y="545"
            className={`practice-node-label ${isInfraReached ? "active" : ""}`}
          >
            CLOUD &amp; INFRA
          </text>

          {/* Glowing head bead moving along the zigzag */}
          <g
            style={{
              opacity: sectionFactor > 0.05 && sectionFactor < 0.98 ? 1 : 0,
              transition: "opacity 0.2s ease",
            }}
          >
            <circle
              ref={headDotRef}
              cx="180"
              cy="70"
              r="4.5"
              className="thread-head-dot"
            />
            <circle
              ref={headRingRef}
              cx="180"
              cy="70"
              r="11"
              className="thread-head-ring"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
