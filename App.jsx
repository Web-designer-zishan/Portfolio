import { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
import SignatureLoader from "./SignatureLoader";
import Navbar from "./Navbar";
import GlobalThread from "./GlobalThread";
import Hero from "./Hero";
import PracticeIntro from "./PracticeIntro";
import Capabilities from "./Capabilities";
import ProjectWorlds from "./ProjectWorlds";
import AboutSection from "./AboutSection";
import ContactFinale from "./ContactFinale";
import ProjectModal from "./ProjectModal";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    let animId;
    let targetProgress = 0;
    let currentProgress = 0;
    let isRunning = false;

    const updatePhysics = () => {
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0002) {
        currentProgress += diff * 0.18;
        setScrollProgress(currentProgress);
        animId = requestAnimationFrame(updatePhysics);
      } else {
        currentProgress = targetProgress;
        setScrollProgress(currentProgress);
        isRunning = false;
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      targetProgress = totalHeight > 0 ? Math.min(Math.max(scrollY / totalHeight, 0), 1) : 0;
      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(updatePhysics);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="portfolio-root">
      {/* Custom magnetic dynamic cursor */}
      <CustomCursor />

      {/* Signature drawing intro loader */}
      {isLoading && (
        <SignatureLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* Top Navbar */}
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />

      {/* Global vermilion continuous thread layer */}
      <GlobalThread scrollProgress={scrollProgress} />

      {/* Main Page Content */}
      <main id="main-content">
        <Hero scrollProgress={scrollProgress} />
        <PracticeIntro scrollProgress={scrollProgress} />
        <Capabilities scrollProgress={scrollProgress} />
        <ProjectWorlds
          scrollProgress={scrollProgress}
          onExplore={(proj) => setSelectedProject(proj)}
        />
        <AboutSection scrollProgress={scrollProgress} />
        <ContactFinale
          isModalOpen={isContactModalOpen}
          setIsModalOpen={setIsContactModalOpen}
        />
      </main>

      {/* Detailed Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}