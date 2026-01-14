// data/characters/kayron.ts
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
    id: "Elimination",
    name: "Elimination",
    image: "/images/character/kayron/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "150% Damage Create 1 Futility Card(s)",
  },
  {
    id: "Sphere",
    name: "Sphere",
    image: "/images/character/kayron/starter3.png",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "100% Shield Create 1 Futility Card(s)",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "echo-of-futility",
    name: "Echo of Futility",
    image: "/images/character/kayron/starter4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "240% Damage Create 2 Futility Card(s)",
    epiphanies: [
      {
        id: "Echo of Futility I",
        tier: CardTier.S,
        cost: 1,
        type: "attack",
        description: "360% Damage Create 3 Futility Card(s)",
        reasoning:
          "Fast ramp and high base damage, works really well for burst builds",
      },
      {
        id: "Echo of Futility II",
        tier: CardTier.C,
        cost: 1,
        type: "attack",
        description:
          "240% Damage Create 2 Futility Card(s) +20% Damage Amount for each Exhausted Futility",
        reasoning:
          "Bad scaling, not worth it compared to Echo of Futility V, needs ~12 Futility to even beat Echo I",
      },
      {
        id: "Echo of Futility III",
        tier: CardTier.A,
        cost: 1,
        type: "attack",
        description:
          "240% Damage Create 2 Futility Card(s) Apply Ephemeral on that card",
        reasoning:
          "Saves AP and helps with rotations but adds very little damage",
      },
      {
        id: "Echo of Futility IV",
        tier: CardTier.Bad,
        cost: "X",
        type: "attack",
        description:
          "50% Damage +150% Damage Amount for each X Create X+1 Futility Card(s)",
        reasoning: "Low value, scales only with AP ratio, not worth the cost",
      },
      {
        id: "Echo of Futility V",
        tier: CardTier.SPlus,
        cost: 0,
        type: "attack",
        description:
          "30% Damage Create 2 Futility Card(s) +30% Damage Amount for each Futility created during this battle",
        reasoning:
          "Insane scaling, excellent AP efficiency, becomes extremely strong in longer fights",
      },
    ],
    divineEpiphanies: [
      {
        name: "2 Vulnerable to the target",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "1 AP",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "Increases Damage by 30%",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_diallos.png",
        description: "",
      },
    ],
  },
  {
    id: "brand-of-annihilation",
    name: "Brand of Annihilation",
    image: "/images/character/kayron/unique1.png",
    type: "attack",
    cost: 3,
    rarity: CardRarities.Rare,
    description:
      "300% Damage to all enemies When a card is Exhausted, decrease Cost of this card by 1 for 1 turn",
    epiphanies: [
      {
        id: "Brand of Annihilation I",
        tier: CardTier.S,
        cost: 3,
        type: "attack",
        description:
          "450% Damage to all enemies When a card is Exhausted, decrease Cost of this card by 1 for 1 turn",
        reasoning: "Solid option, usable for first rotations even without E1",
      },
      {
        id: "Brand of Annihilation II",
        tier: CardTier.S,
        cost: 3,
        type: "attack",
        description:
          "300% Damage x 2 to a random enemy When a card is Exhausted, decrease Cost of this card by 1 for 1 turn",
        reasoning:
          "Very high damage in single target fights, especially good against bosses",
      },
      {
        id: "Brand of Annihilation III",
        tier: CardTier.SPlus,
        cost: 7,
        type: "attack",
        description:
          "500% Damage to all enemies Decrease Cost for each Exhausted Futility",
        reasoning:
          "Becomes 0 cost for the whole battle after ramp, very high base damage, extremely easy to use",
      },
      {
        id: "Brand of Annihilation IV",
        tier: CardTier.Niche,
        cost: 1,
        type: "attack",
        description:
          "200% Damage to all enemies +40% Damage Amount for each card Exhausted this turn",
        reasoning:
          "Only good for one-turn burst, needs to exhaust ~8+ cards to be worth it, damage resets next round",
      },
      {
        id: "Brand of Annihilation V",
        tier: CardTier.Bad,
        cost: 2,
        type: "attack",
        description:
          "300% Damage to all enemies If any card was Exhausted this turn, 3 Agony to all enemies",
        reasoning: "Just restart the run",
      },
    ],
    divineEpiphanies: [
      {
        name: "2 Vulnerable to the target",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "Increases Damage by 30%",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "black-hole",
    name: "Black Hole",
    image: "/images/character/kayron/unique2.png",
    type: "attack",
    cost: 2,
    rarity: CardRarities.Rare,
    description: "240% Damage +40% Damage Amount for each Exhausted Futility",
    epiphanies: [
      {
        id: "Black Hole I",
        tier: CardTier.B,
        cost: 2,
        type: "attack",
        description: "360% Damage Activate 2 Futility Card(s) from hand",
        reasoning:
          "Saves AP to dump Futility but loses too much long-term scaling",
      },
      {
        id: "Black Hole II",
        tier: CardTier.SPlus,
        cost: 2,
        type: "attack",
        description:
          "360% Damage +60% Damage Amount for each Exhausted Futility",
        reasoning: "Insane scaling, massive burst damage",
      },
      {
        id: "Black Hole III",
        tier: CardTier.Bad,
        cost: 2,
        type: "attack",
        description:
          "60% Damage to a random enemy Add 1 Hit for each Exhausted Futility (max 5 times)",
        reasoning: "No reason to pick this",
      },
      {
        id: "Black Hole IV",
        tier: CardTier.A,
        cost: 2,
        type: "attack",
        description:
          "300% Damage Add 1 Hit for each 5 Exhausted Futility (max 2 times)",
        reasoning:
          "Only pulls ahead at very specific exhaust counts, sacrifices scaling for short burst",
      },
      {
        id: "Black Hole V",
        tier: CardTier.A,
        cost: 1,
        type: "upgrade",
        description:
          "When Futility is Exhausted, 100% Fixed Damage to a random enemy",
        reasoning:
          "Decent fallback when Black Hole II is not available, fixed damage is limited, needs full Futility conversion every turn to shine",
      },
    ],
    divineEpiphanies: [
      {
        name: "Increases Damage by 30%",
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
    id: "oath-of-vanity",
    name: "Oath of Vanity",
    image: "/images/character/kayron/unique3.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Legendary,
    description:
      "[ Unique ] When Futility is created, change those cards into a 1-cost Attack Card with 80% Damage and Heal effects",
    epiphanies: [
      {
        id: "Oath of Vanity I",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] When Futility is created, change those cards into a 1-cost Attack Card with 120% Damage and Heal effects",
        reasoning:
          "Great damage + sustain, very strong for long extended fights",
      },
      {
        id: "Oath of Vanity II",
        tier: CardTier.SPlus,
        cost: 0,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] When Futility is created, change those cards into a 1-cost Attack Card with 80% Damage and Heal effects",
        reasoning: "Mainly used for initiation without Manifest Ego 3",
      },
      {
        id: "Oath of Vanity III",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] When creating Futility, it changes to an Attack Card with 180% Damage, Cost 1",
        reasoning: "Very high damage output, pays off massively in long fights",
      },
      {
        id: "Oath of Vanity IV",
        tier: CardTier.SPlus,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust / Retain ] Exhaust all Futility Status Ailments, and Curse Cards in hand Draw for each",
        reasoning:
          "Gives full deck access early, ramps every card for first turns, excellent for burst playstyle",
      },
      {
        id: "Oath of Vanity V",
        tier: CardTier.Bad,
        cost: 0,
        type: "upgrade",
        description:
          "When 3 Futility Cards are Exhausted, 2 Agony to all enemies",
        reasoning: "Just restart the run",
      },
    ],
    divineEpiphanies: [
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
        description: "",
      },
      {
        name: "1 AP",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "Draw 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "Echoes of True Abyss",
    name: "Echoes of True Abyss",
    image: "/images/character/kayron/unique4.png",
    type: "attack",
    cost: 2,
    rarity: CardRarities.Unique,
    description:
      "240% Damage Create 3 Futility Cards +40% Damage Amount for each",
    epiphanies: [],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "Standard Build",
    description: "",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Echo of Futility V",
      "Echo of Futility V",
      "Echo of Futility V",
      "Echo of Futility V",
      "Brand of Annihilation III",
      "Black Hole II",
      "Oath of Vanity III",
      "Echoes of True Abyss",
    ],
  },
  {
    id: "deck-2",
    name: "Burst Build",
    description:
      "If you're running with Rei and multiple Snack Time III cards, you can trade one Oath of Vanity IV for one more Brand of Annihilation III",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Echo of Futility I",
      "Brand of Annihilation III",
      "Brand of Annihilation III",
      "Brand of Annihilation III",
      "Black Hole II",
      "Oath of Vanity IV",
      "Oath of Vanity IV",
      "Echoes of True Abyss",
    ],
  },
  {
    id: "deck-3",
    name: "One Turn Kill",
    description:
      "If you're running with Rei and multiple Snack Time III cards, you can trade one Oath of Vanity IV for one more Brand of Annihilation IV",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Echo of Futility I",
      "Brand of Annihilation IV",
      "Brand of Annihilation IV",
      "Brand of Annihilation IV",
      "Black Hole II",
      "Oath of Vanity IV",
      "Oath of Vanity IV",
      "Echoes of True Abyss",
    ],
  },
];

