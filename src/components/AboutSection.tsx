import { Leaf, ShieldCheck, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose Gowyiow
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We're a newly launched organic skincare and salon committed to enhancing your
            natural beauty with safe, effective products and expert care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Leaf, title: "100% Organic", desc: "We use only certified organic products free from harsh chemicals." },
            { icon: ShieldCheck, title: "Hygiene First", desc: "Sterilized tools, clean spaces, and safety protocols you can trust." },
            { icon: Heart, title: "Personalized Care", desc: "Every treatment is tailored to your unique skin type and goals." },
          ].map((item) => (
            <div key={item.title} className="text-center p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/15 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
