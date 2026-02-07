import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function BottomParticles() {
  const init = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="absolute bottom-0 left-0 w-full h-[45vh] pointer-events-none">
      <Particles
        init={init}
        options={{
          fullScreen: false,
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                area: 900,
              },
            },
            color: {
              value: ["#ffffff", "#a5b4fc", "#c7d2fe"],
            },
            opacity: {
              value: 0.6,
              random: true,
            },
            size: {
              value: { min: 2, max: 6 },
              random: true,
            },
            move: {
              enable: true,
              direction: "top",
              speed: 0.4,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            blur: {
              enable: true,
              value: 2,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
