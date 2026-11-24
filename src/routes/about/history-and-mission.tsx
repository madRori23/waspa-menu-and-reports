import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about/history-and-mission")({
  head: () =>
    meta(
      "History & Mission Statement",
      "WASPA's mission statement, success factors, and the history of how the association was formed in 2004.",
    ),
  component: HistoryMissionPage,
});

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mt-12 border-b pb-2 font-display text-sm font-bold uppercase tracking-widest text-primary first:mt-0">
      {children}
    </h2>
  );
}

function Q({ children }: { children: string }) {
  return <h3 className="mt-8 font-display text-lg font-bold text-foreground">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>;
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-6 leading-relaxed text-muted-foreground">
      {items.map((i, k) => (
        <li key={k}>{i}</li>
      ))}
    </ul>
  );
}

function HistoryMissionPage() {
  return (
    <Shell>
      <PageHero
        crumb="About WASPA"
        title="History & Mission Statement"
        sub="Where WASPA comes from and what we aim to achieve."
        img={hero}
      />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <SectionHeading>Mission statement</SectionHeading>
        <P>
          WASPA&rsquo;s mission is to provide a non-profit forum in which members can address issues of common interest
          and interface with industry stakeholders, network operators, government and regulatory organisations, both
          locally and internationally so that end-users receive world-class service and industry participants earn a
          fair return on their investments.
        </P>
        <P>WASPA&rsquo;s mission success factors are to:</P>
        <Bullets
          items={[
            "Determine the needs of end-users in South Africa on an on-going basis;",
            "Be a source and repository of relevant information for its members;",
            "Promote ethical and sound business practices amongst its members;",
            "Provide guidance from time to time on any regulatory issues that may affect WASPA and its members;",
            "Influence industry regulation and policy in South Africa concerning structures, policies, tariffs and competition;",
            "Support and promote the implementation of regulated competition in the mobile service providers' industry;",
            "Keep track of international communication trends;",
            "Promote staff development and training in respect of its members;",
            "Support where possible the social and economic development objectives of governments and civil society;",
            "Promote effective cooperation and partnership amongst members and other organisations in attainment of these objectives.",
          ]}
        />

        <SectionHeading>History</SectionHeading>

        <Q>Motivation for the formation of WASPA</Q>
        <P>
          Mike Silber prepared a presentation detailing the motivation for the formation of WASPA. The presentation is
          available as a PDF download here: Waspa Motivation.pdf
        </P>

        <Q>Formation</Q>
        <P>
          The Wireless Application Service Providers&rsquo; Association (WASPA) was launched on 26 August 2004 in
          Sandown, Gauteng with the full support of the three network operators: Cell C, MTN and Vodacom. The mobile
          service industry was in a key stage of development, with growing public demand for services, and an increasing
          number of organisations providing mobile services.
        </P>
        <P>
          In order to uphold public perception of these services and to protect against bad practices, it was decided
          that a strong industry body was needed, with an appropriate Code of Conduct, representing the interests of its
          members and consumers, by enforcing the good practices established by this Code.
        </P>
        <P>The association intended to provide the following additional benefits as it grew and matured:</P>
        <Bullets
          items={[
            "A public complaints mechanism managed by persons trusted by both WASPs and the public;",
            "The option to nominate the industry association as the designated agent upon receipt of a take-down notification as referred to in Section 77 of the Act;",
            "Industry self-regulation/governance – a WASP sector with strong self-regulation is less likely to be subject to external regulation (from government, networks etc);",
            "Establishment of public trust, for example, by the development of advertising guidelines for paid-for content services, or greater publicity of the WASPA Code of Conduct.",
          ]}
        />
        <P>
          The potential to lobby and represent the WASP industry on matters of mutual interest, in particular legal and
          regulatory issues that affect WASPs. Lobbying as an industry group is usually more effective than individual
          representations. Areas where such activity may take place include:
        </P>
        <Bullets
          items={[
            "Proposed convergence legislation;",
            "The provision of adult content and appropriate protection measures for minors;",
            "Advertising and marketing codes of conduct;",
            "Proposed privacy legislation;",
            "Interaction with the Film and Publication Board on the questions of adult content and child pornography legislation;",
            "Interaction with the sector regulator, ICASA;",
            "Interaction with government; and",
            "Interaction with the existing and future networks on matters of mutual interest.",
          ]}
        />
        <P>The opportunity to network with members and foster support structures as well as special interest groups.</P>

        <Link
          to="/about"
          className="mt-12 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:text-accent"
        >
          ← Back to About WASPA
        </Link>
      </article>
    </Shell>
  );
}
