import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — ARC Studio | Coming Soon" },
      {
        name: "description",
        content:
          "The ARC Studio projects page is coming soon.",
      },
      { property: "og:title", content: "Projects — ARC Studio | Coming Soon" },
      {
        property: "og:description",
        content: "The ARC Studio projects page is coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return <ComingSoon page="Projects" />;
}
