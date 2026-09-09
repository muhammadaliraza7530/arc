import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand, Prose } from "@/components/PageBits";
import { Reveal, SectionHeading } from "@/components/ui-bits";
import { img } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ARC Studio" },
      {
        name: "description",
        content: "ARC Studio creates timeless residential and commercial spaces across Pakistan.",
      },
      { property: "og:title", content: "About ARC Studio" },
      {
        property: "og:description",
        content: "Architecture, build and interiors with purpose and integrity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Architecture • Build • Interiors"
        title="Design with purpose. Build with integrity."
        intro="We create timeless residential and commercial spaces across Pakistan, from the first sketch to the final brick."
        image={img.luxuryVilla}
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading
            eyebrow="About ARC Studio"
            title="Great spaces do more than look beautiful."
          />
          <Reveal>
            <Prose>
              <p>
                At ARC Studio, we believe great spaces work better, feel better, and last longer.
              </p>
              <p>
                We are a team of architects, designers, and builders dedicated to creating
                thoughtful places for living, working, and gathering. Every project is handled with
                precision, honesty, and care.
              </p>
            </Prose>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
