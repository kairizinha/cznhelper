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
    id: "Bombardment Prep",
    name: "Bombardment Prep",
    image: "/images/character/veronica/unique4.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Unique,
    description: "[Unique]  Increase max stack of  Reload by 1  1 Reload",
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
          "Probably the highest raw damage potential, but it suffers from heavy RNG making it inconsistent, it lacks AoE but strong on bosses",
      },
      {
        id: "Firing Preparation II",
        tier: CardTier.Niche,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Piercing Ballista. At the start of the turn,  create 1 Piercing Ballista card(s)",
        reasoning:
          "Lowest damage among the Ballista epiphanies if enemy has no shield, but strong against shielded foes like Judas because of the piercing damage",
      },
      {
        id: "Firing Preparation III",
        tier: CardTier.A,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Enhanced Ballista. At the start of the turn,  create 1 Enhanced Ballista card(s)",
        reasoning:
          "Nothing special, it have lower damage potential than other epiphanies, however the 30% Critical Chance makes damage more consistent",
      },
      {
        id: "Firing Preparation IV",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Giant Ballista.  At the start of the turn,  create 1 Giant Ballista  card(s)",
        reasoning:
          "Best overall; lower single-target damage but AoE is so strong it doesn't matter, mitigates targeting RNG without E2—always pick if unsure",
      },
      {
        id: "Firing Preparation V",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Shelling Ballista.  At the start of the turn,  create 1 Shelling Ballista  card(s)",
        reasoning:
          "Best for Veronica DPS; it makes Kowalski and Morale additive buffs stronger, her E2 makes it consistent and even stronger",
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
    description: "120% Shield  Draw 2 card(s) from other combatant",
    epiphanies: [
      {
        id: "Repose I",
        tier: CardTier.SPlus,
        cost: 0,
        type: "skill",
        description: "Draw 2 other   Combatant's card(s)",
        reasoning:
          "Arguably the best Repose option, 0 cost free 2 draw and it gets even stronger with a Divine Epiphany that adds +1 draw or +1 AP",
      },
      {
        id: "Repose II",
        tier: CardTier.A,
        cost: 1,
        type: "skill",
        description:
          "180% Shield  Draw 2 other  Combatant's card(s)  If that card is a Skill Card,  1 Reload",
        reasoning:
          "A weaker version of Repose III, it still has value since you draw and MIGHT get Reload, but the effect is much lower impact overall, and the other Repose options outperform it",
      },
      {
        id: "Repose III",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description:
          "180% Shield  Draw 2 other  Combatant's card(s)  Decrease Cost of 1 of those cards by 1 for 1 turn",
        reasoning:
          "Second best pick, a bit less consistent since it can break some builds. Divine upgrade that makes this 0 cost it might becomes the best option",
      },
      {
        id: "Repose IV",
        tier: CardTier.B,
        cost: 1,
        type: "skill",
        description:
          "180% Shield  1 Reload equal to  number of other  Combatant's skill card(s)  in hand",
        reasoning:
          "Reload is already covered by the pendant of resolution card, so there's no real reason to pick this unless running DPS",
      },
      {
        id: "Repose V",
        tier: CardTier.C,
        cost: 1,
        type: "skill",
        description:
          "180% Shield  Discard all other  Combatant's card(s) in hand  1 Reload equal to that number",
        reasoning:
          "Worst choice. Hand discard is too punishing and the Reload payoff doesn't justify it",
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
        description: "When using a Skill Card,  1 Reload",
        reasoning:
          "Best overall option, it is just a direct upgrade of the base card, nothing special",
      },
      {
        id: "Pendant of Resolution II",
        tier: CardTier.C,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] When another combatant uses Skill Card, 1 Reload  If 3 are used, at the start of the next turn, create 1 Micro Ballista card(s)",
        reasoning:
          "Gives some Reload from other Skill Cards, but the Micro Ballista is worthless, not a strong pick compared to other Pendants",
      },
      {
        id: "Pendant of Resolution III",
        tier: CardTier.A,
        cost: 1,
        type: "skill",
        description:
          "[Exhaust 2] For 1 turn(s), when a  card is used,  1 Reload",
        reasoning:
          "Decent option, provides consistent Reload but not particularly strong",
      },
      {
        id: "Pendant of Resolution IV",
        tier: CardTier.A,
        cost: 1,
        type: "upgrade",
        description:
          "When another combatant uses Skill Card, 1 Reload  50% Chance to gain additional 1 Reload",
        reasoning:
          "Unreliable due to RNG, but otherwise a straightforward base card upgrade that can provide extra Reload",
      },
      {
        id: "Pendant of Resolution V",
        tier: CardTier.Niche,
        cost: 1,
        type: "skill",
        description: "[ Retain / Retrieve 4 ] Reload 2",
        reasoning:
          "Best Pendant if paired with a -1 cost Divine Epiphany; otherwise it's a bit expensive. Excellent for Mei Lin, as it provides 8 Passion stacks",
      },
    ],
    divineEpiphanies: [
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
      "Choose 1 Ballista card in hand, +100% Damage amount until activated  Draw 1",
    epiphanies: [
      {
        id: "Sir Kowalski I",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 Ballista card in hand, +150% Damage amount until activated.  Draw 2",
        reasoning:
          "Good option, draws 2 and boosts Ballista damage; with -1 cost Divine Epiphany it get more value",
      },
      {
        id: "Sir Kowalski II",
        tier: CardTier.B,
        cost: 1,
        type: "skill",
        description:
          "Draw 1  Increase Damage Amount of Ballista by 30% for 1 turn",
        reasoning:
          "Decent but not great, grants 1 draw but the 30% multiplicative Ballista boost is less valuable since Veronica already has a lot of multiplicative damage",
      },
      {
        id: "Sir Kowalski III",
        tier: CardTier.SPlus,
        cost: 1,
        type: "skill",
        description: "Draw 2  When drawing a Skill card, create 1 Ballista",
        reasoning:
          "Basically a Repose, drawing Skill cards creates Ballista, and a -1 cost Divine Epiphany makes it even stronger",
      },
      {
        id: "Sir Kowalski IV",
        tier: CardTier.Niche,
        cost: 1,
        type: "skill",
        description:
          "+250% Damage Amount of 1 random Ballista card in hand,  Exhaust after activation",
        reasoning:
          "Best option for Veronica DPS, provides the highest damage boost, triggers mid-turn and counts as a normal targetting attack, activating Passion Weakness if the enemy has it",
      },
      {
        id: "Sir Kowalski V",
        tier: CardTier.C,
        cost: 1,
        type: "skill",
        description:
          "Select and Exhaust 1 Ballista in hand  Create 2 Ballista, decrease Damage Amount of those cards by 25% until activated",
        reasoning:
          "Honestly questionable, it exhausts a Ballista but doesn't trigger it like the IV option, making it more useless",
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
    ],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "High Draw Support",
    shortDescription: "",
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
    shortDescription: "",
    description: `This deck is Mei Lin's nichest build, it's a high draw deck that uses the Pendant of Resolution V to provide insane passion stacks`,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Firing Preparation IV",
      "Repose I",
      "Repose I",
      "Pendant of Resolution V",
      "Pendant of Resolution V",
      "Pendant of Resolution V",
      "Sir Kowalski III",
      "Bombardment Prep",
    ],
  },
  {
    id: "deck-3",
    name: "Veronica DPS",
    shortDescription: "",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Firing Preparation I",
      "Repose II",
      "Pendant of Resolution I",
      "Sir Kowalski IV",
      "Sir Kowalski IV",
      "Sir Kowalski IV",
      "Sir Kowalski IV",
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
    "Mutant Preadtor Spike",
    "Second Method",
    "RFS-17",
    "Obsidian Sword",
  ],
  armors: [
    "Fragment of the Empty Void",
    "Rocket-Adorned Cape",
    "Brainwave-Blocking Helmet",
    "Shield of the Watcher",
    "Wings of Freedom",
  ],
  accessories: [
    "Sphere of Randomness",
    "Superconductive Protein",
    "Source of the Forbidden",
    "Emblem of an Exceptional Entity",
    "Amorphous Cube",
  ],
};

const recommendedSources = ["Laboratory 0", "City of Mist"];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
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
  alternative: [],
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "rosaria",
    description: ``,
    tier: CardTier.SPlus,
  },
  {
    id: "marin",
    description: ``,
    tier: CardTier.SPlus,
  },
  {
    id: "nakia",
    description: ``,
    tier: CardTier.S,
  },
];

export const veronicaData: CharacterData = {
  attribute: Attributes.Passion,
  job: CharacterClass.Ranger,
  role: CharacterRole.Support,

  overview: `
  Hybrid DPS/Support character who demands minimal AP investment after her core upgrade cards. She deals damage through Ballistas that automatically trigger at end of turn with zero cost. 
  Her support shines via cheap, high-impact card draw cards, and she can power spike by stacking the Reload buff to massively amplify Ballista damage.
  `.trim(),

  strengths: [
    "Insane Card Draw support",
    "Passively deals ST and AoE damage",
    "Solo DPS in Chaos",
    "Heavy Deck thinning",
    "Easy to play",
  ],

  weaknesses: ["Ballista Epiphanies are RNG without E2"],

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
