import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText, Presentation } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about/nitty-gritty/regulatory-submissions")({
  head: () =>
    meta(
      "Regulatory Submissions",
      "Submissions made by WASPA to government and regulators, available for download.",
    ),
  component: RegulatorySubmissions,
});

const submissions = [
  {
    title: "Submission on the Convergence Bill [B9-2005]",
    format: "PDF",
    icon: FileText,
  },
  {
    title:
      "Comment on the Proposed Guidelines for Recognition of Industry Representative Bodies in terms of Chapter XI of the Electronic Communications and Transactions Act 2002 in terms of Notice 1951 of 2004",
    format: "PDF",
    icon: FileText,
  },
  {
    title: "Submission on the Films and Publications Amendment Bill",
    format: "PDF",
    icon: FileText,
  },
  {
    title: "Presentation to Home Affairs Portfolio Committee (Films and Publications Amendment Bill)",
    format: "PPT (~250kb)",
    icon: Presentation,
  },
];

function RegulatorySubmissions() {
  return (
    <Shell>
      <PageHero
        crumb="The Nitty Gritty"
        title="Regulatory Submissions"
        sub="Formal submissions made by WASPA on legislation affecting the mobile services industry."
        img={hero}
      />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <p className="leading-relaxed text-muted-foreground">
          The following submissions are available for download.
        </p>
        <div className="mt-6 divide-y rounded-lg border bg-card">
          {submissions.map((s) => (
            <div key={s.title} className="flex items-start gap-4 p-5">
              <s.icon className="mt-0.5 h-6 w-6 shrink-0 text-secondary" strokeWidth={1.5} />
              <div>
                <p className="font-semibold leading-snug">{s.title}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  <Download className="h-4 w-4" /> Download {s.format}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/about/nitty-gritty"
          className="mt-8 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:text-accent"
        >
          ← Back to The Nitty Gritty
        </Link>
      </article>
    </Shell>
  );
}
