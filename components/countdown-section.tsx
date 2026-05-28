"use client";

import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/countdown-timer";
import { SectionHeading } from "@/components/section-heading";
import { siteData } from "@/lib/site-data";

export function CountdownSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Now"
        title="Countdown Celebration"
        description="A living timer that keeps the excitement alive as the big day gets closer."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-12 rounded-[2rem] border border-white/40 bg-[linear-gradient(135deg,rgba(110,31,45,0.95),rgba(90,21,35,0.92),rgba(212,175,55,0.3))] p-6 text-white shadow-soft md:p-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Final Spark</p>
          <h3 className="mt-3 font-serif text-3xl md:text-5xl">A few more steps until the celebration begins</h3>
          <p className="mt-4 text-sm leading-7 text-white/80">
            Floating petals, soft light, and a real-time timer make the page feel alive.
          </p>
        </div>

        <div className="mt-8">
          <CountdownTimer targetDate={new Date(siteData.weddingDate)} />
        </div>
      </motion.div>
    </section>
  );
}
