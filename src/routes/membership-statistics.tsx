import { createFileRoute } from "@tanstack/react-router";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PageHero, Shell, meta } from "@/components/site/Layout";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/membership-statistics")({
  head: () => meta("Membership Statistics", "WASPA membership numbers, new members and ex-member trends."),
  component: Statistics,
});
const newMembers = [
  ["Nov 2025",0,0],["Dec 2025",0,0],["Jan 2026",1,0],["Feb 2026",0,1],["Mar 2026",1,1],["Apr 2026",3,1],["May 2026",0,0],["Jun 2026",0,0],["Jul 2026",1,1],["Aug 2026",0,0],["Sep 2026",1,0],["Oct 2026",1,0],["Nov 2026",0,1]
].map(([month,full,affiliate])=>({month,full,affiliate,total:Number(full)+Number(affiliate)}));
const exits = [
  ["Nov 25",0,1,2,0,0],["Dec 25",0,0,1,0,0],["Jan 26",0,0,1,1,0],["Feb 26",4,0,0,2,0],["Mar 26",1,0,0,0,0],["Apr 26",1,1,0,0,0],["May 26",0,0,1,0,0],["Jun 26",0,0,1,0,0],["Jul 26",1,0,0,0,0],["Aug 26",1,0,0,0,0],["Sep 26",1,0,2,0,0],["Oct 26",1,0,0,0,0],["Nov 26",0,0,0,0,0]
].map(r=>({month:r[0],resigned:r[1],nonRenewal:r[2],noResponse:r[3],nonPayment:r[4],codeBreach:r[5],total:Number(r[1])+Number(r[2])+Number(r[3])+Number(r[4])+Number(r[5])}));
const membership = [{name:"Full",local:80,international:21,total:101},{name:"Affiliate",local:46,international:47,total:93}];
const pie = [{name:"Full local",value:80},{name:"Full international",value:21},{name:"Affiliate local",value:46},{name:"Affiliate international",value:47}];
const colors=["#ffb800","#142b55","#e1272b","#6b87ad"];
function Table({headers,rows}:{headers:string[],rows:(string|number|undefined)[][]}) { return <div className="mt-4 overflow-x-auto rounded-lg border bg-card"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-muted"><tr>{headers.map(h=><th key={h} className="px-3 py-3 font-semibold">{h}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i} className="border-t">{r.map((v,j)=><td key={j} className={`px-3 py-2.5 ${j===0?"font-medium":""}`}>{v}</td>)}</tr>)}</tbody></table></div>; }
function Statistics(){
 return <Shell><PageHero crumb="Members" title="Membership Statistics" sub="WASPA membership numbers and membership trends." img={hero}/>
 <div className="mx-auto max-w-6xl space-y-10 px-4 py-10">
  <section><h2 className="font-display text-2xl font-bold">WASPA membership numbers</h2>
   <Table headers={["Membership type","Local","International","Total"]} rows={[["Full",80,21,101],["Affiliate",46,47,93],["Total",126,68,194]]}/>
   <div className="mt-6 grid gap-6 md:grid-cols-2"><div className="rounded-lg border bg-card p-5"><h3 className="font-display font-bold">WASPA members</h3><div className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={pie} dataKey="value" nameKey="name" outerRadius={88} label>{pie.map((e,i)=><Cell key={e.name} fill={colors[i]}/>)}</Pie><Tooltip/><Legend/></PieChart></ResponsiveContainer></div></div>
   <div className="rounded-lg border bg-card p-5"><h3 className="font-display font-bold">Membership totals</h3><div className="mt-5 space-y-4">{[["Full",101],["Affiliate",93],["Local",126],["International",68]].map(([label,value])=><div key={label}><div className="mb-1 flex justify-between text-sm"><span>{label}</span><strong>{value}</strong></div><div className="h-2 rounded-full bg-muted"><div className="h-2 rounded-full bg-secondary" style={{width:`${Number(value)/194*100}%`}}/></div></div>)}</div></div></div>
  </section>
  <section><h2 className="font-display text-2xl font-bold">New members by month</h2><div className="mt-4 h-80 rounded-lg border bg-card p-4"><ResponsiveContainer width="100%" height="100%"><BarChart data={newMembers}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="month" angle={-35} textAnchor="end" height={65} interval={0}/><YAxis allowDecimals={false}/><Tooltip/><Legend/><Bar dataKey="full" name="Full" fill="#142b55"/><Bar dataKey="affiliate" name="Affiliate" fill="#ffb800"/></BarChart></ResponsiveContainer></div>
   <Table headers={["Month","Full","Affiliate","Total"]} rows={[...newMembers.map(r=>[r.month,r.full,r.affiliate,r.total]),["Total",8,5,13]]}/>
  </section>
  <section><h2 className="font-display text-2xl font-bold">Ex-members by month</h2><div className="mt-4 h-80 rounded-lg border bg-card p-4"><ResponsiveContainer width="100%" height="100%"><BarChart data={exits}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="month"/><YAxis allowDecimals={false}/><Tooltip/><Legend/><Bar dataKey="resigned" name="Resigned" stackId="a" fill="#142b55"/><Bar dataKey="nonRenewal" name="Non-renewal" stackId="a" fill="#ffb800"/><Bar dataKey="noResponse" name="No response" stackId="a" fill="#e1272b"/><Bar dataKey="nonPayment" name="Non-payment" stackId="a" fill="#6b87ad"/><Bar dataKey="codeBreach" name="Code breach" stackId="a" fill="#8d9b79"/></BarChart></ResponsiveContainer></div>
   <Table headers={["Month","Resigned","Non-renewal","No response","Non-payment","Code breach","Total"]} rows={[...exits.map(r=>[r.month,r.resigned,r.nonRenewal,r.noResponse,r.nonPayment,r.codeBreach,r.total]),["Total",10,2,8,3,0,23]]}/>
  </section>
  <p className="text-xs text-muted-foreground">Statistics are displayed as supplied for this concept website. Confirm figures with WASPA before publishing as live official statistics.</p>
 </div></Shell>;
}
