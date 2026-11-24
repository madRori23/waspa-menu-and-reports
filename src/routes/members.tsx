import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Laptop, Users } from "lucide-react";
import { PageHero, RowCard, Shell, SideMenu, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/members")({
  head: () => meta("Members", "Member resources, directory and industry information."),
  component: () => (
    <Shell>
      <PageHero crumb="Members" title="Members" sub="Member resources, directory and industry information." img={phone} />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-[220px_1fr]">
        <SideMenu items={["Members", "Member Directory", "Member Portal", "Membership Statistics", "Apply to Join"]} />
        <div>
          <div className="grid gap-4 lg:grid-cols-3">
            <RowCard to="/member-directory" icon={Users} title="Member Directory" desc="Search and browse the WASPA member directory." cta="Search Directory" />
            <RowCard to="/member-portal" icon={Laptop} title="Member Portal" desc="Sign in to access the member portal, resources and updates." cta="Member Login" />
            <Link to="/membership-statistics"><RowCard icon={BarChart3} title="Membership Statistics" desc="View membership numbers, new members and ex-member trends." cta="View Statistics" /></Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-lg border border-secondary bg-secondary/15 p-5">
            <Users className="h-10 w-10 text-secondary" />
            <div className="flex-1"><p className="font-display text-lg font-bold">Apply to Join WASPA</p><p className="text-sm text-muted-foreground">Become a WASPA member and be part of a trusted, compliant mobile services industry.</p></div>
            <Link to="/for-business/membership-application" className="rounded-md bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">Apply Now →</Link>
          </div>
        </div>
      </div>
    </Shell>
  ),
});
