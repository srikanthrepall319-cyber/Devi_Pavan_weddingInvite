import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_Telugu } from "next/font/google";
// TypeScript may complain about importing a global CSS file in some configs.
// Ignore the next line's type check for the side-effect CSS import.
// @ts-ignore
import "./globals.css";
import { LanguageProvider } from "@/components/language-context";
import { siteData } from "@/lib/site-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });
const telugu = Noto_Sans_Telugu({ weight: ["400", "500", "600", "700"], subsets: ["telugu"], variable: "--font-telugu" });

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: siteData.seoTitle,
    template: `%s | ${siteData.coupleShort}`
  },
  description: siteData.seoDescription,
  keywords: ["wedding invitation", "Andhra wedding", "Telugu wedding", "luxury microsite", "Next.js", "Vercel"],
  openGraph: {
    title: siteData.seoTitle,
    description: siteData.seoDescription,
    url: siteData.siteUrl,
    siteName: siteData.coupleShort,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seoTitle,
    description: siteData.seoDescription
  },
  alternates: {
    canonical: siteData.siteUrl
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} ${telugu.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
