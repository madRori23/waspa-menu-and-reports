import { type LinkProps, Link } from "@tanstack/react-router";
import { type LucideIcon, ChevronDown, ChevronRight, Linkedin, Search } from "lucide-react";
import type { ReactNode } from "react";
import logoAsset from "@/assets/waspa-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  {
    to: "/for-business",
    label: "For Business",
    items: [
      { to: "/for-business/membership-application", label: "Apply for Membership" },
      { to: "/for-business/about-membership", label: "About Membership" },
      { to: "/for-business/associate-programme", label: "Associate Programme" },
      { to: "/for-business/associate-registration", label: "Associate Registration" },
      { to: "/for-business/membership-fees", label: "Membership Fees" },
    ],
  },
  {
    to: "/about",
    label: "About WASPA",
    items: [
      { to: "/about/full", label: "About WASPA" },
      { to: "/about/office-bearers", label: "Office Bearers & Structures" },
      { to: "/about/constitution", label: "WASPA Constitution" },
      { to: "/about/history-and-mission", label: "History & Mission" },
      { to: "/about/nitty-gritty", label: "The Nitty Gritty" },
      { to: "/about/nitty-gritty/privacy-policy", label: "Privacy Policy" },
      { to: "/about/nitty-gritty/disclaimer", label: "Disclaimer" },
      { to: "/about/nitty-gritty/paia-manual", label: "PAIA Manual" },
      { to: "/about/nitty-gritty/regulatory-submissions", label: "Regulatory Submissions" },
    ],
  },
  { to: "/newsroom", label: "Newsroom" },
  {
    to: "/consumer-support",
    label: "Consumer Support",
    items: [
      { to: "/consumer-support/complaints-process", label: "Complaints Process" },
      { to: "/consumer-support/lodge-a-complaint", label: "Lodge a Complaint" },
      { to: "/report-scam-spam", label: "Report a Scam / Spam" },
      { to: "/report-unwanted-billing", label: "Report Unwanted Billing" },
      { to: "/consumer-support/losing-airtime", label: "Losing Airtime" },
      { to: "/consumer-support/direct-marketing-and-premium-services", label: "Direct Marketing & Premium Services" },
      { to: "/dnc", label: "Do Not Contact" },
      { to: "/sms-codes-search", label: "SMS Codes Search" },
    ],
  },
  {
    to: "/code-of-conduct",
    label: "Code of Conduct",
    items: [
      { to: "/code-of-conduct-current", label: "Current Code" },
      { to: "/code-of-conduct-archive", label: "Code Archive" },
      { to: "/complaint-reports", label: "Complaint Reports" },
    ],
  },
  {
    to: "/members",
    label: "Members",
    items: [
      { to: "/member-directory", label: "Member Directory" },
      { to: "/member-portal", label: "Member Portal" },
      { to: "/membership-statistics", label: "Membership Statistics" },
      { to: "/for-business/membership-application", label: "Apply to Join" },
    ],
  },
] as const;

export function Logo() {
  return (
    <Link to="/" aria-label="WASPA home" className="flex items-center">
      <img
        src={logoAsset}
        alt="WASPA — Wireless Application Service Providers' Association"
        className="h-12 w-auto object-contain md:h-[68px]"
      />
    </Link>
  );
}

