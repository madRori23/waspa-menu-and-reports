import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight, Coins, FileCheck, ClipboardList, Mail, ThumbsUp, Users, Vote } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/for-business/about-membership")({
  head: () => meta("About Membership", "Who can join WASPA, membership categories, the application process and membership fees."),
  component: AboutMembership,
});

const steps = [
  {
    icon: ClipboardList,
    title: "Submit an Application",
    desc: "Prospective members complete and submit the online membership application form available on the WASPA website.",
  },
  {
    icon: FileCheck,
    title: "Initial Assessment",
    desc: "The WASPA Secretariat conducts preliminary checks to establish whether the applicant meets the membership eligibility criteria, the correct membership category has been selected, and sufficient information has been provided. Should any information be incomplete, the Secretariat will contact the applicant.",
  },
  {
    icon: ThumbsUp,
    title: "Approval",
    desc: "Once the initial checks have been completed successfully, the application is forwarded to WASPA's Administrative Head for consideration and approval.",
  },
  {
    icon: Coins,
    title: "Membership Activation",
    desc: "Following approval, an initial membership fee invoice is issued. Membership becomes active once WASPA has confirmed receipt of payment.",
  },
];

function AboutMembership() {
  return (
    <Shell>
      <PageHero crumb="For Business" title="About Membership" sub="Who can join WASPA, the membership categories and how to apply." img={phone} />

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="text-3xl font-bold">About WASPA Membership</h2>
        <p className="mt-4 text-muted-foreground">
          WASPA (Wireless Application Service Providers' Association) welcomes applications from organisations involved in providing wireless application services in South Africa.
        </p>
        <p className="mt-3 text-muted-foreground">
          Membership provides organisations with an opportunity to participate in an industry association dedicated to promoting responsible business practices and supporting the development of the wireless application services industry.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Who Can Apply for Membership?</h2>
        <p className="mt-3 text-muted-foreground">
          Organisations involved in providing Wireless Application Services, as determined by the WASPA Constitution and the WASPA Board upon registration, may apply for membership. These services include, but are not limited to:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "The provision of content and services over mobile devices.",
            "The provision of facilities that facilitate or enable the transport of data over public mobile networks.",
            "Information-based and commerce-related services.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-lg border bg-card p-3 text-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-bold">Membership Categories</h2>
        <p className="mt-3 text-muted-foreground">
          WASPA offers two membership categories: Full Membership and Affiliate Membership. The applicable membership category determines the membership fee payable.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <Users className="h-10 w-10 text-secondary" strokeWidth={1.5} />
            <h3 className="mt-3 font-display text-xl font-bold">Full Membership</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Full Membership is available to organisations that have at least one direct connection and, consequently, a direct contract with a South African mobile network operator.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Organisations that have a direct network connection are required to apply for Full Membership and are not eligible for Affiliate Membership.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <Vote className="h-10 w-10 text-secondary" strokeWidth={1.5} />
            <h3 className="mt-3 font-display text-xl font-bold">Affiliate Membership</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Affiliate Membership is intended for information service providers that do not have a direct connection to any mobile network operator. Organisations that receive revenue directly from mobile network operators for WASP services do not qualify for Affiliate Membership.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Affiliate members are not entitled to voting rights, as provided for in clause 7.5 of the WASPA Constitution. Apart from this voting restriction, Affiliate and Full Members enjoy the same membership benefits.
            </p>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-bold">The Membership Application Process</h2>
        <p className="mt-3 text-muted-foreground">
          WASPA follows an application and approval process to ensure that prospective members meet the relevant membership requirements.
        </p>
        <ol className="mt-5 space-y-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="flex gap-4 rounded-lg border bg-card p-5">
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">{i + 1}</span>
                <Icon className="mt-2 h-6 w-6 text-secondary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display font-bold">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                {i === 3 && (
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {["Listed as a WASPA member on the website.", "Granted access to the WASPA member portal.", "Eligible to participate in WASPA member structures."].map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-accent" /> {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-muted p-6">
            <h3 className="font-display text-lg font-bold">Apply for Membership</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ready to join? Complete the online membership application form and WASPA will get back to you with feedback.
            </p>
            <Link to="/for-business/membership-application" className="mt-4 inline-flex rounded-md bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground hover:brightness-95">
              Apply for Membership →
            </Link>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <h3 className="font-display text-lg font-bold">Membership Fees</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Full and Affiliate Members are subject to different membership fees. Please visit our Membership Fees page for the applicable fee structure and further information.
            </p>
            <Link to="/for-business/membership-fees" className="mt-4 inline-flex rounded-md bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground hover:brightness-95">
              View Membership Fees →
            </Link>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <h3 className="font-display text-lg font-bold">Need More Information?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              If you have questions about membership eligibility, the application process or the appropriate membership category for your organisation, please contact the WASPA Secretariat through our Contact Us page.
            </p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:brightness-110">
              <Mail className="h-4 w-4" /> Contact Us
            </a>
          </div>
        </div>

      </section>
    </Shell>
  );
}
