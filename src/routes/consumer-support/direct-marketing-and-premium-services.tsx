import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/consumer-support/direct-marketing-and-premium-services")({
  head: () =>
    meta(
      "About Direct Marketing Messages & Premium Rated Services",
      "How spam is regulated, how to stop unwanted marketing SMS, and how premium-rated and subscription services are billed.",
    ),
  component: DirectMarketingPage,
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

function ReportNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg border border-secondary/40 bg-secondary/10 p-4 text-sm leading-relaxed">
      {children}
    </div>
  );
}

function ReportLink() {
  return (
    <Link
      to="/consumer-support"
      className="font-semibold text-primary underline underline-offset-4 hover:text-accent"
    >
      use this link
    </Link>
  );
}

function DirectMarketingPage() {
  return (
    <Shell>
      <PageHero
        crumb="Consumer Support"
        title="About Direct Marketing Messages & Premium Rated Services"
        sub="Understand your rights around marketing messages and premium-rated services."
        img={phone}
      />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <SectionHeading>About direct marketing messages</SectionHeading>
        <ReportNote>
          If you would like to report unwanted SMS marketing messages to WASPA, please <ReportLink />.
        </ReportNote>

        <Q>What is spam?</Q>
        <P>
          Spam usually means an unsolicited marketing message, which might be an email message, an SMS, or a message
          sent using some other technology.
        </P>

        <Q>What does the law say about spam?</Q>
        <P>
          The Consumer Protection Act (No. 68 of 2008) and the Protection of Personal Information Act (No. 4 of 2013)
          both contain some restrictions on the sending of spam and on companies selling your personal information to
          someone else.
        </P>
        <P>
          Unfortunately, some of these restrictions have not yet been enacted, meaning that consumers do not yet enjoy
          blanket protections against receiving spam.
        </P>

        <Q>What does the WASPA Code say about spam?</Q>
        <P>
          WASPA&rsquo;s Code incorporates all of the requirements of these laws, and the Code is binding on members of
          WASPA and any companies sending messages via a WASPA member.
        </P>
        <P>
          This means that WASPA&rsquo;s members (and their clients) can only send you marketing messages if you are
          already a customer, or if you have given them permission to do so.
        </P>

        <Q>What should I do if I&rsquo;m getting SMS spam?</Q>
        <Bullets
          items={[
            <>
              The most effective way to stop unwanted messages is to reply to the message with the word{" "}
              <strong className="font-semibold text-foreground">STOP</strong>.
            </>,
            "All WASPA members are required to honour STOP requests for marketing messages.",
            "You may not be charged more than the normal price of sending an SMS for this message.",
          ]}
        />

        <Q>Should I report spam to WASPA?</Q>
        <P>
          You are welcome to report spam to WASPA using the report SMS scams and spam page on the WASPA website.
        </P>
        <P>If the spam was sent by a WASPA member, we will try to help stop those messages.</P>

        <Q>Don&rsquo;t be scammed!</Q>
        <P>
          Be careful about text messages, pop-up messages and banner adverts which tell you that you need to update
          software. Don&rsquo;t be tricked into subscribing to a service.
        </P>
        <P>
          If you receive an SMS telling you that you have won the lottery, then someone is trying to trick you. You
          have not won the lottery.
        </P>
        <P>
          If you think you have been tricked, please report this to WASPA. You can also report a potential scam on the
          WASPA website.
        </P>
        <P>You can also report serious incidents to the national Cybersecurity Hub.</P>

        <SectionHeading>About premium-rated services</SectionHeading>
        <ReportNote>
          If you would like to report unwanted billing to WASPA, please <ReportLink />.
        </ReportNote>

        <Q>What are premium-rated services?</Q>
        <P>
          Premium rate services (PRS) are goods and services that you can buy by charging the cost to your phone bill,
          whether you pre-pay your phone bill by buying airtime or pay a regular, monthly bill.
        </P>
        <P>
          A premium rate service is one where the cost is higher than the standard rate, which is the normal charge
          that your mobile operator bills you for a voice call, an SMS, an MMS, a USSD service or a WAP service.
        </P>
        <P>
          Five digit shortcodes (e.g. 12345) are often linked to premium rated services, but can also be billed at
          standard rates.
        </P>
        <P>
          Pay close attention to any pricing information included on marketing for all mobile services. Clear pricing
          information will be shown for any premium rate service.
        </P>
        <P>
          Examples of premium-rate services are buying a ringtone, getting a soccer score notification, entering a
          competition, and sending an SMS to vote for a contestant on a talent show.
        </P>

        <Q>What is a subscription service?</Q>
        <P>
          A subscription service is one where you are charged an amount on a regular basis (daily, weekly, monthly) for
          access to the VAS service.
        </P>
        <P>
          You will usually see an advert for a subscription service on a webpage or advertised in a marketing message.
          If you respond to the advert by clicking, you will be taken to a confirmation step.
        </P>
        <P>
          All of South Africa&rsquo;s mobile networks provide a confirmation step. You will be asked by your mobile
          operator to confirm any service before you are billed for it. Only once you respond by confirming will you be
          charged for the service.
        </P>
        <P>
          If you receive a confirmation message for a service you did not intend to subscribe to, do not confirm the
          subscription.
        </P>
        <P>
          After subscribing to a service, you will be billed the subscription amount regardless whether you are an
          active user of the service or not. You will need to unsubscribe for billing to stop.
        </P>

        <Q>Reminder messages</Q>
        <P>
          Anyone billing you for services on a regular basis is required to send you reminder messages, so that you
          don&rsquo;t forget that you are being billed for the service.
        </P>
        <P>
          Don&rsquo;t ignore your reminder messages. Read them, and if you don&rsquo;t want the service any more,
          follow the instructions to unsubscribe.
        </P>
        <P>
          Reminder messages can be easy to mistake for spam. WASPA members are required to send reminders which start
          with the word &ldquo;reminder&rdquo; and then include the name of the service, how much it costs, how to stop
          it, and how to get help. Look for messages with that format.
        </P>

        <Q>Opting out of a service</Q>
        <P>
          For most services, you should be able to cancel the service by replying STOP to any reminder message you
          receive.
        </P>
        <P>
          If you can&rsquo;t opt-out by replying STOP, then the reminder message will give you alternative instructions
          for cancelling the service.
        </P>

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
