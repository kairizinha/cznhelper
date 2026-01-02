// src/components/GearItem.tsx
import { GearTooltip } from "@/components/GearTooltip";

type Rarity = "rare" | "legend" | "unique";

interface GearItemProps {
  name: string;
  rarity: Rarity;
  source: string[];
  atk?: string;
  def?: string;
  health?: string;
  imageName: string;
  effect: string;
}

const rarityBg: Record<Rarity, string> = {
  rare: "/images/bg_equipment_rarity_rare.webp",
  legend: "/images/bg_equipment_rarity_legend.webp",
  unique: "/images/bg_equipment_rarity_unique.webp",
};

const rarityNameColor: Record<Rarity, string> = {
  rare: "#60A5FA",
  legend: "#FBBF24",
  unique: "#C084FC",
};

export function GearItem({
  name,
  rarity,
  source,
  atk,
  def,
  health,
  imageName,
  effect,
}: GearItemProps) {
  const bgSrc = rarityBg[rarity] || rarityBg.legend;
  const nameColor = rarityNameColor[rarity] || rarityNameColor.legend;
  const highlightedEffect = effect.split(/(\d+%?)/g).map((part, i) =>
    /\d+%?/.test(part) ? (
      <span key={i} className="text-orange-400 font-bold">
        {part}
      </span>
    ) : (
      part
    )
  );

  const mainStat = atk || def || health;
  const statLabel = atk ? "ATK" : def ? "DEF" : "HP";

  return (
    <div
      className="
        relative overflow-hidden rounded-2xl border border-gray-800
        bg-gradient-to-br from-gray-900/50 to-gray-950/70
        p-6 backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-900/20
        hover:-translate-y-1 group
        min-h-[400px]
      "
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10" />
      </div>

      <div className="relative flex flex-col items-center text-center space-y-4">
        <div className="relative w-36 h-36">
          <img
            src={bgSrc}
            alt={`${rarity} frame`}
            className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={`/images/gear/${imageName}.webp`}
              alt={name}
              className="w-22 h-22 object-contain drop-shadow-2xl z-10"
            />
          </div>
        </div>

        {/* Tooltip (top-right) */}
        <div className="absolute top-4 right-4">
          <GearTooltip sources={source} />
        </div>

        {/* Name */}
        <h3
          className="text-xl font-bold tracking-tight px-4"
          style={{ color: nameColor }}
        >
          {name}
        </h3>

        {/* Main Stat Badge */}
        {mainStat && (
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-xl bg-gray-930/90 border border-gray-700">
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {statLabel}
            </span>
            <span className="text-sm font-bold text-gray-100">{mainStat}</span>
          </div>
        )}

        {/* Effect Text */}
        <p className="text-sm text-gray-300 leading-relaxed px-6">
          {highlightedEffect}
        </p>
      </div>

      {/* Shine sweep on hover */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  );
}
