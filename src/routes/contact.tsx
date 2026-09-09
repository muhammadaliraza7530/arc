import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ARC Studio | Coming Soon" },
      {
        name: "description",
        content:
          "The ARC Studio contact page is coming soon.",
      },
      { property: "og:title", content: "Contact ARC Studio — Coming Soon" },
      {
        property: "og:description",
        content: "The ARC Studio contact page is coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <ComingSoon page="Contact" />;
}
