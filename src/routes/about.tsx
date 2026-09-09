import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, PageHero } from "@/components/PageBits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ARC Studio — Architecture, Build & Interiors" },
      {
        name: "description",
        content:
          "ARC Studio by M.M Associates is a team of architects, designers and builders creating timeless spaces across Pakistan. Full page coming soon.",
      },
      { property: "og:title", content: "About ARC Studio" },
      { property: "og:description", content: "Design with purpose. Build with integrity." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Coming Soon"
        intro="Our full studio story, team and philosophy will be here shortly."
      />
      <ComingSoon note="In the meantime, you can read a short introduction to ARC Studio on the home page." />
    </>
  );
}
