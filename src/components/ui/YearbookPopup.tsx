import { useEffect, useState } from "react";
import { X, Sparkles, BookOpen } from "lucide-react";

export default function YearbookPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 6500);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative z-[101] w-[92%] max-w-md rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800/95 to-slate-900 border border-white/15 p-6 shadow-xl animate-in fade-in zoom-in duration-200">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 p-2 hover:bg-white/10 rounded-full transition"
        >
          <X className="h-5 w-5 text-white/80" />
        </button>

        {/* Icon */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">
            New Yearbook Released!
          </h3>
        </div>

        {/* Text */}
        <p className="text-sm text-white/80 mb-5">
          Check out our newly launched yearbook filled with memories and highlights!
        </p>

        {/* ✅ Normal link for React/Vite */}
       <a
  href="/yearbook"
  onClick={() => setOpen(false)}
  className="w-full inline-flex items-center justify-center gap-2 bg-white rounded-full px-5 py-3 font-medium text-slate-900 hover:bg-blue-100 transition"
>
  <BookOpen className="h-5 w-5" />
  View Yearbook
</a>

        {/* Maybe later */}
        <button
          onClick={() => setOpen(false)}
          className="w-full text-xs text-white/60 mt-3 hover:text-white/80 transition"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
