import { SERVICES } from "../content";

export default function Services() {
  return (
    <section className="services" id="services">
      <style>{`
        .services {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .service_card {
          padding: 56px 32px;
          border-right: var(--rule);
          border-bottom: var(--rule);
          transition: background 0.25s;
        }

        .service_card:last-child {
          border-right: none;
        }

        .service_card:hover {
          background: #111;
        }

        .service_num {
          font-size: 10px;
          color: var(--grey);
          letter-spacing: 0.2em;
          margin-bottom: 40px;
          display: block;
        }

        .service_icon {
          font-size: 32px;
          margin-bottom: 24px;
          display: block;
          filter: grayscale(1);
        }

        .service_title {
          font-family: "Bebas Neue", sans-serif;
          font-size: 28px;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .service_desc {
          font-size: 11px;
          line-height: 1.9;
          color: var(--grey);
        }

        @media (max-width: 900px) {
          .services { grid-template-columns: 1fr 1fr; }
          .service_card:nth-child(2n) { border-right: none; }
        }
      `}</style>
      {SERVICES.map((s, i) => (
        <div
          key={s.num}
          className="service_card fade-in"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <span className="service_num">{s.num}</span>
          <span className="service_icon">{s.icon}</span>
          <h3 className="service_title">{s.title}</h3>
          <p className="service_desc">{s.desc}</p>
        </div>
      ))}
    </section>
  );
}
