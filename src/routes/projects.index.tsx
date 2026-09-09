import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, PageHero } from "@/components/PageBits";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Portfolio — ARC Studio Projects" },
      {
        name: "description",
        content:
          "Homes, offices and commercial spaces designed and built by ARC Studio across Pakistan. Full portfolio coming soon.",
      },
      { property: "og:title", content: "Portfolio — ARC Studio" },
      { property: "og:description", content: "Every project is a story. Our portfolio is coming soon." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Coming Soon"
        intro="We are putting together photography of our completed homes, offices and interiors."
      />
      <ComingSoon note="Message us on WhatsApp and we can share recent project photos directly." />
    </>
  );
}
