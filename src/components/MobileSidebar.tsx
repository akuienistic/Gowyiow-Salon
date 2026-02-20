import { useEffect, useRef } from "react";
import { X, Calendar } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onNavClick: (href: string) => void;
}

const MobileSidebar = ({ open, onClose, navItems, onNavClick }: MobileSidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Focus trap
  useEffect(() => {
    if (open && sidebarRef.current) {
      const focusable = sidebarRef.current.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])');
      focusable[0]?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Navigation menu">
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="absolute top-0 right-0 h-full w-[50vw] min-w-[260px] max-w-[320px] bg-card shadow-2xl animate-slide-in-right flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-heading text-lg font-bold text-foreground">Gowyiow</span>
          <button onClick={onClose} className="p-2 text-foreground/70 hover:text-foreground" aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-4 px-2" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(item.href);
              }}
              className="flex items-center gap-3 px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <a
            href="https://wa.me/250928882267?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-cta text-cta-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <Calendar className="w-5 h-5" />
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
