import { createFileRoute, Link } from "@tanstack/react-router";
import { Gavel, Mail, Scale, ShieldAlert, Receipt, FileText } from "lucide-react";
import type { ReactNode } from "react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-2xl font-bold text-primary">{children}</h2>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>;
}

function ToolCard({ icon: Icon, title, children }: { icon: typeof FileText; title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-secondary" />
        <h3 className="font-display text-lg font-bold text-primary">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export const Route = createFileRoute("/consumer-support/complaints-process")({
  head: () =>
    meta(
      "The Complaints Process",
      "How to lodge a complaint with WASPA, and how the informal and formal complaints processes work.",
    ),
  component: () => (
    <Shell>
      <PageHero
        crumb="Consumer Support"
        title="The Complaints Process"
        sub="How to lodge a complaint about a mobile service, and what happens next."
        img={hero}
      />

      <div className="mx-auto max-w-3xl px-4 py-10">
        <SectionHeading>Online tools for lodging complaints</SectionHeading>
        <P>WASPA provides a number of different online tools for lodging complaints about mobile services:</P>

        <div className="mt-6 space-y-4">
          <ToolCard icon={ShieldAlert} title="Report SMS scams and spam">
            Use the report SMS scams and spam form if you have received an unsolicited commercial message (spam) and
            you would like to report this to WASPA. If you are able to identify a specific WASPA member, we will let
            that member know that you would like to be removed from their database.
          </ToolCard>
          <ToolCard icon={Receipt} title="Report unwanted billing">
            Use the report unwanted billing form if you are being charged for WASP services without your permission.
            Based on the information you provide here, WASPA will try make sure that the services for which you are
            being charged are cancelled. Please note that we can only assist with charges resulting from services
            offered by WASPA members. If you have a more general billing problem, you will need to ask your service
            provider for assistance.
          </ToolCard>
          <ToolCard icon={FileText} title="Lodge a complaint">
            Use the complaints form if you believe that a WASPA member has acted in breach of the WASPA Code of
            Conduct. The complaints process is more rigorous than the process used for SMS spam and billing queries,
            so you should expect it to take longer to get resolved. Often, complaints are handled by an independent
            ICT lawyer who assesses the merits of complaint.
          </ToolCard>
        </div>

        <div className="mt-12">
          <SectionHeading>Informal resolution or formal review?</SectionHeading>
          <P>
            Most complaints lodged with WASPA are initially handled using the informal complaints process. The goal of
            this process is to provide prompt and efficient assistance for a consumer who has a complaint. The WASPA
            member is given an opportunity (and five days) to resolve the matter directly with the complainant.
          </P>
          <P>
            For complaints that have an impact on a large number of consumers, or which involve a serious breach of
            the WASPA Code, the formal complaints process is used. Both the complainant and the relevant WASPA member
            are required to provide evidence to an independent adjudicator, who assesses the facts of the case and
            makes a ruling.
          </P>
          <P>
            An adjudicator's ruling can be appealed, in which case it is reviewed by a panel of three independent
            adjudicators. This panel gives a final ruling, and may amend any sanction imposed by an adjudicator.
          </P>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-secondary/40 bg-secondary/10 p-5">
              <Scale className="h-6 w-6 text-secondary" />
              <h3 className="mt-2 font-display font-bold text-primary">Informal process</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                The member gets five days to resolve the matter directly with you.
              </p>
            </div>
            <div className="rounded-lg border border-secondary/40 bg-secondary/10 p-5">
              <Gavel className="h-6 w-6 text-secondary" />
              <h3 className="mt-2 font-display font-bold text-primary">Formal process</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                An independent adjudicator assesses the evidence and makes a ruling.
              </p>
            </div>
            <div className="rounded-lg border border-secondary/40 bg-secondary/10 p-5">
              <FileText className="h-6 w-6 text-secondary" />
              <h3 className="mt-2 font-display font-bold text-primary">Appeal</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                A panel of three independent adjudicators reviews the ruling and gives a final decision.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <SectionHeading>How can I check on the status of my complaint?</SectionHeading>
          <P>
            You can contact the WASPA complaints team (via{" "}
            <a
              href="mailto:complaints@waspa.org.za"
              className="font-semibold text-primary underline underline-offset-4 hover:text-accent"
            >
              complaints@waspa.org.za
            </a>
            ) to ask for an update on the status of any complaint you have lodged with WASPA.
          </P>
          <P>
            Please include the complaint reference number when asking for information, so that the team can identify
            your complaint.
          </P>
        </div>

        <div className="mt-10 flex items-center gap-3 rounded-lg border border-border bg-muted p-5">
          <Mail className="h-6 w-6 shrink-0 text-secondary" />
          <p className="text-sm text-muted-foreground">
            Keep your complaint reference number safe — you'll need it for any follow-up with the WASPA complaints
            team.
          </p>
        </div>

        <Link
          to="/consumer-support"
          className="mt-10 inline-block font-semibold text-primary underline underline-offset-4 hover:text-accent"
        >
          ← Back to Consumer Support
        </Link>
      </div>
    </Shell>
  ),
});
