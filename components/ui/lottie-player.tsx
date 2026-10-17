"use client";

import { useEffect, useRef, useState } from "react";

interface LottiePlayerProps {
  animationPath?: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottiePlayer({
  animationPath = "/404-lottie.json",
  className = "w-72 h-72 sm:w-80 sm:h-80 mx-auto",
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let animItem: any = null;
    let isCancelled = false;

    async function loadLottie() {
      try {
        const lottieModule = await import("lottie-web");
        const lottie = lottieModule.default || lottieModule;

        if (isCancelled || !containerRef.current) return;

        // Clean any existing SVG/canvas before mounting
        containerRef.current.innerHTML = "";

        animItem = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop,
          autoplay,
          path: animationPath,
        });

        animItem.addEventListener("DOMLoaded", () => {
          if (!isCancelled) setIsLoaded(true);
        });

        animItem.addEventListener("data_failed", () => {
          if (!isCancelled) setHasError(true);
        });
      } catch (err) {
        console.warn("[LottiePlayer] Error loading lottie animation, using SVG fallback:", err);
        if (!isCancelled) setHasError(true);
      }
    }

    loadLottie();

    return () => {
      isCancelled = true;
      if (animItem) {
        animItem.destroy();
      }
    };
  }, [animationPath, loop, autoplay]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Container for Lottie SVG */}
      <div
        ref={containerRef}
        className={`w-full h-full flex items-center justify-center transition-opacity duration-500 ${
          isLoaded && !hasError ? "opacity-100" : "opacity-0 absolute"
        }`}
      />

      {/* High-Tech Fallback Vector Animation (Shown while loading or if fallback needed) */}
      {(!isLoaded || hasError) && (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            {/* Pulsing Concentric Radar Rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-30" />
            <div className="absolute inset-4 rounded-full border border-primary/30 animate-pulse" />
            <div className="absolute inset-10 rounded-full border border-primary/40" />

            {/* Orbiting Satellite Dot */}
            <div className="absolute w-full h-full animate-spin duration-7000 pointer-events-none">
              <div className="w-3.5 h-3.5 bg-primary rounded-full shadow-lg shadow-primary/60 -top-1.5 left-1/2 -translate-x-1/2" />
            </div>

            {/* Central Holographic Core */}
            <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 via-secondary to-background border border-primary/40 flex items-center justify-center shadow-xl backdrop-blur-md">
              <span className="font-mono text-3xl font-black text-primary tracking-tighter animate-pulse">
                404
              </span>
            </div>
          </div>
          <span className="text-[11px] font-mono text-muted-foreground mt-2 uppercase tracking-wider">
            {hasError ? "Lost in Deep Space" : "Loading Orbital Telemetry..."}
          </span>
        </div>
      )}
    </div>
  );
}
