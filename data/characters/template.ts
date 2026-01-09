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
    id: "",
    name: "",
    image: "/images/character/charname/starter1.png",
    cost: 0,
    type: "type",
    rarity: CardRarities.Common,
    description: "",
  },
  {
    id: "",
    name: "",
    image: "/images/character/charname/starter2.png",
    cost: 0,
    type: "type",
    rarity: CardRarities.Common,
    description: "",
  },
  {
    id: "",
    name: "",
    image: "/images/character/charname/starter3.png",
    cost: 0,
    type: "type",
    rarity: CardRarities.Common,
    description: "",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "",
    name: "",
    image: "/images/character/charname/starter4.png",
    type: "type",
    cost: 0,
    rarity: CardRarities.Rare,
    description: "",
    epiphanies: [
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_diallos.png",
        description: "",
      },
    ],
  },
  {
    id: "",
    name: "",
    image: "/images/character/charname/unique1.png",
    type: "type",
    cost: 0,
    rarity: CardRarities.Rare,
    description: "",
    epiphanies: [
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "",
    name: "",
    image: "/images/character/charname/unique2.png",
    type: "type",
    cost: 0,
    rarity: CardRarities.Rare,
    description: "",
    epiphanies: [
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "",
    name: "",
    image: "/images/character/charname/unique3.png",
    type: "type",
    cost: 0,
    rarity: CardRarities.Legendary,
    description: "",
    epiphanies: [
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
      {
        id: "",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
        description: "",
      },
      {
        name: "",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "",
    name: "",
    image: "/images/character/charname/unique4.png",
    type: "type",
    cost: 0,
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
  {
    id: "deck-3",
    name: "Deck 3",
    shortDescription: "",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [],
  },
];

const gearsData = {
  weapons: [],
  armors: [],
  accessories: [],
};

const recommendedSources = [""];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "",
      description: "",
    },
    {
      id: "",
      description: "",
    },
  ],
  alternative: [
    {
      id: "",
      description: "",
    },
    {
      id: "",
      description: "",
    },
    {
      id: "",
      description: "",
    },
  ],
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "",
    description: ``,
    tier: CardTier.WIP,
  },
  {
    id: "",
    description: ``,
    tier: CardTier.WIP,
  },
];

export const charname: CharacterData = {
  attribute: Attributes.Instinct, // Void, Instinct etc
  job: CharacterClass.Controller, // Ranger, Psionic, etc
  role: CharacterRole.Support, // MainDPS, SubDPS, Support

  overview: ``.trim(),
  strengths: [],

  weaknesses: [],

  externalResources: [
    {
      label: "CZN Official Discord",
      url: "https://discord.gg/chaoszeronightmare",
      note: "Guide discussion and validation",
    },
    {
      label: "Sproot's Nightmare",
      url: "https://docs.google.com/spreadsheets/d/1-KkQUFrjD_2Un3zMDmypCwZFVF5VmowswqYdLt9MOw8/edit?gid=1855295740#gid=1855295740",
      note: "Theorycrafting and math base",
    },
  ],

  credits: [
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
