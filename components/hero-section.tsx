"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

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
    <section className="relative grain min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Deep cinematic background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(110,31,45,0.55),transparent_50%),linear-gradient(180deg,#180a0e_0%,#260e16_40%,#0f0508_100%)]" />

      {/* Subtle gold radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(201,168,76,0.07),transparent_60%)]" />

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/hero-texture.svg')",
          backgroundSize: "cover",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col items-center px-4 py-12 md:px-6 lg:flex-row lg:items-center">
        <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* ── MOBILE COUPLE PHOTO (shown only on mobile / tablet) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto block w-full max-w-sm overflow-hidden rounded-3xl lg:hidden"
            style={{ aspectRatio: "4/3" }}
          >
            {/* Photo */}
            <img
              src="/couple.webp"
              alt="Bride and Groom"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* 1. Top edge — kills bright sky/tree tops */}
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#180a0e]/90 via-[#180a0e]/30 to-transparent" />

            {/* 2. Left edge fade */}
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#1a0508]/70 to-transparent" />

            {/* 3. Right edge fade */}
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#1a0508]/70 to-transparent" />

            {/* 4. Bottom fade — blends into the dark page + monogram space */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0508]/95 via-[#0f0508]/20 to-transparent" />

            {/* Gold corner accents */}
            <svg
              className="absolute left-3 top-3 h-8 w-8 text-gold/40"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M0 0 L0 14 M0 0 L14 0"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <svg
              className="absolute right-3 top-3 h-8 w-8 text-gold/40"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M32 0 L32 14 M32 0 L18 0"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>

            {/* Monogram overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 text-center">
              <div className="mx-auto mb-2 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <span className="font-serif text-3xl italic text-gold-light">
                  {siteData.initials}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold/70">
                Wedding Invitation
              </p>
            </div>
          </motion.div>

          {/* ── LEFT CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="text-center text-white lg:text-left"
          >
            {/* Badge */}
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-maroon-deep/70 px-5 py-2 text-[11px] uppercase tracking-[0.38em] text-gold-light backdrop-blur-sm">
              {t.invite}
            </p>

            {/* Names */}
            <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-light leading-[1.04] tracking-wide">
              <span className="shimmer-text block">
                {siteData.coupleFull.bride}
              </span>
              <span className="my-2 block font-serif text-xl font-light italic text-gold/60 md:text-2xl">
                &amp;
              </span>
              <span className="shimmer-text block">
                {siteData.coupleFull.groom}
              </span>
            </h1>

            {/* Tagline */}
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-8 text-white/65 lg:mx-0">
              With the blessings of our families, we joyfully invite you to
              celebrate our wedding and share in the warmth of this beautiful
              beginning.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/events">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-gold/25 bg-white/5 px-8 text-[#f8e7c2] backdrop-blur-sm hover:bg-gold/10 hover:text-white"
                >
                  View Events
                </Button>
              </Link>
              <Link href="/traditions">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-8 text-white/60 hover:text-white"
                >
                  Our Traditions
                </Button>
              </Link>
            </div>

            {/* Info cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {/* Wedding Date */}
              <div className="rounded-3xl border border-white/8 bg-white/5 p-5 text-left backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold">
                  Wedding Muhurtham
                </p>
                <p className="mt-3 font-serif text-2xl text-white/90">
                  {formatDate(new Date(siteData.weddingDate), language)}
                </p>
                <p className="mt-1.5 text-sm text-white/45">08:43 PM IST</p>
              </div>

              {/* Countdown */}
              <div className="rounded-3xl border border-white/8 bg-white/5 p-5 text-left backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold">
                  Live Countdown
                </p>
                <div className="mt-3">
                  <CountdownTimer
                    targetDate={new Date(siteData.weddingDate)}
                    compact
                  />
                </div>
              </div>
            </div>

            {/* Footnote badge */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-5 py-2.5 text-sm text-white/55 backdrop-blur-sm">
              A celebration filled with tradition, elegance &amp; timeless
              memories.
            </div>
          </motion.div>

          {/* ── RIGHT COUPLE PHOTO CARD (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Warm ambient glow */}
            <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.2),transparent_65%)] blur-3xl" />
            <div className="absolute -inset-4 rounded-[3rem] bg-[radial-gradient(ellipse_at_bottom,rgba(110,31,45,0.45),transparent_60%)] blur-2xl" />

            {/* Outer glass frame */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-2xl">
              {/* Photo container */}
              <div
                className="relative overflow-hidden rounded-[2rem]"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src="/couple.webp"
                  alt="Bride and Groom"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* 1. Left edge fade — blends into the dark page seamlessly */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1a0508]/80 to-transparent" />

                {/* 2. Right edge fade */}
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#1a0508]/80 to-transparent" />

                {/* 3. Top edge fade — kills the bright sky/tree tops */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#180a0e]/85 via-[#180a0e]/30 to-transparent" />

                {/* 4. Bottom gradient — for name overlay readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0508]/95 via-[#0f0508]/25 to-transparent" />

                {/* Top badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3.5 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_6px_rgba(201,168,76,0.9)]" />
                    Wedding Invitation
                </div>

                {/* Gold corner accents */}
                <svg
                  className="absolute right-3 top-3 h-10 w-10 text-gold/35"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M40 0 L40 16 M40 0 L24 0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <svg
                  className="absolute bottom-[96px] left-3 h-10 w-10 text-gold/35"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M0 40 L0 24 M0 40 L16 40"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>

                {/* Bottom overlay: monogram + names + date */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-10">
                  <p className="font-serif text-4xl italic text-gold-light leading-none">
                    {siteData.initials}
                  </p>

                  <div className="my-3 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                    <span className="text-gold/50 text-xs">✦</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                  </div>

                  <p className="font-serif text-lg text-white/90 leading-snug tracking-wide">
                    {siteData.coupleFull.groom}
                    <span className="mx-2 text-gold/60 font-light italic">
                      &amp;
                    </span>
                    {siteData.coupleFull.bride}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
                      <span className="h-1 w-1 rounded-full bg-gold/60" />
                      Save the Date
                    </div>
                    <span className="font-serif text-gold text-base">
                      27 · 06 · 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Below photo: tradition tags */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] tracking-widest uppercase">
                {["Love", "Tradition", "Celebration"].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-2xl border border-white/8 bg-black/20 py-3 text-gold/70"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-white/40 transition hover:text-white/70 lg:flex"
        >
          <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
