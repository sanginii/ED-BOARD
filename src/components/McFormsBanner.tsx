import { ArrowUpRight } from "lucide-react";

export default function McFormsBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-500/80 to-blue-500/80 text-white">
      <div className="mx-auto max-w-6xl px-4 py-1.5 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
        <span className="font-semibold tracking-wide uppercase">
          MC forms open
        </span>

        <ArrowUpRight
          className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce"
          aria-hidden="true"
        />

        <span className="hidden sm:inline text-white/80">
          Click the <span className="font-semibold">Apply</span> button in the
          top-right to submit your application.
        </span>
      </div>
    </div>
  );
}
