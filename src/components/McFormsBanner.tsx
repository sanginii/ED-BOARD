import { ArrowUpRight } from "lucide-react";

type Props = {
  applyUrl?: string;
};

const DEFAULT_APPLY_URL = "https://forms.gle/sArbt8gRsbtpXda86";

export default function McFormsBanner({ applyUrl = DEFAULT_APPLY_URL }: Props) {
  const handleClick = () => {
    window.open(applyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="container mx-auto px-4 mt-2 flex justify-end">
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md border border-[#E3D5B3]/35 px-5 py-2 text-sm text-[#E3D5B3] shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-black/70 hover:border-[#E3D5B3]/60 transition font-['Playfair_Display']"
          >
            <span className="h-2 w-2 rounded-full bg-[#E3D5B3] shadow-[0_0_10px_rgba(227,213,179,0.55)]" />
            <span className="tracking-wide">Forms now open</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="hidden px-4 mt-3">
        <div className="rounded-2xl bg-black/70 backdrop-blur-md border border-[#E3D5B3]/30 shadow-[0_10px_30px_rgba(0,0,0,0.35)] px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-xs text-[#E3D5B3] font-['Cinzel'] tracking-wide uppercase">
                Working Committee forms now open
              </span>
              <span className="text-[11px] text-[#C2B59B] font-['Playfair_Display']">
                Tap below to submit your application.
              </span>
            </div>

            <button
              onClick={handleClick}
              className="shrink-0 inline-flex items-center gap-1 rounded-full border-2 border-[#E3D5B3]/50 bg-black/25 text-[#E3D5B3] font-['Playfair_Display'] px-3 py-1.5 text-[11px] font-semibold hover:border-[#E3D5B3]/85 hover:bg-black/35 transition"
            >
              <span>Apply</span>
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
