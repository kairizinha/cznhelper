import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import {
  weapons as weaponsData,
  armors as armorData,
  accessories as accessoriesData,
} from "@/data/gear";
import { GearItem } from "@/components/GearItem";
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
};

export const EquipmentSection = (props: Props) => {
  const { gears } = props;
  const [selectedSources, setSelectedSources] = useState<string>("all");

  const { filteredWeapons, filteredArmors, filteredAccessories } =
    useMemo(() => {
      const { weapons, armors, accessories } = gears;

      if (selectedSources === "all") {
        return {
          filteredWeapons: weapons
            .map((w) => weaponsData.find((data) => data.name === w))
            .filter(Boolean),
          filteredArmors: armors
            .map((a) => armorData.find((data) => data.name === a))
            .filter(Boolean),
          filteredAccessories: accessories
            .map((a) => accessoriesData.find((data) => data.name === a))
            .filter(Boolean),
        };
      }

      // filter through every weapons
      const filteredWeapons = weapons.filter((gear) => {
        const currentGearData = weaponsData.find((w) => w.name === gear);
        if (!currentGearData) return false;

        if (
          Array.isArray(currentGearData.source) &&
          currentGearData.source.includes("Other")
        ) {
          return true;
        }

        if (Array.isArray(currentGearData.source)) {
          return currentGearData.source.some(
            (src) => selectedSources && selectedSources.includes(src)
          );
        }

        return false;
      });

      // filter through every armors
      const filteredArmors = armors.filter((gear) => {
        const currentGearData = armorData.find((a) => a.name === gear);
        if (!currentGearData) return false;

        if (
          Array.isArray(currentGearData.source) &&
          currentGearData.source.includes("Other")
        ) {
          return true;
        }

        if (Array.isArray(currentGearData.source)) {
          return currentGearData.source.some(
            (src) => selectedSources && selectedSources.includes(src)
          );
        }

        return false;
      });

      // filter through every accessories
      const filteredAccessories = accessories.filter((gear) => {
        const currentGearData = accessoriesData.find((a) => a.name === gear);
        if (!currentGearData) return false;

        if (
          Array.isArray(currentGearData.source) &&
          currentGearData.source.includes("Other")
        ) {
          return true;
        }

        if (Array.isArray(currentGearData.source)) {
          return currentGearData.source.some(
            (src) => selectedSources && selectedSources.includes(src)
          );
        }

        return false;
      });

      return {
        filteredWeapons: filteredWeapons.map((w) =>
          weaponsData.find((data) => data.name === w)
        ),
        filteredArmors: filteredArmors.map((a) =>
          armorData.find((data) => data.name === a)
        ),
        filteredAccessories: filteredAccessories.map((a) =>
          accessoriesData.find((data) => data.name === a)
        ),
      };
    }, [selectedSources, gears]);

  return (
    <section
      id="equipments"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400 text-center">
        3.1. Equipments
      </h2>
      <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">
        Note that only one unique item can be equipped per character
        <br />
        <strong>
          Select a Chaos Manifestation from the dropdown below to view its
          specific loot pool
        </strong>
      </p>

      {/* Dropdown */}
      <div className="mb-12 flex flex-col items-center">
        <span className="text-purple-300 text-xl font-medium mb-2 tracking-wide">
          Chaos Manifestation
        </span>
        <div className="flex justify-center w-full">
          <div className="relative w-55 mt-2 hover:scale-105 transition-all duration-300">
            <select
              value={selectedSources}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "all") setSelectedSources("all");
                else setSelectedSources(value);
              }}
              className="
                        appearance-none w-full text-sm font-medium
                        rounded-xl border border-border bg-card
                        py-3 px-4 pr-10 text-center
                        hover:border-purple-400
                        focus:outline-none
                      "
            >
              <option value="all">Show All</option>
              <option value="Laboratory 0">Laboratory 0</option>
              <option value="Swamp of Judgment">Swamp of Judgment</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Weapon */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-purple-300 text-center">
            Weapon
          </h3>
          {filteredWeapons?.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              No weapons match selected sources.
            </p>
          ) : (
            <>
              {filteredWeapons[0] && <GearItem {...filteredWeapons[0]} />}
              {filteredWeapons.length > 1 && (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex justify-center w-full">
                      <button className="flex items-center justify-center gap-2 text-sm w-40 rounded-lg border border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-103 py-1 mt-2">
                        {" "}
                        Show More
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-visible bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                    {/* Header with LOWER z-index than tooltip */}
                    <DialogHeader className="sticky top-0 z-0 shrink-0 bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12 pointer-events-none">
                      <DialogTitle className="text-xl sm:text-2xl text-center font-bold text-purple-300 pointer-events-auto">
                        Alternative Weapon
                      </DialogTitle>
                    </DialogHeader>

                    {/* Scrollable content */}
                    <div className="relative z-20 flex-1 min-h-0 overflow-y-auto px-6 pb-6 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                      <div className="space-y-4">
                        {filteredWeapons
                          .slice(1)
                          .map(
                            (gear, index) =>
                              gear && <GearItem key={index} {...gear} />
                          )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </>
          )}
        </div>

        {/* Armor */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-purple-300 text-center">
            Armor
          </h3>
          {filteredArmors.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              No armors match selected sources.
            </p>
          ) : (
            <>
              {filteredArmors[0] && <GearItem {...filteredArmors[0]} />}
              {filteredArmors.length > 1 && (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex justify-center w-full">
                      <button className="flex items-center justify-center gap-2 text-sm w-40 rounded-lg border border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-103 py-1 mt-2">
                        Show More
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </div>
                  </DialogTrigger>

                  {/* Dialog with sticky header + no scrollbar */}
                  <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-hidden bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                    <DialogHeader className="sticky bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                      <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                        Alternative Armor
                      </DialogTitle>
                    </DialogHeader>
                    <div className="overflow-y-auto px-6 pb-6 pt-4 flex-1 scrollbar-none">
                      <div className="space-y-4">
                        {filteredArmors
                          .slice(1)
                          .map(
                            (gear, index) =>
                              gear && <GearItem key={index} {...gear} />
                          )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </>
          )}
        </div>

        {/* Accessory */}
        <div className="space-y-4 h-full flex flex-col">
          <h3 className="text-xl font-bold text-purple-300 text-center">
            Accessory
          </h3>
          {filteredAccessories.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              No accessories match selected sources.
            </p>
          ) : (
            <>
              {filteredAccessories[0] && (
                <GearItem {...filteredAccessories[0]} />
              )}
              {filteredAccessories.length > 1 && (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex justify-center w-full">
                      <button className="flex items-center justify-center gap-2 text-sm w-40 rounded-lg border border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-103 py-1 mt-2">
                        {" "}
                        Show More
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </div>
                  </DialogTrigger>

                  {/* Dialog with sticky header + no scrollbar */}
                  <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-hidden bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                    <DialogHeader className="sticky bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                      <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                        Alternative Accessory
                      </DialogTitle>
                    </DialogHeader>
                    <div className="overflow-y-auto px-6 pb-6 pt-4 flex-1 scrollbar-none">
                      <div className="space-y-4">
                        {filteredAccessories
                          .slice(1)
                          .map(
                            (gear, index) =>
                              gear && <GearItem key={index} {...gear} />
                          )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
