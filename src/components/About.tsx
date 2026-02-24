import { ABOUT } from "../content";

export default function About() {
  return (
    <section className="about_strip" id="about">
      <style>{`
        .about_strip {
          display: grid;
          grid-template-columns: 200px 1fr 320px;
          border-bottom: var(--rule);
          border-top: var(--rule);
        }

        .about_label {
          padding: 64px 40px;
          border-right: var(--rule);
          display: flex;
          align-items: flex-start;
        }

        .about_label span {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--grey);
        }

        .about_text {
          padding: 64px 56px;
          border-right: var(--rule);
        }

        .about_text p {
          font-size: 22px;
          line-height: 1.6;
          font-weight: 300;
          max-width: 680px;
        }

        .about_text em {
          font-style: italic;
          color: var(--grey);
        }

        .about_statCol {
          padding: 64px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .about_stat {
          border-top: var(--rule);
          padding-top: 20px;
        }

        .about_statNum {
          font-family: "Bebas Neue", sans-serif;
          font-size: 56px;
          line-height: 1;
          color: var(--white);
        }

        .about_statLabel {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--grey);
          margin-top: 4px;
        }

        @media (max-width: 900px) {
          .about_strip { grid-template-columns: 1fr; }
          .about_label { display: none; }
          .about_statCol { padding: 40px; }
        }
      `}</style>
      <div className="about_label">
        <span>{ABOUT.label}</span>
      </div>
      <div className="about_text fade-in">
        <p>
          {ABOUT.body} <em>{ABOUT.bodyEmphasis}</em> {ABOUT.bodyRest}
        </p>
      </div>
      <div className="about_statCol fade-in">
        {ABOUT.stats.map((s) => (
          <div key={s.label} className="about_stat">
            <div className="about_statNum">{s.num}</div>
            <div className="about_statLabel">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
