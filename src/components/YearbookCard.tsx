import { Download, Calendar } from "lucide-react";
import { useState } from "react";
import { YearbookData } from "@/data/YearbookData";

interface YearbookCardProps {
  yearbook: YearbookData;
  index: number;
}

const YearbookCard = ({ yearbook, index }: YearbookCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      window.open(yearbook.pdfUrl, "_blank");
    } catch (error) {
      console.error("Error opening PDF:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="
        group relative
        rounded-2xl overflow-hidden
        border border-[#E3D5B3]/20
        bg-black/40 backdrop-blur-sm
        shadow-[0_12px_40px_rgba(0,0,0,0.45)]
        transition-all duration-500
        hover:-translate-y-2 hover:border-[#E3D5B3]/35
      "
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Cover */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={yearbook.coverImage}
          alt={`${yearbook.title} Cover`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.75)]" />

        {/* Year badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full px-4 py-2 border border-[#E3D5B3]/30 bg-black/50 backdrop-blur-sm">
          <Calendar className="w-4 h-4 text-[#E3D5B3]" />
          <span className="font-['Playfair_Display'] text-[#E3D5B3] text-sm">
            {yearbook.year}
          </span>
        </div>

        {/* pages badge */}
        <div className="absolute top-4 right-4 rounded-full px-4 py-2 border border-[#E3D5B3]/30 bg-black/50 backdrop-blur-sm">
          <span className="font-['Playfair_Display'] text-[#E3D5B3] text-sm">
            {yearbook.pages} pages
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-7">
        <div className="mb-5">
          <p className="font-['Playfair_Display'] text-[#C2B59B]/80 text-sm mb-2">
            {yearbook.theme}
          </p>

          <h3 className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-wide text-2xl mb-3">
            {yearbook.title}
          </h3>

          <p className="font-['Playfair_Display'] text-[#C2B59B] leading-relaxed">
            {yearbook.description}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className="
            w-full
            px-6 py-3 rounded-xl
            border-2 border-[#E3D5B3]/40
            bg-black/25
            text-[#E3D5B3]
            font-['Playfair_Display']
            shadow-[0_10px_30px_rgba(0,0,0,0.45)]
            hover:border-[#E3D5B3]/80 hover:bg-black/35
            transition
            flex items-center justify-center gap-2
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-[#E3D5B3]/30 border-t-[#E3D5B3] rounded-full animate-spin" />
              Opening...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              View Yearbook
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default YearbookCard;
