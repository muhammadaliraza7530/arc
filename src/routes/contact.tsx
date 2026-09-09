import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageBits";
import { Reveal, SectionHeading } from "@/components/ui-bits";
import { img, site } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ARC Studio" },
      {
        name: "description",
        content: "Start a conversation with ARC Studio about your next space.",
      },
      { property: "og:title", content: "Contact ARC Studio" },
      {
        property: "og:description",
        content: "Get a free consultation for your architecture, build or interiors project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's build something great"
        title="Ready to start your project?"
        intro="We’d love to hear about your vision. Tell us what you are planning and we’ll take it from there."
        image={img.luxuryHouse}
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading eyebrow="Get in touch" title="Let’s talk about your space." />
          <Reveal>
            <div className="lit-panel bg-card p-7 sm:p-9">
              <ul className="space-y-6 text-sm text-muted-foreground">
                <li className="flex gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a href={`tel:${site.phoneTel}`} className="hover:text-primary">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a href={`mailto:${site.email}`} className="hover:text-primary">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{site.address}</span>
                </li>
              </ul>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
              >
                Get Free Consultation
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
