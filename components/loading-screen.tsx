"use client";

import { useState } from "react";
import { FloatingPetals } from "@/components/floating-petals";

interface LoadingScreenProps {
  onEnter: () => void;
}

export function LoadingScreen({
  onEnter,
}: LoadingScreenProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    onEnter();
  };

  return (
    <div
      className={`
        fixed inset-0 z-[999] overflow-hidden bg-[#2b0d16]
        transition-all duration-[1800ms]
        ${opening ? "opacity-0" : "opacity-100"}
      `}
    >
      <FloatingPetals />

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)]" />

      {/* Couple Names */}
      <div className="absolute top-[15%] left-1/2 z-20 -translate-x-1/2 text-center">
        <h1
          className={`
             whitespace-nowrap
          font-serif
          text-5xl
          md:text-8xl
          text-gold
            transition-all duration-700
            ${
              opening
                ? "translate-y-8 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          Devi ♥ Pavan
        </h1>
      </div>

      {/* Center Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`
            mx-auto mb-8 
            transition-all duration-[2200ms] 
            ${opening ? "scale-[8] opacity-0" : "scale-100 opacity-100"}
            }
          `}
        >
          <img
            src="/gallery/mandala.png"
            alt="Mandala"
            className=" h-72 w-72 animate-[spin_18s_linear_infinite]"
            draggable={false}
          />
        </div>
      </div>

      {/* Open Invitation Button */}
      <div className="absolute bottom-[15%] left-1/2 z-20 -translate-x-1/2">
        <button
          onClick={handleOpen}
          className={`
            rounded-full
            bg-gold
            px-8
            py-3
            font-medium
            text-maroon-deep
            shadow-[0_0_30px_rgba(212,175,55,0.4)]
            transition-all duration-300
            hover:scale-105
            ${opening ? "opacity-0" : "animate-pulse"}
          `}
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
}