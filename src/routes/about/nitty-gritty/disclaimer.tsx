import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about/nitty-gritty/disclaimer")({
  head: () =>
    meta(
      "Disclaimer",
      "The legal disclaimer governing the use of information on the WASPA website.",
    ),
  component: () => (
    <Shell>
      <PageHero
        crumb="The Nitty Gritty"
        title="Disclaimer"
        sub="The legal notice governing the use of information on this website."
        img={hero}
      />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-lg border bg-card p-6">
          <p className="leading-relaxed text-muted-foreground">
            The information contained on this web site does not necessarily represent the views of WASPA, its Board,
            its staff, or its members. Nothing on this site should be construed as legal advice. WASPA, the WASPA
            Board, WASPA staff and WASPA's members cannot be held liable in any way if information on this site is
            taken as legal advice by anyone visiting the site.
          </p>
        </div>
        <Link
          to="/about/nitty-gritty"
          className="mt-8 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:text-accent"
        >
          ← Back to The Nitty Gritty
        </Link>
      </article>
    </Shell>
  ),
});
