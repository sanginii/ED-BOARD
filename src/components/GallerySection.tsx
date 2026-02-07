import { useEffect } from "react";
import { Link } from "react-router-dom";
import { galleryImages } from "@/data/galleryData";

export default function GallerySection() {
  const previewImages = galleryImages.slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const elements = document.querySelectorAll(".appear-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="gallery"
      className="py-20 bg-black text-[#C2B59B] relative overflow-hidden"
    >
      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />

      <div className="container mx-auto px-6 relative">
        <h2 className="text-center mb-6 appear-on-scroll">
          <span className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-3xl md:text-4xl">
            Gallery
          </span>
          <div className="mx-auto mt-4 h-[2px] w-28 bg-[#E3D5B3]/40 rounded-full" />
        </h2>

        <p className="text-center font-['Playfair_Display'] text-[#C2B59B] max-w-2xl mx-auto mb-10 appear-on-scroll">
          Explore the visual storytelling of MIT Manipal through our lens. Each
          photograph captures a unique moment of campus life, events, and the
          people who make our institution special.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {previewImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative rounded-lg overflow-hidden border border-[#E3D5B3]/20 bg-black/30 shadow-[0_12px_40px_rgba(0,0,0,0.45)] transform transition-all duration-500 hover:scale-[1.01] hover:border-[#E3D5B3]/35 appear-on-scroll ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-['Playfair_Display'] text-[#C2B59B]/80 text-sm">
                    Photo by
                  </p>
                  <p className="font-['Cinzel'] text-[#E3D5B3] tracking-wide">
                    {image.photographer}
                  </p>
                </div>
              </div>

              {/* vignette overlay */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.65)]" />
            </div>
          ))}
        </div>

        {/* Link to full gallery */}
        <div className="text-center appear-on-scroll">
          <Link
            to="/gallery"
            className="
              inline-block
              px-8 py-3 rounded-md
              border-2 border-[#E3D5B3]/50
              bg-black/25
              text-[#E3D5B3]
              font-['Playfair_Display']
              shadow-[0_10px_30px_rgba(0,0,0,0.45)]
              hover:border-[#E3D5B3]/85 hover:bg-black/35
              transition
            "
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
