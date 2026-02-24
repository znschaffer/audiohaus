import { PROCESS } from "../content";

export default function Process() {
  return (
    <section id="process">
      <div className="px-10 py-16 md:pt-20 md:pb-12 border-b border-rule flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
        <h2 className="font-bebas text-[72px] tracking-wider leading-none fade-in">
          {PROCESS.heading[0]}
          <br />
          {PROCESS.heading[1]}
        </h2>
        <p className="text-[12px] text-grey max-w-[260px] leading-[1.8] tracking-wider fade-in">
          {PROCESS.intro}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-rule">
        {PROCESS.steps.map((step) => (
          <div
            key={step.num}
            className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-rule last:border-b-0 md:last:border-r-0 relative fade-in"
          >
            {/* Gradient line at top */}
            <div className="absolute top-0 left-10 right-10 h-[2px] bg-linear-to-r from-white to-transparent" />
            <div className="font-bebas text-[120px] text-[#1a1a1a] leading-none mb-4">
              {step.num}
            </div>
            <h3 className="font-bebas text-[32px] mb-4 tracking-wider">
              {step.title}
            </h3>
            <p className="text-[12px] leading-[1.9] text-grey">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
