import { MapPin, Phone, Calendar, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-background mb-3">Gowyiow</h3>
            <p className="text-sm leading-relaxed text-background/60">
              Organic skincare & salon — revealing your natural radiance with safe, premium treatments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Gallery", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                Tombura Road, opposite Super Gas Station
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:0928882267" className="hover:text-primary transition-colors">
                  0928 882 267
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:0920705250" className="hover:text-primary transition-colors">
                  0920 705 250
                </a>
              </li>
            </ul>
          </div>

          {/* Book */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Book Today</h4>
            <p className="text-sm text-background/60 mb-4">Book your appointment today!</p>
            <a
              href="https://wa.me/250928882267?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta text-cta-foreground font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </a>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="p-2 hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50">© {currentYear} Gowyiow Skincare & Salon. All rights reserved.</p>
          <p className="text-xs text-background/50 md:ml-auto">
            Designed and built by{" "}
            <a
              href="https://www.linkedin.com/in/simon-akuien-atem-710895290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Simon Star Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
