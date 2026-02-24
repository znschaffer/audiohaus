import { PROCESS } from "../content";

export default function Process() {
  return (
    <section id="process">
      <style>{`
        .process_header {
          padding: 80px 40px 48px;
          border-bottom: var(--rule);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .process_heading {
          font-family: "Bebas Neue", sans-serif;
          font-size: 72px;
          letter-spacing: 0.02em;
        }

        .process_intro {
          font-size: 12px;
          color: var(--grey);
          max-width: 260px;
          line-height: 1.8;
          letter-spacing: 0.05em;
        }

        .process_steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: var(--rule);
        }

        .process_step {
          padding: 56px 40px;
          border-right: var(--rule);
          position: relative;
        }

        .process_step:last-child {
          border-right: none;
        }

        .process_step::before {
          content: "";
          position: absolute;
          top: 0;
          left: 40px;
          right: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--white), transparent);
        }

        .process_stepNum {
          font-family: "Bebas Neue", sans-serif;
          font-size: 120px;
          color: #1a1a1a;
          line-height: 1;
          margin-bottom: 16px;
        }

        .process_stepTitle {
          font-family: "Bebas Neue", sans-serif;
          font-size: 32px;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
        }

        .process_stepDesc {
          font-size: 12px;
          line-height: 1.9;
          color: var(--grey);
        }

        @media (max-width: 900px) {
          .process_steps { grid-template-columns: 1fr; }
          .process_step { border-right: none; border-bottom: var(--rule); }
          .process_header { flex-direction: column; gap: 16px; }
        }
      `}</style>
      <div className="process_header">
        <h2 className="process_heading fade-in">
          {PROCESS.heading[0]}
          <br />
          {PROCESS.heading[1]}
        </h2>
        <p className="process_intro fade-in">{PROCESS.intro}</p>
      </div>
      <div className="process_steps">
        {PROCESS.steps.map((step) => (
          <div key={step.num} className="process_step fade-in">
            <div className="process_stepNum">{step.num}</div>
            <h3 className="process_stepTitle">{step.title}</h3>
            <p className="process_stepDesc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
