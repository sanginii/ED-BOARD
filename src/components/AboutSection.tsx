import { useEffect, forwardRef } from "react";

const AboutSection = forwardRef<HTMLDivElement>((_, ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".appear-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 bg-black text-[#C2B59B] relative overflow-hidden"
    >
      {/* subtle vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />

      <div className="container mx-auto px-6 relative">
        <h2 className="text-center mb-16 relative appear-on-scroll">
          <span className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-3xl md:text-4xl">
            What We Do
          </span>
          <div className="mx-auto mt-4 h-[2px] w-28 bg-[#E3D5B3]/40 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="appear-on-scroll">
            <h3 className="font-['Cinzel'] text-[#E3D5B3] text-2xl md:text-3xl mb-4 tracking-wide">
              What is EdBoard?
            </h3>

            <p className="font-['Playfair_Display'] text-[#C2B59B] mb-6 leading-relaxed">
              The Editorial Board is the creative powerhouse of MIT Manipal,
              dedicated to documenting and showcasing the vibrant campus life
              through various mediums. We're responsible for crafting the
              yearbook that captures the essence of each academic year,
              publishing regular newsletters that keep the community informed,
              and creating content that celebrates student achievements.
            </p>

            <p className="font-['Playfair_Display'] text-[#C2B59B] leading-relaxed">
              With a team of passionate writers, photographers, designers, and
              creative minds, we work collaboratively to create publications
              that reflect the spirit and culture of MIT Manipal, ensuring that
              every memorable moment is preserved for years to come.
            </p>
          </div>

          <div className="appear-on-scroll">
            <div className="relative">
              {/* soft parchment glows */}
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#E3D5B3]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#E3D5B3]/5 rounded-full blur-2xl" />

              <img
                src="/Group pic.jpg"
                alt="Editorial Board Team"
                className="rounded-lg shadow-2xl border border-[#E3D5B3]/20 w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-300"
                style={{ maxHeight: "400px" }}
              />

              {/* edge vignette on image */}
              <div className="pointer-events-none absolute inset-0 rounded-lg shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-lg p-6 appear-on-scroll border border-[#E3D5B3]/20 bg-black/40 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
            <div className="w-14 h-14 rounded-full border border-[#E3D5B3]/30 bg-black/40 flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#E3D5B3]"
              >
                <path d="M7 16h13M7 8h13M7 12h13M3 8h.01M3 12h.01M3 16h.01" />
              </svg>
            </div>

            <h4 className="font-['Cinzel'] text-[#E3D5B3] text-xl mb-3 tracking-wide">
              Yearbook Production
            </h4>
            <p className="font-['Playfair_Display'] text-[#C2B59B] leading-relaxed">
              We design, curate, and publish the annual yearbook, capturing the
              defining moments and memories of each academic year at MIT Manipal.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-lg p-6 appear-on-scroll border border-[#E3D5B3]/20 bg-black/40 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-14 h-14 rounded-full border border-[#E3D5B3]/30 bg-black/40 flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#E3D5B3]"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5L17.5 6.5" />
              </svg>
            </div>

            <h4 className="font-['Cinzel'] text-[#E3D5B3] text-xl mb-3 tracking-wide">
              Content Creation
            </h4>
            <p className="font-['Playfair_Display'] text-[#C2B59B] leading-relaxed">
              Our talented team creates engaging articles, photography,
              videography, and design work that showcases student life and
              activities.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-lg p-6 appear-on-scroll border border-[#E3D5B3]/20 bg-black/40 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-14 h-14 rounded-full border border-[#E3D5B3]/30 bg-black/40 flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#E3D5B3]"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>

            <h4 className="font-['Cinzel'] text-[#E3D5B3] text-xl mb-3 tracking-wide">
              Community Engagement
            </h4>
            <p className="font-['Playfair_Display'] text-[#C2B59B] leading-relaxed">
              We organize events, photoshoots, and campaigns that bring together
              the MIT community and create memorable shared experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
