import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Globe, ImageIcon, Phone, Search, Users } from "lucide-react";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";
import { members, memberSource } from "@/data/members";

export const Route = createFileRoute("/member-directory")({
  head: () => meta("Member Directory", "Search WASPA full and affiliate members."),
  component: Directory,
});

function Directory() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"All" | "Full" | "Affiliate">("All");
  const filtered = useMemo(() => members.filter((member) => {
    const matchesName = member.name.toLowerCase().includes(query.trim().toLowerCase());
    const matchesType = filter === "All" || member.type === filter;
    return matchesName && matchesType;
  }), [query, filter]);

  return (
    <Shell>
      <PageHero crumb="Members › Member Directory" title="Member Directory" sub="Find WASPA member companies, their websites and contact numbers." img={hero} />
      <section className="mx-auto max-w-5xl px-4 py-8 md:py-10">
        <div className="mx-auto max-w-3xl">
          <label className="flex items-center gap-3 rounded-2xl border bg-card px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-ring">
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search members by name" aria-label="Search members by name" className="min-w-0 flex-1 bg-transparent text-sm outline-none" />
            {query && <button type="button" onClick={() => setQuery("")} className="text-xs font-semibold text-primary">Clear</button>}
          </label>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by membership type">
            {(["All", "Full", "Affiliate"] as const).map((item) => (
              <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${filter === item ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/70"}`}>
                {item}
              </button>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">Showing {filtered.length} {filtered.length === 1 ? "member" : "members"}</p>
        </div>

        <div className="mx-auto mt-7 grid max-w-3xl gap-3">
          {filtered.map((member) => (
            <article key={member.name} className="flex items-start gap-3 rounded-2xl border bg-card px-4 py-4 shadow-sm transition-shadow hover:shadow-md sm:gap-5 sm:px-5">
              <div role="img" aria-label={`Logo placeholder for ${member.name}`} className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border border-dashed bg-muted text-muted-foreground sm:h-20 sm:w-20">
                <ImageIcon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="font-display text-base font-bold leading-snug text-foreground">{member.name}</h2>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${member.type === "Full" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"}`}>{member.type}</span>
              </div>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                {member.website ? <a href={member.website} target="_blank" rel="noreferrer" className="flex min-w-0 items-center gap-2 hover:text-primary"><Globe className="h-4 w-4 shrink-0"/><span className="truncate">{member.website.replace(/^https?:\/\//,"").replace(/\/$/,"")}</span></a> : <p className="flex items-center gap-2"><Globe className="h-4 w-4 shrink-0"/>Website not listed</p>}
                {member.phone ? <a href={`tel:${member.phone.replace(/[^\d+]/g,"")}`} className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4 shrink-0"/>{member.phone}</a> : <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0"/>Telephone not listed</p>}
              </div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && <div className="rounded-2xl border bg-card px-5 py-12 text-center"><Users className="mx-auto h-8 w-8 text-muted-foreground"/><p className="mt-3 font-semibold">No members found</p><p className="mt-1 text-sm text-muted-foreground">Try another company name or membership filter.</p></div>}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">Directory details are a snapshot of the publicly available WASPA member listing. Please confirm contact information with the member before relying on it. <a href={memberSource} target="_blank" rel="noreferrer" className="font-semibold text-primary underline">View the official WASPA member list</a>.</p>
      </section>
    </Shell>
  );
}
