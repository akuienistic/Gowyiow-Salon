import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", alt: "Salon hair styling station", category: "Salon" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", alt: "Organic skincare products", category: "Skincare" },
  { src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80", alt: "Professional makeup application", category: "Makeup" },
  { src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80", alt: "Hair coloring treatment", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", alt: "Facial skincare treatment", category: "Skincare" },
  { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80", alt: "Relaxing spa atmosphere", category: "Salon" },
];

const categories = ["All", "Salon", "Skincare", "Hair", "Makeup"];

const GallerySection = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const navigateLightbox = (dir: number) => {
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < filtered.length) setLightbox(next);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-muted-foreground leading-relaxed">See the beautiful results our clients love.</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 text-background/80 hover:text-background"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" />
          </button>
          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-4 p-2 text-background/80 hover:text-background"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          {lightbox < filtered.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-4 p-2 text-background/80 hover:text-background"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}
          <img
            src={filtered[lightbox].src.replace("w=600", "w=1200")}
            alt={filtered[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
