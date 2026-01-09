// data/characters/chizuru.ts
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
    id: "Moonslash",
    name: "Moonslash",
    image: "/images/character/chizuru/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "60% Damage x 2",
  },
  {
    id: "Spiritflame's Ward",
    name: "Spiritflame's Ward",
    image: "/images/character/chizuru/starter3.png",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "100% Shield",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "karmic-flames",
    name: "Karmic Flames",
    image: "/images/character/chizuru/starter4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Initiation ] 100% Damage 1 Cursed Shackles Cursed Shackles: Add 1 Hit",
    epiphanies: [
      {
        id: "Karmic Flames I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Initiation ] 150% Damage 1 Cursed Shackles Cursed Shackles: Add 1 Hit",
        reasoning: "",
      },
      {
        id: "Karmic Flames II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Initiation ] 150% Damage 1 Cursed Shackles Cursed Shackles: Decrease Cost of the next card of this unit used by 1",
        reasoning: "",
      },
      {
        id: "Karmic Flames III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Initiation ] 180% Damage 1 Cursed Shackles Cursed Shackles: Increase Damage Amount by 100%",
        reasoning: "",
      },
      {
        id: "Karmic Flames IV",
        tier: CardTier.WIP,
        cost: 2,
        type: "skill",
        description:
          "[ Initiation ] 1 Cursed Shackles Create 1 Shadow of the Moon",
        reasoning: "",
      },
      {
        id: "Karmic Flames V",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "[ Initiation / Exhaust ] 1 Cursed Shackles When a target inflicted with Cursed Shackles is defeated, create this card",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "tsukuyomi",
    name: "Tsukuyomi",
    image: "/images/character/chizuru/unique1.png",
    type: "skill",
    cost: 0,
    rarity: CardRarities.Rare,
    description:
      "2 Will-O'-Wisp for each Hit of the next Attack Card of this unit used",
    epiphanies: [
      {
        id: "Tsukuyomi I",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "3 Will-O'-Wisp for each Hit of the next Attack Card of this unit used",
        reasoning: "",
      },
      {
        id: "Tsukuyomi II",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "Add 1 Hit(s) to the next Attack Card of this unit used, 1 Will-O'-Wisp for each Hit",
        reasoning: "",
      },
      {
        id: "Tsukuyomi III",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "Add 2 Hit(s) to the next Shadow of the Moon, Shadow of the Moon+ used",
        reasoning: "",
      },
      {
        id: "Tsukuyomi IV",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description: "3 Will-O'-Wisp for each Attack Card of this unit in hand",
        reasoning: "",
      },
      {
        id: "Tsukuyomi V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Lead ] When an Attack Card of this unit is used, 2 Will-O'-Wisp",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "bound-at-dusk",
    name: "Bound At Dusk",
    image: "/images/character/chizuru/unique2.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Initiation / Unique ] At the start of the turn, gain Inhibit Decrease Cost of 1 random card(s) of other Combatants by 1 until used",
    epiphanies: [
      {
        id: "Bound At Dusk I",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn, gain Inhibit Decrease Cost of 2 random card(s) of other Combatants by 1 until used",
        reasoning: "",
      },
      {
        id: "Bound At Dusk II",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn, gain Inhibit When Shadow of the Moon+ is used, decrease Cost of the next 1 card(s) by 1 until used",
        reasoning: "",
      },
      {
        id: "Bound At Dusk III",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn, gain Inhibit Activate 2 random card(s) of other Combatants",
        reasoning: "",
      },
      {
        id: "Bound At Dusk IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn, gain Inhibit Activate 2 random Lead card(s)",
        reasoning: "",
      },
      {
        id: "Bound At Dusk V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn, gain Inhibit Decrease Cost of 1 card(s) with the highest Cost by 2 until used",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "oni-hunt",
    name: "Oni Hunt",
    image: "/images/character/chizuru/unique3.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Legendary,
    description:
      "[ Haste ] 60% Damage x 3 +30% Damage Amount to the next Bind card used",
    epiphanies: [
      {
        id: "Oni Hunt I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Haste ] 50% Damage x 4 +40% Damage Amount to the next Bind card used",
        reasoning: "",
      },
      {
        id: "Oni Hunt II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Haste ] 180% Damage +60% Damage Amount to the next Bind card used",
        reasoning: "",
      },
      {
        id: "Oni Hunt III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Haste ] 60% Damage x 3 If there are no other Attack Cards in hand, add 2 Hit(s)",
        reasoning: "",
      },
      {
        id: "Oni Hunt IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "[ Haste ] Create 2 Moonslash Apply Exhaust to those cards, decrease Cost by 1 until used",
        reasoning: "",
      },
      {
        id: "Oni Hunt V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +40% Damage Amount to Shadow of the Moon+ At the start of the turn, 3 Will-O'-Wisp",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "Shadow of the Moon",
    name: "Shadow of the Moon",
    image: "/images/character/chizuru/unique4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Unique,
    description:
      "[ Bind 1 / Retain ] 50% Damage 20% Damage Amount for each Bind stack",
    epiphanies: [],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "Shadow of the Moon",
    shortDescription: "",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Karmic Flames V",
      "Tsukuyomi III",
      "Tsukuyomi III",
      "Tsukuyomi III",
      "Bound At Dusk I",
      "Oni Hunt I",
      "Oni Hunt I",
      "Shadow of the Moon",
    ],
  },
  {
    id: "deck-2",
    name: "Moonslash",
    shortDescription: "",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Moonslash",
      "Karmic Flames II",
      "Tsukuyomi V",
      "Oni Hunt IV",
      "Oni Hunt IV",
      "Oni Hunt IV",
      "Oni Hunt IV",
      "Shadow of the Moon",
    ],
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
      id: "black-wing",
      description: "Standard set for raw damage scaling",
    },
    {
      id: "executioners-tool",
      description: "Standard set for critical damage scaling",
    },
    {
      id: "cursed-corpse",
      description: "Alternative that outperforms with consistent Agony uptime",
    },
  ],
  alternative: [
    {
      id: "conquerors-aspect",
      description:
        "Situational depending on Bound of Dusk Epiphany, since Conqueror Aspect can break and loses value with card cost reduction",
    },
    {
      id: "executioners-tool",
      description: "Standard set for critical damage scaling",
    },
  ],
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "itsuku",
    description: `[ Best in Slot / Signature ] 
    
    `,
    tier: CardTier.WIP,
  },
  {
    id: "zatera",
    description: ``,
    tier: CardTier.WIP,
  },
  {
    id: "bria",
    description: ``,
    tier: CardTier.WIP,
  },
  {
    id: "anteia",
    description: ``,
    tier: CardTier.WIP,
  },
  {
    id: "eloise",
    description: ``,
    tier: CardTier.WIP,
  },
];

export const chizuruData: CharacterData = {
  attribute: Attributes.Void,
  job: CharacterClass.Psionic,
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
      url: "https://docs.google.com/spreadsheets/d/1-KkQUFrjD_2Un3zMDmypCwZFVF5VmowswqYdLt9MOw8/edit?gid=1449498302#gid=1449498302",
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
      name: "Zyla",
      contribution: "Card Data",
    },
    {
      name: "Lucie",
      contribution: "Guide Author",
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
    MemoryFragmentMainStats.VoidDamage,
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
