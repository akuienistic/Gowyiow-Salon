import { useState, FormEvent } from "react";
import {
  User, Phone, Mail, Tag, CalendarDays, Clock, MessageSquare,
  MapPin, CheckCircle, XCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Validation
    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const date = data.get("date") as string;
    const time = data.get("time") as string;

    if (!name || name.length < 2) {
      toast({ title: "Name is required", description: "Please enter at least 2 characters.", variant: "destructive" });
      return;
    }
    if (!phone || phone.length < 7) {
      toast({ title: "Phone is required", description: "Please enter a valid phone number.", variant: "destructive" });
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    if (date) {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        toast({ title: "Invalid date", description: "Please select a future date.", variant: "destructive" });
        return;
      }
    }
    if (!consent) {
      toast({ title: "Consent required", description: "Please agree to be contacted.", variant: "destructive" });
      return;
    }

    setSubmitting(true);

    // Build WhatsApp message
    const service = (data.get("service") as string) || "Not specified";
    const message = (data.get("message") as string) || "";
    const whatsappText = `Hi, I'd like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nService: ${service}\nDate: ${date || 'Flexible'}\nTime: ${time || 'Flexible'}\nMessage: ${message || 'N/A'}`;

    const whatsappUrl = `https://wa.me/250928882267?text=${encodeURIComponent(whatsappText)}`;

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your booking request is being sent via WhatsApp.",
    });

    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setSubmitting(false);
      form.reset();
      setConsent(false);
    }, 800);
  };

  const inputClass =
    "w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm";

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ready to book? Fill out the form or reach us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 border border-border rounded-xl p-6" noValidate>
            {[
              { name: "name", label: "Your Name", type: "text", icon: User, required: true, placeholder: "Jane Doe" },
              { name: "phone", label: "Phone / WhatsApp", type: "tel", icon: Phone, required: true, placeholder: "+250 928 882 267" },
              { name: "email", label: "Email", type: "email", icon: Mail, required: false, placeholder: "jane@example.com" },
              { name: "service", label: "Service", type: "text", icon: Tag, required: false, placeholder: "e.g. Organic Facial" },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-foreground mb-1.5">
                  {field.label} {field.required && <span className="text-cta">*</span>}
                </label>
                <div className="relative">
                  <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input id={field.name} name={field.name} type={field.type} placeholder={field.placeholder} className={inputClass} />
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1.5">Preferred Date</label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input id="date" name="date" type="date" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-foreground mb-1.5">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input id="time" name="time" type="time" className={inputClass} />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Any special requests..."
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm resize-none"
                />
              </div>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm text-muted-foreground">
                I consent to being contacted regarding my appointment request. <span className="text-cta">*</span>
              </span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-cta text-cta-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
            >
              {submitting ? "Sending..." : "Send Booking Request"}
            </button>
          </form>

          {/* Info + Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground text-sm">Tombura Road, opposite Super Gas Station</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-sm">
                    <a href="tel:0928882267" className="text-muted-foreground hover:text-primary transition-colors">0928 882 267</a>
                    {" / "}
                    <a href="tel:0920705250" className="text-muted-foreground hover:text-primary transition-colors">0920 705 250</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Hours</p>
                  <p className="text-muted-foreground text-sm">Mon – Sat: 8:00 AM – 7:00 PM</p>
                  <p className="text-muted-foreground text-sm">Sunday: By appointment</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm aspect-[4/3]">
              <iframe
                title="Gowyiow Skincare & Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0!2d30.0!3d4.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDAnMDAuMCJOIDMwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2s!4v1700000000000"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
