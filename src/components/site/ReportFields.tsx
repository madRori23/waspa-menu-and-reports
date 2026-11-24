import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { reportMembers } from "@/data/report-members";
import { emailsMatch, reportPhonePattern, requiresChildAuthorisation } from "@/lib/report-validation";

export const reportField = "mt-1 w-full min-w-0 rounded-md border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
export function ReportSection({ title, children }: { title: string; children: ReactNode }) {
  return <div className="mt-8 first:mt-0"><h2 className="border-b pb-2 font-display text-xl font-bold text-primary">{title}</h2><div className="mt-4 space-y-5">{children}</div></div>;
}
export function ReportInput({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return <label className="block text-sm font-semibold">{label}{required && <span className="text-accent"> *</span>}<input className={reportField} name={name} type={type} required={required} {...(type === "tel" ? { pattern: reportPhonePattern, placeholder: "082 123 4567" } : {})}/>{type === "tel" && <span className="mt-1 block text-xs font-normal text-muted-foreground">Please use the format: ### ### #### or ###-###-####</span>}</label>;
}
export function ReportText({ label, name, required = false }: { label: string; name: string; required?: boolean }) {
  return <label className="block text-sm font-semibold">{label}{required && <span className="text-accent"> *</span>}<textarea className={reportField} rows={4} name={name} required={required}/></label>;
}
export function ReportRadios({ legend, name, options, onChange }: { legend: string; name: string; options: { value: string; label: string }[]; onChange?: (value: string) => void }) {
  return <fieldset><legend className="text-sm font-semibold">{legend} <span className="text-accent">*</span></legend><div className="mt-3 space-y-3">{options.map(option => <label key={option.value} className="flex items-start gap-2 text-sm"><input className="mt-1 shrink-0" type="radio" name={name} value={option.value} required onChange={() => onChange?.(option.value)}/>{option.label}</label>)}</div></fieldset>;
}
export function ReportCheck({ label, name, required = false, onChange }: { label: string; name: string; required?: boolean; onChange?: (checked: boolean) => void }) {
  return <label className="flex items-start gap-2 text-sm"><input className="mt-1 shrink-0" type="checkbox" name={name} required={required} onChange={event => onChange?.(event.target.checked)}/><span>{label}{required && <span className="text-accent"> *</span>}</span></label>;
}
export function ReportMember({ label, name }: { label: string; name: string }) {
  return <label className="block text-sm font-semibold">{label} <span className="text-accent">*</span><select name={name} required defaultValue="" className={reportField}><option value="" disabled>Select WASPA member</option>{reportMembers.map(member => <option key={member}>{member}</option>)}</select></label>;
}
export function ReportContact({ billing = false }: { billing?: boolean }) {
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const validate = (form: HTMLFormElement | null, nextEmail: string, nextConfirmation: string) => {
    const input = form?.elements.namedItem("email-confirm");
    if (input instanceof HTMLInputElement) input.setCustomValidity(emailsMatch(nextEmail, nextConfirmation) ? "" : "Email addresses must match.");
  };
  return <ReportSection title="Your information">
    <ReportInput label="Name and surname" name="name" required/>
    <ReportInput label={billing ? "Mobile number being billed" : "Mobile number receiving the spam"} name="mobile" type="tel" required/>
    {billing && <ReportInput label="Alternative contact number" name="alternative" type="tel"/>}
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-semibold">Email address <span className="text-accent">*</span><input name="email" type="email" autoComplete="email" required className={reportField} value={email} onChange={event => { setEmail(event.target.value); validate(event.target.form, event.target.value, confirmation); }}/></label>
      <label className="block text-sm font-semibold">Confirm email <span className="text-accent">*</span><input name="email-confirm" type="email" required className={reportField} value={confirmation} onChange={event => { setConfirmation(event.target.value); validate(event.target.form, email, event.target.value); }}/></label>
    </div>
    <ReportCheck name="email-updates" label="I would like WASPA to email me updates relating to this query. (If there are any.)"/>
  </ReportSection>;
}
export function ReportConfirmation({ billing = false }: { billing?: boolean }) {
  const [minors, setMinors] = useState("");
  const [consent, setConsent] = useState(false);
  return <ReportSection title="Confirmation">
    <ReportCheck name="good-faith" required label="I hereby declare that the information provided above is to my knowledge true and correct, and that I am submitting this query in good faith. I give WASPA permission to use the details provided to try to resolve this matter."/>
    <ReportRadios legend="Required declaration concerning minors" name="minors" onChange={setMinors} options={[{ value: "no-child", label: "The information provided does not include the personal information of a child." }, { value: "child", label: "The information provided does include the personal information of a child." }]}/>
    {requiresChildAuthorisation(minors) && <ReportCheck name="child-authorisation" required label="I am authorised to provide the personal information of this child and give WASPA my express consent to process this personal information."/>}
    <ReportCheck name="consent" required onChange={setConsent} label="I give WASPA consent to process the personal information provided using this form."/>
    <p className="text-sm text-muted-foreground">The following is an optional selection. If you do not tick this box, WASPA will not share your personal information with any third party. However, if the matter falls outside of WASPA’s jurisdiction this means that it will be closed without further action.</p>
    <ReportCheck name="third-party" label="I give permission for WASPA to share the personal information provided here with a mobile network operator or other regulatory body if this matter does not fall within WASPA’s jurisdiction."/>
    <p className="text-xs leading-relaxed text-muted-foreground">The information collected on this form will be used only for the purpose of attempting to resolve your {billing ? "unwanted billing" : "spam"} complaint or to develop statistical information about {billing ? "unwanted billing" : "mobile spam"}. Please visit <Link to="/about/nitty-gritty/privacy-policy" className="font-semibold text-primary underline">WASPA’s data collection policy</Link> for further details on how WASPA processes personal information and complies with POPIA requirements.</p>
    <p className="text-xs text-muted-foreground">Preview only: submissions are not sent to WASPA or stored.</p>
    <Button type="submit" variant="secondary" size="lg" disabled={!consent} className="w-full">{billing ? "Submit billing report" : "Submit report"}</Button>
  </ReportSection>;
}
export function ReportPreview({ onReset }: { onReset: () => void }) {
  return <div className="rounded-lg border bg-card p-8 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-secondary"/><h2 className="mt-4 font-display text-2xl font-bold">Report captured for preview</h2><p className="mt-2 text-sm text-muted-foreground">Your report has not been sent to WASPA or stored. This form is not connected to WASPA’s live reporting service.</p><Button type="button" variant="secondary" className="mt-5" onClick={onReset}>Submit another report</Button></div>;
}