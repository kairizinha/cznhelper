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
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-300 text-center">{title}</h3>

      {items.length === 0 ? (
        <p className="text-center text-gray-400 py-8">
          No {title.toLowerCase()} match selected sources.
        </p>
      ) : (
        <>
          <div className="min-h-[230px]">
            <GearItem {...items[0]} />
          </div>

          {items.length > 1 && (
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex justify-center">
                  <button className="flex items-center justify-center gap-2 text-sm w-48 rounded-xl border border-gray-700/60 bg-gray-800/40 hover:border-gray-400/50 hover:bg-gray-800/60 transition-all py-2.5 font-medium text-gray-200">
                    Show More <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-3xl w-[95vw] max-h-[85vh] bg-gray-900/98 backdrop-blur-sm border border-gray-700/60 rounded-xl flex flex-col p-0 overflow-hidden">
                <DialogHeader className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/60 px-6 py-5">
                  <DialogTitle className="text-xl sm:text-2xl text-center font-bold text-gray-200">
                    {dialogTitle}
                  </DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto px-6 pb-6 pt-4">
                  <div className="space-y-4">
                    {items.slice(1).map((gear) => (
                      <GearItem key={gear.name} {...gear} />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </>
      )}
    </div>
  );

  return (
    <div className="space-y-8">
      <p className="text-2xl text-gray-400 text-center">
        Select a Chaos Manifestation
      </p>

      {/* Dropdown */}
      <div className="mb-12 flex flex-col items-center">
        <div className="relative w-64">
          <select
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
            className="appearance-none w-full rounded-xl border border-gray-700/60 bg-gray-800/40 py-3 px-5 pr-12 text-center text-gray-200 font-medium hover:border-gray-400/50 focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:border-gray-400 transition-all cursor-pointer"
          >
            <option value="all" className="bg-gray-800 text-gray-200">
              Show All Sources
            </option>
            {dropdownSources.map((s) => (
              <option key={s} value={s} className="bg-gray-800 text-gray-200">
                {s}
              </option>
            ))}
          </select>

          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full px-4">
        {renderGearColumn("Weapon", filteredWeapons, "Alternative Weapon")}
        {renderGearColumn("Armor", filteredArmors, "Alternative Armor")}
        {renderGearColumn(
          "Accessory",
          filteredAccessories,
          "Alternative Accessory"
        )}
      </div>
    </div>
  );
};
