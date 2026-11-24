import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about/nitty-gritty/paia-manual")({
  head: () =>
    meta(
      "PAIA Manual",
      "WASPA's manual under Section 51 of the Promotion of Access to Information Act — how to request access to records held by WASPA.",
    ),
  component: PaiaManual,
});

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mt-12 border-b pb-2 font-display text-sm font-bold uppercase tracking-widest text-primary">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-relaxed text-muted-foreground">{children}</p>;
}

function Item({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mt-3 flex gap-3 leading-relaxed text-muted-foreground">
      <span className="shrink-0 font-semibold text-foreground">{n}</span>
      <span>{children}</span>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1 pl-6 leading-relaxed text-muted-foreground">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

function PaiaManual() {
  return (
    <Shell>
      <PageHero
        crumb="The Nitty Gritty"
        title="PAIA Manual"
        sub="WASPA supports the Promotion of Access to Information Act."
        img={hero}
      />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-lg border bg-card p-5">
          <p className="font-display font-bold">
            The Promotion of Access to Information Act — Section 51 ("Act") Manual for the Wireless Application
            Service Providers' Association ("WASPA")
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Nonprofit Organisation</p>
          <p className="mt-2 text-sm text-muted-foreground">
            WASPA's PAIA manual can be viewed in PDF format here:{" "}
            <span className="font-semibold text-primary">PAIA Manual (PDF, 86k)</span>
          </p>
        </div>

        <SectionHeading>1. Introduction</SectionHeading>
        <P>
          WASPA's mission is to provide a non-profit forum in which members can address issues of common interest
          and interface with industry stakeholders, network operators, government and regulatory organisations, both
          locally and internationally so that end-users receive world-class service and industry participants earn a
          fair return on their investments.
        </P>

        <SectionHeading>2. Contact details: information required under Section 51(1)(a) of the Act</SectionHeading>
        <div className="mt-4 overflow-hidden rounded-lg border bg-card">
          <dl className="divide-y text-sm">
            {[
              ["Contact Person", "Anthony Ekerold"],
              ["Nonprofit Organisation Number", "115-491"],
              ["Postal Address", "P.O. Box 20153, Big Bay, 7448"],
              [
                "Street Address",
                "℅ Brimelow, de Oliveira & Ekerold Attorneys (BDE Attorneys), First Floor, Block A, One the Boulevard, Westway Office Park, 7 Harry Gwala Road, Westville, 3629",
              ],
              ["Telephone", "+27-31-267-0430"],
              ["Fax", "+27-86-677-9824"],
              ["Designated Information Officer", "Anthony Ekerold"],
              ["Email address of Information Officer", "anthony@waspa.org.za"],
              ["Website", "www.waspa.org.za"],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 px-5 py-3 sm:grid-cols-3">
                <dt className="font-semibold">{k}</dt>
                <dd className="text-muted-foreground sm:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <SectionHeading>3. Description of guide referred to in Section 10: Section 51(1)(b)</SectionHeading>
        <Item n="3.1">
          The Act grants a requester access to records of a private body, if the record is required for the exercise
          or protection of any rights. If a public body lodges a request, the public body must be acting in the
          public interest.
        </Item>
        <Item n="3.2">
          Requests in terms of the Act shall be made in accordance with the prescribed procedures, at the rates
          provided. The forms and tariff are dealt with in paragraphs 6 and 7 of the Act.
        </Item>
        <Item n="3.3">
          Requesters are referred to the Guide in terms of Section 10 which has been compiled by the South African
          Human Rights Commission, which will contain information for the purposes of exercising Constitutional
          Rights. The Guide is available from the SAHRC. The contact details of the Commission are:
        </Item>
        <div className="mt-4 rounded-lg border bg-card p-5 text-sm">
          <dl className="space-y-2">
            {[
              ["Postal Address", "Private Bag 2700, Houghton, 2041"],
              ["Street Address", "Braampark Forum 3, 33 Hoofd Street, Braamfoontein"],
              ["Telephone Number", "+27-11-877 3600"],
              ["Email", "info@sahrc.org.za"],
              ["Website", "www.sahrc.org.za"],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 sm:grid-cols-3">
                <dt className="font-semibold">{k}</dt>
                <dd className="text-muted-foreground sm:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <SectionHeading>4. Records available in terms of applicable legislation: Section 51(1)(d)</SectionHeading>
        <P>Records available in terms of other legislation are as follows:</P>
        <List
          items={[
            "Labour Relations Act 66 of 1995",
            "Employment Equity Act 55 of 1998",
            "Basic Conditions of Employment Act 75 of 1997",
            "Compensation for Occupational Injuries and Disease Act 130 of 1993",
            "Companies Act 71 of 2008",
            "Unemployment Insurance Act 63 of 2001",
            "Value Added Tax Act 89 of 1991",
            "Income Tax Act 58 of 1962",
            "Skills Development Act 9 of 1999",
            "Insolvency Act No. 24 of 1936 (sections 134 and 155)",
            "Occupational Health and Safety Act No. 85 of 1993",
            "Consumer Protection Act 68 of 2008",
            "Electronic Communications and Transactions Act 25 of 2002",
            "Protection of Personal Information Act 4 of 2013",
          ]}
        />

        <SectionHeading>5. Subjects and categories of records held by the private body: Section 51(1)(e)</SectionHeading>
        <P>
          The webpage of the Nonprofit Organisation is www.waspa.org.za, accessible to anyone with access to the
          internet, and has information covering the following:
        </P>
        <List items={["About the company", "About its services", "Contact details"]} />
        <P>
          <span className="font-semibold text-foreground">Records that may be refused:</span> Note that access to the
          following documents and information listed in items 5.1 – 5.4 below may be refused in accordance with
          provisions of the Act.
        </P>
        <P>
          In addition to the documents listed below, any request which is made in terms of the Protection of Personal
          Information Act 4 of 2013, may or must, as the case may be, be refused in accordance with section 23(4)(a)
          thereof, if the grounds for refusal for access to records set out in the applicable sections of Chapter 4
          of Part 3 of the Act apply.
        </P>
        <Item n="5.1">
          <span>
            <span className="font-semibold text-foreground">Companies Act records:</span> Documents of incorporation;
            Memorandum and Articles of Association; Minutes of Board of Directors meetings; Records relating to the
            appointment of directors / auditor / secretary / public officer and other officers; Share Register and
            other statutory registers.
          </span>
        </Item>
        <Item n="5.2">
          <span>
            <span className="font-semibold text-foreground">Financial records:</span> Annual Financial Statements;
            Accounting Records; Banking Records; Bank Statements; Paid Cheques; Electronic banking records; Asset
            Register; Rental Agreements; Invoices.
          </span>
        </Item>
        <Item n="5.3">
          <span>
            <span className="font-semibold text-foreground">Income tax records:</span> PAYE Records; Documents issued
            to employees for income tax purposes; Records of payments made to SARS on behalf of employees; All other
            statutory compliances: VAT, Skills Development Levies, UIF, Workmen's Compensation.
          </span>
        </Item>
        <Item n="5.4">
          <span>
            <span className="font-semibold text-foreground">Personnel documents and records (where applicable):</span>{" "}
            Employment contracts; Employment Equity Plan; Medical Aid records; Pension Fund records; Disciplinary
            records; Salary records; SETA records; Disciplinary code; Leave records; Training records; Training
            Manuals.
          </span>
        </Item>

        <SectionHeading>6. Form of request (Section 51(1)(e))</SectionHeading>
        <P>To facilitate the processing of your request, kindly:</P>
        <Item n="6.1">
          Use the prescribed form, available on the website of the South African Human Rights Commission at
          www.sahrc.org.za.
        </Item>
        <Item n="6.2">Address your request to the Head of the Company.</Item>
        <Item n="6.3">
          <span>
            Provide sufficient details to enable the company to identify:
            <List
              items={[
                "The record(s) requested;",
                "The requester (and if an agent is lodging the request, proof of capacity);",
                "The form of access required;",
                "The postal address or fax number of the requester in the Republic;",
                "If the requester wishes to be informed of the decision in any manner (in addition to written), the manner and particulars thereof;",
                "The right which the requester is seeking to exercise or protect, with an explanation of the reason the record is required to exercise or protect the right.",
              ]}
            />
          </span>
        </Item>
        <P>
          Please attach the fee schedule to the manual, downloadable from the SAHRC website, and the prescribed form
          C which is also available from the SAHRC website.
        </P>

        <SectionHeading>7. Prescribed fees (Section 51(1))</SectionHeading>
        <P>The following applies to requests (other than personal requests):</P>
        <Item n="7.1">A requestor is required to pay the prescribed fees (R50.00) before a request will be processed.</Item>
        <Item n="7.2">
          If the preparation of the record requested requires more than the prescribed hours (six), a deposit shall
          be paid (of not more than one third of the access fee which would be payable if the request were granted).
        </Item>
        <Item n="7.3">
          A requestor may lodge an application with a court against the tender/payment of the request fee and/or
          deposit.
        </Item>
        <Item n="7.4">Records may be withheld until the fees have been paid.</Item>
        <Item n="7.5">
          The fee structure is available on the website of the South African Human Rights Commission at
          www.sahrc.org.za.
        </Item>
        <Item n="7.6">
          A requestor is not required to pay any fee for a request which is made in terms of section 23(1)(a) of the
          Protection of Personal Information Act 4 of 2013.
        </Item>
        <Item n="7.7">
          A requestor is required to pay the prescribed fees (R50.00), for a request which is made in terms of
          section 23(1)(b) of the Protection of Personal Information Act 4 of 2013, before the request will be
          processed.
        </Item>
        <P>
          If in addition to a written reply, the requester wishes to be informed of the decision on the request in
          any other manner, to state that manner and the necessary particulars to be informed in the other manner; if
          the request is made on behalf of another person, to submit proof of the capacity in which the requester is
          making the request, to the reasonable satisfaction of the head of the private body.
        </P>

        <SectionHeading>
          8. Request for personal information in terms of the Protection of Personal Information Act 4 of 2013
        </SectionHeading>
        <Item n="8.1">
          A requestor, having provided adequate proof of identity to the head of the private body, has the right in
          terms of section 23 of the Protection of Personal Information Act 4 of 2013, to request confirmation as to
          whether the private body holds any personal information about the requestor, and;
        </Item>
        <Item n="8.2">
          A requestor has the right to request from the private body the record, or a description of the personal
          information, about the requestor held by the private body, including information about the identity of all
          third parties, or categories of third parties, who have, or have had, access to the personal information of
          the requestor.
        </Item>
        <Item n="8.3">
          A requestor has the right to request that any personal information held by the private body and disclosed
          pursuant to a request in terms of section 23(1) of the Protection of Personal Information Act 4 of 2013, be
          corrected in accordance with section 24 thereof.
        </Item>
        <Item n="8.4">
          <span>
            In terms of section 24 of the Protection of Personal Information Act 4 of 2013, a requestor may, in the
            prescribed manner, request a private body to:
            <List
              items={[
                "correct or delete personal information about the requestor which is in its possession or under its control that is inaccurate, irrelevant, excessive, out of date, incomplete, misleading or unlawfully obtained, or;",
                "destroy or delete a record of personal information about the requestor that the private body is no longer authorised to retain in terms of section 14 of the Protection of Personal Information Act 4 of 2013.",
              ]}
            />
          </span>
        </Item>
        <Item n="8.5">
          The provisions of section 53 of the Act apply to any requests made in terms of section 23 of the Protection
          of Personal Information Act 4 of 2013.
        </Item>

        <Link
          to="/about/nitty-gritty"
          className="mt-10 inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:text-accent"
        >
          ← Back to The Nitty Gritty
        </Link>
      </article>
    </Shell>
  );
}
