import { useEffect, useRef } from "react";

export default function Hero({ scrollProgress }) {
  const calcPathRef = useRef(null);
  const headDotRef = useRef(null);
  const headRingRef = useRef(null);

  // Hero weave path segments that cross behind and in front of the letters
  const backPaths = [
    "M 120 160 C 280 160 380 280 460 330",
    "M 620 340 C 720 350 820 460 760 520",
    "M 560 540 C 440 540 380 620 440 680",
    "M 640 700 C 820 700 960 760 1060 840",
  ];

  const frontPaths = [
    "M 460 330 C 520 360 560 340 620 340",
    "M 760 520 C 700 560 620 550 560 540",
    "M 440 680 C 500 720 580 710 640 700",
  ];

  const fullHeroPath =
    "M 120 160 C 280 160 380 280 460 330 C 520 360 560 340 620 340 C 720 350 820 460 760 520 C 700 560 620 550 560 540 C 440 540 380 620 440 680 C 500 720 580 710 640 700 C 820 700 960 760 1060 840 C 1120 890 1180 940 1200 1020";

  useEffect(() => {
    if (!calcPathRef.current || !headDotRef.current || !headRingRef.current) return;
    try {
      const totalLen = calcPathRef.current.getTotalLength();
      const heroFactor = Math.min(Math.max(scrollProgress / 0.15, 0), 1);
      const currentLen = heroFactor * totalLen;
      const pt = calcPathRef.current.getPointAtLength(currentLen);

      headDotRef.current.setAttribute("cx", pt.x);
      headDotRef.current.setAttribute("cy", pt.y);
      headRingRef.current.setAttribute("cx", pt.x);
      headRingRef.current.setAttribute("cy", pt.y);
    } catch {
      // ignore
    }
  }, [scrollProgress]);

  const heroProgress = Math.min(Math.max(scrollProgress / 0.14, 0), 1);

  return (
    <section className="hero" id="hero">
      {/* Hidden calculation path */}
      <svg
        style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
        viewBox="0 0 1440 900"
      >
        <path ref={calcPathRef} d={fullHeroPath} />
      </svg>

      {/* BACK THREAD LAYER (Behind Letters) */}
      <svg
        className="hero-thread-layer hero-thread-back"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {backPaths.map((d, i) => (
          <path
            key={`back-${i}`}
            d={d}
            className="thread-path"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: `${Math.max(
                0,
                (1 - heroProgress * 1.3 + i * 0.15) * 2000
              )}`,
            }}
          />
        ))}

        {/* Origin dot */}
        <circle cx="120" cy="160" r="5" className="thread-head-dot" />
      </svg>

      {/* HERO HEADLINE COPY FOR WEB DEVELOPER */}
      <div className="hero-copy">
        <h1 className="hero-title" id="hero-title">
          <span className="hero-line">I DEVELOP</span>
          <span className="hero-line">WEB APPS</span>
          <span className="hero-line hero-line-last">THAT SCALE.</span>
        </h1>
      </div>

      {/* FRONT THREAD LAYER (In front of Letters) */}
      <svg
        className="hero-thread-layer hero-thread-front"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {frontPaths.map((d, i) => (
          <path
            key={`front-${i}`}
            d={d}
            className="thread-path"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: `${Math.max(
                0,
                (1 - heroProgress * 1.3 + (i + 0.5) * 0.15) * 2000
              )}`,
            }}
          />
        ))}

        {/* Moving glowing head bead and pulse ring */}
        <circle
          ref={headDotRef}
          cx="120"
          cy="160"
          r="5"
          className="thread-head-dot"
        />
        <circle
          ref={headRingRef}
          cx="120"
          cy="160"
          r="12"
          className="thread-head-ring"
        />
      </svg>

      {/* HERO FOOTER */}
      <div className="hero-footer">
        <div className="hero-support">
          <p>
            Full-stack web developer &amp; software engineer building
            high-performance React applications, resilient backend APIs, and
            kinetic, accessible user interfaces.
          </p>
        </div>

        <a
          href="#work"
          className="scroll-cue"
          data-cursor="FOLLOW"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          SCROLL TO FOLLOW THE THREAD
          <span className="scroll-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
