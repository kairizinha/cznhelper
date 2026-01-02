import { MemoryFragmentSubstatLabels } from "@/constants/character-guides";
import { MemoryFragmentSubstatPriorities } from "@/types/character-guides";
import React from "react";

type Props = {
  substatsPriorities?: MemoryFragmentSubstatPriorities[];
};

export const SubstatsPriorityRender = (props: Props) => {
  const { substatsPriorities } = props;

  if (!substatsPriorities || substatsPriorities.length === 0) {
    return null;
  }

  const sortedTiers = [...substatsPriorities].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {sortedTiers.map((tier, tierIndex) => (
        <React.Fragment key={tier.priority}>
          {/* Tier Group */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {tier.stats.map((stat, statIndex) => (
              <React.Fragment key={stat}>
                {/* Relation symbol before non-first stat in tier */}
                {statIndex > 0 && (
                  <span className="text-gray-400 text-lg font-bold select-none">
                    =
                  </span>
                )}

                {/* Substat Badge */}
                <div
                  className="
                    relative overflow-hidden inline-block
                    rounded-2xl
                    bg-gradient-to-br from-cyan-600/20 to-cyan-800/20
                    border border-cyan-700/50 backdrop-blur-sm
                    px-5 py-2.5
                    text-cyan-300 font-semibold text-sm sm:text-base
                    transition-all duration-300
                    hover:shadow-lg hover:shadow-cyan-900/30
                    hover:-translate-y-0.5 group
                  "
                >
                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-600/10" />
                  </div>

                  <span className="relative z-10">
                    {MemoryFragmentSubstatLabels.find(
                      (label) => label.value === stat
                    )?.label || stat}
                  </span>

                  {/* Shine sweep */}
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Tier separator (>) */}
          {tierIndex < sortedTiers.length - 1 && (
            <span className="text-2xl font-bold text-gray-500 select-none px-2">
              &gt;
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
