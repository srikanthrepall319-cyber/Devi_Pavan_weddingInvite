"use client";

import { useEffect, useMemo, useState } from "react";

function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function fixed(num: number) {
  return Number(num.toFixed(4));
}

export function FloatingPetals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        left: `${fixed(seededRand(i * 3 + 0) * 100)}%`,
        delay: `${fixed(seededRand(i * 3 + 1) * 6)}s`,
        duration: `${fixed(5 + seededRand(i * 3 + 2) * 6)}s`,
        size: `${fixed(4 + seededRand(i * 3 + 0) * 7)}px`,
        opacity: fixed(0.25 + seededRand(i * 3 + 1) * 0.65),
      })),
    []
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="gold-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}