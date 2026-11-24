import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { ReportCheck, ReportConfirmation, ReportContact, ReportInput, ReportMember, ReportPreview, ReportRadios, ReportSection, ReportText } from "@/components/site/ReportFields";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/report-unwanted-billing")({
  head: () => meta("Report Unwanted Billing", "Report unexpected WASP charges or unwanted mobile billing."),
  component: BillingForm,
});
function BillingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [identity, setIdentity] = useState("");
  const [contacted, setContacted] = useState<string[]>([]);
  function toggleContact(value: string, checked: boolean) {
    setContacted(previous => checked ? [...previous, value] : previous.filter(item => item !== value));
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return <Shell>
    <PageHero crumb="Consumer Support" title="Report Unwanted Billing" sub="Report WASP services charged without your permission." img={phone}/>
    <section className="mx-auto max-w-3xl px-4 py-10">
      <nav aria-label="Billing help" className="mb-6 flex flex-wrap gap-3 border-b pb-5">
        <Button asChild className="h-auto whitespace-normal py-2"><Link to="/consumer-support/losing-airtime">Quick link: Losing Airtime <ArrowRight/></Link></Button>
        <Button asChild variant="outline" className="h-auto whitespace-normal py-2"><Link to="/dnc">Do Not Contact <ArrowRight/></Link></Button>
      </nav>
      <div className="mb-8 space-y-4 text-sm leading-7 text-muted-foreground">
        <p>Use this form if you are being charged for WASP services without your permission. Based on the information you provide here, WASPA will try make sure that the services for which you are being charged are cancelled.</p>
        <p>Please do not use this form if you are an employee of a mobile network operator (Cell C, MTN, Telkom or Vodacom). Please contact WASPA (<a href="mailto:info@waspa.org.za" className="font-semibold text-primary underline">info@waspa.org.za</a>) for information on lodging MNO queries directly with WASPA.</p>
        <p>If you want to report an unsolicited message (spam), then you should instead use the <Link to="/report-scam-spam" className="font-semibold text-primary underline">report spam</Link> form. If you believe that a WASPA member has acted in breach of the WASPA Code of Conduct, use the <Link to="/consumer-support/lodge-a-complaint" className="font-semibold text-primary underline">complaints form</Link> to lodge a complaint.</p>
      </div>
      {submitted ? <ReportPreview onReset={() => { setSubmitted(false); setIdentity(""); setContacted([]); }}/> : <form onSubmit={submit} className="rounded-lg border bg-card p-6 md:p-8">
        <ReportContact billing/>
        <ReportSection title="Billing information">
          <ReportRadios legend="Who is billing you?" name="billing-identity" onChange={setIdentity} options={[
            { value: "known", label: "I know who the WASPA member billing me is." },
            { value: "information", label: "I'm not sure who is billing me, but I have the following information." },
            { value: "unknown", label: "I don't know who is billing me, and need help finding out." },
          ]}/>
          {identity === "known" && <ReportMember label="If you know who is billing you please select the WASPA member from this drop-down" name="member"/>}
          {identity === "information" && <ReportText label="I'm not sure who is billing me, but I have the following information" name="billing-information" required/>}
          <fieldset><legend className="mb-3 text-sm font-semibold">Billing information</legend><div className="space-y-3">
            <ReportCheck name="recurring" label="I am being billed repeatedly on a daily/weekly/monthly basis."/>
            <ReportCheck name="individual" label="I have been billed for one or more individual content items."/>
          </div></fieldset>
        </ReportSection>
        <ReportSection title="Who have you already contacted regarding this problem?">
          <ReportCheck name="contacted-member" label="The WASPA member responsible for the billing." onChange={checked => toggleContact("member", checked)}/>
          <ReportCheck name="contacted-provider" label="My mobile service provider." onChange={checked => toggleContact("provider", checked)}/>
          <ReportCheck name="contacted-carrier" label="My mobile carrier." onChange={checked => toggleContact("carrier", checked)}/>
          <ReportCheck name="contacted-other" label="Someone else." onChange={checked => toggleContact("other", checked)}/>
          {contacted.includes("member") && <ReportMember label="Please select the WASPA member responsible for the billing" name="contacted-member-name"/>}
          {contacted.includes("provider") && <ReportInput label="Please enter the name of your mobile service provider" name="provider" required/>}
          {contacted.includes("carrier") && <ReportRadios legend="Please select your mobile carrier" name="carrier" options={["8ta", "Cell C", "MTN", "Vodacom"].map(label => ({ value: label, label }))}/>}
          {contacted.includes("other") && <ReportText label="Please specify who else you have contacted regarding this problem" name="other-contact"/>}
          <ReportText label="Any other information you'd like to provide" name="other-information"/>
        </ReportSection>
        <ReportConfirmation billing/>
      </form>}
      <Link to="/consumer-support" className="mt-6 inline-block text-sm font-semibold text-primary underline">← Back to Consumer Support</Link>
    </section>
  </Shell>;
}
