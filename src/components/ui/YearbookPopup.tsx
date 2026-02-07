import { useEffect, useState } from "react";
import { X, BookOpen } from "lucide-react";

const FORM_URL = "https://forms.gle/sArbt8gRsbtpXda86";

// timing
const INITIAL_DELAY = 60_500;
const REOPEN_DELAY = 3000_000;
const STORAGE_KEY = "mc_popup_last_closed";

export default function ManagementCommitteePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastClosed = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    const shouldOpen = !lastClosed || now - Number(lastClosed) > REOPEN_DELAY;
    if (!shouldOpen) return;

    const timer = setTimeout(() => setOpen(true), INITIAL_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setOpen(false);

    setTimeout(() => setOpen(true), REOPEN_DELAY);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closePopup}
      />

      {/* Modal */}
      <div
        className="
          relative z-[101] w-full max-w-md
          rounded-2xl overflow-hidden
          border border-[#E3D5B3]/20
          bg-black/70 backdrop-blur-sm
          shadow-[0_18px_70px_rgba(0,0,0,0.75)]
          animate-in fade-in zoom-in duration-200
        "
      >
        {/* subtle vignette */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.85)]" />

        <div className="relative p-7">
          {/* Close */}
          <button
            onClick={closePopup}
            className="absolute right-3 top-3 p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-[#E3D5B3]/80" />
          </button>

          {/* Header */}
          <div className="mb-3">
            <h3 className="font-['Cinzel'] text-[#E3D5B3] uppercase tracking-[0.08em] text-xl">
              Working Committee Forms Open
            </h3>
            <div className="mt-3 h-[2px] w-16 bg-[#E3D5B3]/30 rounded-full" />
          </div>

          {/* Text */}
          <p className="font-['Playfair_Display'] text-[#C2B59B] leading-relaxed mb-6">
            Applications for the EdBoard Working Committee are now open.
          </p>

          {/* CTA */}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closePopup}
            className="
              w-full inline-flex items-center justify-center gap-2
              px-6 py-3 rounded-full
              border-2 border-[#E3D5B3]/45
              bg-black/25
              text-[#E3D5B3]
              font-['Playfair_Display'] font-semibold
              shadow-[0_10px_30px_rgba(0,0,0,0.45)]
              hover:border-[#E3D5B3]/80 hover:bg-black/35
              transition
            "
          >
            <BookOpen className="h-5 w-5" />
            Apply Now
          </a>

          {/* Secondary */}
          <button
            onClick={closePopup}
            className="w-full mt-3 text-sm font-['Playfair_Display'] text-[#C2B59B]/70 hover:text-[#E3D5B3] transition"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
