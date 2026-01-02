// types/save-data.ts

export type SaveData = {
  id: string;
  name: string;

  shortDescription?: string;
  description?: string;
  faintMemoryNote?: string;

  cards: string[];
};
