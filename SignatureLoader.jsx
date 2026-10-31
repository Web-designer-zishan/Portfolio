import { useEffect, useRef, useState } from "react";

export default function SignatureLoader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const svgRef = useRef(null);
  const penRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let animId;
    let startTime = null;
    let lastPercent = -1;
    const duration = 2400; // ms

    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll("path");
    const pathLengths = [];
    let totalLength = 0;

    paths.forEach((p) => {
      const len = p.getTotalLength();
      pathLengths.push(len);
      totalLength += len;
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.style.opacity = "1";
    });

    const animate = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentPct = Math.round(progress * 100);

      if (currentPct !== lastPercent) {
        lastPercent = currentPct;
        setPercent(currentPct);
        if (currentPct >= 75) setNameVisible(true);
      }

      // Animate stroke dashoffsets across sequence
      let targetDistance = progress * totalLength;
      let accumulated = 0;
      let penCoords = { x: 160, y: 508 };

      paths.forEach((p, idx) => {
        const pLen = pathLengths[idx];
        if (targetDistance <= accumulated) {
          p.style.strokeDashoffset = pLen;
        } else if (targetDistance >= accumulated + pLen) {
          p.style.strokeDashoffset = "0";
          if (idx === paths.length - 1 || targetDistance < accumulated + pLen) {
            const pt = p.getPointAtLength(pLen);
            penCoords = { x: pt.x, y: pt.y };
          }
        } else {
          const localDist = targetDistance - accumulated;
          p.style.strokeDashoffset = pLen - localDist;
          const pt = p.getPointAtLength(localDist);
          penCoords = { x: pt.x, y: pt.y };
        }
        accumulated += pLen;
      });

      if (penRef.current) {
        penRef.current.setAttribute("cx", penCoords.x);
        penRef.current.setAttribute("cy", penCoords.y);
        penRef.current.style.opacity = progress >= 0.99 ? "0" : "1";
      }

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onCompleteRef.current?.();
          }, 800);
        }, 300);
      }
    };

    animId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animId);
  }, []); // Run only once on mount

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onCompleteRef.current?.();
    }, 400);
  };

  return (
    <div
      className={`site-loader ${isExiting ? "is-exiting" : ""}`}
      role="status"
      aria-label="Opening portfolio"
    >
      <div className="loader-container">
        {/* Cursive Signature SVG — animated draw-on effect */}
        <svg
          ref={svgRef}
          className="loader-signature"
          viewBox="140 200 1400 420"
          aria-hidden="true"
        >
          {/* M */}
          <path d="M 160 508 C 197 508 234 490 271 444 C 298 398 326 288 363 242 C 381 219 400 232 390 288 L 363 508 C 381 416 423 297 482 269 C 510 255 528 288 515 352 L 492 508 C 505 416 547 306 602 297 C 634 292 648 324 634 389 L 611 508" />
          {/* o */}
          <path d="M 611 508 C 630 453 657 389 703 389 C 745 389 758 430 740 472 C 717 518 666 522 657 476 C 648 430 680 407 717 412 C 754 416 786 462 823 462" />
          {/* Z */}
          <path d="M 823 462 C 841 426 855 352 873 306 C 896 269 952 260 993 269 C 1021 278 1011 311 975 343 C 929 380 883 444 864 508 C 850 550 837 605 869 614 C 901 619 929 568 947 518 C 961 476 984 449 1007 449" />
          {/* i & s */}
          <path d="M 1007 449 C 1016 467 1025 490 1030 508 C 1034 513 1044 513 1048 499 C 1057 462 1076 435 1094 435 C 1113 435 1117 458 1108 481 C 1099 504 1076 508 1067 499 C 1071 485 1099 467 1126 462" />
          {/* h */}
          <path d="M 1126 462 C 1140 435 1159 324 1177 278 C 1191 251 1205 260 1195 301 L 1172 508 C 1186 462 1218 430 1241 430 C 1264 430 1274 458 1269 508" />
          {/* a & n */}
          <path d="M 1269 508 C 1278 467 1301 430 1329 430 C 1352 430 1356 458 1347 485 C 1338 513 1310 513 1306 490 C 1301 467 1315 444 1343 444 L 1356 508 C 1370 467 1389 444 1407 444 C 1425 444 1430 467 1425 508 C 1439 467 1458 444 1476 444 C 1499 444 1504 472 1494 513" />
          {/* Underline Flourish */}
          <path d="M 1494 513 C 1518 547 1528 575 1482 602 C 1362 648 1049 662 718 653 C 488 644 313 616 276 579 C 244 552 286 519 368 524 C 552 533 994 547 1491 538" />
          {/* Dot on i */}
          <path d="M 998 393 C 1002 384 1011 387 1010 398" />
          <circle
            ref={penRef}
            className="loader-pen"
            cx="160"
            cy="508"
            r="4.5"
          />
        </svg>

        {/* Printed name label — fades in once signature is ~75% drawn */}
        <div className={`loader-name-reveal ${nameVisible ? "is-visible" : ""}`}>
          <span className="loader-name-text">MO ZISHAN</span>
          <span className="loader-name-role">Full-Stack Web Developer</span>
        </div>

        <div className="loader-footer">
          <span>PORTFOLIO / 2026</span>
          <span className="loader-percent">{percent}%</span>
          <button
            type="button"
            className="loader-skip"
            onClick={handleSkip}
            data-cursor="ENTER"
          >
            SKIP
          </button>
        </div>
      </div>
    </div>
  );
}
