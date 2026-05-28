import { TraditionsSection } from "@/components/traditions-section";
import { SiteShell } from "@/components/site-shell";

export default function TraditionsPage() {
  return (
    <SiteShell currentPath="/traditions">
      <TraditionsSection />
    </SiteShell>
  );
}
