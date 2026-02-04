// data/characters/veronica.ts
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
    id: "Bombardment Prep",
    name: "Bombardment Prep",
    image: "/images/character/veronica/unique4.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Unique,
    description: "[Unique] Increase max stack of Reload by 1   1 Reload",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "firing-preparation",
    name: "Firing Preparation",
    image: "/images/character/veronica/starter4.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Unique / Initiation ] Create 1 Ballista card(s). At the start of the turn, create 1 Ballista card(s)",
    epiphanies: [
      {
        id: "Firing Preparation I",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Ballista card(s). At the start of the turn, create 1 Ballista card(s), with a 50% chance to additionally create 1 more",
        reasoning:
          "Highest raw damage potential but suffers from heavy RNG, making it quite inconsistent",
      },
      {
        id: "Firing Preparation II",
        tier: CardTier.Niche,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Piercing Ballista. At the start of the turn, create 1 Piercing Ballista card(s)",
        reasoning:
          "Lowest damage among Ballista Epiphanies against unshielded enemies, but very strong vs shielded targets like Judas thanks to piercing",
      },
      {
        id: "Firing Preparation III",
        tier: CardTier.A,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Enhanced Ballista. At the start of the turn, create 1 Enhanced Ballista card(s)",
        reasoning:
          "Lower damage ceiling than others, but the built-in 30% Critical Chance makes output much more consistent",
      },
      {
        id: "Firing Preparation IV",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Giant Ballista. At the start of the turn, create 1 Giant Ballista card(s)",
        reasoning:
          "Best overall choice — lower single-target but insane AoE, greatly reduces targeting RNG even without E2, always safe pick when unsure",
      },
      {
        id: "Firing Preparation V",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Shelling Ballista. At the start of the turn, create 1 Shelling Ballista card(s)",
        reasoning:
          "Makes Kowalski and Morale additive buffs much stronger, becomes very consistent with her E2",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
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
  {
    id: "repose",
    name: "Repose",
    image: "/images/character/veronica/unique1.png",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "120% Shield   Draw 2 card(s) from other combatant",
    epiphanies: [
      {
        id: "Repose I",
        tier: CardTier.SPlus,
        cost: 0,
        type: "skill",
        description: "Draw 2 other Combatant's card(s)",
        reasoning:
          "Arguably the best Repose Epiphany — gets even stronger with Divine upgrades that add Draw 1 or 1 AP",
      },
      {
        id: "Repose II",
        tier: CardTier.A,
        cost: 1,
        type: "skill",
        description:
          "180% Shield   Draw 2 other Combatant's card(s)   If that card is a Skill Card, 1 Reload",
        reasoning:
          "Weaker version of Repose III — still has value since you draw and might get Reload, but overall impact is lower than other options",
      },
      {
        id: "Repose III",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description:
          "180% Shield   Draw 2 other Combatant's card(s)   Decrease Cost of 1 of those cards by 1 for 1 turn",
        reasoning:
          "Slightly less consistent (can break some builds), but becomes potentially the best with 0-cost Divine upgrade",
      },
      {
        id: "Repose IV",
        tier: CardTier.C,
        cost: 1,
        type: "skill",
        description:
          "180% Shield   1 Reload equal to number of other Combatant's skill card(s) in hand",
        reasoning:
          "Reload is already covered well by Pendant of Resolution — no real reason to pick this",
      },
      {
        id: "Repose V",
        tier: CardTier.Bad,
        cost: 1,
        type: "skill",
        description:
          "180% Shield   Discard all other Combatant's card(s) in hand   1 Reload equal to that number",
        reasoning:
          "Hand discard is way too punishing — Reload payoff doesn't justify it",
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
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
        description: "",
      },
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "pendant-of-resolution",
    name: "Pendant of Resolution",
    image: "/images/character/veronica/unique2.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "When another combatant uses Skill Card, 1 Reload",
    epiphanies: [
      {
        id: "Pendant of Resolution I",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description: "When using a Skill Card, 1 Reload",
        reasoning: "Best overall — straight upgrade from base card",
      },
      {
        id: "Pendant of Resolution II",
        tier: CardTier.Niche,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] When another combatant uses Skill Card, 1 Reload   If 3 are used, at the start of the next turn, create 1 Micro Ballista card(s)",
        reasoning:
          "Gives some Reload from allies, but Micro Ballista has poor scaling — not strong compared to other Epiphanies",
      },
      {
        id: "Pendant of Resolution III",
        tier: CardTier.A,
        cost: 1,
        type: "skill",
        description: "[Exhaust 2] For 1 turn(s), when a card is used, 1 Reload",
        reasoning: "Consistent Reload generation but not particularly powerful",
      },
      {
        id: "Pendant of Resolution IV",
        tier: CardTier.A,
        cost: 1,
        type: "upgrade",
        description:
          "When another combatant uses Skill Card, 1 Reload   50% Chance to gain additional 1 Reload",
        reasoning:
          "RNG-dependent but otherwise a solid upgrade that can give nice extra Reload",
      },
      {
        id: "Pendant of Resolution V",
        tier: CardTier.Niche,
        cost: 1,
        type: "skill",
        description: "[ Retain / Retrieve 4 ] Reload 2",
        reasoning:
          "Best Pendant if paired with -1 cost Divine; otherwise a bit expensive. Extremely strong for Mei Lin thanks to 8 Passion stacks",
      },
    ],
    divineEpiphanies: [
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "sir-kowalski",
    name: "Sir Kowalski",
    image: "/images/character/veronica/unique3.png",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Legendary,
    description:
      "Choose 1 Ballista card in hand, +100% Damage amount until activated   Draw 1",
    epiphanies: [
      {
        id: "Sir Kowalski I",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 Ballista card in hand, +150% Damage amount until activated. Draw 2",
        reasoning:
          "More draw is always great and it buffs Ballista with strong additive damage",
      },
      {
        id: "Sir Kowalski II",
        tier: CardTier.C,
        cost: 1,
        type: "skill",
        description:
          "Draw 1   Increase Damage Amount of Ballista by 30% for 1 turn",
        reasoning:
          "30% multiplicative Ballista boost is less valuable since Veronica already has tons of multi from Reload",
      },
      {
        id: "Sir Kowalski III",
        tier: CardTier.SPlus,
        cost: 1,
        type: "skill",
        description: "Draw 2   When drawing a Skill card, create 1 Ballista",
        reasoning:
          "Basically a Repose card that can sometimes generate extra Ballista",
      },
      {
        id: "Sir Kowalski IV",
        tier: CardTier.Niche,
        cost: 1,
        type: "skill",
        description:
          "+250% Damage Amount of 1 random Ballista card in hand, Exhaust after activation",
        reasoning:
          "Highest single Ballista damage boost, triggers mid-turn, counts as normal attack — good for activating Passion Weakness",
      },
      {
        id: "Sir Kowalski V",
        tier: CardTier.Niche,
        cost: 1,
        type: "skill",
        description:
          "Select and Exhaust 1 Ballista in hand   Create 2 Ballista, decrease Damage Amount of those cards by 25% until activated",
        reasoning:
          "Questionable normally, but strong synergy with Pendant of Resolution II — trade Micro Ballista for 2 stronger versions",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "Draw 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
      {
        name: "1 AP",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "Draw Support",
    shortDescription: "General Support",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Firing Preparation IV",
      "Repose I",
      "Repose I",
      "Repose I",
      "Repose I",
      "Pendant of Resolution I",
      "Sir Kowalski III",
      "Bombardment Prep",
    ],
  },
  {
    id: "deck-2",
    name: "Passion Stacking",
    shortDescription: "Mei Lin's Support",
    description: `Niche high-draw passion stacker — uses Pendant of Resolution V for insane passion generation.
    Requires a 0-cost Divine Epiphany on Pendant of Resolution V, otherwise it's too expensive.`,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Firing Preparation IV",
      "Repose I",
      "Repose I",
      "Repose I",
      "Pendant of Resolution V",
      "Pendant of Resolution V",
      "Sir Kowalski III",
      "Bombardment Prep",
    ],
  },
  {
    id: "deck-3",
    name: "DPS Build",
    shortDescription: "",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Firing Preparation V",
      "Repose II",
      "Pendant of Resolution I",
      "Sir Kowalski IV",
      "Sir Kowalski IV",
      "Sir Kowalski IV",
      "Sir Kowalski IV",
      "Bombardment Prep",
    ],
  },
  {
    id: "deck-4",
    name: "Ballista Gen",
    shortDescription: "Niche Build",
    description: `Generates normal and micro Ballistas, then trades them for 2 stronger versions with Kowalski V (RNG-dependent).
    Just a fun build!`,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Firing Preparation I",
      "Repose II",
      "Pendant of Resolution II",
      "Sir Kowalski V",
      "Sir Kowalski V",
      "Sir Kowalski V",
      "Sir Kowalski V",
      "Bombardment Prep",
    ],
  },
];

const gearsData = {
  weapons: [
    "Tentacles of Chaos",
    "Intellect of Discord",
    "Foggy Crystal Ball",
    "W-52 Dopamine Injector",
    "The Flower of Life",
    "The Fading Flower of Life",
    "Lepidola's Whip",
    "Violet Butterfly's Whip",
    "Shell Bug Horn",
    "Dagger That Tricked the Shadow",
    "Dull Bone Blade",
    "Singing Sword",
    "Trumpet of Revelation",
    "Second Method",
    "RFS-17",
    "Obsidian Sword",
  ],
  armors: [
    "Fragment of the Empty Void",
    "Rocket-Adorned Cape",
    "Brainwave-Blocking Helmet",
    "Mask of Flames",
    "Fairy King's Crown",
    "Shield of the Watcher",
    "Wings of Freedom",
  ],
  accessories: [
    "Sphere of Randomness",
    "Superconductive Protein",
    "Source of the Forbidden",
    "Pulsating Egg",
    "Verdant Shackles",
    "Clover of the Forest",
    "The Golden Rule",
    "Emblem of an Exceptional Entity",
    "Amorphous Cube",
  ],
};

const recommendedSources = [
  "Laboratory 0",
  "City of Mist",
  "Swamp of Judgment",
  "The Blue Pot",
  "Twin Star's Shadow",
  "The Foretold Ruin",
];

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
      id: "spark-of-passion",
      description:
        "Low impact for Veronica due to her Reload stacks providing massive multiplicative Ballista damage buffs. This set's buff is also multiplicative, so it doesn't stack well.",
    },
    {
      id: "executioners-tool",
      description: "Standard set for critical damage scaling",
    },
  ],
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "marin",
    description: "",
    tier: CardTier.SPlus,
  },
  {
    id: "rosaria",
    description: "",
    tier: CardTier.SPlus,
  },
  {
    id: "solia",
    description: "",
    tier: CardTier.S,
  },
  {
    id: "nakia",
    description: "",
    tier: CardTier.S,
  },
  {
    id: "daisy",
    description: "",
    tier: CardTier.C,
  },
  {
    id: "tina",
    description: "",
    tier: CardTier.Bad,
  },
];

