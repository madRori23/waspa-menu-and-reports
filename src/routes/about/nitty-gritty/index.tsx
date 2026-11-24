import { createFileRoute } from "@tanstack/react-router";
import { Award, FileText, Lock, ScrollText, ShieldAlert } from "lucide-react";
import { PageHero, RowCard, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about/nitty-gritty/")({
  head: () =>
    meta(
      "The Nitty Gritty",
      "WASPA's practical documents: BBBEE certificate, regulatory submissions, PAIA manual and disclaimer.",
    ),
  component: () => (
    <Shell>
      <PageHero
        crumb="About WASPA"
        title="The Nitty Gritty"
        sub="The practical details: certificates, submissions, policies and legal notices."
        img={hero}
      />
      <div className="mx-auto grid max-w-4xl gap-4 px-4 py-10">
        <RowCard
          icon={Award}
          title="WASPA BBBEE certificate 2026"
          desc="WASPA's current BBBEE certificate for 2026 — coming soon."
        />
        <RowCard
          icon={FileText}
          title="Regulatory submissions"
          desc="WASPA's formal submissions to government and regulators on legislation and proposed guidelines."
          to="/about/nitty-gritty/regulatory-submissions"
        />
        <RowCard
          icon={ScrollText}
          title="PAIA manual"
          desc="How to request records held by WASPA, including contact details, record categories and fees."
          to="/about/nitty-gritty/paia-manual"
        />
        <RowCard
          icon={Lock}
          title="Privacy Policy"
          desc="Read WASPA's full Privacy Policy, including your rights and how to exercise them."
          to="/about/nitty-gritty/privacy-policy"
        />
        <RowCard
          icon={ShieldAlert}
          title="Disclaimer"
          desc="Read the legal notice about how information on this site may be used."
          to="/about/nitty-gritty/disclaimer"
        />
      </div>
    </Shell>
  ),
});
