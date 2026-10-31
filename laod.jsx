
import { useEffect, useRef, useState } from "react";
import "./load_style.css";

function Load() {

    const [percentage, setPercentage] = useState(0);
    const [loadingDone, setLoadingDone] = useState(false);
    const [slideUp, setSlideUp] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const progressRef = useRef(null);
    const squareRef = useRef(null);

    useEffect(() => {
        const radius = 100;
        const center = 110;
        const circumference = 2 * Math.PI * radius;
        const duration = 4000;

        const progress = progressRef.current;
        const square = squareRef.current;

        if (!progress || !square) return;

        progress.style.strokeDasharray = circumference;
        progress.style.strokeDashoffset = circumference;

        let startTime = null;
        let animationFrame;
        let timeoutId;

        function animate(now) {
            if (startTime === null) startTime = now;

            const elapsed = now - startTime;
            const value = Math.min(
                100,
                Math.floor((elapsed / duration) * 100)
            );

            setPercentage(value);

            progress.style.strokeDashoffset =
                circumference * (1 - value / 100);

            const angle =
                (value / 100) * 2 * Math.PI - Math.PI / 2;

            square.style.left =
                `${center + radius * Math.cos(angle)}px`;

            square.style.top =
                `${center + radius * Math.sin(angle)}px`;

            if (value >= 100) {
                timeoutId = setTimeout(() => {
                    setLoadingDone(true);
                    setSlideUp(true);
                }, 300);
                return;
            }

            animationFrame = requestAnimationFrame(animate);
        }

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <main className="app">
            {/* Portfolio pages */}
            <div
                className={`pages-track ${currentPage === 1 ? "page-two-active" : ""
                    }`}
            >
                {/* PAGE 1: ABOUT ME */}
                <section className="portfolio-page about-page">
                    <div className="about-layout">
                        <div className="portrait-side">
                            <div className="portrait-frame">
                                <img
                                    src="/profile.jpg"
                                    alt="My portrait"
                                    className="profile-image"
                                />
                                <span className="portrait-number">01</span>
                            </div>
                        </div>

                        <div className="info-side">
                            <header className="top-bar">
                                <span>PERSONAL PORTFOLIO</span>
                                <span className="availability">
                                    <span className="status-dot" />
                                    AVAILABLE TO EXPLORE
                                </span>
                            </header>

                            <div className="intro">
                                <p className="eyebrow">HELLO, WORLD!</p>

                                <h1>
                                    I'm <span>Mo Zishan</span>
                                </h1>

                                <h2>Student · Quick Learner · Developer</h2>

                                <p className="description">
                                    Welcome to my personal space on the internet.
                                    I'm passionate about learning new things,
                                    creating interesting projects, and turning
                                    ideas into reality.
                                </p>

                                <div className="info-divider" />

                                <div className="details-grid">
                                    <div>
                                        <p className="detail-label">ABOUT ME</p>
                                        <p className="detail-value">
                                            A curious mind that loves to create.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="detail-label">MY INTERESTS</p>
                                        <p className="detail-value">
                                            Coding, design & technology.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="detail-label">CURRENTLY</p>
                                        <p className="detail-value">
                                            Learning and building new things.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="detail-label">MY GOAL</p>
                                        <p className="detail-value">
                                            To build things that matter.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <footer className="page-footer">
                                <span>GET TO KNOW ME</span>

                                <button
                                    className="next-button"
                                    onClick={() => setCurrentPage(1)}
                                >
                                    NEXT PAGE
                                    <span className="button-arrow">→</span>
                                </button>
                            </footer>
                        </div>
                    </div>
                </section>

                {/* PAGE 2: MY WORK */}
                <section className="portfolio-page work-page">
                    <div className="work-content">
                        <header className="top-bar">
                            <span>PERSONAL PORTFOLIO</span>
                            <span>02 / 02</span>
                        </header>

                        <div className="work-heading">
                            <p className="eyebrow">A LITTLE MORE ABOUT ME</p>
                            <h1>
                                Things I <span>Create.</span>
                            </h1>
                            <p className="description">
                                Here are the areas I enjoy exploring and the
                                kinds of projects I want to build.
                            </p>
                        </div>

                        <div className="project-grid">
                            <article className="project-card">
                                <span className="project-number">01</span>
                                <h2>Web Development</h2>
                                <p>
                                    Creating websites with React, JavaScript,
                                    HTML and CSS.
                                </p>
                                <span className="project-symbol">↗</span>
                            </article>

                            <article className="project-card">
                                <span className="project-number">02</span>
                                <h2>Creative Design</h2>
                                <p>
                                    Exploring layouts, animations, visual
                                    storytelling and user experience.
                                </p>
                                <span className="project-symbol">✳</span>
                            </article>

                            <article className="project-card">
                                <span className="project-number">03</span>
                                <h2>New Ideas</h2>
                                <p>
                                    Experimenting with technology and turning
                                    ideas into useful projects.
                                </p>
                                <span className="project-symbol">✦</span>
                            </article>
                        </div>

                        <footer className="page-footer">
                            <button
                                className="back-button"
                                onClick={() => setCurrentPage(0)}
                            >
                                <span>←</span> BACK
                            </button>

                            <span className="footer-note">
                                THANKS FOR VISITING
                            </span>
                        </footer>
                    </div>
                </section>
            </div>

            {/* LOADING SCREEN */}
            <div
                className={`loadingPage ${slideUp ? "slide-up" : ""}`}
            >
                <div className="loader">
                    <svg viewBox="0 0 220 220">
                        <circle
                            className="track"
                            cx="110"
                            cy="110"
                            r="100"
                        />

                        <circle
                            className="progress"
                            ref={progressRef}
                            cx="110"
                            cy="110"
                            r="100"
                        />
                    </svg>

                    <div className="square" ref={squareRef} />

                    <div className="percentage">{percentage}%</div>

                    <div className="label">LOADING</div>
                </div>
            </div>
        </main>
    );
}

export default Load;
