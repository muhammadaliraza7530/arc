import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/PageBits";
import { Reveal, SectionHeading } from "@/components/ui-bits";
import { img, services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ARC Studio" },
      {
        name: "description",
        content: "Architecture, interiors, construction and 3D visualisation by one studio.",
      },
      { property: "og:title", content: "Services — ARC Studio" },
      {
        property: "og:description",
        content:
          "Explore ARC Studio's architecture, interiors, construction and visualisation services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Everything your space needs"
        intro="From concept to completion, our architects, designers, and builders work as one team."
        image={img.courtyard}
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Our services" title="Thoughtful design. Reliable execution." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 5).map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <article className="lit-panel h-full overflow-hidden bg-card">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-16/10 w-full object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold">{service.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.short}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
