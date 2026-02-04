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
    id: "Machine Gun",
    name: "Machine Gun",
    image: "/images/character/lucas/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "[Bullet] 100% Damage",
  },
  {
    id: "Machine Gun",
    name: "Machine Gun",
    image: "/images/character/lucas/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "[Bullet] 100% Damage",
  },
  {
    id: "Shielding Incendiary Bomb",
    name: "Shielding Incendiary Bomb",
    image: "/images/character/lucas/starter3.png",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "Shield 100%",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "Extended Magazine",
    name: "Extended Magazine",
    image: "/images/character/lucas/starter4.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "[Lead] At the start of the turn, create 1 Launcher Bullet.",
    epiphanies: [
      {
        id: "Extended Magazine I",
        tier: CardTier.A,
        cost: 0,
        type: "upgrade",
        description:
          "[Initiation] At the start of the turn, create 1 Launcher Bullet.",
        reasoning:
          "Increased consistency, and replaced the Lead tag for Initiation. Less reliance on draw and Lead proc to get into play easily. A very safe, and comfortable pick.",
      },
      {
        id: "Extended Magazine II",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[Lead] At the start of the turn, create 2 Launcher Bullets",
        reasoning:
          "While it has the same dependancies on draw and Lead proc for setup, 2 launcher bullets create a ton of extra value for Lucas. This value is pushed even further with RPG-7 and higher Ego Manifests, but can conflict with Retain cards.",
      },
      {
        id: "Extended Magazine III",
        tier: CardTier.B,
        cost: 1,
        type: "upgrade",
        description:
          "At the start of the turn, create 1 Launcher Bullet. With a 50% chance to decrease Cost of those cards by 1 for 1 turn.",
        reasoning:
          "OK at below Ego Manifest 6, but is made redundant if Lucas is maxxed out. Can have some niche interactions with certain Flame Thrower epiphanies.",
      },
      {
        id: "Extended Magazine IV",
        tier: CardTier.B,
        cost: 0,
        type: "upgrade",
        description:
          "At the start of the turn, create 1 Launcher Bullet. 50% chance to Draw 1.",
        reasoning:
          "Solid, and a personal favorite, but does have reliance on RNG for value. Plays very well into Lucas’s supportive role as a Draw unit.",
      },
      {
        id: "Extended Magazine V",
        tier: CardTier.Bad,
        cost: 1,
        type: "skill",
        description: "Create 5 Launcher Bullet.",
        reasoning:
          "Extended Magazine is Lucas’s only consistent form of Launcher Bullet generation. Because Launcher bullets intrinsically cost 1 while still being ephemeral, the cashout value is low despite sounding like an OK burst card like Luke’s version of this.",
      },
    ],
    divineEpiphanies: [
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "Simple damage stick, which is nice to have team-wide.",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "Great for reducing reliance on Lead for AP value.",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
    ],
  },
  {
    id: "S.S.S",
    name: "S.S.S",
    image: "/images/character/lucas/unique1.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "100% Damage. For 1 turn, +40% Bullet card Damage.",
    epiphanies: [
      {
        id: "S.S.S I",
        tier: CardTier.B,
        cost: 1,
        type: "attack",
        description: "200% Damage. For 1 turn, +40% Bullet card Damage.",
        reasoning:
          "Much higher front-loaded damage on top of buffing Bullet cards.",
      },
      {
        id: "S.S.S II",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description: "For 2 turns, +40% Bullet card Damage.",
        reasoning:
          "A solid choice for multiple bullet combatants, extending value across multiple turns instead of relying on a good hand to maximize value.",
      },
      {
        id: "S.S.S III",
        tier: CardTier.C,
        cost: 1,
        type: "attack",
        description: "150% Damage. +60% Damage per Bullet card in hand.",
        reasoning:
          "Setup card that does much better with another bullet combatant, but splits its value due to removing the Bullet damage increase.",
      },
      {
        id: "S.S.S IV",
        tier: CardTier.A,
        cost: 1,
        type: "attack",
        description: "150% Damage. +120% Damage of the next Bullet card.",
        reasoning:
          "High cashout on a single bullet. Good when Lucas is alone, which enhances the single target and AOE potential of a Launcher.",
      },
      {
        id: "S.S.S V",
        tier: CardTier.Niche,
        cost: 1,
        type: "attack",
        description:
          "100% Damage. For 1 turn, when using Bullet cards, 50% Fixed Damage to a random enemy.",
        reasoning:
          "A weaker, 1-turn version of RPG-7 placed into an Attack. A bit redundant on its role, and feels like a card that mainly works when Luke is on the team.",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1.",
        reasoning: "Free value!",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "2 Vulnerable.",
        reasoning: "Makes incoming attacks much stronger.",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
      {
        name: "Apply 4 Agony to the target.",
        reasoning: "Enables Cursed Corpse for longer.",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "Flame Thrower",
    name: "Flame Thrower",
    image: "/images/character/lucas/unique2.png",
    type: "attack",
    cost: 2,
    rarity: CardRarities.Rare,
    description: "180% Damage to all enemies. Draw 1. Discard 1.",
    epiphanies: [
      {
        id: "Flame Thrower I",
        tier: CardTier.B,
        cost: 2,
        type: "attack",
        description:
          "180% Damage to all enemies. Draw 1. Discard 2. Create Launcher Bullet equal to the number discarded.",
        reasoning:
          "More launcher generation, which may not be able to be played due to Flame Thrower’s higher cost, but can pay out extra value to RPG-7 for free. An extra discard can also help manage Statuses/Curses.",
      },
      {
        id: "Flame Thrower II",
        tier: CardTier.A,
        cost: 2,
        type: "attack",
        description: "315% Damage to all enemies. Draw 1. Discard 1.",
        reasoning:
          "Incredibly high damage for 2, while keeping draw/discard value the same.",
      },
      {
        id: "Flame Thrower III",
        tier: CardTier.B,
        cost: 2,
        type: "attack",
        description:
          "270% Damage to all enemies. If Critical Hit, 150% damagDamage to all enemies.",
        reasoning:
          "Crit reliant and removes Card cycling. Niche option, but can play better into Morale scaling.",
      },
      {
        id: "Flame Thrower IV",
        tier: CardTier.S,
        cost: 2,
        type: "attack",
        description:
          "Exhaust up to 2 Bullet(s) in hand. 270% Damage to all enemies. Increase Damage Amount by 50% for each Exhausted card.",
        reasoning:
          "Incredibly high damage output at the cost of losing played value of Bullet cards, but plays incredibly well if you can’t afford them anyways. Pays into RPG-7, and this also works with Machine Gun for deck thinning!",
      },
      {
        id: "Flame Thrower V",
        tier: CardTier.WIP,
        cost: 0,
        type: "type",
        description: "",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning:
          "Immensely high AP to damage value. Makes a fantastic duplication target.",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "Flashbang",
    name: "Flashbang",
    image: "/images/character/lucas/unique3.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Legendary,
    description:
      "120% Damage to all enemies. 2 Weaken. If the target has a Shield, +50% Damage.",
    epiphanies: [
      {
        id: "Flashbang I",
        tier: CardTier.B,
        cost: 1,
        type: "attack",
        description:
          "180% Damage to all enemies. 2 Weaken. If the target has a Shield, +75% Damage.",
        reasoning:
          "A safe epiphany for more damage, and keeps Weaken for good damage control while increasing Shield damage.",
      },
      {
        id: "Flashbang II",
        tier: CardTier.Niche,
        cost: 1,
        type: "skill",
        description:
          "For 1 turn, when hitting a target with Shield, +50% Damage.",
        reasoning:
          "Not enough shield enemies to warrant using this often, and even then, loses value the moment Shield is removed.",
      },
      {
        id: "Flashbang III",
        tier: CardTier.A,
        cost: 1,
        type: "attack",
        description: "[Retain] 180% Damage to all enemies. 2 Passion Weakness.",
        reasoning:
          "This epiphany allows for you to hold for the right opportunity to use it, letting you cashout with other cards for damage due to Passion Weakness.",
      },
      {
        id: "Flashbang IV",
        tier: CardTier.A,
        cost: 0,
        type: "attack",
        description:
          "180% Damage to all enemies. 2 Mark. If the target has Shield, +50% Damage.",
        reasoning:
          "Offensive-oriented version of Flashbang I, replacing Weaken for Mark instead.",
      },
      {
        id: "Flashbang V",
        tier: CardTier.Niche,
        cost: 1,
        type: "upgrade",
        description:
          "When hitting a target that has Shield, increase Damage Amount by 30%.",
        reasoning:
          "Very similar use case to Flashbang II, acting as a stronger version of Tactical Action.",
      },
    ],
    divineEpiphanies: [
      {
        name: "2 Vulnerable",
        reasoning: "Increases status effect application within 1 card.",
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
        description: "",
      },
      {
        name: "Apply 4 Agony to the target.",
        reasoning:
          "Similar use case to S.S.S, applying Agony across all enemies for Cursed Corpse activation.",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
    ],
  },
  {
    id: "R.P.G-7",
    name: "R.P.G-7",
    image: "/images/character/lucas/unique4.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Unique,
    description: "When Bullet cards are Exhausted, 40% Fixed Damage.",
    epiphanies: [],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "Launchers, Everywhere",
    shortDescription:
      "High Launcher Bullet generation and payout, supplementing card draw to Portrait of Fury.",
    description: `Put R.P.G-7 and Extended Magazine into play, while supplementing extra bullet generation with Flame Thrower. If card draw is needed, fill hands with bullets and play Portrait of Fury for highest draw output.`,
    faintMemoryNote: "120 Faint Memory Cost",
    cards: [
      "Extended Magazine II",
      "S.S.S II",
      "Flashbang IV",
      "R.P.G-7",
      "R.P.G-7",
    ],
  },
];

const gearsData = {
  weapons: [
    "Chimeranite",
    "Dark Grip's Claws",
    "Formica's Perfect Spear",
    "Intellect of Discord",
    "Shell Bug Horn",
    "Tentacle of Chaos",
    "Void of the Devourer",
    "Esophagus of Madness",
    "Flame of Purification",
    "Mountain of Corpses",
    "Mutant Predator Spike",
    "Obsidian Sword",
    "Replica Core",
    "Trumpet of Revelation",
    "W-52 Dopamine Injector",
  ],
  armors: [
    "Fairy King's Crown",
    "Fragment of the Empty Void",
    "Mask of Flames",
    "Regenerative Ribcage",
    "Ring of the Seraphim",
    "Rocket-Adorned Cape",
    "Wings of Freedom",
  ],
  accessories: [
    "Amorphus Cube",
    "Crimson Bloodstone",
    "Emblem of an Exceptional Entity",
    "Eye of Gluttony",
    "Sphere of Randomness",
    "The Golden Rule",
    "The Famished One's Belly",
    "Verdant Shackles",
  ],
};

const recommendedSources = [""];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "executioners-tool",
      description: "Strong stat stick.",
    },
    {
      id: "black-wing",
      description: "Another pivotal stat stick.",
    },
    {
      id: "cursed-corpse",
      description: "Plays incredibly well with Flame Shot.",
    },
  ],
  alternative: [
    {
      id: "spark-of-passion",
      description:
        "Not great, but if you're farming Corpses & Tools it will be an OK substitute.",
    },
    {
      id: "executioners-tool",
      description: "Probably the best to choose if you're not using 2/2/2",
    },
  ],
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "yuri",
    description: "",
    tier: CardTier.SPlus,
  },
  {
    id: "serithea",
    description: "",
    tier: CardTier.A,
  },
  {
    id: "carroty",
    description: "",
    tier: CardTier.A,
  },
  {
    id: "akad",
    description: "",
    tier: CardTier.B,
  },
];

export const lucas: CharacterData = {
  attribute: Attributes.Passion,
  job: CharacterClass.Hunter,
  role: CharacterRole.SubDPS,
  rarity: 4,

  overview: `
  dsadsa
  dasdsa
  dsa
  `.trim(),

  strengths: [
    "Solid All-Rounder in damage and support",
    "Incredibly versatile Ballistas provide frequent Status Ailments",
    "Synergizes and provides high value when paired with Bullet combatants",
    "Potent draw support made even stronger with Ego Skill",
  ],

  weaknesses: [
    "Can be AP hungry between Flame Thrower, S.S.S, and Launcher bullets",
    "Performs way better with the presence of an additional Bullet combatant",
    "Feels most complete at Ego Manifest 6",
    "Can feel overshadowed in card draw + DPS by Veronica",
    "Male 4*",
  ],

  externalResources: [
    {
      label: "CZN Official Discord",
      url: "https://discord.gg/chaoszeronightmare",
      note: "Guide Discussion",
    },
  ],

  credits: [
    {
      name: "TunnelVision / Awesome3475",
      contribution: "Guide Author and Data",
    },
    {
      name: "Lucie",
      contribution: "Validation",
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
      ],
    },
    {
      priority: 2,
      relation: "or",
      stats: [MemoryFragmentSubstats.AttackFlat, MemoryFragmentSubstats.Attack],
    },
    {
      priority: 3,
      relation: "equal",
      stats: [MemoryFragmentSubstats.ExtraDamage],
    },
  ],
  memoryFragmentSubstatsNote: "",
  partnersGuide: partnersGuide,
};
