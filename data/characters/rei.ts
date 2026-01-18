// data/characters/rei.ts
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
} from "@/types/character-guides";
import {
  MemoryFragmentSet,
  MemoryFragmentMainStats,
  MemoryFragmentSubstats,
} from "@/types/memory-fragments";
import { SaveData } from "@/types/save-data";

const commonCards: Card[] = [
  {
    id: "Dark Blade",
    name: "Dark Blade",
    image: "/images/character/rei/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "100% Damage 15% Critical Rate",
  },
  {
    id: "Material Regeneration",
    name: "Material Regeneration",
    image: "/images/character/rei/starter3.png",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "Heal 100%",
  },
  {
    id: "Predator's Blade",
    name: "Predator's Blade",
    image: "/images/character/rei/unique4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Unique,
    description: "300% Damage For 1 turn 4 Morale",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "strike-of-darkness",
    name: "Strike of Darkness",
    image: "/images/character/rei/starter4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Lead ] 100% Damage Increase Damage Amount of Basic Attack Cards by 100% for 1 turn",
    epiphanies: [
      {
        id: "Strike of Darkness I",
        tier: CardTier.S,
        cost: 1,
        type: "attack",
        description:
          "[ Lead ] 150% Damage Increase Damage Amount of Basic Attack Cards by 150% for 1 turn",
        reasoning:
          "Higher boost than IV but only lasts 1 turn, excellent for setting up big burst turns",
      },
      {
        id: "Strike of Darkness II",
        tier: CardTier.Bad,
        cost: 1,
        type: "attack",
        description: "350% Damage Decrease Damage Amount by 20% for 1 turn",
        reasoning:
          "The 20% damage penalty to ALL your damage is way too heavy for one stronger hit",
      },
      {
        id: "Strike of Darkness III",
        tier: CardTier.Bad,
        cost: 1,
        type: "attack",
        description:
          "[ Lead ] 150% Damage Discard all Basic Cards, add 1 Hit for each",
        reasoning:
          "Worse than V — costs 1 AP, no Retain, and very little actual scaling",
      },
      {
        id: "Strike of Darkness IV",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] Increase Damage Amount of Basic Attack Cards by 80%",
        reasoning:
          "Permanent basic attack damage boost, core of most basic builds",
      },
      {
        id: "Strike of Darkness V",
        tier: CardTier.SPlus,
        cost: 0,
        type: "skill",
        description: "[ Retain ] Activate all Basic Cards in hand",
        reasoning:
          "Free Retain, clears basics, turns them into great exhaust/discard fodder",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "AP 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_diallos.png",
        description: "",
      },
    ],
  },
  {
    id: "resonating-darkness",
    name: "Resonating Darkness",
    image: "/images/character/rei/unique1.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "[ Unique ] +40% Damage Amount of cards with Cost 1",
    epiphanies: [
      {
        id: "Resonating Darkness I",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description: "[ Unique ] +60% Damage Amount of cards with Cost 1",
        reasoning:
          "Straight upgrade from base, best raw damage for 1-cost cards",
      },
      {
        id: "Resonating Darkness II",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description: "[ Unique ] +40% Damage Amount of Void Card",
        reasoning:
          "Same damage as base but buffs all Void cards — best for Kayron/Renoa support, other Void chars usually prefer 1-cost or 0-cost version",
      },
      {
        id: "Resonating Darkness III",
        tier: CardTier.C,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +40% Shield gain, Damage Amount, and Healing of cards with Cost 1",
        reasoning:
          "Adds shield/healing you usually don't need — just take base or I instead",
      },
      {
        id: "Resonating Darkness IV",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +40% Damage Amount of cards with Cost 1 or less",
        reasoning: "Best choice for 0-cost heavy builds",
      },
      {
        id: "Resonating Darkness V",
        tier: CardTier.A,
        cost: 0,
        type: "skill",
        description: "For 1 turn, +80% Damage Amount of cards with Cost 1",
        reasoning:
          "Highest single-turn boost but needs strong draw to set up and burst same turn",
      },
    ],
    divineEpiphanies: [
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "snack-time",
    name: "Snack Time",
    image: "/images/character/rei/unique2.png",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Exhaust ] Choose 1 card(s) in hand to Exhaust Heal 100% Draw 1",
    epiphanies: [
      {
        id: "Snack Time I",
        tier: CardTier.B,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust 2 ] Choose 1 card(s) in hand to Exhaust Heal 150% Draw 1",
        reasoning:
          "Base card with Exhaust 2 — forces you to exhaust something to draw",
      },
      {
        id: "Snack Time II",
        tier: CardTier.SPlus,
        cost: 0,
        type: "skill",
        description: "[ Retain / Exhaust ] Heal 150% Draw 2",
        reasoning:
          "Best option — Retain + Draw 2, only skip if you already have excess draw",
      },
      {
        id: "Snack Time III",
        tier: CardTier.S,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust ] Choose up to 2 card(s) in hand to Exhaust, then Draw for each",
        reasoning: "Very flexible exhaust, scales well with trash cards",
      },
      {
        id: "Snack Time IV",
        tier: CardTier.A,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust ] Choose up to 1 card(s) from Draw Pile to Exhaust, then Draw for each",
        reasoning:
          "Worse than II or III, but useful for grabbing specific cards from draw pile before they become dead draws",
      },
      {
        id: "Snack Time V",
        tier: CardTier.Niche,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust ] Choose 2 card(s) in hand to Exhaust Choose 1 Void Card(s) to Draw",
        reasoning:
          "Void tutor, net negative draw — only for very specific Void loop builds",
      },
    ],
    divineEpiphanies: [
      {
        name: "Draw 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
      {
        name: "1 AP",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
    ],
  },
  {
    id: "dark-condensation",
    name: "Dark Condensation",
    image: "/images/character/rei/unique3.png",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Legendary,
    description:
      "Choose 1 Attack Card(s) in hand, +100% Damage Amount for 1 turn",
    epiphanies: [
      {
        id: "Dark Condensation I",
        tier: CardTier.SPlus,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 Attack Card(s) in hand, +150% Damage Amount for 1 turn",
        reasoning: "Highest damage buff for 1-cost cards, only lasts 1 turn",
      },
      {
        id: "Dark Condensation II",
        tier: CardTier.C,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 card(s) in hand, +100% Damage Amount, Shield gain and Healing for 1 turn",
        reasoning: "Trades damage for shield/healing you usually don't need",
      },
      {
        id: "Dark Condensation III",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description: "For 1 turn, +50% Damage Amount of Void Attack Cards",
        reasoning:
          "Buffs all Void attacks for the turn — dupes just extend duration",
      },
      {
        id: "Dark Condensation IV",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description: "Choose 1 Attack card(s), +100% Damage Amount until used",
        reasoning: "Flexible across zones but lower multiplier than I",
      },
      {
        id: "Dark Condensation V",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description: "Choose 1 Attack Card(s) in hand, +50% Damage Amount",
        reasoning: "Permanent buff but lowest multiplier and exhausts itself",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
      {
        name: "1 AP",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
        description: "",
      },
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "Standard Draw",
    shortDescription: "General Build",
    description:
      "Feel free to slot any Epiphanies you need. This preset only covers her as a draw support unit.",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: ["Snack Time II", "Snack Time II", "Snack Time II", "Snack Time II"],
  },
  {
    id: "deck-2",
    name: "Mei Lin's Support",
    shortDescription: "Strike Build",
    description: "",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Strike of Darkness IV",
      "Resonating Darkness IV",
      "Snack Time II",
      "Snack Time II",
      "Snack Time II",
      "Snack Time II",
      "Dark Condensation I",
      "Predator's Blade",
    ],
  },
  {
    id: "deck-3",
    name: "Chizuru's Support",
    shortDescription: "Shadow of the Moon Build",
    description: "",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Strike of Darkness V",
      "Resonating Darkness I",
      "Snack Time II",
      "Snack Time II",
      "Snack Time II",
      "Dark Condensation I",
      "Dark Condensation I",
      "Predator's Blade",
    ],
  },
  {
    id: "deck-4",
    name: "Chizuru's Support",
    shortDescription: "Moonslash Build",
    description: "",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Strike of Darkness IV",
      "Resonating Darkness II",
      "Snack Time II",
      "Snack Time II",
      "Snack Time II",
      "Snack Time II",
      "Dark Condensation III",
      "Predator's Blade",
    ],
  },
  {
    id: "deck-5",
    name: "Renoa's Support",
    shortDescription: "",
    description: "",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Strike of Darkness V",
      "Resonating Darkness I",
      "Snack Time II",
      "Snack Time II",
      "Snack Time II",
      "Snack Time II",
      "Dark Condensation III",
      "Predator's Blade",
    ],
  },
  {
    id: "deck-6",
    name: "Kayron's Support",
    shortDescription: "",
    description: "",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Strike of Darkness V",
      "Resonating Darkness II",
      "Snack Time V",
      "Snack Time V",
      "Snack Time V",
      "Snack Time V",
      "Dark Condensation III",
      "Predator's Blade",
    ],
  },
];

