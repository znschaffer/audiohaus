import { HERO } from "../content";

const WAVEFORM_BARS = Array.from({ length: 15 }, (_, i) => ({
  x: 10 + i * 34,
  delay: i * 0.08,
}));

export default function Hero() {
  const ticker = [...HERO.ticker, ...HERO.ticker].join(" · ");

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 border-b border-rule pt-20">
      {/* Left column */}
      <div className="p-10 md:p-10 border-r-0 md:border-r border-rule flex flex-col justify-end">
        <p className="text-[10px] tracking-[0.3em] uppercase text-grey mb-8">
          {HERO.eyebrow}
        </p>
        <h1 className="font-bebas text-[clamp(96px,12vw,180px)] leading-[0.88] tracking-[-0.01em] text-white mb-12">
          {HERO.headlinePlain.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
          <em className="font-normal text-outline not-italic">
            {HERO.headlineOutline}
          </em>
        </h1>
        <p className="text-[13px] leading-[1.8] text-grey max-w-[400px] mb-12">
          {HERO.body}
        </p>
        <a
          href={HERO.cta.href}
          className="inline-block border border-white text-white px-9 py-3.5 font-mono text-[11px] tracking-[0.2em] uppercase no-underline transition-all hover:bg-white hover:text-black self-start"
        >
          {HERO.cta.label}
        </a>
      </div>

      {/* Right column */}
      <div className="hidden md:flex relative overflow-hidden items-center justify-center">
        {/* Animated waveform */}
        <svg
          className="w-[80%] opacity-50"
          viewBox="0 0 500 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {WAVEFORM_BARS.map((bar, i) => (
            <rect
              key={i}
              className="origin-center animate-pulse-waveform"
              x={bar.x}
              y="40"
              width="20"
              height="220"
              rx="2"
              fill="var(--color-white)"
              style={{ animationDelay: `${bar.delay}s` }}
            />
          ))}
        </svg>

        {/* Scrolling ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-rule py-3 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-ticker text-[10px] tracking-[0.25em] uppercase text-grey">
            {ticker}
          </div>
        </div>
      </div>
    </section>
  );
}
