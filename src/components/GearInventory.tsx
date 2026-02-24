import { GEAR_INVENTORY } from "../content";

// Group items by category
function groupByCategory(items: typeof GEAR_INVENTORY) {
  return items.reduce<Record<string, typeof GEAR_INVENTORY>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

export default function GearInventory() {
  const groups = groupByCategory(GEAR_INVENTORY);
  const categories = Object.keys(groups);

  return (
    <section className="gearInventory_section" id="gear">
      <style>{`
        .gearInventory_section {
          border-bottom: var(--rule);
        }

        .gearInventory_header {
          padding: 80px 40px 48px;
          border-bottom: var(--rule);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
        }

        .gearInventory_heading {
          font-family: "Bebas Neue", sans-serif;
          font-size: 72px;
          letter-spacing: 0.02em;
          line-height: 0.9;
          flex-shrink: 0;
        }

        .gearInventory_intro {
          font-size: 12px;
          color: var(--grey);
          max-width: 340px;
          line-height: 1.8;
          letter-spacing: 0.05em;
          text-align: right;
        }

        .gearInventory_grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .gearInventory_group {
          padding: 48px 32px;
          border-right: var(--rule);
          border-bottom: var(--rule);
        }

        .gearInventory_group:nth-child(4n) {
          border-right: none;
        }

        .gearInventory_catTitle {
          font-family: "Bebas Neue", sans-serif;
          font-size: 18px;
          letter-spacing: 0.1em;
          color: var(--white);
          border-bottom: var(--rule);
          padding-bottom: 12px;
          margin-bottom: 20px;
        }

        .gearInventory_list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .gearInventory_item {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
          padding: 8px 0;
          border-bottom: 1px solid #1a1a1a;
          font-size: 11px;
          line-height: 1.5;
        }

        .gearInventory_item:last-child {
          border-bottom: none;
        }

        .gearInventory_itemName {
          color: var(--grey);
          flex: 1;
        }

        .gearInventory_itemQty {
          font-family: "Bebas Neue", sans-serif;
          font-size: 14px;
          color: #444;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 1100px) {
          .gearInventory_grid { grid-template-columns: repeat(3, 1fr); }
          .gearInventory_group:nth-child(4n) { border-right: var(--rule); }
          .gearInventory_group:nth-child(3n) { border-right: none; }
        }

        @media (max-width: 900px) {
          .gearInventory_header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .gearInventory_intro { text-align: left; }
          .gearInventory_grid { grid-template-columns: repeat(2, 1fr); }
          .gearInventory_group:nth-child(3n) { border-right: var(--rule); }
          .gearInventory_group:nth-child(2n) { border-right: none; }
        }

        @media (max-width: 560px) {
          .gearInventory_grid { grid-template-columns: 1fr; }
          .gearInventory_group { border-right: none; }
        }
      `}</style>
      {/* Section header */}
      <div className="gearInventory_header">
        <h2 className="gearInventory_heading fade-in">
          In
          <br />
          Stock
        </h2>
        <p className="gearInventory_intro fade-in">
          Our full inventory — available for rental or included in
          full-production packages. Everything is maintained, PAT-tested, and
          ready.
        </p>
      </div>

      {/* Category groups */}
      <div className="gearInventory_grid">
        {categories.map((cat) => (
          <div key={cat} className="gearInventory_group fade-in">
            <h3 className="gearInventory_catTitle">{cat}</h3>
            <ul className="gearInventory_list">
              {groups[cat].map((item) => (
                <li key={item.name} className="gearInventory_item">
                  <span className="gearInventory_itemName">{item.name}</span>
                  {item.qty && (
                    <span className="gearInventory_itemQty">{item.qty}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
