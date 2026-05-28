"use client";

import { Button } from "@/components/ui";
import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { copy } from "@/lib/i18n";

export function MusicToggle() {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { language } = useLanguage();
  const t = copy[language];

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = muted;
  }, [muted]);

  const toggle = async () => {
    setMuted((m) => !m);
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      // No hard failure if the browser blocks autoplay.
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none" src="/music/wedding-instrumental.mp3" />
      <Button onClick={toggle} variant="ghost" size="sm" className="rounded-full border border-white/40 bg-white/50">
        {muted ? <VolumeX className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />}
        {t.music}
      </Button>
    </>
  );
}