export const veronicaData: CharacterData = {
  attribute: Attributes.Passion,
  job: CharacterClass.Ranger,
  role: CharacterRole.SubDPS,
  rarity: 5,

  overview: `
Veronica is a hybrid DPS/Support character that needs almost no AP after setting up her core upgrades
She deals damage through Ballistas that trigger automatically at end of turn for 0 cost
Her support comes from cheap, high-impact draw and she can spike massively by stacking Reload to amplify Ballista damage
  `.trim(),

  strengths: [
    "Insane card draw support",
    "Passive strong single-target + AoE damage",
    "Can solo DPS in Chaos",
    "Heavy deck thinning",
    "Very easy to play",
  ],

  weaknesses: ["Ballista targeting is quite RNG-dependent without E2"],

  externalResources: [
    {
      label: "CZN Official Discord",
      url: "https://discord.gg/chaoszeronightmare",
      note: "Guide discussion and validation",
    },
    {
      label: "Sproot's Nightmare",
      url: "https://docs.google.com/spreadsheets/d/1-KkQUFrjD_2Un3zMDmypCwZFVF5VmowswqYdLt9MOw8/edit?gid=731845342#gid=731845342",
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
    MemoryFragmentMainStats.PassionDamage,
    MemoryFragmentMainStats.Attack,
  ],
  memoryFragmentSubstatPriorities: [
    {
      priority: 1,
      relation: "equal",
      stats: [
        MemoryFragmentSubstats.CriticalChance,
        MemoryFragmentSubstats.CriticalDamage,
        MemoryFragmentSubstats.ExtraDamage,
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
