import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ARC Studio | Coming Soon" },
      {
        name: "description",
        content:
          "The ARC Studio about page is coming soon.",
      },
      { property: "og:title", content: "About ARC Studio — Coming Soon" },
      {
        property: "og:description",
        content: "The ARC Studio about page is coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return <ComingSoon page="About" />;
}
