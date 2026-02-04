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

// first 3 cards of each character AND the ultimate (last card that doesn't have epiphany choices)
const commonCards: Card[] = [
  {
    id: "", // card id, same as the card name, e.g Rapid fire
    name: "", // card name exactly how it looks in-game, e.g Rapid Fire
    image: "/images/character/charname/starter1.png",
    cost: 0, // card cost
    type: "type", // card type, e.g attack, skill, upgrade
    rarity: CardRarities.Common,
    description: "", // card description e.g Damage 100%, Heal 100%, [ Unique ] Do y things
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
  {
    id: "",
    name: "",
    image: "/images/character/charname/unique4.png",
    cost: 0,
    type: "type",
    rarity: CardRarities.Unique,
    description: "",
  },
];

const uniqueCards: UniqueCard[] = [
  // cards that have epiphany choices, make sure to use proper line breaks ( \n ) to break a line so it renders like in-game
  {
    id: "", // put the card name in this format, e.g homing-laser
    name: "", // card name in-game, e.g Homing Laser
    image: "/images/character/charname/starter4.png",
    type: "type", // attack, skill, upgrade
    cost: 0, // card cost
    rarity: CardRarities.Rare,
    description: "", // card description e.g 100% damage\n2 Afterglow\nOn Ravage, move from\nGraveyard to hand
    epiphanies: [
      {
        id: "", // card name + epiphany number e.g Homing Laser from I to V
        tier: CardTier.WIP, // epiphany tier, ranking from Bad, Niche, C, B, A, S, S+
        cost: 0,
        type: "type", // attack, skill, upgrade
        description: "", // card description, same as above but with the epiphany version, e.g 150% damage\nOn Ravage, Move to\nhand\nDestroy: Add 1 Hit(s)
        reasoning: "", // tier explanation, why adding this epiphany choice on tier X
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
      // can just add the divine epiphany names here, no need to add reasoning or description
      {
        name: "", // e.g 1 Morale, 1 Resolve / Reduce this card cost by 1 / 1 AP / Draw 1 etc
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
  // recommended save data for this character
  {
    id: "deck-1", // can use deck-1 to whatever number u want
    name: "Deck 1", // save data name, e.g Standard DPS, Mei Lin Support, idk
    shortDescription: "", // short description to appear with the save data name
    description: ``, // full description of how this deck works
    faintMemoryNote: "140 Faint Memory Cost", // cost of the save data
    cards: [
      // cards on this save data, up to 8 or more idk, put the epiphany ID name, like Homing Laser I, Snack Time II, and for the last card just
      "Strike of Darkness IV", // put the unique card from the commonCards array, like Pale Shooting Star, Predator's Blade, Bombardment Prep
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
  // gear name exactly how it is called in-game
  weapons: [],
  armors: [],
  accessories: [],
};
// EXAMPLE
//   weapons: [
//     "Tentacles of Chaos",
//     "Crimson Sword",
//     "Flashbang",
//     "Over Cutter Shocker",
//   ],
//   armors: [
//     "Fragment of the Empty Void",
//     "Rocket-Adorned Cape",
//     "Brainwave-Blocking Helmet",
//   ],
//   accessories: [
//     "Clover of the Forest",
//     "Sphere of Randomness",
//     "Superconductive Protein",
//     "Source of the Forbidden",
//     "Water Drops of the Goddess",
//     "Multifaceted Parallel Universe Nexus",
//   ],
// };

const recommendedSources = [""]; // sources from the gear above, e.g Swamp of Judgment, City of Mist etc

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  // memory fragment set, put the id name in this format, tetras-authority, healers-journey etc
  bestInSlot: [
    {
      id: "",
      description: "", // description is why to use this set NOT WHAT IT DOES, e.g "Best for high damage builds"
    },
    {
      id: "",
      description: "", // description is why to use this set NOT WHAT IT DOES, e.g "kayron wants multiplicative damage so he needs this set bla bla"
    },
  ],
  alternative: [
    // alternative options, same format as bestInSlot
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
    id: "", // partner name in lowercase e.g nyx, yuri, arwen etc
    description: ``, // why to use this partner
    tier: CardTier.WIP, // tier ranking from Bad, Niche, C B A S S+
  },
  {
    id: "",
    description: ``,
    tier: CardTier.WIP,
  },
];

export const charname: CharacterData = {
  attribute: Attributes.Instinct, // Void, Instinct, Order, etc
  job: CharacterClass.Controller, // Ranger, Psionic, etc
  role: CharacterRole.Support, // MainDPS, SubDPS, Support
  rarity: 5, // rarity of the character

  overview: `
  // overview of the character (just delete this comment and add an overview)
  `.trim(),
  strengths: [], // strengths of the character

  weaknesses: [], // weaknesses of the character

  // EXAMPLE
  //   overview: `
  // Rei is a flexible support focused on enabling basic attack spam, 0-cost spam, or Void synergy depending on the team
  // Her kit revolves around massive buffs to 1-cost (or ≤1-cost) cards, strong draw/exhaust cycling with Snack Time, and powerful buff support via Predator's Blade
  //   `.trim(),

  //   strengths: [
  //     "Excellent enabler for basic attack and 0-cost builds",
  //     "Strong draw and cycling with Snack Time",
  //     "Very flexible — supports many different DPS styles",
  //   ],

  //   weaknesses: [
  //     "Relatively low personal damage",
  //     "Some builds require specific partner synergy",
  //   ],

  externalResources: [
    {
      label: "CZN Official Discord",
      url: "https://discord.gg/chaoszeronightmare",
      note: "Guide discussion and validation",
    },
    {
      label: "Sproot's Nightmare",
      url: "https://docs.google.com/spreadsheets/d/1-KkQUFrjD_2Un3zMDmypCwZFVF5VmowswqYdLt9MOw8/edit?gid=1855295740#gid=1855295740",
      note: "Theorycrafting",
    },
  ],

  credits: [
    {
      name: "yourname",
      contribution: "Guide Author",
    },
    {
      name: "Lucie",
      contribution: "Guide Data",
    },
  ],

  commonCards: commonCards,
  uniqueCards: uniqueCards,
  recommendedSaveData: recommendedSaveData,
  gears: gearsData,
  recommendedSources: recommendedSources,
  memoryFragmentSets: memoryFragmentSets,
  memoryFragmentMainStats: [
    MemoryFragmentMainStats.CriticalChance, // CriticalChance or CriticalDamage, can also use the options below
    MemoryFragmentMainStats.VoidDamage, // elemental damage like OrderDamage, InstinctDamage etc, can also use Attack as an array
    MemoryFragmentMainStats.Attack, // available arrays Defense, Attack, Health, Any
  ],
  memoryFragmentSubstatPriorities: [
    // priority by number, relation can be either equal/or
    {
      priority: 1, // first substat priority
      relation: "equal", // equal means =
      stats: [
        // since theres two stats here, it will show Critical Chance = Critical Damage
        MemoryFragmentSubstats.CriticalChance,
        MemoryFragmentSubstats.CriticalDamage,
      ],
    },
    {
      priority: 2,
      relation: "equal", // equal alone will show as > e.g Attack+(priority 2) > Defense+(priority 3)
      stats: [MemoryFragmentSubstats.AttackFlat],
    },
    {
      priority: 3,
      relation: "equal",
      stats: [MemoryFragmentSubstats.DefenseFlat],
    },
  ],
  memoryFragmentSubstatsNote: "", // note for substats priority or explanation idk
  partnersGuide: partnersGuide,
};
