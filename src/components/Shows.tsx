import { SHOWS } from "../content";

export default function Shows() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 border-b border-rule"
      id="shows"
    >
      {SHOWS.map((panel) => (
        <div
          key={panel.title.join("")}
          className={`p-14 md:p-20 border-b border-rule md:border-b-0 md:first:border-r border-rule last:border-b-0 fade-in ${
            panel.inverted ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <span
            className={`block text-[10px] tracking-[0.3em] uppercase mb-6 ${
              panel.inverted ? "text-[#555]" : "text-grey"
            }`}
          >
            {panel.tag}
          </span>
          <h2 className="font-bebas text-[64px] leading-[0.9] mb-8">
            {panel.title.map((line, i) => (
              <span key={i}>
                {line}
                {i < panel.title.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p
            className={`text-[12px] leading-[1.9] mb-10 max-w-[380px] ${
              panel.inverted ? "text-[#555]" : "text-grey"
            }`}
          >
            {panel.desc}
          </p>
          <ul className="flex flex-wrap gap-2 list-none">
            {panel.tags.map((t) => (
              <li
                key={t}
                className={`text-[10px] tracking-[0.15em] uppercase border px-3.5 py-1.5 ${
                  panel.inverted
                    ? "border-[#ccc] text-[#444]"
                    : "border-[#2a2a2a] text-grey"
                }`}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
