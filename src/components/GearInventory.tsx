import { GEAR_INVENTORY } from "../content";

const categories = Array.from(
  new Set(GEAR_INVENTORY.map((item) => item.category)),
);

export default function GearInventory() {
  return (
    <section className="bg-black" id="gear">
      <div className="p-10 md:p-14 border-b border-rule flex justify-between items-end">
        <h2 className="font-bebas text-7xl tracking-tighter text-white">
          INVENTORY
        </h2>
        <span className="text-[10px] tracking-[0.2em] uppercase text-grey hidden md:block">
          Full Rig / À La Carte
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <div
            key={cat}
            className="p-10 md:p-14 border-r border-b border-rule sm:nth-[2n]:border-r-0 lg:nth-[4n]:border-r-0 lg:nth-[2n]:border-r border-rule fade-in"
          >
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-grey mb-10 border-b border-rule pb-4">
              {cat}
            </h3>
            <ul className="list-none space-y-6">
              {GEAR_INVENTORY.filter((item) => item.category === cat).map(
                (item) => (
                  <li key={item.name} className="group">
                    <div className="text-[13px] leading-tight text-white group-hover:text-grey transition-colors">
                      {item.name}
                    </div>
                    {item.qty && (
                      <div className="text-[10px] text-grey mt-1 font-mono">
                        {item.qty}
                      </div>
                    )}
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
