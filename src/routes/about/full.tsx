import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about/full")({
  head: () =>
    meta(
      "About WASPA",
      "WASPA is South Africa's self-regulatory body for the mobile-based Value Added Services industry: its Code of Conduct, complaints process and compliance work.",
    ),
  component: AboutFull,
});

const operators = ["Cell C", "MTN", "Telkom", "Vodacom"];

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mt-12 border-b pb-2 font-display text-sm font-bold uppercase tracking-widest text-primary">{children}</h2>;
}

function AboutFull() {
  return (
    <Shell>
      <PageHero
        crumb="About WASPA"
        title="About WASPA"
        sub="Who we are, how we regulate the industry and how we protect consumers."
        img={hero}
      />

      <article className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-lg leading-relaxed">
          The Wireless Application Service Providers' Association (WASPA) is a South African industry association
          established in 2004 as a self-regulatory body to represent and regulate its voluntary members operating in the
          mobile-based Value Added Services (VAS) industry, also known as Wireless Application Service Providers (WASPs).
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          WASPA is committed to promoting responsible business practices, encouraging compliance and supporting a fair,
          transparent and sustainable mobile services industry.
        </p>

        <SectionHeading>Our Role in the Industry</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          WASPA develops and administers an industry Code of Conduct and Advertising Rules, first introduced in 2005,
          which set standards for responsible service provision and marketing within the industry.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Membership of an industry body with a recognised Code of Conduct is a requirement imposed by South Africa's
          mobile network operators on WASPs operating within this sector. These operators include:
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {operators.map((o) => (
            <li key={o} className="flex items-center gap-2 rounded-lg border bg-card px-4 py-3 font-semibold">
              <ChevronRight className="h-4 w-4 text-accent" /> {o}
            </li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          WASPA works alongside these mobile network operators and its members to promote adherence to the Code of
          Conduct and encourage responsible industry practices.
        </p>

        <SectionHeading>Independent Complaints and Enforcement</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          An important part of WASPA's role is ensuring that consumers and other interested parties have access to an
          independent complaints-handling process.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Anyone may lodge a complaint relating to a potential breach of the WASPA Code of Conduct. Each complainant
          receives a reference number, and complaints are processed by an independent Secretariat in accordance with a
          mandated civil procedure policy.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Complaints are adjudicated by independent ICT lawyers, supported by a three-person appeals panel. In cases
          where there is evidence of immediate and ongoing consumer harm, an emergency panel of three WASPA adjudicators
          may convene to suspend offending services pending formal adjudication.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Adjudicators may impose appropriate sanctions for breaches of the Code, including fines, suspensions, remedies,
          refunds or expulsion from WASPA. Completed adjudications are published on the WASPA website.
        </p>

        <SectionHeading>Compliance and Industry Oversight</SectionHeading>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          WASPA also operates a dedicated compliance department responsible for monitoring advertising and testing
          services on an ongoing basis to assess compliance with its Code of Conduct.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Through its self-regulatory framework, independent complaints process and compliance activities, WASPA works to
          promote accountability, protect consumers and support a responsible mobile services industry in South Africa.
        </p>

        <div className="mt-12 rounded-lg bg-muted p-6">
          <h3 className="font-display text-lg font-bold">Explore WASPA further</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Discover our governance structures, Code of Conduct, membership opportunities and consumer support resources.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            <Link to="/code-of-conduct" className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:brightness-110">Code of Conduct</Link>
            <Link to="/for-business/about-membership" className="rounded-md bg-secondary px-4 py-2 text-secondary-foreground hover:brightness-95">Membership</Link>
            <Link to="/consumer-support" className="rounded-md border px-4 py-2 hover:bg-background">Consumer Support</Link>
          </div>
        </div>

        <Link to="/about" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent">
          ← Back to About WASPA
        </Link>
      </article>
    </Shell>
  );
}
