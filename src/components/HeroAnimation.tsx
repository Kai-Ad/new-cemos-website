// src/components/HeroAnimation.tsx
"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

const HeroAnimation = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const [options, setOptions] = useState<ISourceOptions | null>(null);

  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };
    initEngine();
  }, []);

  useEffect(() => {
    if (!init) return;

    const currentTheme = theme === "dark" ? "dark" : "light";

    setOptions({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 80, duration: 0.4 } },
      },
      particles: {
        color: { value: currentTheme === 'dark' ? "#64FFDA" : "#0D6EFD" },
        links: {
          color: currentTheme === 'dark' ? "#172A45" : "#dde6f0",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          // THIS IS THE CORRECTED SECTION
          density: {
            enable: true,
          },
          value: 40, // Controls the number of particles. The engine handles density.
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    });
  }, [init, theme]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };
  
  if (init && options) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 z-0"
      />
    );
  }

  return null;
};

export default HeroAnimation;