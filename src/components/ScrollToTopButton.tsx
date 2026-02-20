import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [positionY, setPositionY] = useState(0);
  const prevScroll = useRef(0);

  useEffect(() => {
    const threshold = 100;
    const onScroll = () => {
      const current = window.scrollY;
      if (current > threshold) {
        setVisible(true);
      } else if (current < prevScroll.current) {
        setVisible(current > 0);
      } else if (current >= prevScroll.current) {
        setVisible(false);
      }
      prevScroll.current = current;

      // update vertical position to stay near bottom of content
      setPositionY(current + window.innerHeight - 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // initialize on mount
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{ position: "absolute", top: positionY + "px", right: "16px" }}
      className="z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
