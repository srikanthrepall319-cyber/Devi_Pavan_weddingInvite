"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { siteData } from "@/lib/site-data";
import { useLanguage } from "@/components/language-context";
import { copy } from "@/lib/i18n";

import { Button } from "@/components/ui";
import { CountdownTimer } from "@/components/countdown-timer";
import { formatDate } from "@/lib/utils";

export function HeroSection() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,20,40,0.45),transparent_45%),linear-gradient(180deg,#1a0b0f_0%,#2a1018_35%,#14070b_100%)]" />

      {/* Texture */}
      <div className="absolute inset-0 bg-[url('/hero-texture.svg')] bg-cover bg-center opacity-[0.06]" />

      {/* Luxury Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-10 md:px-6">

        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white lg:text-left"
          >

            {/* Invitation Badge */}
            <p className="mb-5 inline-flex rounded-full border border-[#d4af37]/20 bg-[#3a1721]/70 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#f1cd74] backdrop-blur-md">

              {t.invite}

            </p>

            {/* Couple Names */}
            <h1 className="font-serif text-[64px] font-normal leading-[1.05] tracking-wide md:text-7xl">

              <span className="block bg-gradient-to-b from-[#fff1c7] via-[#f1cd74] to-[#b8860b] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(212,175,55,0.18)]">

                {siteData.coupleFull.groom}

              </span>

              <span className="my-2 block text-xl font-light text-[#d4af37]/80 md:text-3xl">

                &

              </span>

              <span className="block bg-gradient-to-b from-[#fff1c7] via-[#f1cd74] to-[#b8860b] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(212,175,55,0.18)]">

                {siteData.coupleFull.bride}

              </span>

            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#f3e7d0]/75 md:text-lg lg:mx-0">

              With the blessings of our families, we invite you to celebrate
              our wedding and share in the joy of this beautiful beginning.

            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">

              <Link href="/events">

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border border-[#d4af37]/30 bg-white/5 px-8 py-6 text-base text-[#f8e7c2] backdrop-blur-md transition-all duration-300 hover:bg-[#d4af37]/10 hover:text-white"
                >
                  View Events
                </Button>

              </Link>

            </div>

            {/* Info Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {/* Wedding Date */}
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 text-left text-white backdrop-blur-xl">

                <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">

                  Wedding Muhurtham

                </p>

                <p className="mt-3 font-serif text-3xl text-[#fff5dd]">

                  {formatDate(new Date(siteData.weddingDate), language)}

                </p>

                <p className="mt-2 text-sm text-white/60">

                  Muhurtham • 08:43 PM IST

                </p>

              </div>

              {/* Countdown */}
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 text-left text-white backdrop-blur-xl">

                <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">

                  Live Countdown

                </p>

                <div className="mt-4">

                  <CountdownTimer
                    targetDate={new Date(siteData.weddingDate)}
                    compact
                  />

                </div>

              </div>

            </div>

            {/* Bottom Tagline */}
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-[#f3e7d0]/80 backdrop-blur-md">

              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.8)]" />

              A celebration filled with tradition, elegance, and timeless memories.

            </div>

          </motion.div>

          {/* RIGHT INVITATION CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:block"
          >

            {/* Glow */}
            <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.2),transparent_70%)] blur-3xl" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur-2xl">

              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(110,31,45,0.88),rgba(62,15,27,0.92),rgba(212,175,55,0.16))] p-8">

                <div>

                  <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37]/90">

                    Wedding Invitation

                  </p>

                  <p className="mt-3 font-serif text-4xl text-[#f4d27a]">

                    {siteData.initials}

                  </p>

                </div>

                {/* Message */}
                <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-black/20 p-6 backdrop-blur-md">

                  <p className="text-sm leading-8 text-[#f5ead4]/80">

                    Two hearts, two families, and one beautiful journey.
                    We warmly invite you to celebrate this joyful occasion
                    and bless us with your presence.

                  </p>

                </div>

                {/* Tags */}
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-[#f1cd74]">

                    Love

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-[#f1cd74]">

                    Tradition

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-[#f1cd74]">

                    Celebration

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[#f3e7d0]/70 lg:block"
        >

          <span className="flex items-center gap-2 text-sm">

            <ChevronDown className="h-4 w-4" />

            Scroll

          </span>

        </motion.a>

      </div>

    </section>
  );
}