export type MemoryFragmentSet = {
  id: string;
  name: string;
  icon: string;
  effect: string;
};

export type recommendingFragmentSet = {
  id: string;
  description?: string;
};

export enum MemoryFragmentMainStats {
  CriticalRate = "critical_chance",
  CriticalDamage = "critical_damage",
  Attack = "%attack",
  Defense = "%defense",
  HP = "%hp",
  VoidDamage = "void_damage",
  PassionDamage = "passion_damage",
  OrderDamage = "order_damage",
  InstinctDamage = "instinct_damage",
  JusticeDamage = "justice_damage",
}
