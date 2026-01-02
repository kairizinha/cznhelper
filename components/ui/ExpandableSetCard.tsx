// components/ExpandableSetCard.tsx
import { MemoryFragmentSet } from "@/types/memory-fragments";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  set: MemoryFragmentSet;
  description?: string;
  isExpanded: boolean;
  onToggle: () => void;
};

export default function ExpandableSetCard({
  set,
  description,
  isExpanded,
  onToggle,
}: Props) {
  return (
    <div className="flex flex-col">
      <button
        onClick={onToggle}
        className="
          w-full text-left group
          transition-all duration-300 ease-out
          hover:-translate-y-1
        "
      >
        <div
          className="
            relative overflow-hidden rounded-2xl
            bg-gradient-to-br from-gray-900/50 to-gray-950/70
            border border-gray-800
            backdrop-blur-sm
            transition-all duration-300
            hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-900/20
            group
            ring-2 ring-transparent
          "
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10" />
          </div>

          <div className="relative p-5 sm:p-6 flex items-center gap-5">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-gray-700 shadow-lg">
              <img
                src={set.icon}
                alt={set.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-xl font-bold text-gray-100 truncate">
                  {set.name}
                </h3>

                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-200" />
                  )}
                </div>
              </div>

              <p
                className="text-sm text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: set.effect }}
              />
            </div>
          </div>

          <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </div>
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isExpanded ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        {description && (
          <div
            className="
              relative overflow-hidden rounded-2xl
              bg-gradient-to-br from-gray-900/40 to-gray-950/60
              border border-gray-800 backdrop-blur-sm
              p-5
              text-gray-300 text-sm leading-relaxed
            "
          >
            <span className="font-semibold text-purple-400">Note:</span>{" "}
            {description}
          </div>
        )}
      </div>
    </div>
  );
}
