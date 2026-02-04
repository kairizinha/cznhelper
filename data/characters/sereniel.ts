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
      "100% damage\n2 Afterglow\nOn Ravage, move from\nGraveyard to hand",
    epiphanies: [
      {
        id: "Homing Laser I",
        tier: CardTier.S,
        cost: 0,
        type: "attack",
        description:
          "150% damage\nOn Ravage, Move to\nhand\nDestroy: Add 1 Hit(s)",
        reasoning:
          "Highest damage Epiphany, extra hit benefits from various buffs, in exchange for no afterglow and hard ravage condition",
      },
      {
        id: "Homing Laser II",
        tier: CardTier.A,
        cost: 0,
        type: "attack",
        description: "150% Damage\n3 Afterglow\nOn Ravage, Move to\nhand",
        reasoning:
          "Just a small upgrade from base card, good backup if you miss other strong Epiphanies, 2-3 afterglow on a laser is more than enough",
      },
      {
        id: "Homing Laser III",
        tier: CardTier.C,
        cost: 1,
        type: "attack",
        description:
          "150% Damage\n2 Afterglow\nCreate 2 Homing Laser L\nin Discard Pile",
        reasoning:
          "Costs 1 AP, doesnt move to hand on ravage and can easily clog your deck",
      },
      {
        id: "Homing Laser IV",
        tier: CardTier.SPlus,
        cost: 0,
        type: "attack",
        description:
          "100% Damage\n1 Afterglow\nOn Ravage or at the start of the turn, Move to\nhand",
        reasoning:
          "Basically equal to 1 draw, guarantees laser every turn to break, makes Sereniel deck really thin and easy to play",
      },
      {
        id: "Homing Laser V",
        tier: CardTier.C,
        cost: 0,
        type: "attack",
        description:
          "150% Damage\n2 Afterglow\nMove all Homing Laser L\nin Graveyard to hand",
        reasoning:
          "Also doesnt move to hand on ravage, too niche and inconsistent",
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
      "120% Damage\n0.5 Tenacity Damage\nIf the target was not\nRavaged, activate 1\nmore time",
    epiphanies: [
      {
        id: "Plasma Missile I",
        tier: CardTier.B,
        cost: 1,
        type: "attack",
        description:
          "180% Damage\n1 Tenacity Damage\nIf the target was not\nRavaged, activate 1\nmore time",
        reasoning:
          "Straight upgrade from base, she doesnt have much trouble ravaging anyone anyway",
      },
      {
        id: "Plasma Missile II",
        tier: CardTier.B,
        cost: 1,
        type: "attack",
        description:
          "180% Damage\n60% Damage Amount\nfor each decreased\nTenacity of the target\n(max 10)",
        reasoning: "Just more damage, nothing special",
      },
      {
        id: "Plasma Missile III",
        tier: CardTier.SPlus,
        cost: 1,
        type: "attack",
        description:
          "120% Damage 2 Instinct Weakness 60% Damage Amount to Homing Laser for 1 turn(s)",
        reasoning:
          "Instinct weakness is really strong, 25% multiplier for 2-turn uptime and easy to ravage anyone, extra 60% damage buff to laser is very valuable when recycling multiple times in a turn",
      },
      {
        id: "Plasma Missile IV",
        tier: CardTier.Bad,
        cost: 1,
        type: "attack",
        description: "120% Damage\nCreate 3 Homing Laser\nL in Draw Pile",
        reasoning: "Clogs your draw pile, makes it harder to draw key cards",
      },
      {
        id: "Plasma Missile V",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] At the end of the turn, 50%\nDamage to a random\nenemy\n+30% Damage Amount for\neach Homing Laser Moved\nto hand for 1 turn(s)",
        reasoning:
          "Solid backup option, upgrade card helps keep deck really thin",
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
    description: "Create 2 Homing Laser\nL",
    epiphanies: [
      {
        id: "Shining Core I",
        tier: CardTier.A,
        cost: 1,
        type: "skill",
        description: "Create 3 Homing Laser\nL",
        reasoning:
          "1 AP and not an upgrade card, not worth picking over the other Epiphanies",
      },
      {
        id: "Shining Core II",
        tier: CardTier.B,
        cost: 1,
        type: "skill",
        description:
          "Create 2 Homing Laser\nL, increase Exhaust of\nthose cards by 2",
        reasoning: "Not worth picking over other Epiphanies",
      },
      {
        id: "Shining Core III",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 2 Homing Laser\nL\nOn Ravage, create\n2 Homing Laser L",
        reasoning:
          "The BIS Epiphany on Shining Core, is an upgrade so thinner deck, generates the most Homing Laser L, sometimes can be hard to exhaust lasers before reshuffle due to hand size making them not move to hand",
      },
      {
        id: "Shining Core IV",
        tier: CardTier.B,
        cost: "X",
        type: "skill",
        description: "Create X+1 Homing\nLaser L\nApply Haste to those\ncards",
        reasoning: "Its X",
      },
      {
        id: "Shining Core V",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "Select and create\n1 Homing Laser with\ntheir own distinct\nEpiphanies",
        reasoning:
          "Backup option if not Shining Core III, easier to manage hand size and avoids clogging, drawback is lower laser generation and makes her ego kinda useless, only pick voluntarily if you have 4 Homing Laser copies unless you know what you're doing",
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
      "120% Damage x 4 to\nrandom enemies\n1 Tenacity Damage for\neach Hit",
    epiphanies: [
      {
        id: "Cobalt Light I",
        tier: CardTier.A,
        cost: 3,
        type: "attack",
        description:
          "180% Damage x 4 to\nrandom enemies\n1 Tenacity Damage for\neach Hit\nRavage: Decrease Cost\nby 1",
        reasoning:
          "Higher base damage than other cobalts, fallback option, becomes cost 0 after several uses but still 3 AP at the beginning",
      },
      {
        id: "Cobalt Light II",
        tier: CardTier.Bad,
        cost: 3,
        type: "attack",
        description:
          "[ Retain ] 120% Damage x 4 to\nrandom enemies\n1 Tenacity Damage for\neach Hit\nRetain: Add 1 Hit until use\n(max 5 times)",
        reasoning:
          "Always avoid picking this, retain makes your hand size smaller and needs 3 AP to remove it from hand",
      },
      {
        id: "Cobalt Light III",
        tier: CardTier.C,
        cost: 2,
        type: "attack",
        description:
          "120% Damage x 4 to\nrandom enemies\nCreate 1 Homing Laser\nL for each target Hit",
        reasoning:
          "Only generates per target hit, making it unreliable and really low damage cobalt",
      },
      {
        id: "Cobalt Light IV",
        tier: CardTier.S,
        cost: 1,
        type: "attack",
        description:
          "120% Damage to\nrandom enemies\nAdd 1 Hit for\neach Homing Laser in\nhand",
        reasoning:
          "Cheap, high hit count, easy to enable big hit numbers with her laser mechanic, drawback is lower tenacity damage",
      },
      {
        id: "Cobalt Light V",
        tier: CardTier.A,
        cost: 3,
        type: "attack",
        description:
          "[ Weakness Attack ] 120% Damage x 4\nRavage: Activate 1\nmore time",
        reasoning:
          "High damage cobalt, still costs 3, weakness attack is whatever because of instinct weakness, solid fallback if you miss the good Epiphanies",
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
    description:
      "150% damage\nActivate 3 Homing Laser in Draw Pile and Graveyard",
    epiphanies: [],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "standard-1",
    name: "Standard 1",
    description:
      "Really thin deck. Can trade 1 Homing Laser copy for another Pale if you can afford the cost, be careful with Shining Core III if you run 4 lasers, can easily clog hand and graveyard",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Homing Laser IV",
      "Homing Laser IV",
      "Homing Laser IV",
      "Homing Laser IV",
      "Plasma Missile III",
      "Cobalt Light IV",
      "Shining Core III",
      "Pale Shooting Star",
    ],
  },
  {
    id: "standard-2",
    name: "Standard 2",
    description:
      "Can trade 1 Homing Laser copy for another Pale Shooting Star if you can afford the cost (prefer Shining Core III if so), Shining Core V for 3 afterglow laser or anything depending on the situation, Shining Core III is still really good",
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Homing Laser I",
      "Homing Laser I",
      "Homing Laser I",
      "Homing Laser I",
      "Plasma Missile III",
      "Cobalt Light IV",
      "Shining Core V",
      "Pale Shooting Star",
    ],
  },
];

const gearsData = {
  weapons: [
    "Intellect of Discord",
    "Singing Sword",
    "Foggy Crystal Ball",
    "Mutant Predator Spike",
    "Tentacles of Chaos",
    "Shell Bug Horn",
    "The Flower of Life",
    "Twin Swords of Great and Lesser Evil",
    "Dagger That Tricked the Shadow",
    "The Fading Flower of Life",
    "RFS-17",
  ],
  armors: [
    "Fairy King's Crown",
    "Wings of Freedom",
    "Fragment of the Empty Void",
  ],
  accessories: [
    "Pulsating Egg",
    "Verdant Shackles",
    "Clover of the Forest",
    "Nerve Hacking Module",
    "Emblem of an Exceptional Entity",
    "Amorphous Cube",
    "Dimensional Cube",
  ],
};

const recommendedSources = [
  "Laboratory 0",
  "Swamp of Judgment",
  "The Foretold Ruin",
  "City of Mist",
  "Twin Star's Shadow",
];

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
    { id: "black-wing", description: "Standard set for raw damage scaling" },
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
    description: `[ Best in Slot / Signature ]
    Provides massive stats for Sereniel
    Extra 25% crit chance makes her almost guarantee crit every hit while her passive also gives good damage buff against ravaged enemies`,
    tier: CardTier.SPlus,
  },
  {
    id: "yuri",
    description:
      "Cheap option, draw 2 is OP, passive provides damage buff and atk% which is also really good",
    tier: CardTier.S,
  },
  {
    id: "serithea",
    description: "Decent stat buff, should have picked Nyx instead",
    tier: CardTier.A,
  },
];

export const serenielData: CharacterData = {
  attribute: Attributes.Instinct,
  job: CharacterClass.Hunter,
  role: CharacterRole.MainDPS,
  rarity: 5,
  // bannerUrl: "",
  // avatarUrl: "",

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
      name: "Lucie",
      contribution: "Guide Author and Data",
    },
  ],

  overview: `
Sereniel is a hyper carry DPS that relies on her tenacity ravage mechanic with Homing Laser as her main damage source
Her playstyle revolves around ravaging to cycle 0-cost Homing Lasers multiple times in a turn, also gives extra AP when ravaging and makes her deck really cheap
  `.trim(),

  strengths: [
    "Low risk high reward",
    "Easy to play",
    "Top-tier single target damage",
    "AP friendly",
    "Really thin deck with the right Epiphany",
  ],

  weaknesses: [
    "Relies on mobs with tenacity bar",
    "Is a seasonal limited combatant",
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
