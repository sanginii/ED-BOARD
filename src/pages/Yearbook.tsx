import { useState, useEffect } from "react";
import { BookOpen, Download, Calendar } from "lucide-react";
import YearbookCard from "@/components/YearbookCard";
import Navbar from "@/components/Navbar";
import { yearbooksData } from "@/data/YearbookData";
import Footer from "@/components/Footer";

const Yearbook = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".appear-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const filteredYearbooks = selectedYear
    ? yearbooksData.filter((yearbook) => yearbook.year === selectedYear)
    : yearbooksData;

  return (
    <div className="min-h-screen relative bg-black text-[#C2B59B] overflow-hidden">
      <Navbar />

      {/* Background texture + vignette */}
      <div aria-hidden className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-25"
          style={{ backgroundImage: "url('/photo.png')" }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 shadow-[inset_0_0_260px_rgba(0,0,0,0.95)]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-16 px-6 appear-on-scroll">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 rounded-full px-6 py-3 mb-8 border border-[#E3D5B3]/25 bg-black/40 backdrop-blur-sm appear-on-scroll">
            <BookOpen className="w-5 h-5 text-[#E3D5B3]" />
            <span className="font-['Playfair_Display'] text-[#C2B59B] text-sm">
              Digital Archive
            </span>
          </div>

          <h1 className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.10em] text-4xl sm:text-5xl md:text-7xl mb-6 appear-on-scroll">
            MIT YEARBOOKS
          </h1>

          <p className="font-['Playfair_Display'] text-[#C2B59B] text-lg md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed appear-on-scroll">
            Journey through time with our digital yearbook collection. Each
            edition captures the spirit, achievements, and memories of our
            vibrant MIT community.
          </p>

          {/* Year Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 appear-on-scroll">
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-6 py-3 rounded-full font-['Playfair_Display'] transition-all duration-200 border ${
                selectedYear === null
                  ? "border-[#E3D5B3]/70 text-[#E3D5B3] bg-black/55"
                  : "border-[#E3D5B3]/25 text-[#C2B59B] bg-black/30 hover:border-[#E3D5B3]/50"
              }`}
            >
              All Years
            </button>

            {yearbooksData.map((yearbook) => (
              <button
                key={yearbook.year}
                onClick={() => setSelectedYear(yearbook.year)}
                className={`px-6 py-3 rounded-full font-['Playfair_Display'] transition-all duration-200 border ${
                  selectedYear === yearbook.year
                    ? "border-[#E3D5B3]/70 text-[#E3D5B3] bg-black/55"
                    : "border-[#E3D5B3]/25 text-[#C2B59B] bg-black/30 hover:border-[#E3D5B3]/50"
                }`}
              >
                {yearbook.year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-10 pb-20 px-6 appear-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredYearbooks.map((yearbook, index) => (
              <YearbookCard key={yearbook.year} yearbook={yearbook} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-20 px-6 border-t border-[#E3D5B3]/15 appear-on-scroll">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group appear-on-scroll">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E3D5B3]/30 bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-[#E3D5B3]" />
              </div>
              <h3 className="font-['Cinzel'] text-[#E3D5B3] text-3xl mb-2">
                {yearbooksData.length}
              </h3>
              <p className="font-['Playfair_Display'] text-[#C2B59B]/80">
                Digital Yearbooks
              </p>
            </div>

            <div className="group appear-on-scroll">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E3D5B3]/30 bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-[#E3D5B3]" />
              </div>
              <h3 className="font-['Cinzel'] text-[#E3D5B3] text-3xl mb-2">
                4+
              </h3>
              <p className="font-['Playfair_Display'] text-[#C2B59B]/80">
                Years Archived
              </p>
            </div>

            <div className="group appear-on-scroll">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E3D5B3]/30 bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <Download className="w-8 h-8 text-[#E3D5B3]" />
              </div>
              <h3 className="font-['Cinzel'] text-[#E3D5B3] text-3xl mb-2">
                1000+
              </h3>
              <p className="font-['Playfair_Display'] text-[#C2B59B]/80">
                Downloads
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Yearbook;
