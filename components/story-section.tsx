"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui";
import { useLanguage } from "@/components/language-context";
import { copy } from "@/lib/i18n";

export function StorySection() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section id="story" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Journey"
        title={t.story}
        description="A short, elegant timeline that feels warm, personal, and easy to read."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {siteData.story.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
          >
            <Card className="h-full border-gold/20 bg-white/75">
              <p className="text-xs uppercase tracking-[0.35em] text-gold">{item.year}</p>
              <h3 className="mt-3 font-serif text-2xl text-maroon">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/80">{item.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
