import { useEffect, useRef } from "react";

const APPLY_URL = "https://forms.gle/sArbt8gRsbtpXda86";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let targetX = 0;
    let targetY = 0;
    let targetS = 0;

    let curX = 0;
    let curY = 0;
    let curS = 0;

    const clamp = (n: number, min: number, max: number) =>
      Math.max(min, Math.min(max, n));

    const onMouseMove = (e: MouseEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      targetX = ((e.clientX / w) - 0.5) * 2;
      targetY = ((e.clientY / h) - 0.5) * 2;
    };

    const onScroll = () => {
      const s = window.scrollY || 0;
      targetS = clamp(s / 700, 0, 1);
    };

    const tick = () => {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      curS += (targetS - curS) * 0.08;

      const max = 14;
      const tx = clamp(curX * max, -max, max);
      const ty = clamp(curY * max, -max, max);

      const sy = curS * 10;

      el.style.transform = `translate3d(${tx}px, ${ty + sy}px, 0) scale(1.07)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="
        relative overflow-hidden bg-black
        min-h-[100svh] md:min-h-screen
        pt-24 md:pt-28
      "
    >
      <style>{`
        @keyframes heroSweep {
          0%   { transform: translate3d(-40%, 0, 0) rotate(12deg); opacity: 0.0; }
          12%  { opacity: 0.35; }
          50%  { opacity: 0.12; }
          100% { transform: translate3d(140%, 0, 0) rotate(12deg); opacity: 0.0; }
        }
        @keyframes grainShift {
          0%   { transform: translate3d(0,0,0); opacity: 0.10; }
          10%  { transform: translate3d(-2%, 1%,0); }
          20%  { transform: translate3d(2%, -1%,0); }
          30%  { transform: translate3d(-3%, -2%,0); }
          40%  { transform: translate3d(3%, 2%,0); }
          50%  { transform: translate3d(-1%, 3%,0); }
          60%  { transform: translate3d(2%, 1%,0); }
          70%  { transform: translate3d(-2%, -1%,0); }
          80%  { transform: translate3d(1%, -3%,0); }
          90%  { transform: translate3d(-1%, 2%,0); }
          100% { transform: translate3d(0,0,0); opacity: 0.10; }
        }
        @keyframes dustFloat {
          0%   { background-position: 0% 0%, 30% 70%, 70% 30%; opacity: 0.16; }
          50%  { background-position: 20% 10%, 40% 60%, 60% 40%; opacity: 0.10; }
          100% { background-position: 0% 0%, 30% 70%, 70% 30%; opacity: 0.16; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translate3d(0, 16px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
      `}</style>

      {/* Background image (parallax target) */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url(/newspaper_bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "55% center",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.07)",
        }}
        aria-hidden
      />

      {/* Base darkening */}
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 190px rgba(0,0,0,0.88)" }}
        aria-hidden
      />

      {/* Projector sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute -inset-y-1/2 left-0 w-[55%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.18) 52%, rgba(255,255,255,0.08) 60%, rgba(0,0,0,0) 100%)",
            filter: "blur(10px)",
            animation: "heroSweep 9.5s ease-in-out infinite",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 4px)," +
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 5px)",
          mixBlendMode: "overlay",
          animation: "grainShift 1.6s steps(2, end) infinite",
        }}
        aria-hidden
      />

      {/* Dust */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.22) 0 1px, rgba(0,0,0,0) 2px)," +
            "radial-gradient(circle at 35% 80%, rgba(255,255,255,0.18) 0 1px, rgba(0,0,0,0) 2px)," +
            "radial-gradient(circle at 80% 35%, rgba(255,255,255,0.16) 0 1px, rgba(0,0,0,0) 2px)",
          backgroundSize: "520px 520px, 620px 620px, 720px 720px",
          animation: "dustFloat 7.5s ease-in-out infinite",
          mixBlendMode: "screen",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] md:min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <h1
          className="
            font-['Cinzel']
            text-[#E3D5B3]
            uppercase
            leading-[0.9]
            mx-auto
            max-w-6xl

            text-[clamp(2.2rem,7vw,6.2rem)]
            tracking-[0.07em]
            sm:tracking-[0.10em]

            whitespace-normal
            break-words

            opacity-0
            [animation:fadeUp_1.0s_ease-out_forwards]
          "
          style={{ textWrap: "balance" }}
        >
          MIT EDITORIAL BOARD
        </h1>

        <p
          className="
            mt-5 sm:mt-6
            font-['Playfair_Display']
            text-[#C2B59B]
            max-w-2xl
            mx-auto
            text-[clamp(0.95rem,3.0vw,1.25rem)]
            opacity-0
            [animation:fadeUp_1.0s_ease-out_forwards]
            [animation-delay:0.25s]
          "
        >
          Writing, design, and storytelling that defines campus culture.
        </p>

        <div
          className="
            mt-6 sm:mt-8
            flex flex-col sm:flex-row
            gap-4 sm:gap-6
            justify-center items-center
            opacity-0
            [animation:fadeUp_1.0s_ease-out_forwards]
            [animation-delay:0.45s]
          "
        >
          <a
            href="#about"
            className="
              w-full sm:w-auto
              max-w-[260px]
              px-8 sm:px-10
              py-3
              rounded-md
              border-2 border-[#E3D5B3]/50
              bg-black/20
              text-[#E3D5B3]
              font-['Playfair_Display']
              text-base sm:text-lg
              shadow-[0_10px_30px_rgba(0,0,0,0.45)]
              hover:border-[#E3D5B3]/85 hover:bg-black/30
              transition
            "
          >
            Explore
          </a>

          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="
              w-full sm:w-auto
              max-w-[260px]
              px-8 sm:px-10
              py-3
              rounded-md
              border-2 border-[#E3D5B3]/50
              bg-black/20
              text-[#E3D5B3]
              font-['Playfair_Display']
              text-base sm:text-lg
              shadow-[0_10px_30px_rgba(0,0,0,0.45)]
              hover:border-[#E3D5B3]/85 hover:bg-black/30
              transition
            "
          >
            Apply
          </a>
        </div>
      </div>
    </section>
  );
}
