import { useState, useEffect, useCallback } from "react";
import { Menu, X, Home, Sparkles, Calendar, Image, Phone, Info } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Services", href: "#services", icon: Sparkles },
  { label: "Gallery", href: "#gallery", icon: Image },
  { label: "About", href: "#about", icon: Info },
  { label: "Contact", href: "#contact", icon: Phone },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setSidebarOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="font-heading text-xl md:text-2xl font-bold text-cta-foreground tracking-tight"
          >
            Gowyiow
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white hover:text-primary rounded-md transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/250928882267?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold bg-cta text-cta-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navItems={navItems}
        onNavClick={handleNavClick}
      />
    </>
  );
};

export default Header;
