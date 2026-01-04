// data/characters/renoa.ts
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
    id: "Annihilation Shot",
    name: "Annihilation Shot",
    image: "/images/character/renoa/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "100% Damage",
  },
  {
    id: "Black Veil",
    name: "Black Veil",
    image: "/images/character/renoa/starter3.png",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "100% Shield",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "echo-of-sorrow",
    name: "Echo of Sorrow",
    image: "/images/character/renoa/starter4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "140% Damage Create 1 Dirge Bullet Card(s)",
    epiphanies: [
      {
        id: "Echo of Sorrow I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description: "140% Damage Create 2 Dirge Bullet Card(s)",
        reasoning: "",
      },
      {
        id: "Echo of Sorrow II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "140% Damage Create 1 Dirge Bullet Card(s), Create 2 Card(s) in Discard Pile",
        reasoning: "",
      },
      {
        id: "Echo of Sorrow III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "140% Damage Create 2 Dirge Bullet Card(s), Discard 2 Dirge Bullet Card(s) from Draw Pile",
        reasoning: "",
      },
      {
        id: "Echo of Sorrow IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description: "Create 3 Dirge Bullet Card(s)",
        reasoning: "",
      },
      {
        id: "Echo of Sorrow V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation ] Create 1 Dirge Bullet Card(s) At the start of the turn, create 1 Dirge Bullet Card(s)",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "instant-judgment",
    name: "Instant Judgment",
    image: "/images/character/renoa/unique1.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "180% Damage If Dirge Bullet is in hand, discard 1 and +100% Damage Amount",
    epiphanies: [
      {
        id: "Instant Judgment I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "270% Damage If Dirge Bullet is in hand, discard 1 card and +150% Damage Amount",
        reasoning: "",
      },
      {
        id: "Instant Judgment II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "220% Damage If Dirge Bullet is in Draw Pile, discard 1 card and +120% Damage Amount",
        reasoning: "",
      },
      {
        id: "Instant Judgment III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "220% Damage If Dirge Bullet is in Graveyard, Exhaust 1 and add 1 Hit(s)",
        reasoning: "",
      },
      {
        id: "Instant Judgment IV",
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description:
          "180% Damage When moved to Discard Pile, 250% Extra Attack to a random enemy",
        reasoning: "",
      },
      {
        id: "Instant Judgment V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "At the end of the turn, 200% Extra Attack to the enemy with lowest HP",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "ballad-of-pitch-black",
    name: "Ballad of Pitch Black",
    image: "/images/character/renoa/unique2.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "50% Damage x 3 +20% Damage Amount for each Dirge Bullet in hand",
    epiphanies: [
      {
        id: "Ballad of Pitch Black I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "75% Damage x 3 +30% Damage Amount for each Dirge Bullet in hand",
        reasoning: "",
      },
      {
        id: "Ballad of Pitch Black II",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "Move up to 3 Dirge Bullet Card(s) from Draw Pile and Graveyard to hand",
        reasoning: "",
      },
      {
        id: "Ballad of Pitch Black III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "50% Damage x 3 1 Mark to the target for each Dirge Bullet in hand",
        reasoning: "",
      },
      {
        id: "Ballad of Pitch Black IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "50% Damage x 3 Increase Damage Amount of Dirge Bullet's Extra Attack by 100% for 1 turn",
        reasoning: "",
      },
      {
        id: "Ballad of Pitch Black V",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "50% Damage x 3 Exhaust all Dirge Bullet in the Graveyard, increase Damage Amount by 50% for each",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "flower-of-devoured-fate",
    name: "Flower of Devoured Fate",
    image: "/images/character/renoa/unique3.png",
    type: "skill",
    cost: 0,
    rarity: CardRarities.Legendary,
    description:
      "Discard up to 2 Card(s) from hand Create Dirge Bullet for each",
    epiphanies: [
      {
        id: "Flower of Devoured Fate I",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "Discard up to 3 Card(s) from hand Create Dirge Bullet for each",
        reasoning: "",
      },
      {
        id: "Flower of Devoured Fate II",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "[ Exhaust ] Discard all other Combatants cards from hand Create 2 Dirge Bullet for each",
        reasoning: "",
      },
      {
        id: "Flower of Devoured Fate III",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "Discard up to 2 Card(s) from hand For each Discarded Card with Cost 1, +40% Damage Amount of next card",
        reasoning: "",
      },
      {
        id: "Flower of Devoured Fate IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "Draw 2 If Dirge Bullet is in hand, Draw 1 additional card(s)",
        reasoning: "",
      },
      {
        id: "Flower of Devoured Fate V",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description: "Grant Retrieve to all Dirge Bullet in hand",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "Last-Ditch Assault",
    name: "Last-Ditch Assault",
    image: "/images/character/renoa/unique4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Unique,
    description:
      "150% Damage (+0%) Discard all Dirge Bullet, +50% Damage Amount for each",
    epiphanies: [],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "Deck 1",
    description: "",
    faintMemoryNote: "",
    cards: [],
  },
  {
    id: "deck-2",
    name: "Deck 2",
    description: "",
    faintMemoryNote: "",
    cards: [],
  },
  {
    id: "deck-3",
    name: "Deck 3",
    description: "",
    faintMemoryNote: "",
    cards: [],
  },
];

const gearsData = {
  weapons: ["Intellect of Discord"],
  armors: ["Fragment of the Empty Void"],
  accessories: ["Dimensional Cube"],
};

const recommendedSources = ["Laboratory 0"];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "conquerors-aspect",
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
    id: "yuri",
    description: ``,
    tier: CardTier.WIP,
  },
  {
    id: "peko",
    description: ``,
    tier: CardTier.WIP,
  },
  {
    id: "serithea",
    description: ``,
    tier: CardTier.WIP,
  },
  {
    id: "akad",
    description: ``,
    tier: CardTier.WIP,
  },
  {
    id: "kiara",
    description: ``,
    tier: CardTier.WIP,
  },
];

export const renoaData: CharacterData = {
  attribute: Attributes.Void,
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
      stats: [
        MemoryFragmentSubstats.ExtraDamage,
        MemoryFragmentSubstats.AttackFlat,
        MemoryFragmentSubstats.Attack,
      ],
    },
  ],
  memoryFragmentSubstatsNote: "",
  partnersGuide: partnersGuide,
};
