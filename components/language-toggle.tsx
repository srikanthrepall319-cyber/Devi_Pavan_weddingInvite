"use client";

import { useLanguage } from "@/components/language-context";
import { Button } from "@/components/ui";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button onClick={toggleLanguage} variant="ghost" size="sm" className="rounded-full border border-white/40 bg-white/50">
      <Languages className="mr-2 h-4 w-4" />
      {language === "en" ? "తెలుగు" : "English"}
    </Button>
  );
}