const gearsData = {
  weapons: [
    "Tentacles of Chaos",
    "Crimson Sword",
    "Flashbang",
    "Over Cutter Shocker",
  ],
  armors: [
    "Fragment of the Empty Void",
    "Rocket-Adorned Cape",
    "Brainwave-Blocking Helmet",
  ],
  accessories: [
    "Clover of the Forest",
    "Sphere of Randomness",
    "Superconductive Protein",
    "Source of the Forbidden",
    "Water Drops of the Goddess",
    "Multifaceted Parallel Universe Nexus",
  ],
};

const recommendedSources = ["Laboratory 0", "Swamp of Judgment"];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "tetras-authority",
      description: "",
    },
    {
      id: "healers-journey",
      description: "",
    },
    {
      id: "seths-scarab",
      description: "",
    },
  ],
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "nyx",
    description: "",
    tier: CardTier.SPlus,
  },
  {
    id: "yuri",
    description: "",
    tier: CardTier.S,
  },
  {
    id: "arwen",
    description: "",
    tier: CardTier.A,
  },
  {
    id: "alyssa",
    description: "",
    tier: CardTier.A,
  },
  {
    id: "yvonne",
    description: "",
    tier: CardTier.C,
  },
];

export const reiData: CharacterData = {
  attribute: Attributes.Void,
  job: CharacterClass.Controller,
  role: CharacterRole.Support,
  rarity: 4,

  overview: `
Rei is a flexible support focused on enabling basic attack spam, 0-cost spam, or Void synergy depending on the team
Her kit revolves around massive buffs to 1-cost (or ≤1-cost) cards, strong draw/exhaust cycling with Snack Time, and powerful buff support via Predator's Blade
  `.trim(),

  strengths: [
    "Excellent enabler for basic attack and 0-cost builds",
    "Strong draw and cycling with Snack Time",
    "Very flexible — supports many different DPS styles",
  ],

  weaknesses: [
    "Relatively low personal damage",
    "Some builds require specific partner synergy",
  ],

  externalResources: [
    {
      label: "CZN Official Discord",
      url: "https://discord.gg/chaoszeronightmare",
      note: "Guide discussion and validation",
    },
    {
      label: "Sproot's Nightmare",
      url: "https://docs.google.com/spreadsheets/d/1-KkQUFrjD_2Un3zMDmypCwZFVF5VmowswqYdLt9MOw8/edit?gid=389626560#gid=389626560",
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
    MemoryFragmentMainStats.Health,
    MemoryFragmentMainStats.Health,
    MemoryFragmentMainStats.EgoRecovery,
  ],
  memoryFragmentSubstatPriorities: [
    {
      priority: 1,
      relation: "equal",
      stats: [MemoryFragmentSubstats.EgoRecovery],
    },
    {
      priority: 2,
      relation: "or",
      stats: [
        MemoryFragmentSubstats.DefenseFlat,
        MemoryFragmentSubstats.Defense,
      ],
    },
    {
      priority: 3,
      relation: "equal",
      stats: [MemoryFragmentSubstats.HealthFlat, MemoryFragmentSubstats.Health],
    },
  ],
  memoryFragmentSubstatsNote: "",
  partnersGuide: partnersGuide,
};
