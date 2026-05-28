import { EventsSection } from "@/components/events-section";
import { SiteShell } from "@/components/site-shell";

export default function EventsPage() {
  return (
    <SiteShell currentPath="/events">
      <EventsSection />
    </SiteShell>
  );
}
