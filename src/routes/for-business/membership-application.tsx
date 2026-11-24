import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/for-business/membership-application")({
  head: () => meta("Membership Application", "Apply for WASPA membership: complete the online application form for Full or Affiliate membership."),
  component: Page,
});

const input = "mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
const sectionTitle = "border-b pb-2 font-display text-lg font-bold uppercase tracking-wide";

const services = [
  "Adult content services", "Airtime services", "Bulk messaging services", "Call back services",
  "Call centre services", "Communication gateway services", "Competition services", "Contact or dating services",
  "Content aggregation services", "Content creation services", "Content management services",
  "Customer Relationship Management (CRM) services", "Digital marketing services", "Digital media services",
  "Infrastructure services", "Interactive Television services", "Interactive Voice Response (IVR) services",
  "International premium rated services", "Least-Cost Routing services", "Location based services",
  "Micropayment services", "Mobile application development", "Mobile banking services", "Mobile commerce services",
  "Mobile marketing services", "Mobile portal services", "Multimedia messaging services", "Network provisioning services",
  "Original content services", "Reverse billing services", "Shortcode aggregation services",
  "Streaming content delivery services", "SIM toolkit services", "Subscription services", "USSD development services",
  "USSD services", "Voice message services", "Value Added Services (VAS)", "WAP services", "Wifi provisioning services",
];

function Field({ label, name, type = "text", required = false, span = false }: { label: string; name: string; type?: string; required?: boolean; span?: boolean }) {
  return (
    <label className={`text-sm font-medium ${span ? "sm:col-span-2" : ""}`}>
      {label}{required && <span className="text-accent"> *</span>}
      <input name={name} type={type} required={required} className={input} />
    </label>
  );
}

function EmailPair({ prefix, required = true }: { prefix: string; required?: boolean }) {
  return (
    <>
      <Field label="Email" name={`${prefix}-email`} type="email" required={required} />
      <Field label="Confirm email" name={`${prefix}-email-confirm`} type="email" required={required} />
    </>
  );
}

function ContactBlock({ title, sub, prefix, sameAs }: { title: string; sub: string; prefix: string; sameAs?: { checked: boolean; onChange: (v: boolean) => void } }) {
  const disabled = sameAs?.checked ?? false;
  return (
    <div className="mt-8">
      <h2 className={sectionTitle}>{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{sub}</p>
      {sameAs && (
        <label className="mt-3 flex items-center gap-2 text-sm font-medium">
          <input type="checkbox" checked={sameAs.checked} onChange={(e) => sameAs.onChange(e.target.checked)} />
          Same as Main WASPA representative — tick to use those details
        </label>
      )}
      {!disabled && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="Full name" name={`${prefix}-name`} required />
          <span className="hidden sm:block" />
          <EmailPair prefix={prefix} />
          <Field label="Mobile number" name={`${prefix}-mobile`} type="tel" required />
          <Field label="Office number" name={`${prefix}-office`} type="tel" />
        </div>
      )}
    </div>
  );
}

