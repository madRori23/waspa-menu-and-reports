export type NewsItem = { tag: string; title: string; desc: string; date: string; img: string; href?: string };

export const news: readonly NewsItem[] = [
  {
    tag: "News",
    title: "Pause Before You Tap: How To Stay Safer On Your Phone This Festive Season",
    desc: "An urgent delivery notice, a discounted holiday booking or a surprise competition win can arrive when consumers are busiest. WASPA says three simple habits can help people make safer decisions before money or personal information changes hands.",
    date: "10 Nov 2026",
    img: "https://techfinancials.co.za/wp-content/uploads/2026/11/Pause-before-you-tap.jpg",
    href: "https://techfinancials.co.za/2026/11/10/pause-before-you-tap-how-to-stay-safer-on-your-phone-this-festive-season/",
  },
  { tag: "News", title: "Industry update on consumer protection", desc: "Key developments for the mobile services ecosystem.", date: "10 Nov 2026", img: "phone" },
  { tag: "Announcement", title: "WASPA industry workshop", desc: "Collaboration and compliance across the value chain.", date: "28 Oct 2026", img: "hero" },
];
