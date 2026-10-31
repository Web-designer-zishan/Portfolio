import { useEffect, useRef, useState } from "react";

export default function GlobalThread({ scrollProgress }) {
  const [docHeight, setDocHeight] = useState(6000);
  const pathRef = useRef(null);
  const headDotRef = useRef(null);
  const headRingRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      setDocHeight(document.documentElement.scrollHeight || 6000);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const pathData = `
    M 720 0
    C 850 400 950 800 720 1200
    C 450 1600 350 2000 720 2400
    C 1050 2800 1100 3200 720 3600
    C 380 4000 350 4400 720 4800
    C 1050 5200 850 5600 720 ${docHeight}
  `;

  useEffect(() => {
    if (!pathRef.current || !headDotRef.current || !headRingRef.current) return;
    try {
      const totalLen = pathRef.current.getTotalLength();
      const currentLen = scrollProgress * totalLen;
      const pt = pathRef.current.getPointAtLength(currentLen);
      headDotRef.current.setAttribute("cx", pt.x);
      headDotRef.current.setAttribute("cy", pt.y);
      headRingRef.current.setAttribute("cx", pt.x);
      headRingRef.current.setAttribute("cy", pt.y);
    } catch {
      // ignore
    }
  }, [scrollProgress, docHeight]);

  const showHead = scrollProgress > 0.01 && scrollProgress < 0.99;

  return (
    <div className="global-thread-container" aria-hidden="true">
      <svg
        className="thread-svg"
        viewBox={`0 0 1440 ${docHeight}`}
        preserveAspectRatio="none"
      >
        {/* Subtle background guide path */}
        <path
          d={pathData}
          fill="none"
          stroke="var(--signal)"
          strokeWidth="1"
          opacity="0.08"
          strokeDasharray="6 6"
        />

        {/* Dynamic drawn thread path */}
        <path
          ref={pathRef}
          d={pathData}
          className="thread-path"
          style={{
            strokeDasharray: docHeight * 1.5,
            strokeDashoffset: `${Math.max(
              0,
              (1 - scrollProgress) * docHeight * 1.5
            )}`,
          }}
        />

        {/* Glowing Head Dot & Pulsing Head Ring */}
        <g style={{ opacity: showHead ? 1 : 0, transition: "opacity 0.2s ease" }}>
          <circle
            ref={headDotRef}
            cx="720"
            cy="100"
            r="4.5"
            className="thread-head-dot"
          />
          <circle
            ref={headRingRef}
            cx="720"
            cy="100"
            r="12"
            className="thread-head-ring"
          />
        </g>
      </svg>
    </div>
  );
}
