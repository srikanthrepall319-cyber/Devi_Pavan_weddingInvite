"use client";

import { useMemo } from "react";

export function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        left: `${(i * 6.5) % 100}%`,
        delay: `${(i % 8) * 1.3}s`,
        duration: `${11 + (i % 5)}s`,
        scale: 0.7 + (i % 3) * 0.2
      })),
    []
  );

  return (
    <div className="petals-container fixed inset-0 z-0">
      {petals.map((petal, index) => (
        <span
          key={index}
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            transform: `scale(${petal.scale})`
          }}
        />
      ))}
    </div>
  );
}
