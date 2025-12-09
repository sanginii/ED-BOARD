import { useEffect, useState } from "react";
import { X, Sparkles, BookOpen } from "lucide-react";

const FORM_URL = "https://forms.gle/JERbVnUw7TcXXA478";

// ⬇️ CONFIG — change these only
const INITIAL_DELAY = 4_500;  // ms → first appearance
const REOPEN_DELAY  = 30_000; // ms → reopen after dismiss
const STORAGE_KEY = "mc_popup_last_closed";

export default function ManagementCommitteePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastClosed = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    const shouldOpen =
      !lastClosed || now - Number(lastClosed) > REOPEN_DELAY;

    if (!shouldOpen) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, INITIAL_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setOpen(false);

    setTimeout(() => {
      setOpen(true);
    }, REOPEN_DELAY);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closePopup}
      />

      {/* Modal */}
      <div className="relative z-[101] w-[92%] max-w-md rounded-2xl
        bg-gradient-to-br from-slate-900 via-slate-800/95 to-slate-900
        border border-white/15 p-6 shadow-xl
        animate-in fade-in zoom-in duration-200"
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute right-3 top-3 p-2 hover:bg-white/10 rounded-full"
        >
          <X className="h-5 w-5 text-white/80" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 flex items-center justify-center
            bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">
            Management Committee Forms Open!
          </h3>
        </div>

        {/* Text */}
        <p className="text-sm text-white/80 mb-5">
          Applications for the EdBoard Management Committee are now open.
        </p>

        {/* CTA */}
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closePopup}
          className="w-full inline-flex items-center justify-center gap-2
            bg-white rounded-full px-5 py-3 font-medium text-slate-900
            hover:bg-blue-100 transition"
        >
          <BookOpen className="h-5 w-5" />
          Apply Now
        </a>

        {/* Secondary */}
        <button
          onClick={closePopup}
          className="w-full text-xs text-white/60 mt-3 hover:text-white/80"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
