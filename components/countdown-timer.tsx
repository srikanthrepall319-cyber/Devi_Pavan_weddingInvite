"use client";

import { useEffect, useState } from "react";

function getTimeLeft(targetDate: Date) {
  const now = new Date().getTime();
  const diff = Math.max(targetDate.getTime() - now, 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function CountdownTimer({
  targetDate,
  compact = false
}: {
  targetDate: Date;
  compact?: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  const item = (label: string, value: number) => (
    <div className="rounded-2xl bg-white/12 px-3 py-2 text-center">
      <div className="font-serif text-2xl">{String(value).padStart(2, "0")}</div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-white/70">{label}</div>
    </div>
  );

  if (compact) {
    return (
      <div className="mt-2 flex gap-2 text-white">
        {item("Days", timeLeft.days)}
        {item("Hrs", timeLeft.hours)}
        {item("Min", timeLeft.minutes)}
        {item("Sec", timeLeft.seconds)}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {item("Days", timeLeft.days)}
      {item("Hours", timeLeft.hours)}
      {item("Minutes", timeLeft.minutes)}
      {item("Seconds", timeLeft.seconds)}
    </div>
  );
}
