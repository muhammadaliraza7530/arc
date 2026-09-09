import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function ComingSoon({ page }: { page: string }) {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-5 pb-20 pt-32">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto w-full max-w-4xl text-center">
        <img
          src="/logo.jpeg"
          alt="ARC Studio by M.M Associates"
          className="mx-auto w-full max-w-md object-contain"
        />
        <div className="mx-auto mt-10 h-px w-16 bg-primary" />
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          {page}
        </p>
        <h1 className="mt-4 text-4xl font-semibold uppercase sm:text-6xl lg:text-7xl">
          Coming Soon
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          We are carefully preparing this page. Please return soon to explore the complete ARC
          Studio experience.
        </p>
        <Link
          to="/"
          className="mt-9 inline-flex items-center gap-2 border border-border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="size-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}
