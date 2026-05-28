"use client";

import { motion } from "framer-motion";
import { Copy, MessageCircle, QrCode, Phone, Mail } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Card, Button } from "@/components/ui";
import { QRCodeCanvas } from "qrcode.react";
import { downloadTextFile } from "@/lib/utils";

export function ContactSection() {
  const inviteUrl = siteData.siteUrl;

  const shareWhatsApp = () => {
    const msg = encodeURIComponent(`You are invited to our wedding! Open this link: ${inviteUrl}`);
    window.open(`https://wa.me/?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Share"
        title="Contact & Sharing"
        description="For easy sharing, quick questions, and a QR code that can be shown on phones."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="border-gold/20">
          <h3 className="font-serif text-3xl text-maroon">Thank you</h3>
          <p className="mt-4 text-sm leading-7 text-ink/80">
            We are grateful for your blessings and presence on our special day.
          </p>

          <div className="mt-6 space-y-3 text-sm text-ink/80">
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> {siteData.contact.phone}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={shareWhatsApp}>
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Share
            </Button>
            <Button variant="outline" onClick={() => downloadTextFile("invite-link.txt", inviteUrl)}>
              <Copy className="mr-2 h-4 w-4" />
              Copy Link
            </Button>
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="flex h-full flex-col items-center justify-center border-gold/20 text-center">
            <div className="rounded-[2rem] bg-white p-5 shadow-soft">
              <QRCodeCanvas value={inviteUrl} size={180} includeMargin />
            </div>
            <div className="mt-5 rounded-full bg-maroon px-4 py-2 text-xs uppercase tracking-[0.35em] text-white">
              <QrCode className="mr-2 inline h-3.5 w-3.5" />
              QR Invitation
            </div>
            <p className="mt-4 text-sm text-ink/70">{siteData.contact.venueNote}</p>
          </Card>
        </motion.div>
      </div>

      <div className="mt-6 text-center text-sm text-ink/60">
        Made with love · {siteData.initials}
      </div>
    </section>
  );
}
