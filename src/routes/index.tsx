import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Briefcase, FileText, Gavel, Landmark, MessageSquare, Search, Users } from "lucide-react";
import { Shell, Tile, meta } from "@/components/site/Layout";
import { news } from "@/components/site/news";
import hero from "@/assets/hero.jpg";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/")({
  head: () => meta("Connecting the mobile services industry", "WASPA promotes a compliant, responsible and sustainable mobile services ecosystem in South Africa."),
  component: Index,
});

const imgs: Record<string, string> = { hero, phone };

function Index() {
  return (
    <Shell>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={hero} alt="Cape Town skyline with cell tower" width={1600} height={800} className="absolute inset-y-0 right-0 h-full w-2/3 object-cover" />
        <div className="absolute inset-0 hero-fade" />
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16">
          <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] md:text-6xl">
            Connecting the mobile services <span className="text-secondary">industry.</span>
          </h1>
          <p className="mt-5 max-w-md opacity-90">A trusted industry association promoting a compliant, responsible and sustainable mobile services ecosystem in South Africa.</p>
          <div className="mt-12 grid gap-4 md:ml-auto md:max-w-3xl md:grid-cols-2">
            {[
              { i: Users, t: "For Consumers", d: "Get support, lodge a complaint, report scams and learn about mobile services.", to: "/consumer-support" as const },
              { i: Briefcase, t: "For Businesses", d: "Apply for WASPA membership, explore membership categories, join the Associate Programme and see membership fees.", to: "/for-business" as const },
            ].map(({ i: I, t, d, to }) => (
              <Link key={t} to={to} className="card-lift flex gap-4 rounded-lg bg-card p-5 text-card-foreground">
                <I className="h-12 w-12 shrink-0 text-secondary" strokeWidth={1.5} />
                <div><p className="font-display text-xl font-bold">{t}</p><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-10 sm:grid-cols-3 lg:grid-cols-5">
        <Tile icon={Landmark} title="About WASPA" desc="Who we are, how we're run and the role we play in the mobile services industry." to="/about" />
        <Tile icon={Gavel} title="Code of Conduct" desc="Read the rules and standards that all WASPA members must follow when providing mobile services." to="/code-of-conduct" />
        <Tile icon={MessageSquare} title="Lodge a Complaint" desc="Unhappy with a mobile service? Submit a complaint and WASPA will help you resolve it." to="/consumer-support/lodge-a-complaint" />
        <Tile to="/sms-codes-search" icon={Search} title="SMS Codes Search" desc="Look up any SMS short code to find out which company is behind a message or charge." />
        <Tile to="/member-directory" icon={Users} title="Member Directory" desc="Browse the full list of registered WASPA member companies and the services they offer." />
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <Link to="/newsroom" className="flex items-center gap-1 text-sm font-bold text-accent">View all news <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {news.map((n) => (
              <article key={n.title} className="card-lift overflow-hidden rounded-lg border bg-card">
                <img src={imgs[n.img] ?? n.img} alt="" loading="lazy" className="h-36 w-full object-cover" />
                <div className="p-4">
                  <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">{n.tag}</span>
                  <h3 className="mt-2 font-bold leading-snug">{n.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{n.desc}</p>
                  {n.href ? <a href={n.href} target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm font-bold text-accent hover:underline">Read more →</a> : <p className="mt-3 text-sm font-bold text-accent">Read more →</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-muted p-6">
          <h2 className="text-2xl font-bold">WASPA at a Glance</h2>
          <div className="mt-4 space-y-3">
            {[{ i: Users, v: "194", l: "Members" }, { i: BarChart3, v: "98%", l: "Network compliance" }, { i: FileText, v: "1 000+", l: "Monthly monitoring discoveries" }].map(({ i: I, v, l }) => (
              <div key={l} className="flex items-center gap-4 rounded-lg bg-card p-4">
                <I className="h-10 w-10 text-secondary" strokeWidth={1.5} />
                <div><p className="font-display text-3xl font-extrabold">{v}</p><p className="text-sm text-muted-foreground">{l}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
