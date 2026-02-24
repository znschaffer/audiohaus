import { SHOWS } from "../content";

export default function Shows() {
  return (
    <section className="shows" id="shows">
      <style>{`
        .shows {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: var(--rule);
        }

        .show_panel {
          padding: 80px 56px;
        }

        .show_panel:first-child {
          border-right: var(--rule);
        }

        .show_tag {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--grey);
          margin-bottom: 24px;
          display: block;
        }

        .show_title {
          font-family: "Bebas Neue", sans-serif;
          font-size: 64px;
          line-height: 0.9;
          margin-bottom: 32px;
        }

        .show_desc {
          font-size: 12px;
          line-height: 1.9;
          color: var(--grey);
          margin-bottom: 40px;
          max-width: 380px;
        }

        .show_list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .show_list li {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: 1px solid #2a2a2a;
          padding: 6px 14px;
          color: var(--grey);
        }

        /* Inverted (white bg) panel */
        .show_panel.inverted {
          background: var(--white);
          color: var(--black);
        }

        .show_panel.inverted .show_tag,
        .show_panel.inverted .show_desc {
          color: #555;
        }

        .show_panel.inverted .show_title {
          color: var(--black);
        }

        .show_panel.inverted .show_list li {
          border-color: #ccc;
          color: #444;
        }

        @media (max-width: 900px) {
          .shows { grid-template-columns: 1fr; }
          .show_panel:first-child { border-right: none; border-bottom: var(--rule); }
        }
      `}</style>
      {SHOWS.map((panel) => (
        <div
          key={panel.title.join("")}
          className={`show_panel ${panel.inverted ? "inverted" : ""} fade-in`}
        >
          <span className="show_tag">{panel.tag}</span>
          <h2 className="show_title">
            {panel.title.map((line, i) => (
              <span key={i}>
                {line}
                {i < panel.title.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="show_desc">{panel.desc}</p>
          <ul className="show_list">
            {panel.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
