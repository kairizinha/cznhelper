const sections = [
  { id: "overview", title: "1. Overview", level: 1 },
  { id: "base-cards", title: "2. Base Cards", level: 1 },
  { id: "recommended-save-data", title: "3. Recommended Save Data", level: 1 },
  { id: "equipments", title: "3.1. Equipments", level: 2 },
  { id: "memory-fragments", title: "4. Memory Fragments", level: 1 },
  { id: "partners", title: "5. Partners", level: 1 },
  { id: "teams", title: "6. Teams", level: 1 },
];

const uniqueCards = [
  {
    id: "karmic-flames",
    name: "Karmic Flames",
    image: "/images/character/chizuru/starter4.png",
    baseType: "attack",
    baseDescription:
      "[ Initiation ] 120% Damage\n1 Cursed Shackles\nCursed Shackles: Add 1 Hit",
    epiphanies: [
      {
        id: "Karmic Flames I",
        tier: "B",
        cost: 1,
        type: "attack",
        description:
          "[ Initiation ] 180% Damage\n1 Cursed Shackles\nCursed Shackles: Add 1 Hit",
        reasoning:
          "The extra hit helps generate more Will-O'-Wisp stacks, but other epiphanies offer better utility or damage scaling.",
      },
      {
        id: "Karmic Flames II",
        tier: "A",
        cost: 1,
        type: "attack",
        description:
          "[ Initiation ] 180% Damage\n1 Cursed Shackles\nCursed Shackles:\nDecrease Cost of the\nnext card of this unit\nused by 1",
        reasoning:
          "Good cost efficiency, refunds itself when used on already-shackled enemies. Requires consistent card draw support.",
      },
      {
        id: "Karmic Flames III",
        tier: "C",
        cost: 1,
        type: "attack",
        description:
          "[ Initiation ] 216% Damage\n1 Cursed Shackles\nCursed Shackles:\nIncrease Damage\nAmount by 100%",
        reasoning:
          "Lacks the multi-hit or utility of other options, the damage boost is decent but doesn't scale as well as Will-O'-Wisp or Oni Hunt IV focused builds.",
      },
      {
        id: "Karmic Flames IV",
        tier: "Bad",
        cost: 2,
        type: "skill",
        description:
          "[ Initiation ] 1 Cursed Shackles\nCreate 1 Shadow of the\nMoon",
        reasoning:
          "Expensive at 2 cost, but synergizes well with Bound At Dusk V for cost reduction, but generally too expensive.",
      },
      {
        id: "Karmic Flames V",
        tier: "S+",
        cost: 1,
        type: "skill",
        description:
          "[ Initiation / Exhaust ] 1 Cursed Shackles\nWhen a target inflicted\nwith Cursed Shackles\nis defeated, create this\ncard",
        reasoning:
          "Best Karmic Flames epiphany, self-exhausts but returns when you defeat a shackled enemy, creating infinite value. Less effective against multiple enemies.",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        description: "Decrease Cost by 1",
        reasoning:
          "Excellent for cost efficiency, especially when combined with Karmic Flames II for a 0-cost cycle.",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
      },
      {
        name: "Draw 1",
        description: "Draw 1 card",
        reasoning:
          "Great for maintaining card draw and cycling through your deck more efficiently.",
        icon: "/images/card/icon_card_battle_expand_secred.png",
      },
      {
        name: "1 AP",
        description: "Gain 1 AP",
        reasoning:
          "Provides additional action points, allowing for more plays per turn.",
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
      },
    ],
  },
  {
    id: "tsukuyomi",
    name: "Tsukuyomi",
    image: "/images/character/chizuru/unique1.png",
    baseType: "skill",
    baseDescription:
      "2 Will-O'-Wisp for each\nHit of the next Attack\nCard of this unit used",
    epiphanies: [
      {
        id: "Tsukuyomi I",
        tier: "S",
        cost: 0,
        type: "skill",
        description:
          "3 Will-O'-Wisp for each\nHit of the next Attack\nCard of this unit used",
        reasoning:
          "Direct upgrade from base card, providing 50% more Will-O'-Wisp per hit, the most reliable and consistent source of Will-O'-Wisp generation for Chizuru.",
      },
      {
        id: "Tsukuyomi II",
        tier: "A",
        cost: 0,
        type: "skill",
        description:
          "Add 1 Hit(s) to the next\nAttack Card of this unit\nused, 1 Will-O'-Wisp for\neach Hit",
        reasoning:
          "Adds an extra hit which can be valuable, but generates significantly less Will-O'-Wisp compared to Tsukuyomi I.",
      },
      {
        id: "Tsukuyomi III",
        tier: "S+",
        cost: 0,
        type: "skill",
        description:
          "Add 2 Hit(s) to the next\nShadow of the Moon,\nShadow of the Moon+\nused",
        reasoning:
          "Best option for Shadow of the Moon builds, the +2 hits stack infinitely and synergize well with Rei and Orlea damage amplification, enabling massive burst damage potential.",
      },
      {
        id: "Tsukuyomi IV",
        tier: "C",
        cost: 0,
        type: "skill",
        description:
          "3 Will-O'-Wisp for each\nAttack Card of this unit\nin hand",
        reasoning:
          "Limited by Chizuru's hand size and only counts her own attack cards, in practice, you rarely have enough Chizuru attack cards in hand to generate meaningful stacks compared to other epiphanies.",
      },
      {
        id: "Tsukuyomi V",
        tier: "S",
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Lead ] When an Attack Card\nof this unit is used, 2\nWill-O'-Wisp",
        reasoning:
          "Excellent with Oni Hunt IV for passive Will-O'-Wisp generation, also strong if you have duplicated base Tsukuyomi.",
      },
    ],
    divineEpiphanies: [
      {
        name: "Draw 1",
        description: "Draw 1 card",
        reasoning:
          "Excellent for maintaining card draw, especially important for 0-cost cards like Tsukuyomi.",
        icon: "/images/card/icon_card_battle_expand_secred.png",
      },
      {
        name: "1 AP",
        description: "Gain 1 AP",
        reasoning:
          "Provides additional action points, allowing for more plays per turn.",
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
      },
    ],
  },
  {
    id: "bound-at-dusk",
    name: "Bound At Dusk",
    image: "/images/character/chizuru/unique2.png",
    baseType: "upgrade",
    baseDescription:
      "[ Initiation / Unique ]\nAt the start of the turn,\ngain Inhibit\nDecrease Cost by 1 until\n1 random card(s) of other\nCombatants are used",
    epiphanies: [
      {
        id: "Bound At Dusk I",
        tier: "S",
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nDecrease Cost by 1\nuntil 2 random card(s)\nare used",
        reasoning:
          "Provides +2 effective AP per turn through cost reduction, but be cautious as it may interfere with Conqueror set bonuses.",
      },
      {
        id: "Bound At Dusk II",
        tier: "S",
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nWhen Shadow of the\nMoon+ is used, decrease\nCost of the next 1 card(s)\nused by 1",
        reasoning:
          "Best for Shadow of the Moon+ spam builds, enables chaining multiple Shadow of the Moon+ cards when combined with proper draw support.",
      },
      {
        id: "Bound At Dusk III",
        tier: "S",
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nActivate 2 random\ncard(s) of other\nCombatants",
        reasoning:
          "Strong team support option, best used with characters like Hugo.",
      },
      {
        id: "Bound At Dusk IV",
        tier: "Bad",
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nActivate 2 random\nLead cards",
        reasoning:
          "Too RNG-dependent to be reliable, requires both having Lead cards in hand and the random activation hitting useful cards.",
      },
      {
        id: "Bound At Dusk V",
        tier: "C",
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nDecrease Cost of the\ncard with the highest\nCost by 2",
        reasoning:
          "Limited synergy - primarily works with Karmic Flames IV for Chizuru herself.",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        description: "Decrease Cost by 1",
        reasoning:
          "Excellent for cost efficiency, making Bound At Dusk even more valuable.",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
      },
      {
        name: "Draw 1",
        description: "Draw 1 card",
        reasoning:
          "Great for maintaining card draw and ensuring you have cards to use with the cost reduction.",
        icon: "/images/card/icon_card_battle_expand_secred.png",
      },
    ],
  },
  {
    id: "oni-hunt",
    name: "Oni Hunt",
    image: "/images/character/chizuru/unique3.png",
    baseType: "attack",
    baseDescription:
      "[ Haste ] 72% Damage x 3\n+30% Damage Amount\nto the next Bind card\nused",
    epiphanies: [
      {
        id: "Oni Hunt I",
        tier: "S+",
        cost: 1,
        type: "attack",
        description:
          "[ Haste ] 60% Damage x 4\n+40% Damage Amount\nto the next Bind card\nused",
        reasoning:
          "Potentially the best Oni Hunt epiphany, as it generates 4 Will-O'-Wisp on use. Provides strong damage bonus to Shadow of the Moon.",
      },
      {
        id: "Oni Hunt II",
        tier: "A",
        cost: 1,
        type: "attack",
        description:
          "[ Haste ] 216% Damage\n+60% Damage Amount\nto the next Bind card\nused",
        reasoning:
          "Higher single-hit damage and better damage bonus than Oni Hunt I, but loses the multi-hit Will-O'-Wisp generation. Base Oni Hunt with Neutral epiphany often provides better value for Will-O'-Wisp stacking.",
      },
      {
        id: "Oni Hunt III",
        tier: "C",
        cost: 1,
        type: "attack",
        description:
          "[ Haste ] 72% Damage x 3\nIf there are no other\nAttack Cards in hand,\nadd 2 Hit(s)",
        reasoning:
          "Conditional +2 hits requires an empty attack card hand, which is difficult to maintain, doesn't increase Shadow of the Moon damage bonus and lacks the consistency of other options.",
      },
      {
        id: "Oni Hunt IV",
        tier: "S+",
        cost: 1,
        type: "skill",
        description:
          "[ Haste ] Create 2 Moonslash\nApply Exhaust to those\ncards, decrease Cost\nby 1 until used",
        reasoning:
          "Best option for Moonslash-focused builds. Requires basic potentials, but delivers the highest damage potential otherwise",
      },
      {
        id: "Oni Hunt V",
        tier: "B",
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +40% Damage Amount\nto Shadow of the\nMoon+\nAt the start of the turn,\n3 Will-O'-Wisp",
        reasoning:
          "The +40% damage bonus to Shadow of the Moon+ is decent but not exceptional. The 3 Will-O'-Wisp per turn is passive but relatively small compared to other options.",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        description: "Decrease Cost by 1",
        reasoning:
          "Excellent for cost efficiency, making Oni Hunt even more spammable for Will-O'-Wisp generation.",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
      },
      {
        name: "Draw 1",
        description: "Draw 1 card",
        reasoning:
          "Helps maintain card draw and cycle through your deck more efficiently.",
        icon: "/images/card/icon_card_battle_expand_secred.png",
      },
    ],
  },
];

const commonCards: Record<string, any> = {
  "Shadow of the Moon": {
    id: "shadow-of-the-moon",
    name: "Shadow of the Moon",
    image: "/images/character/chizuru/unique4.png",
    cost: 1,
    type: "attack",
    description:
      "[ Bind / Retain ] 72% Damage\n+20% Damage Amount\nfor each Bind stack",
  },
  Moonslash: {
    id: "moonslash",
    name: "Moonslash",
    image: "/images/character/chizuru/starter1.png",
    cost: 1,
    type: "attack",
    description: "150% Damage x 2",
  },
};

export {
  sections,
  uniqueCards,
  commonCards,
};
