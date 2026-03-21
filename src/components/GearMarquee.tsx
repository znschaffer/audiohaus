import { GEAR_MARQUEE } from "../content";

// Doubled for seamless loop
const items = [...GEAR_MARQUEE, ...GEAR_MARQUEE];

export default function GearMarquee() {
  return (
    <div className="border-b border-rule overflow-hidden py-10">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((name, i) => (
          <span
            key={i}
            className="px-14 border-r border-rule font-bebas text-[48px] tracking-wider text-outline shrink-0 transition-all hover:text-white"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
