import { createFileRoute, Link } from "@tanstack/react-router";
import { img, services, site, testimonials, whyUs } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARC Studio — Architecture, Build & Interiors | Islamabad" },
      {
        name: "description",
        content:
          "ARC Studio by M.M Associates designs and builds timeless residential and commercial spaces across Pakistan. Architecture, construction, interiors and 3D visualization.",
      },
      { property: "og:title", content: "ARC Studio — Architecture, Build & Interiors" },
      {
        property: "og:description",
        content: "Designed with purpose. Built to last. Architecture, build and interiors under one roof.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden">
        <img
          src={img.hero}
          alt="Minimal concrete house facade designed by ARC Studio"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="relative mx-auto w-full max-w-4xl px-5 pt-28 text-center lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-muted-foreground sm:text-xs">
            {site.tagline}
          </p>
          <h1 className="mt-8 text-3xl font-light uppercase leading-[1.15] tracking-[0.04em] sm:text-5xl lg:text-6xl">
            Designed with purpose.
            <br />
            Built to last.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Spaces that feel like home — where thoughtful design meets a better way of living.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="border border-foreground bg-foreground px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-background transition-colors hover:bg-transparent hover:text-foreground"
            >
              Start your project
            </Link>
            <Link
              to="/projects"
              className="border border-border px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors hover:border-foreground"
            >
              View our work
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <img
            src={img.studio}
            alt="ARC Studio architects reviewing drawings"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full object-cover grayscale"
          />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              Architecture • Build • Interiors
            </p>
            <h2 className="mt-5 text-2xl font-light uppercase tracking-[0.06em] sm:text-3xl">About us</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                At ARC Studio, we believe great spaces do more than look beautiful. They work better, feel better, and
                last longer.
              </p>
              <p>
                We are a team of architects, designers and builders dedicated to creating timeless residential and
                commercial spaces across Pakistan. From the first sketch to the final brick, we handle every detail
                with precision, honesty and care.
              </p>
              <p className="text-foreground">Our mission is simple: Design with purpose. Build with integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">What we do</p>
          <h2 className="mt-5 text-2xl font-light uppercase tracking-[0.06em] sm:text-3xl">Our services</h2>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
            {services.map((s) => (
              <article key={s.slug} className="bg-background p-8 lg:p-10">
                <h3 className="text-base font-medium uppercase tracking-[0.12em]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-border py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Why ARC Studio</p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => (
              <div key={w.title}>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-3 text-sm font-medium uppercase tracking-[0.12em]">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio intro */}
      <section className="border-t border-border">
        <div className="relative">
          <img
            src={img.interior}
            alt="Minimal monochrome interior by ARC Studio"
            width={1200}
            height={900}
            loading="lazy"
            className="h-[52vh] w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-5 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Our work</p>
              <h2 className="mt-5 text-2xl font-light uppercase tracking-[0.06em] sm:text-3xl">
                Every project is a story
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
                Explore homes, offices and spaces we&rsquo;ve brought to life.
              </p>
              <Link
                to="/projects"
                className="mt-8 inline-flex border border-foreground px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors hover:bg-foreground hover:text-background"
              >
                View all projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-border py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            What our clients say
          </p>
          {testimonials.map((t) => (
            <figure key={t.name} className="mt-8">
              <blockquote className="text-lg font-light leading-relaxed sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-2xl font-light uppercase tracking-[0.06em] sm:text-4xl">
            Let&rsquo;s build something great
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ready to start your project? We&rsquo;d love to hear about your vision.
          </p>
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
            <a href={`tel:${site.phoneTel}`} className="bg-background p-6 transition-colors hover:bg-card">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Phone / WhatsApp</p>
              <p className="mt-2 text-sm">{site.phone}</p>
            </a>
            <a href={`mailto:${site.email}`} className="bg-background p-6 transition-colors hover:bg-card">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</p>
              <p className="mt-2 break-all text-sm">{site.email}</p>
            </a>
            <div className="bg-background p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Location</p>
              <p className="mt-2 text-sm">{site.address}</p>
            </div>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex border border-foreground bg-foreground px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-background transition-colors hover:bg-transparent hover:text-foreground"
          >
            Get free consultation
          </a>
        </div>
      </section>
    </>
  );
}
