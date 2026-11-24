import { createFileRoute, Link } from "@tanstack/react-router";
import { CircleAlert, Info, Mail } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/for-business/membership-fees")({
  head: () => meta("Membership Fees", "WASPA membership fees for Full and Affiliate members, monthly and annually, local and international."),
  component: MembershipFees,
});

const fees = [
  {
    tier: "Full member",
    monthly: { excl: "R4,439.91", vat: "R665.99", total: "R5,105.90" },
    annually: { excl: "R53,278.92", vat: "R7,991.84", total: "R61,270.76" },
  },
  {
    tier: "Affiliate member",
    monthly: { excl: "R2,093.80", vat: "R314.07", total: "R2,407.87" },
    annually: { excl: "R25,125.60", vat: "R3,768.84", total: "R28,894.44" },
  },
];

const localNotes = [
  "Membership fees for South African based members of WASPA are billed monthly.",
  "Members based in South Africa are eligible for a 5% discount should they pay annually in advance within 30 days of invoice.",
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mt-10 border-b pb-2 font-display text-lg font-bold uppercase tracking-wide">{children}</h2>
  );
}

function MembershipFees() {
  return (
    <Shell>
      <PageHero crumb="For Business" title="Membership Fees" sub="WASPA membership fees for Full and Affiliate members, billed monthly or annually." img={phone} />

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="border-b pb-2 font-display text-lg font-bold uppercase tracking-wide">Membership Fees</h2>
        <p className="mt-4 text-muted-foreground">WASPA&rsquo;s current membership fees are as follows:</p>

        <SectionHeading>Local WASPA Membership</SectionHeading>
        <div className="mt-4 overflow-x-auto rounded-lg border bg-card">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th rowSpan={2} scope="col" className="border-r border-primary-foreground/20 px-4 py-3 text-left align-middle font-display text-xs uppercase tracking-wide">
                  Membership
                </th>
                <th colSpan={3} scope="colgroup" className="border-r border-primary-foreground/20 px-4 py-3 text-center font-display text-xs uppercase tracking-wide">
                  Monthly
                </th>
                <th colSpan={3} scope="colgroup" className="px-4 py-3 text-center font-display text-xs uppercase tracking-wide">
                  Annually
                </th>
              </tr>
              <tr className="bg-primary/90 text-primary-foreground">
                <th scope="col" className="px-4 py-2 text-right text-xs font-semibold uppercase">Excl. VAT</th>
                <th scope="col" className="px-4 py-2 text-right text-xs font-semibold uppercase">VAT</th>
                <th scope="col" className="border-r border-primary-foreground/20 px-4 py-2 text-right text-xs font-semibold uppercase">Total</th>
                <th scope="col" className="px-4 py-2 text-right text-xs font-semibold uppercase">Excl. VAT</th>
                <th scope="col" className="px-4 py-2 text-right text-xs font-semibold uppercase">VAT</th>
                <th scope="col" className="px-4 py-2 text-right text-xs font-semibold uppercase">Total</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row) => (
                <tr key={row.tier} className="border-t">
                  <th scope="row" className="border-r px-4 py-3 text-left font-display font-bold">{row.tier}</th>
                  <td className="px-4 py-3 text-right tabular-nums">{row.monthly.excl}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">{row.monthly.vat}</td>
                  <td className="border-r px-4 py-3 text-right font-bold tabular-nums">{row.monthly.total}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{row.annually.excl}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">{row.annually.vat}</td>
                  <td className="px-4 py-3 text-right font-bold tabular-nums">{row.annually.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-4 space-y-2">
          {localNotes.map((note) => (
            <li key={note} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              <span>{note}</span>
            </li>
          ))}
        </ul>

        <SectionHeading>International WASPA Membership</SectionHeading>
        <div className="mt-4 flex gap-3 rounded-lg border bg-muted p-5">
          <Info className="h-5 w-5 shrink-0 text-secondary" />
          <p className="text-sm text-muted-foreground">
            Because of significant forex fees charged on monthly payments, membership fees for members from other countries
            are billed annually in advance. This amount is <strong className="text-foreground">R25,125.60 (excl VAT)</strong> for
            Affiliate members and <strong className="text-foreground">R53,278.92 (excl VAT)</strong> for Full members.
          </p>
        </div>

        <SectionHeading>Note</SectionHeading>
        <div className="mt-4 flex gap-3 rounded-lg border-l-4 border-l-accent bg-muted p-5">
          <CircleAlert className="h-5 w-5 shrink-0 text-accent" />
          <p className="text-sm text-muted-foreground">
            Fees listed above are effective from <strong className="text-foreground">1 March 2026</strong>.
          </p>
        </div>

        <SectionHeading>Contact Us</SectionHeading>
        <p className="mt-4 text-sm text-muted-foreground">
          If you have any questions about WASPA membership, please contact the Secretariat team using the contact page.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:brightness-110">
            <Mail className="h-4 w-4" /> Contact the Secretariat
          </a>
          <Link to="/for-business/about-membership" className="inline-flex rounded-md border px-4 py-2 text-sm font-bold hover:bg-muted">
            About Membership →
          </Link>
        </div>
      </section>
    </Shell>
  );
}
