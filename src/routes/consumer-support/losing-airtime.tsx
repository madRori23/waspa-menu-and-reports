import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/consumer-support/losing-airtime")({
  head: () =>
    meta(
      "Losing Airtime?",
      "Unusually high phone bill or disappearing airtime? Find out what is causing it and how to stop it.",
    ),
  component: LosingAirtimePage,
});

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mt-12 border-b pb-2 font-display text-sm font-bold uppercase tracking-widest text-primary first:mt-0">
      {children}
    </h2>
  );
}

function Q({ children }: { children: string }) {
  return <h3 className="mt-8 font-display text-lg font-bold text-foreground">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>;
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-6 leading-relaxed text-muted-foreground">
      {items.map((i, k) => (
        <li key={k}>{i}</li>
      ))}
    </ul>
  );
}

function Network({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-lg border bg-card p-5">
      <p className="font-display font-bold text-primary">{name}</p>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function Steps({ items }: { items: string[] }) {
  return (
    <ol className="mt-2 list-decimal space-y-1 pl-5">
      {items.map((i, k) => (
        <li key={k}>{i}</li>
      ))}
    </ol>
  );
}

function LosingAirtimePage() {
  return (
    <Shell>
      <PageHero
        crumb="Consumer Support"
        title="Losing Airtime?"
        sub="Unusually high phone bill or disappearing airtime? Find out what is causing it and how to stop it."
        img={phone}
      />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <SectionHeading>If you have an unusually high phone bill, or your airtime is disappearing</SectionHeading>
        <P>Establish exactly what is causing the problem. It could be:</P>
        <Bullets
          items={[
            "Unexpected data charges (apps running in the background)",
            "WASP services (subscription services)",
            "Sending lots of SMSes to premium-rated numbers",
            "Airtime transfers",
            "USSD usage (for example, when you dial *120*123# to enter competitions)",
          ]}
        />
        <P>
          Check your SMS history to see if you have messages welcoming you to a subscription service, or reminding you
          about a service you are subscribed to.
        </P>
        <P>
          Contact your mobile service provider if you need assistance in determining what you are being billed for.
        </P>

        <Q>Questions you should ask your mobile operator when you contact them</Q>
        <Bullets
          items={[
            "What services am I being charged for?",
            "Are those WASP services, data services, or something else?",
            "Is there a company billing me for subscription services?",
            "What is the name of the company or companies billing me?",
            "Do you have a phone number for that company?",
            "Can you cancel the subscription services for me?",
          ]}
        />

        <SectionHeading>If data charges are the problem</SectionHeading>
        <P>
          Make sure you switch off data services on your phone that you don&rsquo;t need. Some applications make use of
          mobile data, even if they are only running in the background.
        </P>
        <P>
          If you are not sure how to do this, visit your closest mobile phone store, and ask them to help you turn off
          applications which use data in the background.
        </P>

        <SectionHeading>If WASP services are the problem</SectionHeading>
        <P>Ask your mobile operator to stop the services which are being billed.</P>
        <P>Use the tools provided by your network to cancel all subscription services.</P>
        <P>Mobile operators allow users to manage content subscriptions through SMS or USSD codes:</P>

        <Network name="Cell C">
          <p>
            Use the USSD string <strong className="font-semibold text-foreground">*133*1#</strong> to block all existing
            and future content billing.
          </p>
        </Network>

        <Network name="MTN">
          <p className="font-semibold text-foreground">Check/manage subscription services by dialling *141*5#</p>
          <Steps
            items={[
              "Dial *141*5#",
              "Select option 2 (Content Services)",
              "Select option 1 (Manage Content Services to view or cancel subscriptions)",
              "Select option 2 (Manage Premium Rated Services to set spend limits for PRS or opt out of PRS marketing)",
            ]}
          />
          <p className="mt-3 font-semibold text-foreground">Block PRS charges by dialling *155#</p>
          <Steps
            items={[
              "Dial *155#",
              "Select option 99 (more)",
              "Select option 4 (Block/Unblock future charges)",
              "Select option 2 (Premium-rated services)",
            ]}
          />
          <p className="mt-3 font-semibold text-foreground">Block PRS marketing by dialling *155#</p>
          <Steps items={["Dial *155#", "Select option 3 (Stop third party messages)"]} />
        </Network>

        <Network name="Telkom">
          <p className="font-semibold text-foreground">Block all WASP subscriptions by enabling a setting in the Telkom app:</p>
          <Bullets
            items={[
              <>
                Log into the app and navigate to{" "}
                <strong className="font-semibold text-foreground">
                  My Products &gt; Manage &gt; Protect Your Mobile Number
                </strong>
                , and set it to &ldquo;On&rdquo;.
              </>,
              <>
                To manage premium content subscriptions, navigate to{" "}
                <strong className="font-semibold text-foreground">
                  My Products &gt; Subscriptions &gt; Content Services
                </strong>
                .
              </>,
              <>
                Alternatively, dial <strong className="font-semibold text-foreground">180</strong> and follow the
                prompts.
              </>,
            ]}
          />
        </Network>

        <Network name="Vodacom">
          <p className="font-semibold text-foreground">Send an SMS containing &ldquo;STOP ALL&rdquo; to 31050:</p>
          <Bullets
            items={[
              "If you are subscribed to WASP services, you should receive a response indicating that your request to unsubscribe has been received. You should then receive messages confirming that you have been unsubscribed.",
            ]}
          />
          <p className="mt-3">
            Alternatively, dial <strong className="font-semibold text-foreground">*135#</strong>, select
            &ldquo;Next&rdquo;, then &ldquo;Services&rdquo;, then &ldquo;Content Services&rdquo;. You will then be
            provided with three options: &ldquo;View and Stop Content Services&rdquo;, &ldquo;Stop All&rdquo; and either
            &ldquo;Block&rdquo; or &ldquo;Unblock&rdquo;. Select &ldquo;Stop All&rdquo; and then repeat the process and
            select &ldquo;Block&rdquo;. If you see &ldquo;Unblock&rdquo; instead of &ldquo;Block&rdquo; as an option,
            you have already blocked subscription services.
          </p>
          <p className="mt-3">
            To unsubscribe from Vodafone Live services, dial{" "}
            <strong className="font-semibold text-foreground">*117#</strong>, select &ldquo;Next&rdquo; and then
            &ldquo;Unsubscribe&rdquo;.
          </p>
          <p className="mt-3">
            You can also use the Vodacom App to check for subscription services. Open the app, select
            &ldquo;More&rdquo; at the bottom right, and then select &ldquo;Content Services&rdquo;. You will see a list
            of your active subscriptions or &ldquo;You&rsquo;re not subscribed to any content services&rdquo;. To block
            your number, use the button at the bottom of the screen which says &ldquo;Block content services&rdquo;. If
            you have already activated a block, this will instead say &ldquo;Unblock content services&rdquo;.
          </p>
        </Network>

        <div className="mt-8 rounded-lg border border-secondary/40 bg-secondary/10 p-4 text-sm leading-relaxed">
          If your mobile operator is unable to assist you,{" "}
          <Link
            to="/consumer-support/lodge-a-complaint"
            className="font-semibold text-primary underline underline-offset-4 hover:text-accent"
          >
            contact WASPA
          </Link>
          .
        </div>

        <SectionHeading>If your phone is stolen or lost</SectionHeading>
        <P>
          Report a stolen or lost phone to your service provider as soon as possible, so that your SIM can be
          deactivated.
        </P>
        <P>Phone thieves often use stolen phones to transfer airtime or enter airtime competitions.</P>

        <Link
          to="/consumer-support"
          className="mt-12 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:text-accent"
        >
          ← Back to Consumer Support
        </Link>
      </article>
    </Shell>
  );
}
