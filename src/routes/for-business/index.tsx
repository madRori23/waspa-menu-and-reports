import { createFileRoute } from "@tanstack/react-router";
import { Coins, CreditCard, SquarePen, Users } from "lucide-react";
import { PageHero, RowCard, Shell, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/for-business/")({
  head: () => meta("For Business", "Resources and membership for organisations in the mobile services ecosystem."),
  component: () => (
    <Shell>
      <PageHero crumb="For Business" title="For Business" sub="Resources and membership for organisations in the mobile services ecosystem." img={phone} />
      <div className="mx-auto grid max-w-5xl gap-4 px-4 py-10 md:grid-cols-2">
        <RowCard to="/for-business/membership-application" icon={SquarePen} title="Apply for Membership" desc="Complete the online application to become a registered WASPA member." />
        <RowCard to="/for-business/about-membership" icon={Users} title="About Membership" desc="Explore membership categories, benefits and whether your organisation qualifies." />
        <RowCard icon={Coins} title="WASPA Associate Programme" desc="Recognition and opportunities for individual industry professionals, without full membership." to="/for-business/associate-programme" />
        <RowCard to="/for-business/membership-fees" icon={CreditCard} title="Membership Fees" desc="See WASPA membership fees, payment structures and how payments work." />
      </div>
    </Shell>
  ),
});
