import { GEAR_MARQUEE } from "../content";

// Doubled for seamless loop
const items = [...GEAR_MARQUEE, ...GEAR_MARQUEE];

export default function GearMarquee() {
  return (
    <div className="gear_section">
      <style>{`
        .gear_section {
          border-bottom: var(--rule);
          overflow: hidden;
          padding: 40px 0;
        }

        .gear_marquee {
          display: flex;
          animation: marquee 22s linear infinite;
          white-space: nowrap;
        }

        .gear_item {
          padding: 0 60px;
          border-right: var(--rule);
          font-family: "Bebas Neue", sans-serif;
          font-size: 48px;
          letter-spacing: 0.05em;
          color: transparent;
          -webkit-text-stroke: 1px #333;
          flex-shrink: 0;
          transition: color 0.2s, -webkit-text-stroke 0.2s;
        }

        .gear_item:hover {
          color: var(--white);
          -webkit-text-stroke: 1px var(--white);
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="gear_marquee">
        {items.map((name, i) => (
          <span key={i} className="gear_item">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
