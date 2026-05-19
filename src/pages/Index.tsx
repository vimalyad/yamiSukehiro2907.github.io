import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SystemBackdrop from "@/components/SystemBackdrop";
import {lazy, Suspense, useEffect, useState} from "react";

const CommandPalette = lazy(() => import("@/components/CommandPalette"));

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();
  return target.isContentEditable || tagName === "input" || tagName === "textarea" || tagName === "select";
};

const Index = () => {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) {
        return;
      }

      const isCommandK = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
      const isSlash = event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey;

      if (isCommandK || isSlash) {
        event.preventDefault();
        setCommandOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SystemBackdrop />
      <Navigation onCommandOpen={() => setCommandOpen(true)} />
      {commandOpen && (
        <Suspense fallback={null}>
          <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
        </Suspense>
      )}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <footer className="relative z-10 bg-card/50 border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Vimal Kumar Yadav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
