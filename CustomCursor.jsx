import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [label, setLabel] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false);

      const target = e.target.closest("[data-cursor], a, button, [role='button']");
      if (target) {
        const cursorLabel = target.getAttribute("data-cursor") || "";
        setLabel((prev) => (prev !== cursorLabel ? cursorLabel : prev));
        setIsActive(true);
      } else {
        setLabel((prev) => (prev !== "" ? "" : prev));
        setIsActive(false);
      }
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    const loop = () => {
      currentX += (mouseX - currentX) * 0.22;
      currentY += (mouseY - currentY) * 0.22;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []); // Empty dependency array: runs once!

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isActive ? "is-active" : ""} ${
        isHidden ? "is-hidden" : ""
      }`}
      data-label={label}
      aria-hidden="true"
    />
  );
}
