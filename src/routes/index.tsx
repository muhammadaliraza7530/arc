import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides, process, reasons, services, site, stats } from "@/lib/site-data";
import { projects } from "@/lib/site";
import { Counter, Reveal, SectionHeading } from "@/components/ui-bits";
import { AutoScroller } from "@/components/AutoScroller";
import { PostsRail } from "@/components/PostsRail";
import { TestimonialsRail } from "@/components/Testimonials";
import { CtaBand } from "@/components/PageBits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARC Studio — Architecture, Build & Interiors" },
      {
        name: "description",
        content:
          "ARC Studio by M.M Associates creates architecture, interiors and complete residential builds across Pakistan.",
      },
      { property: "og:title", content: "ARC Studio — Architecture, Build & Interiors" },
      {
        property: "og:description",
        content: "Architecture, build and interiors — designed and delivered by one studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HeroWordmark() {
  const word = "ARC";
  return (
    <h2 className="flex justify-center gap-[0.06em] overflow-hidden text-[13vw] font-extrabold leading-none tracking-[0.06em] text-transparent sm:text-[9vw] lg:text-[7rem]">
      {word.split("").map((c, i) => (
        <span
          key={`${c}-${i}`}
          className="letter-in ember-text inline-block"
          style={{ animationDelay: `${140 + i * 70}ms` }}
        >
          {c}
        </span>
      ))}
    </h2>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {heroSlides.map((s, i) => (
        <img
          key={s.image}
          src={s.image}
          alt={s.title}
          width={1920}
          height={1280}
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ${
            i === index ? "animate-slow-drift opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/62" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-black/55" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pb-16 pt-32 text-center lg:px-8">
        <p className="hero-rise text-[10px] font-bold uppercase tracking-[0.4em] text-primary sm:text-xs">
          {site.tagline}
        </p>
        <HeroWordmark />
        <p className="mx-auto mt-1 text-[11px] font-semibold uppercase tracking-[0.5em] text-foreground/80 sm:text-sm">
          Studio by M.M Associates
        </p>

        <h1
          key={slide.title}
          className="animate-wipe-in mx-auto mt-8 max-w-3xl text-2xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl"
        >
          {slide.title}
        </h1>
        <p
          key={slide.highlight}
          className="animate-rise-in mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base"
        >
          {slide.highlight}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/projects"
            className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
          >
            View Our Work <ArrowRight className="size-4" />
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="size-4" /> Start Your Project
          </a>
        </div>

        <div className="mx-auto mt-12 flex max-w-lg justify-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-primary" : "w-4 bg-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />

      {/*
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Showreel"
            title="See how we build"
            intro="A short film of our sites, elevations and finished homes."
            align="center"
          />
          <Reveal className="mt-10">
            <VideoPlayer src={showreelUrl} poster={img.luxuryVilla} />
          </Reveal>
        </div>
      </section>
      */}

      <section className="border-y border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading
            eyebrow="Architecture • Build • Interiors"
            title="Spaces that work better, feel better, and last longer."
          />
          <Reveal className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              At ARC Studio, we believe great spaces do more than look beautiful. They work better,
              feel better, and last longer.
            </p>
            <p className="mt-5">
              We are a team of architects, designers, and builders dedicated to creating timeless
              residential and commercial spaces across Pakistan. From the first sketch to the final
              brick, we handle every detail with precision, honesty, and care.
            </p>
            <p className="mt-5 font-semibold text-foreground">
              Design with purpose. Build with integrity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/30 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 text-center sm:grid-cols-3 lg:px-8">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <Counter value={s.value} className="ember-text text-4xl font-extrabold sm:text-5xl" />
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services Section (Bottom space fixed) */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Design, construction and finishing under one roof"
            intro="From concept to installation, one accountable team brings your space to life."
          />
          <div className="mt-12">
            <AutoScroller speed={180}>
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={i * 80} className="h-full">
                  <article className="lit-panel flex h-full w-[280px] shrink-0 flex-col overflow-hidden bg-card sm:w-[360px]">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-16/10 w-full shrink-0 object-cover"
                    />
                    <div className="flex flex-col p-5 sm:p-6">
                      <h3 className="text-base font-bold sm:text-lg">{s.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {s.short}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </AutoScroller>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Why ARC Studio" title="A better way to build" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 80}>
                <article className="lit-panel h-full bg-card p-6">
                  <h3 className="text-lg font-bold">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {reason.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Rail Section (Bottom space fixed) */}
      <section className="overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our work"
            title="Every project is a story"
            intro="Explore homes, offices, and spaces we have brought to life."
          />
        </div>
        <div className="mt-12">
          <AutoScroller speed={180}>
            {projects.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="lit-panel flex h-full w-[280px] shrink-0 flex-col overflow-hidden bg-card sm:w-[360px]"
              >
                <img
                  src={p.image}
                  alt={`${p.title}, ${p.location}`}
                  loading="lazy"
                  draggable={false}
                  className="aspect-4/3 w-full shrink-0 object-cover"
                />
                <div className="flex flex-col p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                    {p.status}
                  </span>
                  <h3 className="mt-1.5 text-base font-bold">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.location}</p>
                </div>
              </Link>
            ))}
          </AutoScroller>
        </div>
      </section>

      {/* Branded posts */}
      <section className="overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Latest posts"
            title="Coming soon & on-site updates"
            intro="Our published announcements, shown complete — nothing cropped."
          />
        </div>
        <div className="mt-12">
          <PostsRail />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Our process" title="Four clear stages" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="lit-panel h-full bg-card p-7">
                  <div className="text-4xl font-extrabold text-primary/25">{p.step}</div>
                  <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden border-y border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            intro="Families and developers who trusted us with their plot."
          />
        </div>
        <div className="mt-12">
          <TestimonialsRail />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
