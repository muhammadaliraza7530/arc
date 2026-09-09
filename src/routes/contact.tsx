import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon, PageHero } from "@/components/PageBits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ARC Studio — Islamabad, Pakistan" },
      {
        name: "description",
        content:
          "Talk to ARC Studio about your project. Call or WhatsApp +92 300 0037272 or email info@buildarcstudio.com. Full contact page coming soon.",
      },
      { property: "og:title", content: "Contact ARC Studio" },
      { property: "og:description", content: "Call or WhatsApp +92 300 0037272 to start your project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Coming Soon"
        intro="Our enquiry form and office details are being prepared."
      />
      <ComingSoon note="You can still reach us today — phone, WhatsApp and email are listed at the bottom of the home page." />
    </>
  );
}
