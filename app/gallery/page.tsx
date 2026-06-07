import { SiteShell } from "@/components/site-shell";
import { GallerySection } from "@/components/gallery-section";

export default function GalleryPage() {
  return (
    <SiteShell currentPath="/gallery">
      <GallerySection />
    </SiteShell>
  );
}