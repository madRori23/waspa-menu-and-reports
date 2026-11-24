import { createFileRoute } from "@tanstack/react-router";
import { Ban, BarChart3, FileText, Megaphone, MessageSquare, Receipt, Search, ShieldAlert } from "lucide-react";
import { PageHero, Shell, Tile, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/consumer-support/")({
  head: () => meta("Consumer Support", "Help, information and tools for mobile services consumers."),
  component: () => (
    <Shell>
      <PageHero crumb="Consumer Support" title="Consumer Support" sub="Help, information and tools for mobile services consumers." img={phone} />
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 py-10 md:grid-cols-4">
        <Tile
          icon={FileText}
          title="Complaints Process"
          desc="How the complaints process works, step by step, and what to expect."
          to="/consumer-support/complaints-process"
        />
        <Tile icon={MessageSquare} title="Lodge a Complaint" desc="Unhappy with a mobile service? Submit a complaint and WASPA will help you resolve it." to="/consumer-support/lodge-a-complaint" />
        <Tile icon={ShieldAlert} title="Report a Scam / Spam" desc="Report suspicious SMS messages and mobile scams." to="/report-scam-spam" />
        <Tile icon={Receipt} title="Report Unwanted Billing" desc="Submit a report about unexpected mobile charges." to="/report-unwanted-billing" />
        <Tile icon={BarChart3} title="Losing Airtime" desc="Airtime disappearing? Find out why and what you can do about it." to="/consumer-support/losing-airtime" />
        <Tile
          icon={Megaphone}
          title="About Direct Marketing & Premium Services"
          desc="Understand your rights around marketing messages and premium-rated services."
          to="/consumer-support/direct-marketing-and-premium-services"
        />
        <Tile icon={Ban} title="Do Not Contact" desc="Check whether your mobile number appears on the WASPA Do Not Contact list." to="/dnc" />
        <Tile icon={Search} title="SMS Codes Search" desc="Search short codes and learn how to identify the service provider." to="/sms-codes-search" />
      </div>
    </Shell>
  ),
});
