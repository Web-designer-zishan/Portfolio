export default function AboutSection({ scrollProgress }) {
  // Fingerprint scroll progress around 0.8 to 0.92
  const aboutProgress = Math.min(Math.max((scrollProgress - 0.78) / 0.14, 0), 1);

  // Concentric winding fingerprint paths
  const fingerprintRings = [
    "M 150 150 m -20, 0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0",
    "M 150 150 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0",
    "M 150 150 m -70, 0 a 70,70 0 1,0 140,0 a 70,70 0 1,0 -140,0",
    "M 150 150 m -95, 0 a 95,95 0 1,0 190,0 a 95,95 0 1,0 -190,0",
    "M 150 150 m -120, 0 a 120,120 0 1,0 240,0 a 120,120 0 1,0 -240,0",
  ];

  return (
    <section className="about-story" id="about">
      <div className="about-stage">
        <div className="about-intro">
          <h2>
            <span>EVERY WEB APP</span>
            <span>CARRIES AN</span>
            <span>ENGINEERING IMPRINT.</span>
          </h2>
          <p className="about-personal">
            I am a full-stack web developer passionate about bridging tactile, kinetic user interfaces with rock-solid, production-grade backend systems.
            <br /><br />
            Whether architecting high-performance React applications, designing resilient REST &amp; GraphQL APIs, or automating containerized CI/CD cloud pipelines, I build web software that feels alive, loads in milliseconds, and scales gracefully under load.
          </p>

          <div className="about-signature">
            <p className="about-name">MO ZISHAN.</p>
            <p className="about-role">Full-Stack Web Developer &amp; Systems Engineer</p>
          </div>
        </div>

        {/* Biometric Thread Fingerprint Graphic */}
        <div className="about-fingerprint-container">
          <svg
            className="about-fingerprint-svg"
            viewBox="0 0 300 300"
            role="img"
            aria-label="Continuous thread forming a human fingerprint imprint"
          >
            {/* Guide tracks */}
            {fingerprintRings.map((d, i) => (
              <path
                key={`guide-${i}`}
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.1"
              />
            ))}

            {/* Animated drawing rings */}
            {fingerprintRings.map((d, i) => (
              <path
                key={`ring-${i}`}
                d={d}
                fill="none"
                stroke="var(--signal)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 900,
                  strokeDashoffset: `${Math.max(
                    0,
                    (1 - aboutProgress * 1.2 + i * 0.12) * 900
                  )}`,
                  transition: "stroke-dashoffset 0.1s linear",
                }}
              />
            ))}

            {/* Center biometric core */}
            <circle
              cx="150"
              cy="150"
              r="4"
              fill="var(--signal)"
              style={{
                filter: "drop-shadow(0 0 8px var(--signal))",
                opacity: aboutProgress > 0.1 ? 1 : 0.2,
              }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