export function Header() {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <Logo />
          <div className="hidden items-center gap-4 text-sm md:flex">
            <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact Us</a>
            <Linkedin className="h-5 w-5 text-primary" />
            <div className="flex items-center rounded-md border px-3 py-1.5">
              <input placeholder="Search WASPA..." className="w-48 bg-transparent text-sm outline-none" />
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-1 pb-3 text-sm font-semibold">
          {nav.map((n) => (
            <div key={n.to} className="flex items-center">
              <Link
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-foreground hover:bg-muted"
                activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary" }}
              >
                {n.label}
              </Link>
              {"items" in n && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label={`Open ${n.label} menu`}
                      className="h-9 w-7 px-1"
                    >
                      <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-56">
                    {n.items.map((item) => (
                      <DropdownMenuItem key={item.to} asChild>
                        <Link to={item.to} className="w-full cursor-pointer">
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          ))}
          <Link to="/member-portal" className="ml-auto rounded-md border border-primary px-4 py-2 text-primary hover:bg-muted">
            Member Portal
          </Link>
          <Link to="/for-business/membership-application" className="rounded-md bg-secondary px-4 py-2 text-secondary-foreground hover:brightness-95">
            Apply to Join
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const heading = "font-display text-sm font-bold uppercase tracking-widest text-secondary";
  const link = "opacity-80 hover:opacity-100 hover:underline";
  return (
    <footer id="contact" className="mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className={heading}>What is a WASP?</p>
          <p className="mt-4 text-sm opacity-80">
            A <strong className="font-semibold opacity-100">Wireless Application Service Provider (WASP)</strong> provides
            or distributes mobile content and services — such as SMS alerts, games, competitions, or bulk messaging — to mobile users.
          </p>
          <p className="mt-3 text-sm opacity-80">
            WASPA aims to ensure that members operate according to ethical and reasonable business practices and that
            consumers receive the services they are promised.
          </p>
        </div>
        <div>
          <p className={heading}>Consumer Help</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/consumer-support/losing-airtime" className={link}>Report Unwanted Billing</Link></li>
            <li><Link to="/report-scam-spam" className={link}>Report SMS Spam/Scams</Link></li>
            <li><Link to="/consumer-support" className={link}>Lodge a Complaint</Link></li>
            <li><Link to="/dnc" className={link}>Do Not Contact Registry</Link></li>
            <li><Link to="/code-of-conduct" className={link}>Code of Conduct</Link></li>
          </ul>
        </div>
        <div>
          <p className={heading}>Contact Us</p>
          <div className="mt-4 space-y-2 text-sm opacity-80">
            <p><strong className="font-semibold opacity-100">Email:</strong> info@waspa.org.za</p>
            <p><strong className="font-semibold opacity-100">Postal:</strong> PO Box 20153, Big Bay, 7448</p>
            <p><strong className="font-semibold opacity-100">NPO Number:</strong> 115-491 NPO</p>
          </div>
          <Linkedin className="mt-4 h-6 w-6 opacity-80" />
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-sm opacity-80">
          © 2026 <span className="font-bold text-secondary opacity-100">WASPA</span>
          {" | "}
          <Link to="/about/nitty-gritty/disclaimer" className="font-semibold opacity-100 hover:underline">Disclaimer</Link>
          {" | "}
          <Link to="/about/nitty-gritty/privacy-policy" className="font-semibold opacity-100 hover:underline">Privacy Policy</Link>
        </p>
      </div>
      <div className="h-1.5 bg-[linear-gradient(90deg,var(--secondary)_50%,var(--accent)_50%)]" />
    </footer>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground"><Header /><main>{children}</main><Footer /></div>
  );
}

export function PageHero({ crumb, title, sub, img }: { crumb: string; title: string; sub: string; img: string }) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img src={img} alt="" className="absolute inset-y-0 right-0 h-full w-3/5 object-cover" />
      <div className="absolute inset-0 hero-fade" />
      <div className="absolute -right-10 top-0 hidden h-full w-40 skew-x-[-20deg] md:block">
        <div className="absolute left-0 h-full w-6 bg-secondary" /><div className="absolute left-6 h-full w-4 bg-accent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12">
        <p className="flex items-center gap-1 text-xs opacity-80">Home <ChevronRight className="h-3 w-3" /> {crumb}</p>
        <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-md opacity-90">{sub}</p>
      </div>
    </section>
  );
}

export function Tile({ icon: Icon, title, desc, to, href }: { icon: LucideIcon; title: string; desc?: string; to?: LinkProps["to"]; href?: string }) {
  const cls = "card-lift flex h-full flex-col items-center rounded-lg border bg-card p-5 text-center";
  const body = (
    <>
      <Icon className="h-10 w-10 text-secondary" strokeWidth={1.5} />
      <p className="mt-3 font-display text-sm font-bold leading-tight">{title}</p>
      {desc && <p className="mt-1 text-xs text-muted-foreground">{desc}</p>}
      <ChevronRight className="mt-2 h-4 w-4 text-accent" />
    </>
  );
  return (
    to ? <Link to={to} className={cls}>{body}</Link> : <a href={href ?? "#"} className={cls} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined}>{body}</a>
  );
}

export function RowCard({ icon: Icon, title, desc, cta, to, href }: { icon: LucideIcon; title: string; desc: string; cta?: string; to?: LinkProps["to"]; href?: string }) {
  const cls = "card-lift flex h-full gap-4 rounded-lg border bg-card p-5";
  const body = (
    <>
      <Icon className="h-11 w-11 shrink-0 text-secondary" strokeWidth={1.5} />
      <div className="flex-1">
        <p className="font-display font-bold">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        {cta && <span className="mt-3 inline-flex rounded-md bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground">{cta} →</span>}
      </div>
      {!cta && <ChevronRight className="h-4 w-4 self-end text-accent" />}
    </>
  );
  return (
    to ? <Link to={to} className={cls}>{body}</Link> : <a href={href ?? "#"} className={cls} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined}>{body}</a>
  );
}

export function SideMenu({ items }: { items: string[] }) {
  return (
    <aside className="overflow-hidden rounded-lg border bg-card text-sm">
      {items.map((i, k) => (
        <a key={i} href="#" className={k === 0 ? "block bg-accent px-4 py-2.5 font-bold text-accent-foreground" : "block border-t px-4 py-2.5 hover:bg-muted"}>{i}</a>
      ))}
    </aside>
  );
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} | WASPA` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | WASPA` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
