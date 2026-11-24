import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { ReportConfirmation, ReportContact, ReportInput, ReportMember, ReportPreview, ReportRadios, ReportSection, ReportText } from "@/components/site/ReportFields";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/report-scam-spam")({
  head: () => meta("Report a Scam / Spam", "Report suspicious SMS messages, spam and mobile scams to WASPA."),
  component: SpamForm,
});
function SpamForm() {
  const [sent, setSent] = useState(false);
  const [sender, setSender] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSent(true); window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return <Shell>
    <PageHero crumb="Consumer Support" title="Report a Scam / Spam" sub="Report SMS scams and spam." img={phone}/>
    <section className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8 space-y-5">
        <h2 className="font-display text-xl font-bold text-primary">Report SMS scams and spam</h2>
        <div className="grid gap-5 text-sm leading-7 text-muted-foreground md:grid-cols-2">
          <p>Use this form if you have received an unsolicited commercial message (spam) and you would like to report this to WASPA. If you are able to identify a specific WASPA member, we will let that member know that you would like to be removed from their database. If you do not specify a WASPA member, your report will be added to WASPA’s database of SMS spam for monitoring and tracking purposes.</p>
          <p className="border-l-2 border-secondary pl-5">Add your number to the WASPA <Link to="/dnc" className="font-semibold text-primary underline">Do Not Contact</Link> list by visiting <Link to="/dnc" className="font-semibold text-primary underline">dnc.org.za</Link> now. WASPA’s members are required to check this list of numbers on a weekly basis and may not send direct marketing to the numbers on the <Link to="/dnc" className="font-semibold text-primary underline">DNC</Link> list.</p>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">If you would like to report unwanted WASP charges on your phone bill, you should instead use the <Link to="/report-unwanted-billing" className="font-semibold text-primary underline">Report unwanted billing</Link> form. If you believe that a WASPA member has acted in breach of the WASPA Code of Conduct, use the <Link to="/consumer-support/lodge-a-complaint" className="font-semibold text-primary underline">complaints form</Link> to lodge a complaint.</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="h-auto whitespace-normal py-2"><Link to="/consumer-support/losing-airtime">Quick link: Losing Airtime? <ArrowRight/></Link></Button>
          <Button asChild variant="outline" className="h-auto whitespace-normal py-2"><Link to="/dnc">WASPA Do Not Contact page <ArrowRight/></Link></Button>
        </div>
      </div>
      {sent ? <ReportPreview onReset={() => { setSent(false); setSender(""); }}/> : <form onSubmit={submit} className="rounded-lg border bg-card p-6 md:p-8">
        <ReportContact/>
        <ReportSection title="Who sent the spam?">
          <ReportRadios legend="Who sent the spam?" name="sender-identity" onChange={setSender} options={[
            { value: "known", label: "I know who the WASPA member sending me messages is." },
            { value: "unknown", label: "I don't know who sent the message, and will provide more information below." },
          ]}/>
          {sender === "known" && <ReportMember label="The WASPA member sending me messages is" name="member"/>}
        </ReportSection>
        {sender === "unknown" && <ReportSection title="Identifying the source of the message">
          <ReportInput label="What is the apparent originating number?" name="originating-number" required/>
          <ReportText label="What is the content of the message?" name="message" required/>
          <ReportInput label="What is the time and date stamp of the message?" name="timestamp" type="datetime-local" required/>
          <ReportInput label="What time was the message received? (optional, if different from the above)" name="received" type="datetime-local"/>
          <ReportInput label="What is the message centre (SMSC) number? (optional)" name="smsc"/>
          <ReportRadios legend="Does the message appear to be a direct marketing message?" name="marketing" options={[{value:"yes",label:"Yes"},{value:"no",label:"No"}]}/>
          <ReportRadios legend="Do you have any existing relationship with the message sender?" name="relationship" options={[{value:"yes",label:"Yes"},{value:"no",label:"No"}]}/>
        </ReportSection>}
        <ReportConfirmation/>
      </form>}
      <Link to="/consumer-support" className="mt-6 inline-block text-sm font-semibold text-primary underline">← Back to Consumer Support</Link>
    </section>
  </Shell>;
}
