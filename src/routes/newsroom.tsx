import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import { news } from "@/components/site/news";
import hero from "@/assets/hero.jpg";
import phone from "@/assets/phone.jpg";

export const Route = createFileRoute("/newsroom")({
  head: () => meta("Newsroom", "Latest news, announcements, press releases and media resources from WASPA."),
  component: Newsroom,
});

const imgs: Record<string, string> = { hero, phone };
const tabs = ["All", "News", "Announcement", "Press Release", "Events"];

function Newsroom() {
  const [tab, setTab] = useState("All");
  const [q, setQ] = useState("");
  const list = news.filter((n) => (tab === "All" || n.tag === tab) && n.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <Shell>
      <PageHero crumb="Newsroom" title="Newsroom" sub="Latest news, announcements, press releases and media resources from WASPA." img={hero} />
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} className={t === tab ? "rounded-md bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground" : "rounded-md border bg-card px-4 py-1.5 text-sm hover:bg-muted"}>{t}</button>
          ))}
          <div className="ml-auto flex items-center rounded-md border bg-card px-3 py-1.5">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search news..." className="bg-transparent text-sm outline-none" />
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {list.map((n) => (
            <article key={n.title} className="card-lift flex flex-col gap-4 overflow-hidden rounded-lg border bg-card sm:flex-row">
              <img src={imgs[n.img] ?? n.img} alt="" loading="lazy" className="h-40 w-full object-cover sm:w-64" />
              <div className="flex-1 p-4">
                <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">{n.tag}</span>
                <h3 className="mt-2 text-xl font-bold">{n.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{n.desc}</p>
                <div className="mt-4 flex justify-between text-sm"><span className="text-muted-foreground">{n.date}</span>{n.href ? <a href={n.href} target="_blank" rel="noopener noreferrer" className="font-bold text-accent hover:underline">Read more →</a> : <span className="font-bold text-accent">Read more →</span>}</div>
              </div>
            </article>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">No articles match.</p>}
        </div>
      </div>
    </Shell>
  );
}
