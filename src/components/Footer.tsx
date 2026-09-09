import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <img src={site.logo} alt="ARC Studio logo" className="h-10 w-auto object-contain" />
          <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{site.tagline}</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{site.byline}</p>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">Quick links</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-foreground">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-foreground">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        © {new Date().getFullYear()} ARC Studio. All rights reserved.
      </div>
    </footer>
  );
}
