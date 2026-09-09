import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-border pb-16 pt-36 sm:pt-44">
      <div className="mx-auto w-full max-w-4xl px-5 text-center lg:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground sm:text-xs">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-3xl font-light uppercase tracking-[0.08em] sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}

export function ComingSoon({ note }: { note: string }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-5 text-center lg:px-8">
        <div className="border border-border p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Coming soon</p>
          <h2 className="mt-4 text-xl font-light uppercase tracking-[0.06em] sm:text-2xl">
            This page is being prepared
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{note}</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center border border-foreground px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors hover:bg-foreground hover:text-background"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{children}</div>;
}
