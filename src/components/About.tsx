import { ABOUT } from "../content";

export default function About() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[200px_1fr_320px] border-y border-rule"
      id="about"
    >
      <div className="hidden md:flex p-10 md:p-16 border-r border-rule items-start">
        <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.3em] uppercase text-grey">
          {ABOUT.label}
        </span>
      </div>
      <div className="p-14 md:p-16 border-r-0 md:border-r border-rule fade-in">
        <p className="text-[22px] leading-[1.6] font-light max-w-[680px]">
          {ABOUT.body}{" "}
          <em className="italic text-grey">{ABOUT.bodyEmphasis}</em>{" "}
          {ABOUT.bodyRest}
        </p>
      </div>
      <div className="p-10 md:p-16 flex flex-col justify-between gap-12 md:gap-0 fade-in">
        {ABOUT.stats.map((s) => (
          <div key={s.label} className="pt-5">
            <div className="font-bebas text-[56px] leading-none text-white">
              {s.num}
            </div>
            <div className="text-[12px] tracking-[0.2em] uppercase text-white mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
