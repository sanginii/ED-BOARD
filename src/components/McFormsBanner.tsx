// src/components/McFormsBanner.tsx
import { ArrowUpRight } from "lucide-react";

const APPLY_URL = "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1"; // ← put your real form URL here

export default function McFormsBanner() {
  const handleClick = () => {
    window.open(APPLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* DESKTOP: pill under Apply button (right side) */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 mt-2 flex justify-end">
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-sky-400/50 px-5 py-2 text-sm font-medium text-sky-100 shadow-lg shadow-sky-500/25 hover:bg-slate-900 hover:border-sky-300 transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
            <span>Forms now open</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* MOBILE: full-width gradient bar with text + button */}
      <div className="md:hidden px-4 mt-3">
        <div className="rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 p-[1px] shadow-lg shadow-sky-500/40">
          <div className="flex items-center justify-between rounded-2xl bg-slate-950/90 px-4 py-3">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-sky-50">
                MC forms now open
              </span>
              <span className="text-[11px] text-slate-200/80">
                Tap below to submit your application.
              </span>
            </div>

            <button
              onClick={handleClick}
              className="ml-3 inline-flex items-center gap-1 rounded-full bg-sky-300 px-3 py-1.5 text-[11px] font-semibold text-slate-900 shadow-md hover:bg-sky-200 transition-colors"
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