function Page() {
  const [done, setDone] = useState(false);
  const [sameAsMain, setSameAsMain] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setDone(true); window.scrollTo({ top: 0 }); };

  return (
    <Shell>
      <PageHero crumb="For Business" title="Membership Application" sub="Apply for Full or Affiliate WASPA membership." img={phone} />
      <section className="mx-auto max-w-3xl px-4 py-10">
        {done ? (
          <div className="rounded-lg border bg-card p-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-secondary" />
            <h2 className="mt-4 font-display text-2xl font-bold">Application received</h2>
            <p className="mt-2 text-muted-foreground">Thank you. Your application has been sent through for approval and WASPA will get back to you with feedback.</p>
            <Link to="/for-business" className="mt-6 inline-block font-semibold text-primary underline">Back to For Business</Link>
          </div>
        ) : (
          <>
            <p className="mb-6 text-sm text-muted-foreground">
              Please complete the following form and kindly complete all the fields. If you are unclear on a specific topic, then please type your question in the particular box. WASPA will then get back to you with feedback. Once completed your application will be sent through for approval.
            </p>
            <form onSubmit={submit} className="rounded-lg border bg-card p-6 md:p-8">
              <h2 className={sectionTitle}>Basic Information</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Company or organisation full registered name" name="company-name" required span />
                <Field label="Company registration number" name="reg-number" required />
                <Field label="South African VAT registration number" name="vat-number" />
                <Field label="Name to be displayed on the WASPA website" name="display-name" required span />
              </div>
              <fieldset className="mt-4">
                <legend className="text-sm font-medium">Membership type<span className="text-accent"> *</span></legend>
                <div className="mt-2 flex gap-6 text-sm">
                  <label className="flex items-center gap-2"><input type="radio" name="membership-type" value="full" required /> Full member</label>
                  <label className="flex items-center gap-2"><input type="radio" name="membership-type" value="affiliate" required /> Affiliate member</label>
                </div>
              </fieldset>
              <p className="mt-3 text-sm text-muted-foreground">
                Please make sure that you are aware of the <Link to="/for-business/membership-fees" className="font-semibold text-primary underline">membership fees</Link> which will apply once your application has been accepted.
              </p>
              <p className="mt-2 rounded-md bg-muted p-4 text-sm text-muted-foreground">
                <strong>Please note:</strong> If you have any sort of agreement with one or more of the mobile network operators that requires you be a member of WASPA, you may ONLY apply for Full membership. If you do not have a network agreement, you may ONLY apply for Affiliate membership.
              </p>

              <h2 className={`${sectionTitle} mt-8`}>Public Information</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Website" name="website" type="url" />
                <label className="text-sm font-medium">
                  Please supply a logo for your company/organisation<span className="text-accent"> *</span>
                  <input name="logo" type="file" accept=".jpg,.jpeg,.png,.gif,.webp" required className="mt-1 w-full text-sm" />
                  <span className="mt-1 block text-xs font-normal text-muted-foreground">Accepted file types: jpg, jpeg, png, gif, webp. The maximum allowed resolution is 500 x 500 pixels; larger logos will be scaled down to fit.</span>
                </label>
                <Field label="South African customer support phone number" name="support-phone" type="tel" required />
                <Field label="Customer support phone number (additional)" name="support-phone-2" type="tel" />
                <EmailPair prefix="support" />
              </div>

              <h2 className={`${sectionTitle} mt-8`}>Contact Information</h2>
              <div className="mt-4 grid gap-4">
                <label className="text-sm font-medium">
                  Physical address<span className="text-accent"> *</span>
                  <textarea name="physical-address" required rows={3} className={input} />
                </label>
                <label className="text-sm font-medium">
                  Postal address (if different from physical address)
                  <textarea name="postal-address" rows={3} className={input} />
                </label>
              </div>

              <ContactBlock title="Main WASPA Representative" sub="The person to be contacted regarding this application and subsequent enquiries." prefix="main-rep" />
              <ContactBlock title="Primary Code of Conduct Contact" sub="The person we will contact in the event of complaint escalations." prefix="primary-coc" sameAs={{ checked: sameAsMain, onChange: setSameAsMain }} />
              <ContactBlock title="Secondary Code of Conduct Contact" sub="A second person who can be contacted in the event of complaint escalations." prefix="secondary-coc" />
              <ContactBlock title="Billing Contact" sub="The person we will contact with regard to payments and other billing related matters." prefix="billing" />

              <h2 className={`${sectionTitle} mt-8`}>Additional Information</h2>
              <div className="mt-4 grid gap-4">
                <Field label="Where did you hear about WASPA?" name="heard-about" />
                <fieldset>
                  <legend className="text-sm font-medium">Services offered by your company/organisation<span className="text-accent"> *</span></legend>
                  <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
                    {services.map((s) => (
                      <label key={s} className="flex items-start gap-2 text-sm">
                        <input type="checkbox" name="services" value={s} className="mt-0.5" /> {s}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <label className="mt-6 flex items-start gap-2 text-sm font-medium">
                <input type="checkbox" required className="mt-1" />
                <span>Required consent<span className="text-accent"> *</span> — I give WASPA consent to process the personal information provided using this form.</span>
              </label>
              <p className="mt-2 text-sm text-muted-foreground">
                The information collected on this form will be used only for the purpose of processing your membership application, or in a manner consistent with the WASPA membership agreement. Please visit WASPA's data collection policy for further details on how WASPA processes personal information and complies with POPIA requirements.
              </p>
              <button type="submit" className="mt-6 rounded-md bg-secondary px-6 py-3 font-display font-bold text-secondary-foreground hover:opacity-90">Submit application</button>
            </form>
          </>
        )}
      </section>
    </Shell>
  );
}
