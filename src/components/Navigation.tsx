import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {Search} from "lucide-react";

type NavigationProps = {
  onCommandOpen: () => void;
};

const Navigation = ({onCommandOpen}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold">
            vimalyadavkr<span className="text-gradient">.me</span>
          </a>
          
          <button
            type="button"
            onClick={onCommandOpen}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-secondary/70 px-3 text-sm text-muted-foreground transition-colors hover:border-primary/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Open command palette"
          >
            <Search size={16}/>
            <span className="hidden sm:inline">Ctrl K</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
