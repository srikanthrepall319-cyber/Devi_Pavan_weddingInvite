"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-context";
import { copy } from "@/lib/i18n";
import { siteData } from "@/lib/site-data";
import { LanguageToggle } from "@/components/language-toggle";
import { MusicToggle } from "@/components/music-toggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Home, CalendarDays, Flower2, Mail } from "lucide-react";
import { FloatingPetals } from "@/components/floating-petals";
import { Footer } from "@/components/footer";

const nav = [
  { href: "/", key: "navHome", icon: Home },
  { href: "/events", key: "navEvents", icon: CalendarDays },
  { href: "/traditions", key: "navTraditions", icon: Flower2 },
  { href: "/contact", key: "navContact", icon: Mail }
] as const;

export function SiteShell({
  children,
  currentPath
}: {
  children: React.ReactNode;
  currentPath: "/" | "/events" | "/traditions" | "/contact";
}) {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingPetals />
      <header className="sticky top-0 z-40 border-b border-white/30 bg-white/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-3 md:flex-row justify-between md:px-6">
          <Link href="/" className="group flex items-center gap-3">
            <div className="diya-glow flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-white shadow-glow font-serif text-lg font-bold">
              🕉
            </div>
            <div>
              <p className="font-serif text-lg font-semibold tracking-wide text-maroon">
                {siteData.coupleShort}
              </p>
              <p className="text-xs text-ink/70">Wedding Invitation</p>
            </div>
          </Link>

         <nav className="flex flesh-wrap items-center justify-center gap-2">
            {nav.map((item) => {
              const Icon = item.icon;
              const active = item.href === currentPath;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs transition",
                    active
                      ? "bg-maroon text-white shadow-glow"
                      : "text-ink/75 hover:bg-white/70 hover:text-maroon"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {t[item.key]}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <MusicToggle />
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  );
}
