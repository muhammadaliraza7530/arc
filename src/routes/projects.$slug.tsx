import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/projects/$slug")({
  head: () => ({
    meta: [
      { title: "Project — ARC Studio | Coming Soon" },
      { name: "description", content: "ARC Studio project details are coming soon." },
      { property: "og:title", content: "Project — ARC Studio | Coming Soon" },
      { property: "og:description", content: "ARC Studio project details are coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  return <ComingSoon page="Project" />;
}
