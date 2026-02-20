import { Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gowyiow Skincare & Salon interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      <div className="container relative z-10 py-32 md:py-40">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <p className="text-accent font-medium tracking-widest uppercase text-sm">
            Organic Skincare & Salon
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-background leading-tight text-balance">
            Reveal Your Natural Radiance
          </h1>
          <p className="text-lg text-background/85 max-w-lg leading-relaxed">
            Experience premium organic skincare treatments and expert salon services
            in a serene, hygienic environment. Your beauty, naturally enhanced.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="https://wa.me/250928882267?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-cta-foreground font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a
              href="tel:+250928882267"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background/20 backdrop-blur-sm text-background border border-background/30 font-semibold rounded-lg text-lg hover:bg-background/30 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
