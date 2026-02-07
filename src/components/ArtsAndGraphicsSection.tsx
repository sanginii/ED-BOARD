import { useState, useEffect } from "react";

const ArtsAndGraphicsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const artworks = ["/ANG/ANG1.jpg", "/ANG/ANG2.jpg", "/ANG/ANG3.jpg", "/ANG/ANG4.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % artworks.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-black text-[#C2B59B] relative overflow-hidden">
      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />

      <div className="container mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-12 appear-on-scroll">
          <h2 className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-3xl md:text-4xl">
            Arts and Graphics
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-28 bg-[#E3D5B3]/40 rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="appear-on-scroll font-['Playfair_Display'] text-[#C2B59B] text-lg leading-relaxed">
            <p className="mb-4">
              Our Arts and Graphics department is the creative powerhouse behind
              MIT Editorial Board&apos;s visual identity. We blend artistic
              innovation with technical precision to create compelling visual
              narratives that enhance our publications.
            </p>

            <p className="mb-4">
              From stunning illustrations to dynamic graphic designs, our team
              pushes the boundaries of creativity while maintaining the highest
              standards of professional excellence.
            </p>

            <p>
              Each piece we create is a testament to our commitment to visual
              storytelling and our passion for artistic expression in editorial
              design.
            </p>
          </div>

          {/* Right side carousel */}
          <div className="relative h-[420px] overflow-hidden rounded-xl appear-on-scroll border border-[#E3D5B3]/20 bg-black/40 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            <div
              className="flex transition-transform duration-700 h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {artworks.map((artwork, index) => (
                <img
                  key={index}
                  src={artwork}
                  alt={`Artwork ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>

            {/* vignette overlay */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.65)]" />

            {/* Navigation dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-[#E3D5B3] w-6"
                      : "bg-[#E3D5B3]/40 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtsAndGraphicsSection;
