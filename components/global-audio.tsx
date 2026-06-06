"use client";

import { createContext, useContext, useRef } from "react";

export const AudioContext =
  createContext<React.RefObject<HTMLAudioElement | null> | null>(null);

export function GlobalAudio({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <AudioContext.Provider value={audioRef}>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/wedding-song.mp3" type="audio/mpeg" />
      </audio>

      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio must be used within GlobalAudio");
  }

  return context;
}