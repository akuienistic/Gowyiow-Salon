import { Calendar, Clock, Sparkles } from "lucide-react";

const services = [
  {
    category: "Skincare",
    items: [
      { name: "Organic Facial", desc: "Deep cleansing with organic products for a radiant glow", price: "From $35", duration: "60 min" },
      { name: "Anti-Aging Treatment", desc: "Reduce fine lines with natural botanical serums", price: "From $50", duration: "75 min" },
      { name: "Acne Treatment", desc: "Gentle purifying treatment for clear, healthy skin", price: "From $30", duration: "45 min" },
    ],
  },
  {
    category: "Hair",
    items: [
      { name: "Cut & Style", desc: "Precision haircut with professional styling", price: "From $20", duration: "45 min" },
      { name: "Color & Highlights", desc: "Vibrant color using gentle, ammonia-free formulas", price: "From $45", duration: "90 min" },
      { name: "Hair Treatment", desc: "Deep conditioning with natural oils for silky hair", price: "From $25", duration: "40 min" },
    ],
  },
  {
    category: "Makeup",
    items: [
      { name: "Bridal Makeup", desc: "Flawless bridal look that lasts all day", price: "From $60", duration: "90 min" },
      { name: "Event Makeup", desc: "Stunning looks for any special occasion", price: "From $40", duration: "60 min" },
      { name: "Natural Glam", desc: "Enhanced natural beauty with organic cosmetics", price: "From $30", duration: "45 min" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Treatments Crafted for You
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every service uses premium organic products in a clean, welcoming environment.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                {cat.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.items.map((service) => (
                  <div
                    key={service.name}
                    className="group bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-2">{service.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.desc}</p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="font-semibold text-accent">{service.price}</span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {service.duration}
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/250928882267?text=Hi%2C%20I%27d%20like%20to%20book%20a%20${encodeURIComponent(service.name)}%20appointment`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-cta/10 text-cta font-medium rounded-lg hover:bg-cta hover:text-cta-foreground transition-colors text-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
