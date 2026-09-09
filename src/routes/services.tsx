import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, PageHero } from "@/components/PageBits";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ARC Studio Architecture, Build & Interiors" },
      {
        name: "description",
        content:
          "Architectural design, interior design and execution, construction and 3D visualization by ARC Studio, Islamabad. Detailed service pages coming soon.",
      },
      { property: "og:title", content: "Services — ARC Studio" },
      { property: "og:description", content: "Architecture, interiors, construction and 3D visualization." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Coming Soon"
        intro="Detailed service pages with scope, timelines and process are on the way."
      />
      <ComingSoon note="A summary of everything we offer is available on the home page." />
    </>
  );
}
