import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import {
  weapons as weaponsData,
  armors as armorsData,
  accessories as accessoriesData,
} from "@/data/gear";
import { GearItem } from "@/components/GearItem";
import type { GearData } from "@/data/gear";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  gears: {
    weapons: string[];
    armors: string[];
    accessories: string[];
  };
  recommendedSources?: string[];
};

export const EquipmentSection = ({ gears, recommendedSources = [] }: Props) => {
  const [selectedSource, setSelectedSource] = useState("all");

  const gearMaps = useMemo(() => {
    const mapByName = <T extends { name: string }>(items: T[]) =>
      Object.fromEntries(items.map((i) => [i.name, i]));

    return {
      weapons: mapByName(weaponsData),
      armors: mapByName(armorsData),
      accessories: mapByName(accessoriesData),
    };
  }, []);

  const dropdownSources = useMemo(() => {
    if (recommendedSources.length) return recommendedSources;

    const sources = new Set<string>();

    [...gears.weapons, ...gears.armors, ...gears.accessories].forEach(
      (name) => {
        const item =
          gearMaps.weapons[name] ??
          gearMaps.armors[name] ??
          gearMaps.accessories[name];

        if (Array.isArray(item?.source)) {
          item.source.forEach((s) => sources.add(s));
        }
      }
    );

    return [...sources].sort();
  }, [gears, recommendedSources, gearMaps]);

  const matchesSource = (item?: GearData) => {
    if (selectedSource === "all") return true;
    if (!Array.isArray(item?.source)) return false;
    return (
      item.source.includes("Other") || item.source.includes(selectedSource)
    );
  };

  const filterGear = <T extends GearData>(
    names: string[],
    map: Record<string, T>
  ) => names.map((n) => map[n]).filter((i): i is T => !!i && matchesSource(i));

  const filteredWeapons = useMemo(
    () => filterGear(gears.weapons, gearMaps.weapons),
    [gears.weapons, gearMaps, selectedSource]
  );

  const filteredArmors = useMemo(
    () => filterGear(gears.armors, gearMaps.armors),
    [gears.armors, gearMaps, selectedSource]
  );

  const filteredAccessories = useMemo(
    () => filterGear(gears.accessories, gearMaps.accessories),
    [gears.accessories, gearMaps, selectedSource]
  );

  const renderGearColumn = (
    title: string,
    items: GearData[],
    dialogTitle: string
  ) => (
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold text-center text-gray-100 mb-8">
        {title}
      </h3>

      {items.length === 0 ? (
        <div className="flex items-center justify-center h-[480px]">
          <p className="text-gray-500 text-lg">
            No {title.toLowerCase()}s match the selected source.
          </p>
        </div>
      ) : (
        <div className="flex flex-col h-[480px]">
          <div className="flex-1 mb-6">
            <GearItem {...items[0]} />
          </div>
          {items.length > 1 && (
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="
                  relative w-full appearance-none
                  rounded-2xl
                  bg-gray-900/50
                  focus:border-slate-500
                  border border-gray-800
                  py-4 px-6 pr-14
                  text-center text-base font-medium text-gray-200
                  transition-all duration-300 ease-out
                  hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-900/20
                  focus:outline-none focus:border-gray-600 focus:shadow-2xl focus:shadow-purple-900/30
                  cursor-pointer backdrop-blur-sm

                "
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10" />
                  </div>

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Show More
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </span>

                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-4xl w-[98vw] sm:w-[95vw] max-h-[90vh] sm:max-h-[85vh] bg-slate-900 backdrop-blur-sm border-2 border-slate-700 rounded-xl flex flex-col p-0 overflow-hidden">
                <DialogHeader className="sticky top-0 z-10 bg-slate-900 backdrop-blur-md border-b border-slate-700 px-4 sm:px-6 py-4 sm:py-5">
                  <DialogTitle className="text-lg sm:text-xl md:text-2xl text-center font-bold text-white">
                    {dialogTitle}
                  </DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4">
                  <div className="space-y-4">
                    {items.slice(1).map((gear) => (
                      <GearItem key={gear.name} {...gear} />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      <p className="text-lg sm:text-xl md:text-2xl text-slate-100 text-center px-4 font-medium">
        Select a Chaos Manifestation
      </p>
      <div className="mb-8 sm:mb-12 flex flex-col items-center px-4">
        <div className="relative w-full max-w-xs sm:w-80">
          <div className="relative max-w-md mx-auto">
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="
              relative w-full appearance-none
              rounded-2xl
              bg-gray-900/50
              focus:border-slate-500
              border border-gray-800
              py-4 px-6 pr-14
              text-center text-base font-medium text-gray-200
              transition-all duration-300 ease-out
              hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-900/20
              focus:outline-none focus:border-gray-600 focus:shadow-2xl focus:shadow-purple-900/30
              cursor-pointer backdrop-blur-sm
              group
            "
            >
              <option value="all" className="bg-gray-900/95 text-slate-100">
                Show All
              </option>
              {dropdownSources.map((s) => (
                <option
                  key={s}
                  value={s}
                  className="bg-gray-900/95 text-slate-100"
                >
                  {s}
                </option>
              ))}
            </select>

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10" />
            </div>

            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>

          <ChevronDown className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {renderGearColumn("Weapon", filteredWeapons, "Alternative Weapons")}
        {renderGearColumn("Armor", filteredArmors, "Alternative Armor")}
        {renderGearColumn(
          "Accessory",
          filteredAccessories,
          "Alternative Accessories"
        )}
      </div>
    </div>
  );
};
