import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about/constitution")({
  head: () =>
    meta(
      "WASPA Constitution",
      "The Constitution of the Wireless Application Service Providers' Association of South Africa — effective 6 March 2019, amended 5 March 2020, 24 March 2021 and 1 March 2025.",
    ),
  component: Constitution,
});

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mt-12 border-b pb-2 font-display text-sm font-bold uppercase tracking-widest text-primary">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-relaxed text-muted-foreground">{children}</p>;
}

function Item({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="mt-3 flex gap-3 leading-relaxed text-muted-foreground">
      <span className="shrink-0 font-semibold text-foreground">{n}</span>
      <span>{children}</span>
    </p>
  );
}

function Constitution() {
  return (
    <Shell>
      <PageHero
        crumb="About WASPA"
        title="WASPA Constitution"
        sub="The founding document that governs how the association operates."
        img={hero}
      />

      <article className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-lg border bg-card p-5">
          <p className="font-display font-bold">Constitution of the Wireless Application Service Providers' Association of South Africa</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Effective 6 March 2019, amended 5 March 2020, 24 March 2021 and 1 March 2025.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Download this document as a PDF: <span className="font-semibold text-primary">WASPA Constitution (March 2025 version)</span>
            {" "}· Previous Constitution available on request.
          </p>
        </div>

        <SectionHeading>1. Preamble</SectionHeading>
        <P>
          The members of the Wireless Application Service Providers' Association of South Africa ("WASPA") consider
          themselves contractually bound by the Constitution of WASPA, as set out herein, and the provisions of the
          WASPA Code of Conduct.
        </P>

        <SectionHeading>2. Interpretation and Definitions</SectionHeading>
        <Item n="2.1">
          In this Constitution, unless inconsistent with or otherwise indicated by the context, the following
          expressions shall bear the meanings assigned to them hereunder and cognate expressions shall bear
          corresponding meanings:
        </Item>
        <Item n="2.1.1">"Board" refers to the group of individuals elected by the Full Members to represent WASPA.</Item>
        <Item n="2.1.2">"Constitution" refers to this document together with any annexures that may be attached from time to time.</Item>
        <Item n="2.1.3">"Days" refers to all days including public holidays and weekends.</Item>
        <Item n="2.1.4">"Administrative Head" refers to the person who may be appointed by the Board from time to time to oversee the day-to-day operational management of WASPA.</Item>
        <Item n="2.1.5">"Head of Complaints" refers to the person who is appointed by the Board from time to time to oversee the WASPA complaints process.</Item>
        <Item n="2.1.6">"Member" refers to a person that has been accepted for membership of WASPA, whether a Full Member or Affiliate Member.</Item>
        <Item n="2.1.7">"Membership Agreement" refers to the mandatory agreement that is required to be entered into between a potential Member and WASPA before membership of WASPA will be provided to that potential Member.</Item>
        <Item n="2.1.8">"WASPA" refers to the Wireless Application Service Providers' Association, a non-profit organisation registered in terms of the Nonprofit Organisation Act, 71 of 1997, registration number 115491 NPO.</Item>
        <Item n="2.1.9">"Working Days" refers to days excluding weekends and public holidays.</Item>
        <Item n="2.3">Any reference to "persons" in this Constitution means natural or juristic persons.</Item>
        <Item n="2.4">Clause headings are for reference purposes only and shall not be used in the interpretation of this Constitution.</Item>

        <SectionHeading>3. Purpose and Mission</SectionHeading>
        <Item n="3.1">WASPA is an independent, voluntary, non-profit body which represents the interests of the mobile application and services industry in its entirety within South Africa, including WASPs, mobile network operators and consumers.</Item>
        <Item n="3.2">WASPA provides a neutral forum for members to address the issues of common interest and interact with industry stakeholders, network operators, consumers, regulatory and government bodies.</Item>
        <Item n="3.3">
          WASPA's primary objectives are: (i) to ensure that services offered to consumers are provided according to
          WASPA's Code of Conduct, so that members of the public can use mobile services with confidence, and (ii) to
          support the growth of the mobile applications and services industry by ethical and sustainable means.
        </Item>
        <Item n="3.4">
          WASPA aims to: (i) be a source and repository of relevant information for its Members; (ii) promote ethical
          and sound business practices amongst its Members; (iii) ensure compliance by WASPA Members with the WASPA
          Code of Conduct and provide a mechanism for consumers to raise industry related matters of concern; (iv)
          make available to Members a relevant Code of Conduct; (v) address consumer complaints lodged using the Code
          of Conduct; (vi) provide guidance and/or training from time to time on any regulatory issues that may affect
          the industry; (vii) endeavour to influence the industry in the implementation of regulated competition in
          the mobile applications and services providers' industry; (viii) support and promote the implementation of
          fair practices in the mobile service providers' industry; (ix) monitor international industry and regulatory
          trends; (x) assist and support Members and the industry in achieving socio-economic and enterprise
          development goals; and (xi) provide input and submissions to regulatory and governmental bodies on matters
          of relevance to the industry.
        </Item>

        <SectionHeading>4. Structure Overview</SectionHeading>
        <Item n="4.1">WASPA is a voluntary, self-regulatory body whose membership is made up of persons who provide services via mobile network operators in the Republic of South Africa.</Item>
        <Item n="4.2">Members elect a Board to provide strategic leadership and oversee the performance of WASPA. The duties of the Board are further detailed in section 8, below.</Item>
        <Item n="4.3">The Board may, from time to time and in its sole discretion, form and dissolve such committees as it may deem fit to deal with specific matters of WASPA.</Item>
        <Item n="4.4">
          WASPA may appoint suitably qualified persons to such positions as it from time-to-time requires, including,
          inter alia: 4.4.1 an Administrative Head who will oversee the day-to-day operational management of WASPA and
          will report directly to the Board; and 4.4.2 a Head of Complaints who will oversee the WASPA complaints
          process.
        </Item>

        <SectionHeading>5. WASPA Membership</SectionHeading>
        <Item n="5.1">Membership of WASPA is divided into 2 (two) classes: Full Members and Affiliate Members, and any other membership categories as may be determined by the Board as provided for in clause 5.8 below.</Item>
        <Item n="5.2">Full Members of WASPA may only be persons who have a legally binding agreement with one or more of the mobile network operators allowing for a direct connection to one or more mobile networks for the purpose of providing services in the Republic of South Africa.</Item>
        <Item n="5.3">Each Full Member of WASPA, together with each of the mobile network operators, is entitled to one vote on any matter put to WASPA's Members at a meeting, or in any other voting procedure as determined by the Board from time-to-time, provided that that Full Member or mobile network operator, as the case may be, is in good standing.</Item>
        <Item n="5.4">Each Full Member vote and/or mobile network operator vote carries the same weight.</Item>
        <Item n="5.5">The Board may from time-to-time propose that various third parties have the right to vote on a matter put to WASPA's Members at a meeting, or in any other voting procedure, provided that this proposal is supported by a majority vote of WASPA's voting members.</Item>
        <Item n="5.6">Affiliate Members of WASPA may only be persons who indirectly provide services via mobile network operators in the Republic of South Africa and who do not have a legally binding agreement with one or more of the mobile network operators allowing for a direct connection to one or more mobile networks for the purpose of providing services in the Republic of South Africa.</Item>
        <Item n="5.7">Affiliate Members of WASPA are not entitled to vote on matters put to WASPA's Members at a meeting, or in any other voting procedure as determined by the Board from time-to-time.</Item>
        <Item n="5.8">WASPA's Board may create other categories of membership provided that those categories of membership are supported by a majority vote of WASPA's voting members.</Item>
        <Item n="5.9">All applications for membership must be made via the membership application form on the WASPA website, or by such other means as may be determined by the Board from time to time.</Item>
        <Item n="5.10">No person will be admitted to be a Member of WASPA unless the Administrative Head or, subject to 5.11 below, the Board has approved the application for membership in writing.</Item>
        <Item n="5.11">In the event that the Administrative Head considers denying membership to an applicant, or is unable to deal with the application, that decision will be referred to the Board. The Board is entitled to deny, on reasonable grounds, membership to any person who applies. The Board will, on request, provide written reasons for such refusal.</Item>
        <Item n="5.12">Membership of WASPA will be dependent on payment in full of membership fees, which fees are determined and published by the Board from time to time.</Item>
        <Item n="5.13">The Administrative Head may suspend or revoke the membership of any Member who fails to make full payment in accordance with WASPA's debtors policy. In the event that such a Member is, for whatever reason, not revoked or suspended, that Member will not have voting rights until arrear and current fees are paid in full. WASPA may charge interest equivalent to the maximum amount allowed by law.</Item>
        <Item n="5.14">A Member may terminate membership of WASPA in accordance with the terms of the Membership Agreement.</Item>
        <Item n="5.15">Any Member whose membership of WASPA has been terminated for whatsoever reason, will forfeit all membership fees and other amounts paid to WASPA that were due, owing and payable at the date of termination. Any and all outstanding amounts due to WASPA, including but not limited to membership fees and fines, will remain owing to WASPA after termination.</Item>
        <Item n="5.16">Subject to 5.15 above, any amounts paid in advance that have not yet become due, owing and payable may be refunded.</Item>
        <Item n="5.17">Subject to the provisions of the WASPA Code of Conduct, the Administrative Head may revoke the membership of any Member who is in breach thereof.</Item>

        <SectionHeading>6. Structure of the Board</SectionHeading>
        <Item n="6.1">WASPA's Board shall consist of eight persons elected by WASPA's voting members. These elected persons must all be natural persons. Two Board seats must be reserved for independent Board members, being persons with no affiliation with any WASPA member or mobile network operator.</Item>
        <Item n="6.2">A Board member is elected for a two-year term, and may stand for a second consecutive two-year term. After serving for two terms (or four years), a Board member cannot stand for reelection until one year has passed.</Item>
        <Item n="6.2A">At each annual general meeting, the four Board members ending two-year terms must vacate their seats. In the event that it is not clear which Board members must vacate their seats (for example, in the transition to this version of the Constitution), the longest serving Board members in each category must vacate their seats. If this criteria does not resolve a tie, the Board members required to step down are selected by drawing names from a hat. Voting members must elect replacement Board members to fill these seats. The vacating Board members may stand for reelection if eligible.</Item>
        <Item n="6.3">All Board Members shall have an equal vote on Board matters.</Item>
        <Item n="6.4">No Member may have more than 1 (one) of its employees on the Board.</Item>
        <Item n="6.5">The Board will elect a Chairperson, a Vice Chairperson and a Treasurer from the Board Members.</Item>
        <Item n="6.6">The Board will be entitled, but not obliged, from time to time to co-opt such additional ex officio members to the Board to assist the Board in the execution of its duties, or to represent sectors of the industry that are not represented by the elected office bearers. Such co-opted members shall not, for the purpose of this Constitution, be deemed to be Members of the Board.</Item>
        <Item n="6.7">Upon a motion of no confidence in any Board Member supported by a majority vote of the Full Members of WASPA, such Board Member will be removed from office.</Item>
        <Item n="6.7A">A Board member who was elected to one of the seats reserved for independent Board members who ceases to be independent must resign within fourteen (14) days.</Item>
        <Item n="6.8">If any Board member vacates their position on the Board, for whatsoever reason, during their term of office, provided that there are at least three months remaining in that Board member's term, a by-election must be held to elect a replacement Board member for the remainder of such term.</Item>
        <Item n="6.9">The Board shall hold not less than one meeting during every 3 (three) month period and may choose to hold additional meetings of the Board, as and when necessary to the fulfilment of the Board's duties.</Item>
        <Item n="6.10">A quorum for a Board meeting will be 5 (five) Board members.</Item>

        <SectionHeading>7. Conduct of Board Members</SectionHeading>
        <Item n="7.1">The overriding duty of a Board Member in acting in their capacity as Board Member is to act in the best interests of WASPA and the industry in its entirety, and not in any sectional, commercial or personal interest. In the event that a Board Member feels that he or she has a conflict of interest that compromises their ability to make an objective decision on a particular issue, that Board Member must recuse himself or herself from that decision and/or discussion.</Item>
        <Item n="7.2">In the event that the Board Member disagrees with an alleged conflict of interest, the question of whether or not that Board Member should recuse themselves for that decision will be put to the majority vote of the Board. The Board will make such a decision in the best interests of WASPA and the industry as a whole.</Item>
        <Item n="7.3">Board Members must act at all times in manner that is legal and that will not bring the reputation of the Board or WASPA or the industry as a whole into disrepute.</Item>
        <Item n="7.4">The Board must develop a Charter governing the conduct of the Board Members, which is binding on the Board Members, and which may be amended from time to time by a majority vote of the Board. This Charter must be available to members, on request.</Item>

        <SectionHeading>8. Duties of the Board</SectionHeading>
        <Item n="8.1">Board Members are required to provide strategic leadership and oversee the performance of WASPA in accordance with the Purpose and Mission as set out in section 3 above. In addition, this section sets out some specific duties of the Board.</Item>
        <Item n="8.2">The Chairperson will preside at all meetings at which he or she is present and will, inter alia, enforce observance of the Constitution, exercise supervision over the affairs of the Board and perform such duties as customarily pertain to the office of Chairperson. In the absence of the Chairperson, the Vice Chairperson will assume these duties. In the absence of the Vice Chairperson, another Member of the Board will assume these duties.</Item>
        <Item n="8.3">The Treasurer shall be responsible for overseeing the proper collection, administration and disbursement of the funds of WASPA and guiding the Board in relation to all relevant fiscal requirements. The ultimate responsibility remains with the Board as a whole.</Item>
        <Item n="8.4">
          Duties of the Treasurer shall include, inter alia: (i) overseeing WASPA's bank accounts as may be approved
          by the Board from time to time; (ii) ensuring that financial information of WASPA is available at meetings
          for discussion and approval; and (iii) tabling a financial statement of the year's transactions at each
          annual general meeting for approval by Members.
        </Item>
        <Item n="8.5">The Board must appoint an impartial Secretariat to perform administrative and operational duties as the Board may from time to time determine. The Secretariat must not be a Member of WASPA and may be remunerated for the services provided, as may be determined by the Board from time to time.</Item>

        <SectionHeading>9. General Meetings of Members of WASPA</SectionHeading>
        <Item n="9.1">There will be at least 2 (two) general meetings in addition to the annual general meeting during any calendar year.</Item>
        <Item n="9.2">Members will be given at least 15 (fifteen) Working Days-notice of any general meeting.</Item>
        <Item n="9.3">A quorum for general meetings shall be one third of all Full Members eligible to vote and present in person or 10 (ten) Full Members eligible to vote, whichever is the smaller number.</Item>
        <Item n="9.4">Any Member unable to attend a general meeting in person may provide a proxy to the Secretariat, in the manner specified by WASPA, provided that this is done no less than 3 (three) Working Days before the general meeting.</Item>
        <Item n="9.5">All general meetings will be open to all Members, and to any other interested observers by invitation of the Board.</Item>

        <SectionHeading>10. Annual and Special General Meetings</SectionHeading>
        <Item n="10.1">There shall be 1 (one) annual general meeting each calendar year, which meeting will be held not less than 10 (ten) months after and not more than 14 (fourteen) months after the previous annual general meeting.</Item>
        <Item n="10.2">Members will be given at least 21 (twenty one) Working Days notice of an annual general meeting.</Item>
        <Item n="10.3">
          The agenda for the annual general meeting must be circulated to all Members at least 5 (five) Working Days
          prior to the date of the meeting and shall include, but not be limited to: (i) Election of the Board; (ii)
          Annual Report; (iii) Financial Report.
        </Item>
        <Item n="10.4">The Board may call a special general meeting at any time, provided that at least 5 (five) Working Days' notice of any special general meeting is given to Members. The agenda for the special general meeting must be circulated to all Members when the meeting is called.</Item>
        <Item n="10.5">A quorum for an annual or special general meetings shall be one third of all Full Members eligible to vote and present in person or 10 (ten) Full Members eligible to vote, whichever is the smaller number.</Item>
        <Item n="10.6">Any Member unable to attend an annual or special general meeting in person may provide a proxy to the Secretariat, in the manner specified by WASPA, provided that this is done no less than 3 (three) Working Days before the annual or special general meeting.</Item>
        <Item n="10.7">All annual and special general meetings will be open to all Members, and to any other interested observers by invitation of the Board.</Item>

        <SectionHeading>11. Committees</SectionHeading>
        <Item n="11.1">Committees may be formed by the Board in its sole discretion from time to time to deal with specific issues in accordance with a statement of objectives, as determined by the Board.</Item>
        <Item n="11.2">A committee may be disbanded by the Board, in its sole discretion, if it is deemed to no longer be necessary. The statement of objectives for a committee may be updated from time to time by the Board, in its sole discretion.</Item>
        <Item n="11.3">Each committee must have a Chairperson (or joint Chairpersons), who will be appointed by the Board.</Item>
        <Item n="11.4">The composition of the committee will be determined by the Board and/or the committee Chairperson from time to time, who may appoint or remove participants at their sole discretion. The Board and/or the committee Chairperson may invite suitable experts who may not represent a Member to sit on a committee.</Item>
        <Item n="11.5">The Chairperson of a committee shall determine whether formal minutes or informal notes are required for meetings held by the committee.</Item>
        <Item n="11.6">The statement of objectives of each committee, as well as its minutes or notes, if applicable, must be made available by the Chairperson of such committee to any Member on reasonable written request, provided that such Member shall bear all expenses in respect of such request.</Item>
        <Item n="11.7">Nothing in this section should be read so as to prevent the Board creating less formal working groups, which will not attract the same duties as a committee, and will merely be an extension of the workings of the Board.</Item>

        <SectionHeading>12. Finances</SectionHeading>
        <Item n="12.1">Members will be required to pay such membership fees, and by such date, as determined by the Board from time to time.</Item>
        <Item n="12.2">The Board may, at its sole discretion, prescribe different membership fees for different categories of membership, provided that increases in membership fees beyond reasonable inflationary increases be tabled for approval at a General Meeting.</Item>
        <Item n="12.3">A Member whose membership fees have not been paid on the due date will not be entitled to vote at any meeting of WASPA for as long as such membership fees remain outstanding.</Item>
        <Item n="12.4">Members will be responsible for all of their own expenses in connection with their membership of WASPA. Exceptions to this rule may be made in exceptional circumstances and require prior written authorisation from the Board.</Item>
        <Item n="12.5">
          The Board may accept unconditional offers from Members or any other organisations provided that: (i) the
          donation is declared to the Members; and (ii) the donation serves the interests of the industry and Members
          as a whole.
        </Item>
        <Item n="12.6">The Board will be entitled to charge special levies to Members from time to time to fund special projects necessary for or ancillary to WASPA's Purpose and Mission, provided that such projects and special levies are put to the vote and are accepted by a majority of voting Members.</Item>
        <Item n="12.7">WASPA's financial year end shall be the 28th of February or the 29th of February in a leap year.</Item>

        <SectionHeading>13. Accounting</SectionHeading>
        <Item n="13.1">WASPA shall not distribute any of its surplus income to any person and shall utilise its funds for the objects for which it has been established.</Item>
        <Item n="13.2">All moneys received on behalf of WASPA shall be deposited in 1 (one) or more accounts opened in WASPA's name.</Item>
        <Item n="13.3">The Board shall establish procedures for managing WASPA's finances, and shall review these from time to time, at its sole discretion.</Item>
        <Item n="13.4">WASPA shall maintain proper records of its accounts, together with any supporting documentation in either printed or digital format, as may be determined from time to time by the Board.</Item>

        <SectionHeading>14. Legal Personality</SectionHeading>
        <Item n="14.1">WASPA shall be a juristic person, existing in its own right, separately from its members, capable of acquiring rights, incurring obligations, owning property and other possessions, entering into legal transactions and of suing and being sued in its own name.</Item>
        <Item n="14.2">WASPA shall continue to exist even when its membership changes and there are different office bearers.</Item>

        <SectionHeading>15. Indemnity</SectionHeading>
        <Item n="15.1">WASPA indemnifies, in so far as is possible in law, all office bearers, staff and service providers, against any liability that arises out of the bona fide and responsible execution of their duties and projects on behalf of WASPA. Such indemnity does not extend to duties that are executed without the knowledge or instruction of WASPA, nor does it extend to the grossly negligent or fraudulent execution of such duties.</Item>
        <Item n="15.2">WASPA will not be liable for any acts or omissions of its Members in regard to the Code of Conduct.</Item>
        <Item n="15.3">WASPA will not be liable for any damages or loss suffered by a Member pursuant to a decision taken in terms of the WASPA Code of Conduct.</Item>

        <SectionHeading>16. Dissolution</SectionHeading>
        <Item n="16.1">WASPA may be dissolved upon a special resolution considered at a general meeting or a special general meeting. The resolution must be supported by at least 75% (seventy five percent) of all Full Members eligible to vote, either present or having provided a proxy to the Secretariat, in the manner specified by WASPA.</Item>
        <Item n="16.2">Upon the dissolution of WASPA, the Board shall, after making provision for the costs of dissolving WASPA and paying any outstanding debts of WASPA, distribute the accumulated funds of WASPA to an association not for gain with similar objectives to those of WASPA, as may be determined by the Board in its sole discretion.</Item>

        <SectionHeading>17. Alteration of the Constitution</SectionHeading>
        <Item n="17.1">This Constitution may be amended upon a special resolution considered at a general meeting or a special general meeting. The resolution must be supported by at least 75% (seventy five percent) of voting Members, either present or having provided a proxy to the Secretariat, in the manner specified by WASPA.</Item>

        <SectionHeading>18. Language</SectionHeading>
        <Item n="18.1">The English text of this Constitution shall take precedence over any translation thereof.</Item>

        <div className="mt-12">
          <Link to="/about" className="font-semibold text-primary underline underline-offset-4 hover:text-accent">
            ← Back to About WASPA
          </Link>
        </div>
      </article>
    </Shell>
  );
}
