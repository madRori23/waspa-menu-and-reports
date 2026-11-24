import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/for-business/associate-registration")({
  head: () => meta("Associate Registration", "Apply to become a WASPA Associate: submit your details for review by the WASPA Board."),
  component: Page,
});

const fields: { name: string; label: string; type?: string; required?: boolean }[] = [
  { name: "first", label: "First name", required: true },
  { name: "last", label: "Surname", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  { name: "phone", label: "Contact number", type: "tel", required: true },
  { name: "company", label: "Current company / organisation" },
  { name: "position", label: "Job title / position" },
  { name: "country", label: "Country", required: true },
  { name: "linkedin", label: "LinkedIn profile URL", type: "url" },
];
const input = "mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function Page() {
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setDone(true); window.scrollTo({ top: 0 }); };
  return (
    <Shell>
      <PageHero crumb="For Business" title="Associate Registration" sub="Apply to become a WASPA Associate. Applications are reviewed monthly by the WASPA Board." img={phone} />
      <section className="mx-auto max-w-3xl px-4 py-10">
        {done ? (
          <div className="rounded-lg border bg-card p-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-secondary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Application received</h2>
            <p className="mt-2 text-muted-foreground">Thank you. The WASPA Board reviews applications monthly and you will be notified once a decision is made.</p>
            <Link to="/for-business/associate-programme" className="mt-6 inline-block font-semibold text-primary underline">Back to the Associate Programme</Link>
          </div>
        ) : (
          <form onSubmit={submit} className="rounded-lg border bg-card p-6 md:p-8">
            <h2 className="border-b pb-2 font-display text-lg font-bold uppercase tracking-wide">Your details</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {fields.map((f) => (
                <label key={f.name} className="text-sm font-medium">
                  {f.label}{f.required && <span className="text-accent"> *</span>}
                  <input name={f.name} type={f.type ?? "text"} required={f.required} className={input} />
                </label>
              ))}
            </div>
            <label className="mt-4 block text-sm font-medium">
              Your involvement in the mobile services industry<span className="text-accent"> *</span>
              <textarea required rows={5} className={input} placeholder="Briefly describe your experience and why you would like to become a WASPA Associate." />
            </label>
            <p className="mt-4 rounded-md bg-muted p-4 text-sm text-muted-foreground">An annual fee of <strong>R1,200.00 (incl. VAT)</strong> applies once your application is accepted. In special circumstances, WASPA may choose to waive this fee.</p>
            <label className="mt-4 flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-1" />
              I confirm the information above is correct and agree to WASPA processing my details for this application.
            </label>
            <button type="submit" className="mt-6 rounded-md bg-secondary px-6 py-3 font-display font-bold text-secondary-foreground hover:opacity-90">Submit application</button>
          </form>
        )}
      </section>
    </Shell>
  );
}
