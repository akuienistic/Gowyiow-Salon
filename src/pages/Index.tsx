import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inject JSON-LD structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      name: "Gowyiow Skincare & Salon",
      description: "Premium organic skincare treatments and expert salon services.",
      url: window.location.origin,
      telephone: ["+250928882267", "+250920705250"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tombura Road, opposite Super Gas Station",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "19:00",
        },
      ],
      priceRange: "$$",
      image: "",
      sameAs: [],
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <VideoSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
