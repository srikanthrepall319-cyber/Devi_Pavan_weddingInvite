"use client";

import { RefObject, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export function MusicToggle({
  audioRef,
}: MusicToggleProps) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    setPlaying(!audio.paused);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [audioRef]);

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (err) {
      console.warn("Music playback error:", err);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      title={playing ? "Pause music" : "Play music"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/12"
    >
      {playing ? (
        <Volume2 className="h-4 w-4" />
      ) : (
        <VolumeX className="h-4 w-4" />
      )}
    </button>
  );
}