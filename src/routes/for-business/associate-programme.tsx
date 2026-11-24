import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, User } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/for-business/associate-programme")({
  head: () => meta("WASPA Associate Programme", "Recognition, networking and resources for individual mobile services professionals through the WASPA Associate Programme."),
  component: Page,
});

const H = ({ children }: { children: string }) => (
  <h2 className="mt-10 border-b pb-2 font-display text-lg font-bold uppercase tracking-wide">{children}</h2>
);
const List = ({ items }: { items: string[] }) => (
  <ul className="mt-4 space-y-2">
    {items.map((i) => (
      <li key={i} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /><span>{i}</span></li>
    ))}
  </ul>
);

function Page() {
  return (
    <Shell>
      <PageHero crumb="For Business" title="WASPA Associate Programme" sub="Recognising professionals in the WASP sector, without requiring WASPA membership." img={phone} />
      <section className="mx-auto max-w-4xl px-4 py-10 text-foreground/90">
        <H>Purpose</H>
        <p className="mt-4">The WASPA Associate Programme recognises professionals in the WASP sector and provides individuals with access to information, activities and events, without requiring that those individuals join WASPA as members. WASPA&rsquo;s members benefit from this programme by gaining access to a broader pool of industry professionals, and through the contributions made by Associates to WASPA&rsquo;s structures and submissions.</p>

        <H>Benefits of becoming a WASPA Associate</H>
        <p className="mt-4">Individuals recognised by WASPA as WASPA Associates gain the following benefits:</p>
        <List items={["Association with a credible and recognised industry body", "Opportunities to network and interact with WASPA members", "Access to the WASPA document library", "Participation in WASPA events, activities and workshops"]} />
        <p className="mt-4">WASPA Associates are also encouraged to consider volunteering on WASPA working groups and structures, where appropriate.</p>

        <H>The difference between a WASPA Member and WASPA Associate</H>
        <p className="mt-4">Unlike a WASPA Member, a WASPA Associate is not entitled to vote on WASPA matters, or participate in the election of WASPA office bearers.</p>

        <H>Who can become a WASPA Associate?</H>
        <p className="mt-4">Anyone who is a mobile services or applications industry professional may apply to become a WASPA Associate. In addition, WASPA may extend invitations to potential Associates at its discretion. Associates do not need to be located in South Africa. Good candidates for the associate programme include:</p>
        <List items={["Individuals previously associated with a WASPA member, who are still actively involved in the sector, but not currently associated with a particular member.", "Past or current elected office bearers of WASPA who are not associated with a particular WASPA member.", "Participants in WASP sector internship programmes who aim to become industry professionals.", "Individuals active in the WASP industry locally or internationally who are interested in growing the sector."]} />

        <H>How does someone become a WASPA Associate?</H>
        <p className="mt-4">Anyone may apply to become a WASPA Associate via an application form on the WASPA website. WASPA may also extend an invitation to apply to specific individuals. Applications are reviewed monthly by WASPA&rsquo;s Board, and associate applicants are promptly notified if their application has been accepted or declined.</p>

        <H>How much does it cost to become an Associate?</H>
        <p className="mt-4">There is an annual fee of <strong>R1,200.00 (incl. VAT)</strong>. In special circumstances, WASPA may choose to waive this fee.</p>

        <div className="mt-8">
          <Link to="/for-business/associate-registration" className="inline-flex rounded-md bg-secondary px-6 py-3 font-display font-bold text-secondary-foreground hover:opacity-90">Apply now</Link>
        </div>

        <H>Current Associates</H>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {["Anzelle Robertson", "Dieter van Rooyen", "Katlego Kapari"].map((n) => (
            <div key={n} className="flex items-center gap-3 rounded-lg border bg-card p-4"><User className="h-5 w-5 text-primary" /><span className="font-semibold">{n}</span></div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
