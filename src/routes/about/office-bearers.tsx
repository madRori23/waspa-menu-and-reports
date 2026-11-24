import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";
import anzelle from "@/assets/office-bearers/anzelle-robertson.jpg.asset.json";
import casper from "@/assets/office-bearers/casper-de-villiers.webp.asset.json";
import gail from "@/assets/office-bearers/gail-schimmel.jpg.asset.json";
import kaymin from "@/assets/office-bearers/kaymin-ormerod.jpg.asset.json";
import mmabotho from "@/assets/office-bearers/mmabotho-sehube.jpg.asset.json";
import sean from "@/assets/office-bearers/sean-nieuwoudt.jpg.asset.json";
import sharief from "@/assets/office-bearers/sharief-holt.jpg.asset.json";
import sizo from "@/assets/office-bearers/sizo-nkosi.jpg.asset.json";

export const Route = createFileRoute("/about/office-bearers")({
  head: () =>
    meta(
      "Office Bearers & Structures",
      "Meet the WASPA Board members and learn how they support the association’s work.",
    ),
  component: OfficeBearers,
});

const boardMembers = [
  { name: "Anzelle Robertson", position: "Chairperson (Independent)", slug: "anzelle-robertson", image: anzelle.url },
  { name: "Sean Nieuwoudt", position: "Vice Chairperson", slug: "sean-nieuwoudt", image: sean.url },
  { name: "Casper de Villiers", position: "Treasurer", slug: "casper-de-villiers", image: casper.url },
  { name: "Mmabotho Sehube", position: "Code of Conduct", slug: "mmabotho-sehube", image: mmabotho.url },
  { name: "Sharief Holt", position: "Board member", slug: "sharief-holt", image: sharief.url },
  { name: "Sizo Nkosi", position: "Board member", slug: "sizo-nkosi", image: sizo.url },
  { name: "Kaymin Ormerod", position: "Board member (Independent)", slug: "kaymin-ormerod", image: kaymin.url },
  { name: "Gail Schimmel", position: "Board member (Independent)", slug: "gail-schimmel", image: gail.url },
];

const staff = [
  { name: "Noelan Rungasamy", position: "General Manager" },
  { name: "Nduna Mpofu", position: "Operations Manager" },
  { name: "Martie Brittz", position: "Accounts" },
  { name: "Complaints Team", position: "Consumer Support" },
  { name: "Compliance Team", position: "Member Compliance" },
  { name: "Secretariat", position: "Administration & Logistics" },
];

function OfficeBearers() {
  return (
    <Shell>
      <PageHero
        crumb="About WASPA"
        title="Office Bearers"
        sub="Meet the Board members providing strategic leadership for WASPA."
        img={hero}
      />

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-7 max-w-3xl">
          <h2 className="font-display text-2xl font-bold">The WASPA Board</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Board members provide strategic leadership and oversee WASPA’s performance in line with the association’s purpose and mission.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {boardMembers.map((member) => (
            <a
              key={member.slug}
              href={`https://waspa.org.za/portfolio/${member.slug}/#contact`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}, ${member.position}. Open their contact form on WASPA.org.za.`}
              className="group relative isolate block aspect-[4/5] overflow-hidden rounded-md border bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-card/95 px-3 py-3 text-card-foreground backdrop-blur-sm">
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-bold leading-tight">{member.name}</h3>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{member.position}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="mb-0.5 h-4 w-4 shrink-0 text-primary" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-display text-2xl font-bold">Staff</h2>
            <dl className="mt-4 divide-y">
              {staff.map((person) => (
                <div key={person.name} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="font-semibold">{person.name}</dt>
                  <dd className="text-sm text-muted-foreground">{person.position}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold">WASPA structures</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              WASPA’s constitution provides for a Board that offers strategic leadership and oversees the association’s performance. It also allows for committees to be established as needed to fulfil WASPA’s mandate.
            </p>

            <h3 className="mt-7 font-display text-lg font-bold">The WASPA Board</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Board members are elected by WASPA’s members at the annual general meeting. Each member takes responsibility for a portfolio and supports the association’s purpose and mission.
            </p>

            <h3 className="mt-7 font-display text-lg font-bold">Code of Conduct Committee</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Open to WASPA members, this committee develops and implements the Code of Conduct and documents the processes used to handle Code of Conduct complaints.
            </p>

            <h3 className="mt-7 font-display text-lg font-bold">Lobbying Committee</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Open to WASPA members, this committee establishes common industry positions on key issues and liaises with mobile networks and regulatory bodies.
            </p>
          </div>
        </div>
      </section>
    </Shell>
  );
}