const gearsData = {
  weapons: [
    "Mutant Predator Spike",
    "Foggy Crystal Ball",
    "Intellect of Discord",
    "Unexploded Plasma Bomb",
    "Obsidian Sword",
    "Tentacles of Chaos",
    "RFS-17",
  ],
  armors: [
    "Wings of Freedom",
    "Fragment of the Empty Void",
    "Rocket-Adorned Cape",
    "Psionic Combat Suit",
  ],
  accessories: [
    "Nerve Hacking Module",
    "Emblem of an Exceptional Entity",
    "Dimensional Cube",
    "Eye of Gluttony",
    "Amorphous Cube",
    "Flower of Dead Souls",
  ],
};

const recommendedSources = ["Laboratory 0", "City of Mist"];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "offering-of-the-void",
      description:
        "Generally higher raw damage than 2/2/2. Black Wing + Executioner's 2/2 becomes viable at high card multiplier scaling",
    },
    {
      id: "executioners-tool",
      description: "Standard Critical Damage build with high crit scaling",
    },
  ],
  alternative: [
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
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "bria",
    description: `[ Best in Slot / Signature ]
    Provides massive multiplicative damage scaling and strong utility
    Her Ego Skill grants 25% additive card damage on first Futility generation, plus 10% multiplicative damage per card generated (up to 3x)
    Essential for maximizing Kayron's damage in extended fights`,
    tier: CardTier.SPlus,
  },
  {
    id: "eloise",
    description:
      "Strong multiplicative damage boost: 20% passive card damage plus 24% multiplicative for 1 turn after exhausting cards\nExcellent synergy with Kayron's Exhaust-heavy playstyle",
    tier: CardTier.S,
  },
  {
    id: "zatera",
    description:
      "Solid F2P option providing 16% ATK — a rare stat that scales well\nHowever, Kayron prefers multiplicative card damage much more",
    tier: CardTier.A,
  },
  {
    id: "itsuku",
    description: "",
    tier: CardTier.A,
  },
  {
    id: "anteia",
    description: "Nyx would be a better choice",
    tier: CardTier.Bad,
  },
];

export const kayronData: CharacterData = {
  attribute: Attributes.Void,
  job: CharacterClass.Psionic,
  role: CharacterRole.MainDPS,
  rarity: 5,

  overview: `
Kayron's expensive cards generate or consume Futility — a 1-cost Status Ailment that exhausts itself with no base effect
His Oath of Vanity Epiphanies define the entire Futility playstyle
Upgrade Futility via Oath of Vanity to enable the kit, then reduce card costs through Epiphanies, Exhausts, and team synergy to maximize damage output
  `.trim(),

  strengths: [
    "Strong already at Manifest Ego 1",
    "Very versatile DPS",
    "High single target and AoE damage",
    "Can solo DPS/sustain in Chaos",
    "Fast Basin/Simulation clears",
  ],

  weaknesses: [
    "Requires Manifest Ego 1",
    "Very reliant on Bria for QoL",
    "Extremely AP-hungry",
    "Hard to play optimally",
  ],

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
      name: "Recluser1",
      link: "https://www.youtube.com/@Recluser1",
      contribution: "Helped with testing and feedback",
    },
    {
      name: "MISERY CZN",
      link: "https://www.youtube.com/@MISERY_CZN",
      contribution: "Helped with testing and feedback",
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
