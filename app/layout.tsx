import type { Metadata } from "next";
import { GlobalAudio } from "@/components/global-audio";
import { InvitationProvider } from "@/components/invitation-context";
import { Cormorant_Garamond, Jost, Noto_Sans_Telugu } from "next/font/google";
// TypeScript may complain about importing a global CSS file in some configs.
// Ignore the next line's type check for the side-effect CSS import.
// @ts-ignore
import "./globals.css";
import { LanguageProvider } from "@/components/language-context";
import { siteData } from "@/lib/site-data";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const telugu = Noto_Sans_Telugu({
  weight: ["400", "500", "600"],
  subsets: ["telugu"],
  variable: "--font-telugu",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: siteData.seoTitle,
    template: `%s · ${siteData.coupleShort}`,
  },
  description: siteData.seoDescription,
  keywords: [
    "wedding invitation",
    "Andhra wedding",
    "Telugu wedding",
    "cinematic wedding site",
  ],
  openGraph: {
    title: siteData.seoTitle,
    description: siteData.seoDescription,
    url: siteData.siteUrl,
    siteName: siteData.coupleShort,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seoTitle,
    description: siteData.seoDescription,
  },
  alternates: {
    canonical: siteData.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.variable} ${cormorant.variable} ${telugu.variable} font-sans antialiased`}
      >
        <GlobalAudio>
          <InvitationProvider>
            <LanguageProvider>{children}</LanguageProvider>
          </InvitationProvider>
        </GlobalAudio>
      </body>
    </html>
  );
}
