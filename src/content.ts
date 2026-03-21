// ─────────────────────────────────────────────────────────────
//  CONTENT.ts  — All site copy & data lives here.
//  Edit this file to update text, gear lists, form options, etc.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "AudioHaus",
  tagline: "Sound Rental & Production",
  location: "Seattle, WA",
  established: "Est. 2018",
  copyright: "© 2025 AudioHaus LLC — Seattle, WA",
  footer: "Sound is everything.",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gear", href: "#gear" },
  { label: "Events", href: "#shows" },
  { label: "Book", href: "#contact" },
];

export const HERO = {
  eyebrow: `— Seattle, WA\u00a0/\u00a0Est. 2018`,
  headlinePlain: ["WE", "MAKE"],
  headlineOutline: "SOUND",
  body: "Full audio production, equipment rental, and hands-on engineering for any venue, any crowd. Corporate galas to basement punk shows — we run the board for all of it.",
  cta: { label: "Book a Show", href: "#contact" },
  ticker: [
    "Loudspeakers",
    "DJ & Playback",
    "Music Video Production",
    "Mixing & Mastering",
    "Subwoofers",
    "Microphones",
    "Generators",
    "Mixing Consoles",
    "Cables",
    "Amps",
  ],
};

export const SERVICES = [
  {
    num: "01",
    icon: "🎛",
    title: "Live Engineering",
    desc: "Our engineers run your show start to finish. Soundcheck, monitor mixing, front-of-house.",
  },
  {
    num: "02",
    icon: "📦",
    title: "Equipment Rental",
    desc: "Subs, mics, loudspeakers, stands, amps, DI boxes, cables — full rigs or à la carte.",
  },
  {
    num: "03",
    icon: "🔌",
    title: "Production Services",
    desc: "On-site audio recording, video production, audio restoration, and more.",
  },
  {
    num: "04",
    icon: "🎤",
    title: "DJ Services",
    desc: "We offer professional DJ packages for weddings, corprorate events, and private celebrations. This can span from live DJ performances to curated playlists tailed to your event.",
  },
];

export const ABOUT = {
  label: "About AudioHaus",
  body: "We started doing sound for hardcore shows in borrowed rehearsal rooms.",
  bodyEmphasis: "Now we do it in ballrooms, too.",
  bodyRest:
    "Same gear. Same attention. Same philosophy: the sound should serve the moment, whether that moment is a $300-a-plate gala or a $5 door show.",
  stats: [
    { num: "20+", label: "Shows Run" },
    { num: "7", label: "Years Active" },
    { num: "24h", label: "Response Time" },
  ],
};

// ── GEAR ─────────────────────────────────────────────────────
// Marquee uses the first group; the full inventory section lists all items.

export type GearItem = {
  name: string;
  category: string;
  qty?: string;
};

export const GEAR_MARQUEE = [
  "Mackie SRM450",
  "JBL JRX200",
  "Crown K2",
  "Dynaudio BM6A MkII",
  "Shure SM58",
  "Pioneer DDJ-FLX4",
  "Universal Audio Apollo",
  "Sennheiser e835",
];

export const GEAR_INVENTORY: GearItem[] = [
  // PA / Speakers
  { name: "Mackie SRM450 V2", category: "PA / Speakers", qty: "×4" },
  { name: "JBL JRX200", category: "PA / Speakers", qty: "×2" },
  {
    name: "JBL Professional 18-inch subwoof",
    category: "PA / Speakers",
    qty: "×1",
  },
  {
    name: "AudioHaus 18-inch passive subwoofer",
    category: "PA / Speakers",
    qty: "×2",
  },
  // Microphones
  {
    name: "Large-Diaphragm Condensers",
    category: "Microphones",
  },
  {
    name: "Small-Diaphragm Condensers",
    category: "Microphones",
  },
  {
    name: "Dynamic Microphones",
    category: "Microphones",
  },
  {
    name: "Wireless Microphones",
    category: "Microphones",
  },
  {
    name: "Lavalier Microphones",
    category: "Microphones",
  },
  // Monitors
  { name: "Dynaudio BM6A MkII", category: "Monitors", qty: "×2" },
  // Consoles
  { name: "Behringer xAir 18 Wireless Mixer", category: "Consoles", qty: "×1" },
  { name: "Mackie 808s Portable Mixer", category: "Consoles", qty: "×1" },
  { name: "Universal Audio Apollo Interface", category: "Consoles", qty: "×1" },
  // Microphones
  // Amplifiers
  { name: "Crown K2", category: "Amplifiers", qty: "×2" },
  // Stage & Signal
  {
    name: "XLR Cables",
    category: "Stage & Signal",
    qty: "",
  },
  // Processing
  {
    name: "Quiet Inverter Generator",
    category: "Power & Generators",
    qty: "×2",
  },
  {
    name: "Gas-Powered Generator",
    category: "Power & Generators",
    qty: "×1",
  },
  // Stands & Hardware
  {
    name: "Mic Stands",
    category: "Stands & Hardware",
  },
  {
    name: "Speaker Stands",
    category: "Stands & Hardware",
  },
];

export const SHOWS = [
  {
    tag: "For venues & organizations",
    title: ["FORMAL", "EVENTS"],
    desc: "Corporate events, fundraisers, galas, award ceremonies, conferences, and permanent commercial installs. We present professionally and work quietly.",
    tags: [
      "Corporate",
      "Fundraisers",
      "Galas",
      "Conferences",
      "Galleries",
      "Houses of Worship",
      "Restaurants",
    ],
    inverted: false,
  },
  {
    tag: "For artists & promoters",
    title: ["LIVE", "MUSIC"],
    desc: "Punk, metal, hip-hop, jazz, folk — any genre, any room. We know how DIY venues work and we bring rigs that fit the space without breaking your budget.",
    tags: [
      "Punk / Hardcore",
      "DIY Shows",
      "All-Ages",
      "Festivals",
      "Club Nights",
      "Benefits",
      "Touring Acts",
    ],
    inverted: true,
  },
];

export const PROCESS = {
  heading: ["How It", "Works"],
  intro:
    "From first inquiry to final soundcheck, here's what working with AudioHaus looks like.",
  steps: [
    {
      num: "01",
      title: "Inquiry",
      desc: "Tell us your venue, headcount, and date. We'll confirm gear availability and quote you honestly — no hidden line items.",
    },
    {
      num: "02",
      title: "Load In",
      desc: "Our team arrives early. We build, cable, and tune the system before any performer needs to be on stage.",
    },
    {
      num: "03",
      title: "Show Time",
      desc: "We're at the desk all night. FOH and monitors dialed. You focus on your event; we handle the sound.",
    },
  ],
};

export const CONTACT = {
  heading: ["Let's", "Talk", "Sound"],
  details: [
    {
      label: "Email",
      value: "booking@audioha.us",
      href: "mailto:booking@audioha.us",
    },
    { label: "Phone", value: "(425) 623-8317", href: "tel:+14256238317" },
    { label: "Location", value: "Seattle, WA & Greater Pacific Northwest" },
    { label: "Availability", value: "Open 7 days · Response within 24hrs" },
  ],
  // ── EmailJS config ────────────────────────────────────────
  // Set these to your EmailJS service/template/public key.
  emailjs: {
    serviceId: "service_y5gyel9",
    templateId: "template_a78lo4m",
    publicKey: "iBy-lF8rkBMEKbj_t",
  },
  eventTypes: [
    "Live Music / Concert",
    "Corporate / Conference",
    "Gala / Fundraiser",
    "DIY / All-Ages Show",
    "Festival",
    "Commercial Install",
    "Other",
  ],
};
