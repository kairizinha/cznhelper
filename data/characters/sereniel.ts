// data/characters/sereniel.ts
import { Attributes } from "@/types/card";
import { CharacterClass, CharacterRole } from "@/types/character";
import {
  Card,
  CardRarities,
  CardTier,
  CharacterData,
  MemoryFragmentSetRecommendation,
  UniqueCard,
  PartnersGuide,
  CreditEntry,
} from "@/types/character-guides";
import {
  MemoryFragmentSet,
  MemoryFragmentMainStats,
  MemoryFragmentSubstats,
} from "@/types/memory-fragments";
import { SaveData } from "@/types/save-data";

const commonCards: Card[] = [
  {
    id: "Pulse Fire",
    name: "Pulse Fire",
    image: "/images/character/sereniel/starter1.webp",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "100% Damage",
  },
  {
    id: "Magnetic Field",
    name: "Magnetic Field",
    image: "/images/character/sereniel/starter3.webp",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "100% Shield",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "homing-laser",
    name: "Homing Laser",
    image: "/images/character/sereniel/starter4.webp",
    type: "attack",
    cost: 0,
    rarity: CardRarities.Rare,
    description:
      "100% damage  2 Afterglow  On Ravage, move from  Graveyard to hand",
    epiphanies: [
      {
        id: "Homing Laser I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "150% damage  On Ravage, Move to  hand  Destroy: Add 1 Hit(s)",
        reasoning: "",
      },
      {
        id: "Homing Laser II",
        tier: CardTier.WIP,
        cost: 0,
        type: "attack",
        description: "150% Damage  3 Afterglow   On Ravage, Move to  hand",
        reasoning: "",
      },
      {
        id: "Homing Laser III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "150% Damage  2 Afterglow  Create 2 Homing Laser  L in Discard Pile",
        reasoning: "",
      },
      {
        id: "Homing Laser IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "100% Damage  1 Afterglow  On Ravage or at the  start of the turn, Move  to hand",
        reasoning: "",
      },
      {
        id: "Homing Laser V",
        tier: CardTier.WIP,
        cost: 0,
        type: "attack",
        description:
          "150% Damage  2 Afterglow  Move all Homing Laser L  in Graveyard to hand",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "plasma-missile",
    name: "Plasma Missile",
    image: "/images/character/sereniel/unique1.webp",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "120% Damage  0.5 Tenacity Damage  If the taret was not  Ravaged, activate 1  more time",
    epiphanies: [
      {
        id: "Plasma Missile I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "180% Damage  1 Tenacity Damage  If the taret was not  Ravaged, activate 1  more time",
        reasoning: "",
      },
      {
        id: "Plasma Missile II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "180% Damage  60% Damage Amount  for each decreased  Tenacity of the target  (max 10)",
        reasoning: "",
      },
      {
        id: "Plasma Missile III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "120% Damage  2 Instinct Weakness  60% Damage Amount  to Homing Laser for 1  turn(s)",
        reasoning: "",
      },
      {
        id: "Plasma Missile IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description: "120% Damage  Create 3 Homing Laser  L in Draw Pile",
        reasoning: "",
      },
      {
        id: "Plasma Missile V",
        tier: CardTier.WIP,
        cost: 0,
        type: "upgrade",
        description:
          "[ Unique ] At the end of the turn, 50%  Damage to a random  enemy  +30% Damage Amount for  each Homing Laser Moved  to hand for 1 turn(s)",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "shining-core",
    name: "Shining Core",
    image: "/images/character/sereniel/unique2.webp",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "Create 2 Homing Laser  L",
    epiphanies: [
      {
        id: "Shining Core I",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description: "Create 3 Homing Laser  L",
        reasoning: "",
      },
      {
        id: "Shining Core II",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "Create 3 Homing Laser  L, increase Exhaust of  those cards by 2",
        reasoning: "",
      },
      {
        id: "Shining Core III",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 2 Homing Laser  L  On Ravage, create  2 Homing Laser L",
        reasoning: "",
      },
      {
        id: "Shining Core IV",
        tier: CardTier.WIP,
        cost: "X",
        type: "skill",
        description: "Create X+1 Homing  Laser L  Apply Haste to  those  cards",
        reasoning: "",
      },
      {
        id: "Shining Core V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "Select and create  1 Homing Laser with  their own distinct  Epiphanies",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "cobalt-light",
    name: "Cobalt Light",
    image: "/images/character/sereniel/unique3.webp",
    type: "attack",
    cost: 3,
    rarity: CardRarities.Legendary,
    description:
      "120% Damage x 4 to   random enemies  1 Tenacity Damage for   each Hit",
    epiphanies: [
      {
        id: "Cobalt Light I",
        tier: CardTier.WIP,
        cost: 3,
        type: "attack",
        description:
          "180% Damage x 4 to   random enemies  1 Tenacity Damage for   each Hit  Ravage: Decrease Cost  by 1",
        reasoning: "",
      },
      {
        id: "Cobalt Light II",
        tier: CardTier.WIP,
        cost: 3,
        type: "attack",
        description:
          "[ Retain ] 120% Damage x 4 to   random enemies  1 Tenacity Damage for   each Hit  Retain: Add 1 Hit until use  (max 5 times)",
        reasoning: "",
      },
      {
        id: "Cobalt Light III",
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description:
          "120% Damage x 4 to   random enemies  Create 1 Homing Laser  L for each target Hit",
        reasoning: "",
      },
      {
        id: "Cobalt Light IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "120% Damage to   random enemies  Add 1 Hit for  each Homing Laser in  hand",
        reasoning: "",
      },
      {
        id: "Cobalt Light V",
        tier: CardTier.WIP,
        cost: 3,
        type: "attack",
        description:
          "[ Weakness Attack ] 120% Damage x 4  Ravage: Activate 1  more time",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "Pale Shooting Star",
    name: "Pale Shooting Star",
    image: "/images/character/sereniel/unique4.webp",
    type: "attack",
    cost: 2,
    rarity: CardRarities.Unique,
    description: "",
    epiphanies: [],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "Deck 1",
    shortDescription: "",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [],
  },
  {
    id: "deck-2",
    name: "Deck 2",
    shortDescription: "",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [],
  },
];

const gearsData = {
  weapons: ["Intellect of Discord"],
  armors: ["Wings of Freedom"],
  accessories: ["Nerve Hacking Module"],
};

const recommendedSources = ["Laboratory 0"];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "judgments-flames",
      description: "",
    },
    {
      id: "executioners-tool",
      description: "Standard Critical Damage build with high crit scaling",
    },
  ],
  alternative: [
    {
      id: "black-wing",
      description: "Standard Attack set for raw damage scaling",
    },
    {
      id: "executioners-tool",
      description: "Standard Critical Damage build with high crit scaling",
    },
    {
      id: "cursed-corpse",
      description: "Alternative that outperforms with consistent Agony uptime",
    },
  ],
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "peko",
    description: "",
    tier: CardTier.SPlus,
  },
  {
    id: "yuri",
    description: "",
    tier: CardTier.WIP,
  },
  {
    id: "serithea",
    description: "",
    tier: CardTier.WIP,
  },
];

export const serenielData: CharacterData = {
  attribute: Attributes.Instinct,
  job: CharacterClass.Hunter,
  role: CharacterRole.MainDPS,

  overview: `
  
  `.trim(),
  strengths: [""],

  weaknesses: [""],

  externalResources: [
    {
      label: "CZN Official Discord",
      url: "https://discord.gg/chaoszeronightmare",
      note: "Guide discussion and validation",
    },
    {
      label: "Sproot's Nightmare",
      url: "https://docs.google.com/spreadsheets/d/1-KkQUFrjD_2Un3zMDmypCwZFVF5VmowswqYdLt9MOw8/edit?gid=79832103#gid=79832103",
      note: "Theorycrafting and math base",
    },
  ],

  credits: [
    {
      name: "",
      contribution: "",
    },
    {
      name: "",
      contribution: "",
    },
    {
      name: "Lucie",
      contribution: "Guide Author and Data",
    },
  ],

  commonCards: commonCards,
  uniqueCards: uniqueCards,
  recommendedSaveData: recommendedSaveData,
  gears: gearsData,
  recommendedSources: recommendedSources,
  memoryFragmentSets: memoryFragmentSets,
  memoryFragmentMainStats: [
    MemoryFragmentMainStats.CriticalChance,
    MemoryFragmentMainStats.InstinctDamage,
    MemoryFragmentMainStats.Attack,
  ],
  memoryFragmentSubstatPriorities: [
    {
      priority: 1,
      relation: "equal",
      stats: [
        MemoryFragmentSubstats.CriticalChance,
        MemoryFragmentSubstats.CriticalDamage,
      ],
    },
    {
      priority: 2,
      relation: "or",
      stats: [MemoryFragmentSubstats.AttackFlat, MemoryFragmentSubstats.Attack],
    },
  ],
  memoryFragmentSubstatsNote: "",
  partnersGuide: partnersGuide,
};
