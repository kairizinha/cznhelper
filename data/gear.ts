// src/data/gear.ts
export type GearRarity = 'rare' | 'legend' | 'unique';

export interface GearData {
  name: string;
  rarity: GearRarity;
  slot: 'weapon' | 'armor' | 'accessory';
  source: string;
  atk?: string;
  def?: string;
  health?: string;
  imageName: string; // Filename without extension
  effect: string; // Plain text effect, we'll color numbers in component
}

export const weapons: GearData[] = [
  {
    name: "Abyssal Bug Tooth",
    rarity: "legend",
    slot: "weapon",
    source: "Twin Star's Shadow",
    atk: "28/45/62/74/82",
    imageName: "Abyssal-Bug-Tooth",
    effect: "On Critical Hit, 50% chance to 1 Agony.",
  },
  {
    name: "Big Game Hunter",
    rarity: "rare",
    slot: "weapon",
    source: "Shop",
    atk: "25/41/56/67/74",
    imageName: "Big-Game-Hunter",
    effect: "The first Attack Card used per battle +100% Tenacity Damage.",
  },
  {
    name: "Blood Giant Claw",
    rarity: "legend",
    slot: "weapon",
    source: "City of Mist",
    atk: "28/45/62/74/82",
    imageName: "Blood-Giant-Claw",
    effect: "On Ravage, 150% Fixed Damage to the target.",
  },
  // Add all other weapons from the lists I extracted (there are ~50 weapons total)
  // Example additional:
  {
    name: "Branch of Eternity",
    rarity: "legend",
    slot: "weapon",
    source: "Swamp of Judgment",
    atk: "31/50/68/81/90",
    imageName: "Branch-of-Eternity",
    effect: "On Heal or Recover, Fixed Damage to all enemies equal to 50% of Recover amount.",
  },
  // ... continue adding the rest
];

export const armors: GearData[] = [
  {
    name: "Chains of Obsession",
    rarity: "legend",
    slot: "armor",
    source: "The Blue Pot, Twin Star's Shadow",
    def: "10/17/23/27/31",
    imageName: "Chains-of-Obsession",
    effect: "When using Attack cards, 1% HP Reduction, 60% Fixed Shield.",
  },
  // Add all armors (~30-40)
];

export const accessories: GearData[] = [
  {
    name: "Nerve Hacking Module",
    rarity: "rare",
    slot: "accessory",
    source: "",
    health: "+75",
    imageName: "Nerve-Hacking-Module",
    effect: "When an ally uses a Forbidden Card, +20% Damage Amount, +20% Shield Gain Amount (2 times per battle)",
  },
  {
    name: "Eye of the Eyeless",
    rarity: "legend",
    slot: "accessory",
    source: "",
    health: "+83",
    imageName: "Eye-of-the-Eyeless",
    effect: "Increase damage of Basic attack cards by 40%",
  },
  {
    name: "Emblem of an Exceptional Entity",
    rarity: "legend",
    slot: "accessory",
    source: "",
    health: "+83",
    imageName: "Emblem-of-an-Exceptional-Entity",
    effect: "+30% Damage Amount. Stress received becomes 0 (1 for each battle)",
  },
  {
    name: "Amorphous Cube",
    rarity: "rare",
    slot: "accessory",
    source: "",
    health: "+75",
    imageName: "Amorphous-Cube",
    effect: "At the start of battle, +25% Damage",
  },
  {
    name: "Dimensional Cube",
    rarity: "legend",
    slot: "accessory",
    source: "",
    health: "+83",
    imageName: "Dimensional-Cube",
    effect: "When discarding a card, +10% Damage for 1 turn",
  },
  {
    name: "Verdant Shackles",
    rarity: "unique",
    slot: "accessory",
    source: "",
    health: "+91",
    imageName: "Verdant-Shackles",
    effect: "+12% Attack, +12% Defense",
  },










  
];