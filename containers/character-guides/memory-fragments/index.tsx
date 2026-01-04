import {
  MemoryFragmentMainStats,
  MemoryFragmentSet,
  RecommendingFragmentSet,
} from "@/types/memory-fragments";
import { useContext, useMemo, useState } from "react";
import { MemoryFragmentSetsData } from "@/data/memory-fragments";
import ExpandableSetCard from "@/components/ui/ExpandableSetCard";
import { MemoryFragmentMainStatLabels } from "@/constants/character-guides";
import { SubstatsPriorityRender } from "./SubstatsPriorityRender";
import { MemoryFragmentSubstatPriorities } from "@/types/character-guides";
import { ThemeContext } from "@/app/guides/[character]/page";

type Props = {
  bestInSlot?: RecommendingFragmentSet[];
  alternative?: RecommendingFragmentSet[];
  memoryFragmentMainStats?: MemoryFragmentMainStats[];
  memoryFragmentSubstatsNote?: string;
  memoryFragmentSubstatsPriorities?: MemoryFragmentSubstatPriorities[];
};

export const MemoryFragmentsSection = ({
  bestInSlot,
  alternative,
  memoryFragmentMainStats,
  memoryFragmentSubstatsNote,
  memoryFragmentSubstatsPriorities,
}: Props) => {
  const [expandedMemorySet, setExpandedMemorySet] = useState<string | null>(
    null
  );

  const theme = useContext(ThemeContext);

  const setsMap = useMemo<Record<string, MemoryFragmentSet>>(() => {
    return Object.fromEntries(
      MemoryFragmentSetsData.map((s) => [s.id, s])
    ) as Record<string, MemoryFragmentSet>;
  }, []);

  const { bestInSlotSets, alternativeSets } = useMemo(() => {
    const best =
      bestInSlot
        ?.map((ms) => {
          const set = setsMap[ms.id];
          return set ? { set, note: ms.description } : null;
        })
        .filter(Boolean) ?? [];

    const alt =
      alternative
        ?.map((ms) => {
          const set = setsMap[ms.id];
          return set ? { set, note: ms.description } : null;
        })
        .filter(Boolean) ?? [];

    return {
      bestInSlotSets: best as { set: MemoryFragmentSet; note?: string }[],
      alternativeSets: alt as { set: MemoryFragmentSet; note?: string }[],
    };
  }, [bestInSlot, alternative, setsMap]);

  const getMainStatLabel = (index: number) =>
    MemoryFragmentMainStatLabels.find(
      (s) => s.value === memoryFragmentMainStats?.[index]
    )?.label ?? "N/A";

  return (
    <section className="space-y-16 py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* BEST IN SLOT */}
        <div className="space-y-8">
          <div className="text-center">
            <span
              className={`
                relative overflow-hidden inline-block px-6 py-3 rounded-2xl
                bg-gradient-to-br ${theme?.gradientFrom} ${theme?.gradientTo}
                border ${theme?.border} backdrop-blur-sm
                ${theme?.text} font-bold uppercase tracking-wider text-sm
                shadow-lg ${theme?.shadow}
              `}
            >
              Best in Slot
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${theme?.gradientFrom} to-transparent`}
                />
              </div>
            </span>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              bestInSlotSets.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
            } gap-6`}
          >
            {bestInSlotSets.map(({ set, note }) => (
              <ExpandableSetCard
                key={`${set.id}-best`}
                set={set}
                description={note}
                isExpanded={expandedMemorySet === `${set.id}-best`}
                onToggle={() =>
                  setExpandedMemorySet(
                    expandedMemorySet === `${set.id}-best`
                      ? null
                      : `${set.id}-best`
                  )
                }
              />
            ))}
          </div>
        </div>

        {/* ALTERNATIVE */}
        <div className="space-y-8">
          <div className="text-center">
            <span
              className={`
                relative overflow-hidden inline-block px-6 py-3 rounded-2xl
                bg-gradient-to-br ${theme?.gradientFrom} ${theme?.gradientTo}
                border ${theme?.border} backdrop-blur-sm
                ${theme?.text} font-bold uppercase tracking-wider text-sm
                shadow-lg ${theme?.shadow}
              `}
            >
              Alternative
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${theme?.gradientFrom} to-transparent`}
                />
              </div>
            </span>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              alternativeSets.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
            } gap-6`}
          >
            {alternativeSets.map(({ set, note }) => (
              <ExpandableSetCard
                key={`${set.id}-alt`}
                set={set}
                description={note}
                isExpanded={expandedMemorySet === `${set.id}-alt`}
                onToggle={() =>
                  setExpandedMemorySet(
                    expandedMemorySet === `${set.id}-alt`
                      ? null
                      : `${set.id}-alt`
                  )
                }
              />
            ))}
          </div>
        </div>

        {/* Main Stats + Substats Priority */}
        <div className="space-y-12">
          {/* Main Stats Grid */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="
                  relative overflow-hidden rounded-2xl
                  bg-gradient-to-br from-gray-900/50 to-gray-950/70
                  border border-gray-800 backdrop-blur-sm
                  p-8 text-center space-y-4
                  transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20
                  hover:-translate-y-1
                "
              >
                <div className={`text-4xl font-bold ${theme?.text}`}>
                  {index === 1 ? "V" : "IV"}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  {index === 1 ? "Desire" : "Ideal"}
                </div>
                <div
                  className={`
                    inline-block px-6 py-3 rounded-xl
                    ${theme?.bg} border ${theme?.border}
                    ${theme?.text} font-semibold text-sm
                  `}
                >
                  {getMainStatLabel(index)}
                </div>
              </div>
            ))}
          </div>

          {/* Substat Priority */}
          <div className="space-y-6">
            <SubstatsPriorityRender
              substatsPriorities={memoryFragmentSubstatsPriorities}
            />

            {memoryFragmentSubstatsNote && (
              <div className="max-w-4xl mx-auto">
                <p className="text-center text-gray-400 text-sm leading-relaxed px-6">
                  {memoryFragmentSubstatsNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
