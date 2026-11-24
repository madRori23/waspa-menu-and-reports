import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Info, ListChecks, Network, Target } from "lucide-react";
import { PageHero, Shell, Tile, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about/")({
  head: () => meta("About WASPA", "Representing and strengthening South Africa's mobile services industry."),
  component: () => (
    <Shell>
      <PageHero crumb="About WASPA" title="About WASPA" sub="Representing and strengthening South Africa's mobile services industry." img={hero} />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-10 sm:grid-cols-3 lg:grid-cols-5">
        <Tile icon={Info} title="About WASPA" desc="Who we are and what the association does for the mobile services industry." to="/about/full" />
        <Tile icon={Network} title="Office Bearers & Structures" desc="Meet the leadership team and see how WASPA is organised." to="/about/office-bearers" />
        <Tile icon={FileText} title="WASPA Constitution" desc="The founding document that governs how the association operates." to="/about/constitution" />
        <Tile icon={Target} title="History & Mission" desc="Where WASPA comes from and what we aim to achieve." to="/about/history-and-mission" />
        <Tile icon={ListChecks} title="The Nitty Gritty" desc="The practical details: policies, procedures and how things work day to day." to="/about/nitty-gritty" />
      </div>

      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="font-display text-2xl font-bold">About WASPA</h2>
        <p className="mt-3 text-muted-foreground">
          The Wireless Application Service Providers' Association (WASPA) is a South African industry association
          established in 2004 as a self-regulatory body to represent and regulate its voluntary members operating in the
          mobile-based Value Added Services (VAS) industry, also known as Wireless Application Service Providers (WASPs).
        </p>
        <Link to="/about/full" className="mt-4 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:text-accent">
          Read more
        </Link>
      </section>
    </Shell>
  ),
});
