import { Calendar } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Virtual Tour</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Step Inside Gowyiow Skincare & Salon
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Take a real look at our newly launched, fully equipped space.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-foreground/5">
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Freel%2F1268265868555326&show_text=false&mute=1&autoplay=1"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Gowyiow Skincare & Salon Tour"
              loading="lazy"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="https://wa.me/250928882267?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-cta-foreground font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
