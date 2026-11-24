import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, FileText, FolderOpen, ExternalLink } from "lucide-react";
import { PageHero, RowCard, Shell, SideMenu, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

const recent = [
  ["62570","2026-08-18","Digital Virgo ZA (Pty) Ltd","2026-10-15","Complaint upheld","https://reports.waspa.org.za/download.php?file=62570.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62570"],
  ["62571","2026-08-18","Mobile Direct","2026-10-15","Released","","https://reports.waspa.org.za/?page=recpub&complaint=62571"],
  ["62604","2026-08-27","Vuclip","2026-10-07","Complaint upheld","https://reports.waspa.org.za/download.php?file=62604.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62604"],
  ["62693","2026-09-18","Digital Virgo ZA (Pty) Ltd","2026-10-07","Complaint upheld","https://reports.waspa.org.za/download.php?file=62693.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62693"],
  ["62680","2026-09-15","Mobile Direct","2026-09-30","Complaint dismissed","https://reports.waspa.org.za/download.php?file=62680.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62680"],
  ["62574","2026-08-19","Mobistar","2026-09-16","Complaint upheld","https://reports.waspa.org.za/download.php?file=62574.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62574"],
  ["62483","2026-07-16","Vuclip","2026-09-10","Complaint upheld","https://reports.waspa.org.za/download.php?file=62483.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62483"],
  ["62082","2026-03-13","IN10 Media Private Limited","2026-08-19","Released","","https://reports.waspa.org.za/?page=recpub&complaint=62082"],
  ["62083","2026-03-26","SVMobi","2026-08-06","Released","","https://reports.waspa.org.za/?page=recpub&complaint=62083"],
  ["62084","2026-03-13","Image Perfect Concepts","2026-08-06","Complaint upheld","https://reports.waspa.org.za/download.php?file=62084.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62084"],
  ["62094","2026-04-10","Worldplay","2026-08-06","Complaint upheld","https://reports.waspa.org.za/download.php?file=62094.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62094"],
  ["62005","2026-03-26","SVMobi","2026-07-08","Released","","https://reports.waspa.org.za/?page=recpub&complaint=62005"],
  ["62091","2026-03-17","Audiencenest PTE LTD","2026-07-08","Complaint upheld","https://reports.waspa.org.za/download.php?file=62091.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62091"],
  ["62092","2026-03-17","Digitalabs","2026-07-08","Complaint upheld","https://reports.waspa.org.za/download.php?file=62092.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62092"],
];
const appeals = [
  ["62085","2026-03-26","Jam Incorporated","2026-08-19","Appeal partly successful","https://reports.waspa.org.za/download.php?file=62085_appeal.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62085"],
  ["62093","2026-04-10","Forest interactive","2026-08-19","Appeal partly successful","https://reports.waspa.org.za/download.php?file=62093_appeal.pdf","https://reports.waspa.org.za/?page=recpub&complaint=62093"],
];

function ReportTable({ title, rows }: { title: string; rows: string[][] }) {
  return <div className="mt-6 overflow-hidden rounded-lg border bg-card">
    <h3 className="border-b bg-muted px-4 py-3 font-display font-bold">{title}</h3>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="bg-muted/60"><tr>{["No.","Lodged","WASP","Published","Outcome","Report"].map(x=><th key={x} className="px-3 py-3 font-semibold">{x}</th>)}</tr></thead>
        <tbody>{rows.map((r)=><tr key={r[0]} className="border-t hover:bg-muted/40">
          <td className="px-3 py-3"><a className="font-semibold text-primary underline" href="/complaint-reports">{r[0]}</a></td>
          {r.slice(1,5).map((v,i)=><td key={i} className="px-3 py-3">{v}</td>)}
          <td className="px-3 py-3">{r[5] ? <a className="font-semibold text-accent underline" href={r[5]} target="_blank" rel="noreferrer">Download</a> : "—"}</td>
        </tr>)}</tbody>
      </table>
    </div>
  </div>;
}

export const Route = createFileRoute("/code-of-conduct")({
  head: () => meta("Code of Conduct", "Current WASPA Code of Conduct, archived versions and complaint reports."),
  component: () => (
    <Shell>
      <PageHero crumb="Code of Conduct" title="WASPA Code of Conduct" sub="Promoting responsible, transparent and compliant mobile services." img={hero} />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <SideMenu items={["Code of Conduct", "Current Code", "Code Archive", "Complaint Reports"]} />
          <div className="grid gap-4 lg:grid-cols-3">
            <RowCard to="/code-of-conduct-current" icon={FileText} title="Current Code of Conduct" desc="Version 17.15, effective 16 September 2026. Read the binding WASPA Code of Conduct." cta="View Current Code" />
            <RowCard to="/code-of-conduct-archive" icon={FolderOpen} title="Code of Conduct Archive" desc="Browse previous versions of the Code of Conduct and change history." cta="View Archive" />
            <RowCard to="/complaint-reports" icon={BarChart3} title="Complaint Reports & Archives" desc="Browse published adjudications, pending complaints and searchable reports." cta="View Reports" />
          </div>
        </div>
        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div><h2 className="font-display text-2xl font-bold">Complaint reports and archives</h2><p className="mt-1 text-sm text-muted-foreground">Browse complaint information in the official WASPA reports portal.</p></div>
            <a href="/complaint-reports" className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">View complaint reports <ExternalLink className="h-4 w-4"/></a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[["Recently published","/complaint-reports?view=recent"],["Pending complaints","/complaint-reports?view=pending"],["Search complaints","/complaint-reports?view=search"]].map(([label,url])=><a key={label} href={url} className="rounded-md border bg-card px-4 py-2 text-sm font-semibold text-primary hover:bg-muted">{label} →</a>)}
          </div>
          <ReportTable title="Recently published adjudications" rows={recent}/>
          <ReportTable title="Recently published appeals" rows={appeals}/>
          <p className="mt-3 text-xs text-muted-foreground">Report entries and dates are reproduced from the information supplied. Use the official portal for the latest records.</p>
        </section>
      </div>
    </Shell>
  ),
});
