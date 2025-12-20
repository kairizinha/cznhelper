import type { RecommendedDecks } from "@/@types";

import { uniqueCards, commonCards } from "../constants";

// Helper function to avoid repeating placeholder object
const createPlaceholder = (idSuffix: string) => {
  return {
    id: `placeholder-${idSuffix}`,
    name: "Placeholder",
    image: "/placeholder.svg",
    cost: 0,
    type: "skill",
    description: "",
  };
};

// Helper function to get rarity color based on card name
const getRarityColor = (cardName: string): string => {
  if (cardName?.includes("Oni Hunt")) {
    return "#FFD700"; // Legend - Gold
  } else if (cardName?.includes("Shadow of the Moon")) {
    return "#E9A1FC"; // Unique - Purple
  } else {
    return "#6FB0FC"; // Rare - Blue
  }
};

// Helper function to get rarity background image based on card name
const getRarityBackgroundImage = (cardName: string): string => {
  if (cardName?.includes("Oni Hunt")) {
    return "/images/card/card_title_rarity_legend.png";
  } else if (cardName?.includes("Shadow of the Moon")) {
    return "/images/card/card_title_rarity_unique.png";
  } else {
    return "/images/card/card_title_rarity_rare.png";
  }
};

const parseDescription = (desc: string) => {
  const bracketMatch = desc.match(/\[([^\]]+)\]/);
  if (bracketMatch) {
    const bracketedText = bracketMatch[0];
    const remainingText = desc.replace(bracketMatch[0], "").trim();
    return { bracketedText, remainingText };
  }
  return { bracketedText: null, remainingText: desc };
};

const getTierColor = (tier: string) => {
  switch (tier) {
    case "S+":
      return `
        bg-black/80
        text-pink-400
        font-black text-xs tracking-widest
        border border-pink-500/60
        shadow-lg shadow-pink-500/30
        ring-1 ring-pink-500/40
        ring-offset-1 ring-offset-pink-900/20
        relative overflow-hidden
      `;

    case "S":
      return `
        bg-black/80
        text-orange-400
        font-bold text-xs tracking-wider
        border border-orange-500/60
        shadow-lg shadow-orange-500/25
        ring-1 ring-orange-500/30
        ring-offset-1 ring-offset-orange-900/20
      `;

    case "A":
      return `
        bg-black/70
        text-purple-300
        font-bold text-xs tracking-wide
        border border-purple-500/50
        shadow-md shadow-purple-500/20
        ring-1 ring-purple-500/20
      `;

    case "B":
      return `
        bg-black/60
        text-cyan-300
        font-semibold text-xs
        border border-cyan-600/40
        shadow shadow-cyan-500/10
      `;

    case "C":
      return `
        bg-black/50
        text-emerald-400
        font-medium text-xs
        border border-emerald-700/30
      `;
    case "Niche":
      return `
        bg-gray-900/80
        text-gray-400
        font-medium text-xs
        border border-gray-700/50
      `;

    case "Bad":
      return `
        bg-gray-900/90
        text-red-400
        font-medium text-xs
        border border-red-700/50
      `;

    default:
      return `bg-gray-900/70 
      text-gray-600 
      border border-gray-800/50 
      text-xs
      `;
  }
};

const getEpiphanyFromRef = (ref: string, cardsArray = uniqueCards) => {
  const match = ref.match(/(.*)\s+(I|II|III|IV|V)$/i);
  let baseRef: string;
  let roman: string | undefined;

  if (match) {
    baseRef = match[1].trim().toLowerCase();
    roman = match[2].toUpperCase();
  } else {
    baseRef = ref.trim().toLowerCase();
  }

  const baseCard = cardsArray.find(
    (c) =>
      c.id === baseRef || c.name.toLowerCase() === baseRef.replace(/\s+/g, " ")
  );

  const romanToIndex: Record<string, number> = {
    I: 0,
    II: 1,
    III: 2,
    IV: 3,
    V: 4,
  };

  if (baseCard) {
    let epiphany;
    if (roman && romanToIndex[roman] !== undefined) {
      epiphany = baseCard.epiphanies[romanToIndex[roman]];
    }
    epiphany = epiphany || baseCard.epiphanies[0]; // safe fallback

    return {
      id: `epiphany-${ref.replace(/\s+/g, "-")}`,
      name: baseCard.name,
      image: baseCard.image,
      cost: epiphany.cost,
      type: epiphany.type || baseCard.baseType,
      description: epiphany.description,
    };
  }

  const commonKey = Object.keys(commonCards).find(
    (key) => key.toLowerCase() === ref.toLowerCase()
  );
  if (commonKey) {
    const card = commonCards[commonKey];
    return {
      id: card.id,
      name: card.name,
      image: card.image,
      cost: card.cost,
      type: card.type,
      description: card.description,
    };
  }
};

const generateDeckRows = (
  recommendedDecks: RecommendedDecks,
  deckKey: string
): {
  topRow: any[];
  bottomRow: any[];
  deck: any[];
} => {
  const spec = recommendedDecks[deckKey] || [];
  const deck: any[] = []; // This will hold only the real cards
  let globalIndex = 0;

  // Add all real cards (with unique IDs)
  spec.forEach((entry) => {
    const { ref, count = 1, cardsArray = uniqueCards } = entry;
    const baseCard = getEpiphanyFromRef(ref, cardsArray);

    if (!baseCard) {
      console.warn(`Card not found: ${ref}`);
      return;
    }

    for (let i = 0; i < count; i++) {
      deck.push({
        ...baseCard,
        id: `${baseCard.id}-${globalIndex++}`,
      });
    }
  });

  // Build top row → exactly 4 cards + 1 empty on the right
  const topRow: any[] = [];
  for (let i = 0; i < 4; i++) {
    topRow.push(deck[i] || createPlaceholder(`top-${i}`));
  }
  topRow.push(createPlaceholder("top-right-empty")); // Always empty

  // Build bottom row → next 4 cards + 1 empty on the right
  const bottomRow: any[] = [];
  for (let i = 0; i < 4; i++) {
    const card = deck[4 + i];
    bottomRow.push(card || createPlaceholder(`bottom-${i}`));
  }
  bottomRow.push(createPlaceholder("bottom-right-empty")); // Always empty

  return { topRow, bottomRow, deck };
};

export {
  createPlaceholder,
  getRarityBackgroundImage,
  getRarityColor,
  getTierColor,
  parseDescription,
  getEpiphanyFromRef,
  generateDeckRows,
};
