import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ARC Studio | Coming Soon" },
      {
        name: "description",
        content:
          "ARC Studio services are coming soon.",
      },
      { property: "og:title", content: "Services — ARC Studio | Coming Soon" },
      {
        property: "og:description",
        content: "ARC Studio services are coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return <ComingSoon page="Services" />;
}
