export type DeckEntry = {
  ref: string;
  count?: number;
  cardsArray?: typeof uniqueCards;
};

export type RecommendedDecks = {
  [key: string]: DeckEntry[];
};
