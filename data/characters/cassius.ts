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
    id: "Cards",
    name: "Cards",
    image: "/images/character/cassius/starter1.png",
    cost: 0,
    type: "type",
    rarity: CardRarities.Common,
    description: "",
  },
  {
    id: "Wild Card",
    name: "Wild Card",
    image: "/images/character/cassius/starter2.png",
    cost: 0,
    type: "type",
    rarity: CardRarities.Common,
    description: "",
  },
  {
    id: "Mana Field",
    name: "Mana Field",
    image: "/images/character/cassius/starter3.png",
    cost: 0,
    type: "type",
    rarity: CardRarities.Common,
    description: "",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "pop_eyed_popper",
    name: "Pop Eyed Popper",
    image: "/images/character/cassius/starter4.png",
    type: "upgrade",
    cost: 0,
    rarity: CardRarities.Rare,
    description: "Start a random 1 out of 4 Quests",
    epiphanies: [
      {
        id: "Pop Eyed Popper I",
        tier: CardTier.WIP,
        cost: 0,
        type: "upgrade",
        description: "[ Initiation ] Start a random 1 out of 4 Quests",
        reasoning: "",
      },
      {
        id: "Pop Eyed Popper II",
        tier: CardTier.WIP,
        cost: 0,
        type: "upgrade",
        description: "Create a Quest Card, remove Ephemeral, apply Retain",
        reasoning: "",
      },
      {
        id: "Pop Eyed Popper III",
        tier: CardTier.WIP,
        cost: 0,
        type: "upgrade",
        description:
          "Start a random 1 out of 4 Quests. When the Quest is completed, create a stronger Quest Card",
        reasoning: "",
      },
      {
        id: "Pop Eyed Popper IV",
        tier: CardTier.WIP,
        cost: 0,
        type: "upgrade",
        description: "Choose 1 out of 4 Quests to start",
        reasoning: "",
      },
      {
        id: "Pop Eyed Popper V",
        tier: CardTier.WIP,
        cost: 0,
        type: "upgrade",
        description:
          "Start a random 1 out of 4 Quests. When the Quest is completed, replace it with another random Quest",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "1 AP",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
    ],
  },
  {
    id: "devil_dice",
    name: "Devil Dice",
    image: "/images/character/cassius/unique1.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "160% Damage. Draw 1",
    epiphanies: [
      {
        id: "Devil Dice I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description: "200% Damage. Create 1 Quest Card(s)",
        reasoning: "",
      },
      {
        id: "Devil Dice II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description: "[ Retrieve 3 ] 160% Damage. Draw 1",
        reasoning: "",
      },
      {
        id: "Devil Dice III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description: "160% Damage to all enemies. Draw for each target hit",
        reasoning: "",
      },
      {
        id: "Devil Dice IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description: "240% Damage. Draw 2. Discard 2",
        reasoning: "",
      },
      {
        id: "Devil Dice V",
        tier: CardTier.WIP,
        cost: 0,
        type: "attack",
        description:
          "Draw 1. 80% Damage to all enemies equal to that card's Cost",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "2 Vulnerable to the target",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "shuffle",
    name: "Shuffle",
    image: "/images/character/cassius/unique2.png",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "[ Exhaust ] Discard all cards in hand. Draw for each",
    epiphanies: [
      {
        id: "Shuffle I",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description: "[ Exhaust 2 ] Discard all cards in hand. Draw for each",
        reasoning: "",
      },
      {
        id: "Shuffle II",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "[ Exhaust ] Discard any number of cards from hand. Draw same number of cards",
        reasoning: "",
      },
      {
        id: "Shuffle III",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "[ Exhaust ] Move all cards from hand and Discard to Draw Pile, then Draw 5",
        reasoning: "",
      },
      {
        id: "Shuffle IV",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust ] Select up to 5 cards in Discard Pile, move to top of Draw Pile",
        reasoning: "",
      },
      {
        id: "Shuffle V",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "Draw 3. If the total Cost of those cards is 4 or less, Discard them all",
        reasoning: "",
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
        name: "1 AP",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
      {
        name: "Draw 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
    ],
  },
  {
    id: "dice_trick",
    name: "Dice Trick",
    image: "/images/character/cassius/unique3.png",
    type: "attack",
    cost: 2,
    rarity: CardRarities.Rare,
    description: "240% Damage. Decrease Cost by the number of completed Quests",
    epiphanies: [
      {
        id: "Dice Trick I",
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description:
          "360% Damage. Decrease Cost by the number of completed Quests",
        reasoning: "",
      },
      {
        id: "Dice Trick II",
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description:
          "300% Damage to all enemies. Decrease Cost by the number of completed Quests",
        reasoning: "",
      },
      {
        id: "Dice Trick III",
        tier: CardTier.WIP,
        cost: 0,
        type: "attack",
        description: "80% Damage. +80% Damage Amount for each completed Quest",
        reasoning: "",
      },
      {
        id: "Dice Trick IV",
        tier: CardTier.WIP,
        cost: 2,
        type: "upgrade",
        description:
          "When using Quest Card, Heal 100%. 100 Fixed Damage to a random enemy",
        reasoning: "",
      },
      {
        id: "Dice Trick V",
        tier: CardTier.WIP,
        cost: 2,
        type: "upgrade",
        description: "When Quest is completed, create 1 Quest Card(s)",
        reasoning: "",
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
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
    ],
  },
  {
    id: "Joker",
    name: "Joker",
    image: "/images/character/cassius/unique4.png",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Unique,
    description: "Choose 1 card(s) from Draw Pile to Draw",
    epiphanies: [],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "Great Rift",
    shortDescription: "Seasonal Save Data",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [],
  },
  {
    id: "deck-2",
    name: "Full Quest",
    shortDescription: "",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Pop Eyed Popper IV",
      "Devil Dice V",
      "Shuffle II",
      "Dice Trick V",
      "Dice Trick V",
      "Dice Trick V",
      "Dice Trick V",
      "Joker",
    ],
  },
];

const gearsData = {
  weapons: [
    "Tentacles of Chaos",
    "Intellect of Discord",
    "The Flower of Life",
    "The Fading Flower of Life",
    "Foggy Crystal Ball",
    "Mutant Predator Spike",
    "W-52 Dopamine Injector",
    "Void of the Devourer",
    "Dream of the Devoured",
    "RFS-17",
    "Dagger That Tricked the Shadow",
    "Obsidian Sword",
    "Unexploded Plasma Bomb",
  ],
  armors: [
    "Fairy King's Crown",
    "Fragment of the Empty Void",
    "Wings of Freedom",
    "Mask of Flames",
    // Utility
    "Rocket-Adorned Cape",
    "Psionic Combat Suit",
    "Brainwave-Blocking Helmet",
  ],
  accessories: [
    "Clover of the Forest",
    "Verdant Shackles",
    "Nerve Hacking Module",
    "Emblem of an Exceptional Entity",
    "Dimensional Cube",
    "Amorphous Cube",
    "The Golden Rule",
    "Flower of Dead Souls",
    // Utility
    "Sphere of Randomness",
    "Superconductive Protein",
    "Multifaceted Parallel Universe Nexus",
    "Revelations of Futility",
    "Source of the Forbidden",
  ],
};

const recommendedSources = [
  "Laboratory 0",
  "Swamp of Judgment",
  "City of Mist",
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
    description: ``,
    tier: CardTier.SPlus,
  },
  {
    id: "yuri",
    description: ``,
    tier: CardTier.S,
  },
  {
    id: "arwen",
    description: ``,
    tier: CardTier.A,
  },
  {
    id: "alyssa",
    description: ``,
    tier: CardTier.A,
  },
  {
    id: "yvonne",
    description: ``,
    tier: CardTier.C,
  },
  {
    id: "rosaria",
    description: ``,
    tier: CardTier.Niche,
  },
];

export const cassiusData: CharacterData = {
  attribute: Attributes.Instinct,
  job: CharacterClass.Controller,
  role: CharacterRole.Support,
  rarity: 4,

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
