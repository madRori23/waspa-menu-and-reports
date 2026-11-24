import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/consumer-support/lodge-a-complaint")({
  head: () => meta("Lodge a Complaint", "Lodge a formal complaint against a WASPA member you believe has breached the WASPA Code of Conduct."),
  component: Page,
});

const input = "mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
const sectionTitle = "border-b pb-2 font-display text-lg font-bold uppercase tracking-wide";

function Field({ label, name, type = "text", required = false, span = false, hint }: { label: string; name: string; type?: string; required?: boolean; span?: boolean; hint?: string }) {
  return (
    <label className={`text-sm font-medium ${span ? "sm:col-span-2" : ""}`}>
      {label}{required && <span className="text-accent"> *</span>}
      <input name={name} type={type} required={required} className={input} />
      {hint && <span className="mt-1 block text-xs font-normal text-muted-foreground">{hint}</span>}
    </label>
  );
}

function TextArea({ label, name, required = false }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="text-sm font-medium sm:col-span-2">
      {label}{required && <span className="text-accent"> *</span>}
      <textarea name={name} required={required} rows={4} className={input} />
    </label>
  );
}

function RadioGroup({ legend, name, options, required = false }: { legend: string; name: string; options: string[]; required?: boolean }) {
  return (
    <fieldset className="sm:col-span-2">
      <legend className="text-sm font-medium">{legend}{required && <span className="text-accent"> *</span>}</legend>
      <div className="mt-2 space-y-2 text-sm">
        {options.map((o) => (
          <label key={o} className="flex items-start gap-2">
            <input type="radio" name={name} value={o} required={required} className="mt-0.5" /> {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-8 first:mt-0">
      <h2 className={sectionTitle}>{title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function Page() {
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setDone(true); window.scrollTo({ top: 0 }); };

  return (
    <Shell>
      <PageHero crumb="Consumer Support" title="Lodge a Complaint" sub="Lodge a formal complaint against a WASPA member." img={phone} />
      <section className="mx-auto max-w-3xl px-4 py-10">
        {done ? (
          <div className="rounded-lg border bg-card p-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-secondary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Complaint received</h2>
            <p className="mt-2 text-muted-foreground">
              Thank you. Your complaint has been lodged and WASPA will be in touch about the next steps.
            </p>
            <Link to="/consumer-support" className="mt-6 inline-block font-semibold text-primary underline">Back to Consumer Support</Link>
          </div>
        ) : (
          <>
            <div className="mb-6 rounded-xl border border-secondary/40 bg-secondary/10 p-4">
              <p className="font-display font-bold text-foreground">Quick link: Losing Airtime?</p>
              <p className="mt-1 text-sm text-muted-foreground">If your concern is unexpected charges or disappearing airtime, read the guidance before submitting a formal complaint.</p>
              <Link to="/consumer-support/losing-airtime" className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">View Losing Airtime guidance <span aria-hidden="true">→</span></Link>
            </div>
            <div className="mb-6 space-y-3 text-sm text-muted-foreground">
              <p className="rounded-md border border-secondary/40 bg-secondary/10 p-4">
                <strong>Please note:</strong> the Secretariat closes on the 15th December 2026 and opens again on 5 January 2027.
                You are welcome to complete the application forms, lodge requests, or contact us, however these queries will only
                be processed when the Secretariat opens again in the new year.
              </p>
              <p>
                Use this form if you believe that a WASPA member has acted in breach of the{" "}
                <Link to="/code-of-conduct" className="font-semibold text-primary underline">WASPA Code of Conduct</Link>.
              </p>
              <p>
                Please do not use this form if you are an employee of a mobile network operator (Cell C, MTN, Telkom or Vodacom).
                Please contact WASPA (<a href="mailto:info@waspa.org.za" className="font-semibold text-primary underline">info@waspa.org.za</a>)
                for information on lodging MNO queries directly with WASPA.
              </p>
              <p>
                If your concern is unexpected charges or disappearing airtime, first read our{" "}
                <Link to="/consumer-support/losing-airtime" className="font-semibold text-primary underline">Losing Airtime guidance</Link>.
                It explains what to ask your mobile operator and how to manage content services.
              </p>
              <p>
                If you simply wish to report SMS spam or unwanted billing then using one of those two forms is likely to give you
                a quicker response. The complaints process is more rigorous than the process used for SMS spam and billing queries,
                so you should expect it to take longer to get resolved. Often, complaints are handled by an independent ICT lawyer
                who assesses the merits of the complaint.
              </p>
            </div>

            <form onSubmit={submit} className="rounded-lg border bg-card p-6 md:p-8">
              <Section title="Your Information">
                <p className="text-sm text-muted-foreground sm:col-span-2">
                  WASPA will only use your contact details for communications relating to this complaint. Your information will
                  not be shared with anyone else, except in the process of resolving your complaint.
                </p>
                <Field label="Name and surname" name="name" required span />
                <Field label="Mobile phone number" name="mobile" type="tel" required hint="Please use the format: ### ### #### or ###-###-####" />
                <Field label="Phone (alternate)" name="phone-alt" type="tel" hint="Please use the format: ### ### #### or ###-###-####" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Confirm email" name="email-confirm" type="email" required />
                <Field label="Address" name="address" required span />
              </Section>

              <Section title="Identifying the WASPA member involved">
                <p className="text-sm text-muted-foreground sm:col-span-2">
                  In this section we need as much help from you to identify the WASPA member who is the target of the complaint.
                </p>
                <RadioGroup
                  legend="Member identity"
                  name="member-identity"
                  required
                  options={[
                    "I already know the identity of the WASPA member involved.",
                    "I am not sure of the identity of the WASPA member involved.",
                  ]}
                />
                <Field label="WASPA member name" name="member-name" required span />
                <TextArea label="Do you have information about the name of the service or the service provider from your phone bill? If so, please provide us with that information here" name="bill-info" required />
                <Field label="Do you have a five digit short code associated with the problem service? If so, please provide us with that information here" name="short-code" span />
                <TextArea label="Do you have any other information about the service provider that might assist WASPA in linking your complaint to one of our members? If so, please provide that here" name="other-info" />
              </Section>

              <Section title="Information about the breach/complaint">
                <RadioGroup
                  legend="Does the complaint involve a specific mobile number?"
                  name="specific-number"
                  required
                  options={[
                    'Yes, the same number I filled in as my "Mobile phone number" above.',
                    "Yes, but a different number to the one I provided above. (please fill in below)",
                    "No, the complaint isn't specific to a particular mobile number.",
                  ]}
                />
                <Field label="Additional mobile number involved in complaint" name="additional-number" type="tel" hint="Please use the format: ### ### #### or ###-###-####" />
                <RadioGroup
                  legend="Which network is the carrier for the mobile number involved in the complaint"
                  name="network"
                  required
                  options={["8ta", "Cell C", "MTN", "Vodacom"]}
                />
                <TextArea label="Have you identified specific clauses in the WASPA Code of Conduct that you think may have been breached? If so, please list them below" name="coc-clauses" />
                <TextArea label="Please provide a detailed description of the complaint below. The more information you can provide WASPA with here, the more likely it is that we will be able to help you with your complaint" name="description" required />
                <TextArea label="Does your complaint involve a specific print, radio or television advert? If so, please provide more information about where and when you saw or heard the advertisement" name="advert" />
              </Section>

              <Section title="Supporting documents">
                <label className="text-sm font-medium sm:col-span-2">
                  Would you like to upload additional documents relevant to your complaint?
                  <input name="files" type="file" multiple className="mt-2 w-full text-sm" />
                  <span className="mt-1 block text-xs font-normal text-muted-foreground">Max. file size: 200 MB.</span>
                </label>
              </Section>

              <Section title="Additional information">
                <fieldset className="sm:col-span-2">
                  <legend className="text-sm font-medium">Who have you already contacted regarding this problem?</legend>
                  <div className="mt-2 space-y-2 text-sm">
                    {["The WASPA member responsible for the billing.", "My mobile service provider.", "My mobile carrier.", "Someone else."].map((o) => (
                      <label key={o} className="flex items-start gap-2">
                        <input type="checkbox" name="contacted" value={o} className="mt-0.5" /> {o}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <Field label='Who? (please fill this in if you selected "someone else" above)' name="contacted-who" span />
                <RadioGroup
                  legend="Please confirm any WASPA member affiliation you may have below"
                  name="member-affiliation"
                  required
                  options={[
                    "Either I or one of my immediate family members is employed, or otherwise associated with one of WASPA's member companies.",
                    "Neither I nor any of my immediate family members is employed, or otherwise associated with one of WASPA's member companies.",
                  ]}
                />
                <Field label="WASPA member company with which you are associated (if applicable)" name="affiliated-company" span />
                <RadioGroup
                  legend="Please confirm any WASPA affiliation you may have below"
                  name="waspa-affiliation"
                  required
                  options={[
                    "Either I or one of my immediate family members is employed, or otherwise associated with WASPA.",
                    "Neither I nor any of my immediate family members is employed, or otherwise associated with WASPA.",
                  ]}
                />
                <Field label="Where did you hear about WASPA?" name="heard-about" span />
                <label className="flex items-start gap-2 text-sm sm:col-span-2">
                  <input type="checkbox" name="good-faith" required className="mt-0.5" />
                  <span>I hereby declare that the information provided in this complaint is to my knowledge true and correct, and that I am submitting this complaint in good faith.<span className="text-accent"> *</span></span>
                </label>
                <RadioGroup
                  legend="Required declaration concerning minors"
                  name="minors"
                  required
                  options={[
                    "The information provided does not include the personal information of a child.",
                    "The information provided does include the personal information of a child.",
                  ]}
                />
                <label className="flex items-start gap-2 text-sm sm:col-span-2">
                  <input type="checkbox" name="child-consent" className="mt-0.5" />
                  <span>I am authorised to provide the personal information of this child and give WASPA my express consent to process this personal information.</span>
                </label>
                <label className="flex items-start gap-2 text-sm sm:col-span-2">
                  <input type="checkbox" name="consent" required className="mt-0.5" />
                  <span>I give WASPA consent to process the personal information provided using this form.<span className="text-accent"> *</span></span>
                </label>
                <p className="text-sm text-muted-foreground sm:col-span-2">
                  The information collected on this form will be used only for the purpose of attempting to resolve your complaint.
                  Please visit{" "}
                  <Link to="/about/nitty-gritty/privacy-policy" className="font-semibold text-primary underline">WASPA's privacy policy</Link>{" "}
                  for further details on how WASPA processes personal information and complies with POPIA requirements.
                </p>
              </Section>

              <button type="submit" className="mt-8 w-full rounded-md bg-primary px-4 py-3 font-bold text-primary-foreground hover:brightness-110">
                Submit complaint
              </button>
            </form>
          </>
        )}
      </section>
    </Shell>
  );
}
