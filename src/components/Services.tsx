import { SERVICES } from "../content";

export default function Services() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4" id="services">
      {SERVICES.map((s, i) => (
        <div
          key={s.num}
          className="p-8 md:p-14 border-r border-b border-rule last:border-r-0 md:last:border-r transition-colors duration-250 hover:bg-[#111] md:nth-[4n]:border-r-0 fade-in"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <span className="block text-[10px] text-grey tracking-[0.2em] mb-10">
            {s.num}
          </span>
          <span className="block text-3xl mb-6 grayscale">{s.icon}</span>
          <h3 className="font-bebas text-3xl tracking-wider mb-4">{s.title}</h3>
          <p className="text-[11px] leading-[1.9] text-grey">{s.desc}</p>
        </div>
      ))}
    </section>
  );
}
