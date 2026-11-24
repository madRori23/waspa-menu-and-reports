import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/dnc")({
  head: () => meta("Do Not Contact", "Check whether your mobile number is listed on the WASPA Do Not Contact list."),
  component: DncPage,
});

const input = "mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
function DncPage() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); window.scrollTo({top:0,behavior:"smooth"}); };
  return <Shell>
    <PageHero crumb="Consumer Support" title="Do Not Contact" sub="Check whether your mobile number appears on the WASPA Do Not Contact list." img={phone}/>
    <section className="mx-auto max-w-2xl px-4 py-10">
      {submitted ? <div className="rounded-lg border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-secondary"/>
        <h2 className="mt-4 font-display text-2xl font-bold">Form captured for preview</h2>
        <p className="mt-2 text-sm text-muted-foreground">This concept page is not connected to the live WASPA Do Not Contact service. No lookup has been performed and no personal information has been sent.</p>
        <button onClick={()=>setSubmitted(false)} className="mt-5 rounded-md bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">Submit another lookup</button>
      </div> : <form onSubmit={submit} className="rounded-lg border bg-card p-6 shadow-sm md:p-8">
        <div className="mb-6 flex items-start gap-3 rounded-md border border-secondary/40 bg-secondary/10 p-4 text-sm text-muted-foreground">
          <ShieldCheck className="h-6 w-6 shrink-0 text-secondary"/>
          <p>Enter your mobile number to determine whether or not it is listed in the Do Not Contact list.</p>
        </div>
        <label className="block text-sm font-semibold">Mobile number <span className="text-accent">*</span>
          <input name="mobile" type="tel" inputMode="tel" pattern="[0-9+() -]{8,20}" placeholder="e.g. 082 123 4567" required className={input}/>
        </label>
        <fieldset className="mt-6">
          <legend className="text-sm font-semibold">Please confirm the following <span className="text-accent">*</span></legend>
          <label className="mt-3 flex items-start gap-2 text-sm"><input type="radio" name="child" value="not-child" required className="mt-1"/> The number provided does not belong to a child.</label>
          <label className="mt-3 flex items-start gap-2 text-sm"><input type="radio" name="child" value="child" required className="mt-1"/> The number provided belongs to a child.</label>
        </fieldset>
        <label className="mt-6 flex items-start gap-2 text-sm"><input type="checkbox" required className="mt-1"/> I give WASPA consent to process the personal information provided using this form. <span className="text-accent">*</span></label>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">The information collected on this form will be used only for the purpose of handling your Do Not Contact system request. Please visit <a href="/about/nitty-gritty/privacy-policy" className="font-semibold text-primary underline">WASPA's Data Collection Policy</a> for further details on how WASPA processes personal information and complies with POPIA requirements.</p>
        <button type="submit" className="mt-6 w-full rounded-md bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground hover:brightness-95">Check number</button>
        <p className="mt-3 text-xs text-muted-foreground">Concept demonstration only — connect this form to the authorised WASPA DNC lookup service before accepting real requests.</p>
        <Link to="/consumer-support" className="mt-5 inline-block text-sm font-semibold text-primary underline">← Back to Consumer Support</Link>
      </form>}
    </section>
  </Shell>;
}
