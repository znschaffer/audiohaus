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
  { label: "Clients", href: "#shows" },
  { label: "Book", href: "#contact" },
];

export const HERO = {
  eyebrow: `— Seattle, WA\u00a0/\u00a0Est. 2018`,
  headlinePlain: ["WE", "MAKE"],
  headlineOutline: "SOUND",
  body: "Full audio production, equipment rental, and hands-on engineering for any venue, any crowd. Corporate galas to basement punk shows — we run the board for all of it.",
  cta: { label: "Book a Show", href: "#contact" },
  ticker: [
    "Sound Rental",
    "Live Engineering",
    "PA Systems",
    "Monitors",
    "Subwoofers",
    "Microphones",
    "Mixing Consoles",
    "Stage Boxes",
    "DI Boxes",
    "Cables",
    "Amps",
    "Powered Speakers",
  ],
};

export const SERVICES = [
  {
    num: "01",
    icon: "🎛",
    title: "Live Engineering",
    desc: "Our engineers run your show start to finish. Soundcheck, monitor mixing, front-of-house — we stay until the last cable is coiled.",
  },
  {
    num: "02",
    icon: "📦",
    title: "Equipment Rental",
    desc: "Line arrays, powered wedges, subs, consoles, mics, stands, amps, DI boxes, snake, cable — full rigs or à la carte.",
  },
  {
    num: "03",
    icon: "🏛",
    title: "Venue Systems",
    desc: "Permanent installs and temporary builds for ballrooms, galleries, restaurants, conference halls, and commercial spaces.",
  },
  {
    num: "04",
    icon: "⚡",
    title: "DIY + Grassroots",
    desc: "House shows, basement gigs, all-ages halls, benefit concerts. We grew up in the scene. Fair rates, no attitude, good sound.",
  },
];

export const ABOUT = {
  label: "About AudioHaus",
  body: "We started doing sound for hardcore shows in borrowed rehearsal rooms.",
  bodyEmphasis: "Now we do it in ballrooms, too.",
  bodyRest:
    "Same gear. Same attention. Same philosophy: the sound should serve the moment, whether that moment is a $300-a-plate gala or a $5 door show.",
  stats: [
    { num: "600+", label: "Shows Run" },
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
  "QSC K12.2",
  "Yamaha CL5",
  "Allen & Heath SQ7",
  "d&b Audiotechnik",
  "Shure SM58",
  "Crown XTi",
  "Furman PL-8",
  "Sennheiser e835",
];

export const GEAR_INVENTORY: GearItem[] = [
  // PA / Speakers
  { name: "QSC K12.2 Powered Speaker", category: "PA / Speakers", qty: "×8" },
  { name: "QSC KW181 Subwoofer", category: "PA / Speakers", qty: "×4" },
  {
    name: "d&b Audiotechnik E12 Line Array",
    category: "PA / Speakers",
    qty: "×12 boxes",
  },
  { name: "d&b Audiotechnik B22-Sub", category: "PA / Speakers", qty: "×4" },
  { name: "Yamaha DXR12mkII", category: "PA / Speakers", qty: "×6" },
  // Monitors
  { name: "QSC K10.2 Stage Monitor (Wedge)", category: "Monitors", qty: "×10" },
  { name: "d&b Audiotechnik M2 Monitor", category: "Monitors", qty: "×6" },
  {
    name: "Sennheiser IEM G4 In-Ear System",
    category: "Monitors",
    qty: "×4 ch",
  },
  // Consoles
  { name: "Yamaha CL5 Digital Console", category: "Consoles", qty: "×1" },
  { name: "Yamaha QL5 Digital Console", category: "Consoles", qty: "×1" },
  {
    name: "Allen & Heath SQ7 Digital Console",
    category: "Consoles",
    qty: "×1",
  },
  {
    name: "Allen & Heath SQ5 Digital Console",
    category: "Consoles",
    qty: "×1",
  },
  { name: "Midas M32 Digital Console", category: "Consoles", qty: "×1" },
  { name: "Behringer X32 Digital Console", category: "Consoles", qty: "×2" },
  // Microphones
  { name: "Shure SM58 Dynamic Vocal", category: "Microphones", qty: "×16" },
  { name: "Shure SM57 Instrument", category: "Microphones", qty: "×12" },
  { name: "Shure Beta 52A Kick Drum", category: "Microphones", qty: "×4" },
  { name: "Sennheiser e835 Dynamic Vocal", category: "Microphones", qty: "×8" },
  { name: "Sennheiser e604 Tom / Snare", category: "Microphones", qty: "×8" },
  { name: "AKG C214 Condenser (Pair)", category: "Microphones", qty: "×3 pr" },
  {
    name: "Rode NT5 SDC Overhead (Pair)",
    category: "Microphones",
    qty: "×2 pr",
  },
  {
    name: "Shure QLXD Wireless Handheld",
    category: "Microphones",
    qty: "×4 ch",
  },
  // Amplifiers
  { name: "Crown XLS 2502 Power Amp", category: "Amplifiers", qty: "×4" },
  { name: "Crown XTi 6002 Power Amp", category: "Amplifiers", qty: "×4" },
  { name: "QSC GX7 Power Amp", category: "Amplifiers", qty: "×4" },
  // Stage & Signal
  {
    name: "Yamaha Rio3224-D2 Stage Box",
    category: "Stage & Signal",
    qty: "×2",
  },
  {
    name: "Allen & Heath AB168 Stage Box",
    category: "Stage & Signal",
    qty: "×2",
  },
  { name: "Radial J48 Active DI Box", category: "Stage & Signal", qty: "×12" },
  {
    name: "Radial ProDI Passive DI Box",
    category: "Stage & Signal",
    qty: "×12",
  },
  {
    name: "Hosa 100ft XLR Snake (32ch)",
    category: "Stage & Signal",
    qty: "×3",
  },
  {
    name: "Furman PL-8 Power Conditioner",
    category: "Stage & Signal",
    qty: "×6",
  },
  // Processing
  {
    name: "dbx DriveRack PA2 System Processor",
    category: "Processing",
    qty: "×2",
  },
  {
    name: "Yamaha SPX2000 Effects Processor",
    category: "Processing",
    qty: "×1",
  },
  {
    name: "Klark Teknik DN9848E Controller",
    category: "Processing",
    qty: "×1",
  },
  // Stands & Hardware
  {
    name: "K&M 210/9 Mic Stand (Boom)",
    category: "Stands & Hardware",
    qty: "×20",
  },
  { name: "K&M 259 Short Boom Arm", category: "Stands & Hardware", qty: "×10" },
  { name: "Speaker Tripod Stand", category: "Stands & Hardware", qty: "×8" },
  { name: "Sub Pole / Totem Mount", category: "Stands & Hardware", qty: "×4" },
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
      value: "book@audiohaus.com",
      href: "mailto:book@audiohaus.com",
    },
    { label: "Phone", value: "(206) 555-0198", href: "tel:+12065550198" },
    { label: "Location", value: "Seattle, WA & Greater Pacific Northwest" },
    { label: "Availability", value: "Open 7 days · Response within 24hrs" },
  ],
  // ── EmailJS config ────────────────────────────────────────
  // Set these to your EmailJS service/template/public key.
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
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
