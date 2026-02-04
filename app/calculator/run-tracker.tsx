"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  X,
  Undo,
  RotateCcw,
  Plus,
  HelpCircle,
  ChevronsUpDown,
  Check,
} from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
type CardEntry = { name: string; image?: string };
const CHARACTER_CARDS: Record<
  string,
  { portrait?: string; starter: CardEntry[]; unique: CardEntry[] }
> = {
  rei: {
    portrait: "images/characters/reiportrait.webp",
    starter: [
      { name: "Dark Blade", image: "/images/character/rei/starter1.png" },
      { name: "Dark Blade", image: "/images/character/rei/starter2.png" },
      {
        name: "Material Regeneration",
        image: "/images/character/rei/starter3.png",
      },
      {
        name: "Strike of Darkness",
        image: "/images/character/rei/starter4.png",
      },
    ],
    unique: [
      {
        name: "Resonating Darkness",
        image: "/images/character/rei/unique1.png",
      },
      { name: "Snack Time", image: "/images/character/rei/unique2.png" },
      { name: "Dark Condensation", image: "/images/character/rei/unique3.png" },
      { name: "Predator’s Blade", image: "/images/character/rei/unique4.png" },
    ],
  },
  owen: {
    portrait: "images/characters/owenportrait.webp",
    starter: [
      { name: "Downward Cut", image: "/images/character/owen/starter1.png" },
      { name: "Downward Cut", image: "/images/character/owen/starter2.png" },
      { name: "Weapon Block", image: "/images/character/owen/starter3.png" },
      { name: "Wind Charge", image: "/images/character/owen/starter4.png" },
    ],
    unique: [
      { name: "Wind Slash", image: "/images/character/owen/unique1.png" },
      { name: "Break Armor", image: "/images/character/owen/unique2.png" },
      { name: "Wind Riding", image: "/images/character/owen/unique3.png" },
      { name: "Gale Strike", image: "/images/character/owen/unique4.png" },
    ],
  },
  cassius: {
    portrait: "images/characters/cassiusportrait.webp",
    starter: [
      { name: "Cards", image: "/images/character/cassius/starter1.png" },
      { name: "Wild Card", image: "/images/character/cassius/starter2.png" },
      { name: "Mana Field", image: "/images/character/cassius/starter3.png" },
      {
        name: "Pop Eyed Popper",
        image: "/images/character/cassius/starter4.png",
      },
    ],
    unique: [
      { name: "Devil Dice", image: "/images/character/cassius/unique1.png" },
      { name: "Shuffle", image: "/images/character/cassius/unique2.png" },
      { name: "Dice Trick", image: "/images/character/cassius/unique3.png" },
      { name: "Joker", image: "/images/character/cassius/unique4.png" },
    ],
  },
  beryl: {
    portrait: "/images/characters/berylportrait.webp",
    starter: [
      { name: "Launcher", image: "/images/character/beryl/starter1.png" },
      {
        name: "Charged Launcher",
        image: "/images/character/beryl/starter2.png",
      },
      { name: "Barrier", image: "/images/character/beryl/starter3.png" },
      { name: "Opening Found", image: "/images/character/beryl/starter4.png" },
    ],
    unique: [
      { name: "Charged Shot", image: "/images/character/beryl/unique1.png" },
      { name: "Guilty Pleasure", image: "/images/character/beryl/unique2.png" },
      {
        name: "Unlimited Firepower",
        image: "/images/character/beryl/unique3.png",
      },
      {
        name: "Heavy Weapon Specialist",
        image: "/images/character/beryl/unique4.png",
      },
    ],
  },
  mika: {
    portrait: "images/characters/mikaportrait.webp",
    starter: [
      { name: "Water Arrow", image: "/images/character/mika/starter1.png" },
      { name: "Water Barrier", image: "/images/character/mika/starter2.png" },
      { name: "Water Barrier", image: "/images/character/mika/starter3.png" },
      { name: "Source of Water", image: "/images/character/mika/starter4.png" },
    ],
    unique: [
      {
        name: "Blessing of Waves",
        image: "/images/character/mika/unique1.png",
      },
      {
        name: "Tactical Analysis",
        image: "/images/character/mika/unique2.png",
      },
      { name: "Whirpool", image: "/images/character/mika/unique3.png" },
      { name: "Deluge", image: "/images/character/mika/unique4.png" },
    ],
  },
  maribell: {
    portrait: "images/characters/maribellportrait.webp",
    starter: [
      {
        name: "Shelter Kick",
        image: "/images/character/maribell/starter1.png",
      },
      {
        name: "Shelter Defense",
        image: "/images/character/maribell/starter2.png",
      },
      {
        name: "Shelter Hold",
        image: "/images/character/maribell/starter3.png",
      },
      {
        name: "Resolute Blitz",
        image: "/images/character/maribell/starter4.png",
      },
    ],
    unique: [
      {
        name: "Maribell Shelter MK.II",
        image: "/images/character/maribell/unique1.png",
      },
      { name: "Wolve’s Dome", image: "/images/character/maribell/unique2.png" },
      { name: "Oh... I See.", image: "/images/character/maribell/unique3.png" },
      {
        name: "Shelter Strike",
        image: "/images/character/maribell/unique4.png",
      },
    ],
  },
  lucas: {
    portrait: "images/characters/lucasportrait.webp",
    starter: [
      { name: "Machine Gun", image: "/images/character/lucas/starter1.png" },
      { name: "Machine Gun", image: "/images/character/lucas/starter2.png" },
      {
        name: "Shielding Incendiary Bomb",
        image: "/images/character/lucas/starter3.png",
      },
      {
        name: "Extended Magazine",
        image: "/images/character/lucas/starter4.png",
      },
    ],
    unique: [
      { name: "S.S.S", image: "/images/character/lucas/unique1.png" },
      { name: "Flame Thrower", image: "/images/character/lucas/unique2.png" },
      { name: "Flashbang", image: "/images/character/lucas/unique3.png" },
      { name: "R.P.G-7", image: "/images/character/lucas/unique4.png" },
    ],
  },
  amir: {
    portrait: "/images/characters/amirportrait.webp",
    starter: [
      { name: "Rapier", image: "/images/character/amir/starter1.png" },
      { name: "Rapier", image: "/images/character/amir/starter2.png" },
      { name: "Steel Barrier", image: "/images/character/amir/starter3.png" },
      { name: "Hovering Metal", image: "/images/character/amir/starter4.png" },
    ],
    unique: [
      { name: "Metal Pierce", image: "/images/character/amir/unique1.png" },
      { name: "Metal Extraction", image: "/images/character/amir/unique2.png" },
      {
        name: "Full Metal Hurricane",
        image: "/images/character/amir/unique3.png",
      },
      { name: "Iron Skin", image: "/images/character/amir/unique4.png" },
    ],
  },
  tressa: {
    portrait: "/images/characters/tressaportrait.webp",
    starter: [
      { name: "Dagger Throw", image: "/images/character/tressa/starter1.png" },
      { name: "Dagger Throw", image: "/images/character/tressa/starter2.png" },
      {
        name: "Touch of Darkness",
        image: "/images/character/tressa/starter3.png",
      },
      {
        name: "Unseathe Dagger",
        image: "/images/character/tressa/starter4.png",
      },
    ],
    unique: [
      { name: "Curse", image: "/images/character/tressa/unique1.png" },
      { name: "Shadow Reload", image: "/images/character/tressa/unique2.png" },
      { name: "Vital Attack", image: "/images/character/tressa/unique3.png" },
      { name: "Cursed Gouge", image: "/images/character/tressa/unique4.png" },
    ],
  },
  selena: {
    portrait: "/images/characters/selenaportrait.webp",
    starter: [
      {
        name: "Engagament Fire",
        image: "/images/character/selena/starter1.png",
      },
      {
        name: "Engagament Fire",
        image: "/images/character/selena/starter2.png",
      },
      {
        name: "Emergency Shielding",
        image: "/images/character/selena/starter3.png",
      },
      {
        name: "High-Power Scope",
        image: "/images/character/selena/starter4.png",
      },
    ],
    unique: [
      { name: "Target Spotted", image: "/images/character/selena/unique1.png" },
      { name: "Drone Bombing", image: "/images/character/selena/unique2.png" },
      {
        name: "Tactical Maneuver",
        image: "/images/character/selena/unique3.png",
      },
      {
        name: "Sniper’s Domain",
        image: "/images/character/selena/unique4.png",
      },
    ],
  },
  nia: {
    portrait: "/images/characters/niaportrait.webp",
    starter: [
      { name: "Stroke", image: "/images/character/nia/starter1.png" },
      { name: "AMP Therapy", image: "/images/character/nia/starter2.png" },
      { name: "AMP Therapy", image: "/images/character/nia/starter3.png" },
      { name: "G Chord", image: "/images/character/nia/starter4.png" },
    ],
    unique: [
      { name: "Mute Accent", image: "/images/character/nia/unique1.png" },
      { name: "Soul Rip", image: "/images/character/nia/unique2.png" },
      { name: "Adagio", image: "/images/character/nia/unique3.png" },
      { name: "Nia’s Curiosity", image: "/images/character/nia/unique4.png" },
    ],
  },
  kayron: {
    portrait: "/images/characters/kayronportrait.webp",
    starter: [
      { name: "Elimination", image: "/images/character/kayron/starter1.png" },
      { name: "Elimination", image: "/images/character/kayron/starter2.png" },
      { name: "Sphere", image: "/images/character/kayron/starter3.png" },
      {
        name: "Echo of Futility",
        image: "/images/character/kayron/starter4.png",
      },
    ],
    unique: [
      {
        name: "Brand of Annihilation",
        image: "/images/character/kayron/unique1.png",
      },
      { name: "Black Hole", image: "/images/character/kayron/unique2.png" },
      { name: "Oath of Vanity", image: "/images/character/kayron/unique3.png" },
      {
        name: "Echoes of True Abyss",
        image: "/images/character/kayron/unique4.png",
      },
    ],
  },
  narja: {
    portrait: "/images/characters/narjaportrait.webp",
    starter: [
      {
        name: "NA: Attack Response",
        image: "/images/character/narja/starter1.webp",
      },
      {
        name: "NA: Defense Response",
        image: "/images/character/narja/starter2.webp",
      },
      {
        name: "NA: Defense Response",
        image: "/images/character/narja/starter3.webp",
      },
      {
        name: "Shackles of Hunger",
        image: "/images/character/narja/starter4.webp",
      },
    ],
    unique: [
      {
        name: "Bottomless Hunger",
        image: "/images/character/narja/unique1.webp",
      },
      {
        name: "Voluntary Control",
        image: "/images/character/narja/unique2.webp",
      },
      {
        name: "Domain of Voracity",
        image: "/images/character/narja/unique3.webp",
      },
      {
        name: "Mealtime",
        image: "/images/character/narja/unique4.webp",
      },
    ],
  },
  haru: {
    portrait: "/images/characters/haruportrait.webp",
    starter: [
      { name: "Anchor", image: "/images/character/haru/starter1.png" },
      { name: "Power Anchor", image: "/images/character/haru/starter2.png" },
      { name: "Anchor Drop", image: "/images/character/haru/starter3.png" },
      { name: "Anchor Shot", image: "/images/character/haru/starter4.png" },
    ],
    unique: [
      { name: "Anchor Pointer", image: "/images/character/haru/unique1.png" },
      { name: "Power Charge", image: "/images/character/haru/unique2.png" },
      { name: "Charged Energy", image: "/images/character/haru/unique3.png" },
      { name: "Lift Anchor", image: "/images/character/haru/unique4.png" },
    ],
  },
  yuki: {
    portrait: "/images/characters/yukiportrait.webp",
    starter: [
      { name: "Longsword Slash", image: "/images/character/yuki/starter1.png" },
      { name: "Rapid Slash", image: "/images/character/yuki/starter2.png" },
      { name: "Flowing Parry", image: "/images/character/yuki/starter3.png" },
      {
        name: "Prepare to Subdue",
        image: "/images/character/yuki/starter4.png",
      },
    ],
    unique: [
      { name: "Flash Slash", image: "/images/character/yuki/unique1.png" },
      { name: "Trickery Strike", image: "/images/character/yuki/unique2.png" },
      { name: "Freezing Blade", image: "/images/character/yuki/unique3.png" },
      { name: "Iceberg Cleave", image: "/images/character/yuki/unique4.png" },
    ],
  },
  hugo: {
    portrait: "/images/characters/hugoportrait.webp",
    starter: [
      { name: "Throw Dagger", image: "/images/character/hugo/starter1.png" },
      { name: "Throw Dagger", image: "/images/character/hugo/starter2.png" },
      { name: "Defense System", image: "/images/character/hugo/starter3.png" },
      {
        name: "Hunting Instincts",
        image: "/images/character/hugo/starter4.png",
      },
    ],
    unique: [
      { name: "Fan of Daggers", image: "/images/character/hugo/unique1.png" },
      { name: "Quick Fix", image: "/images/character/hugo/unique2.png" },
      { name: "Dingo Howling", image: "/images/character/hugo/unique3.png" },
      { name: "Fixer’s Approach", image: "/images/character/hugo/unique4.png" },
    ],
  },
  renoa: {
    portrait: "/images/characters/renoaportrait.webp",
    starter: [
      {
        name: "Annihilation Shot",
        image: "/images/character/renoa/starter1.png",
      },
      {
        name: "Annihilation Shot",
        image: "/images/character/renoa/starter2.png",
      },
      { name: "Black Veil", image: "/images/character/renoa/starter3.png" },
      { name: "Echo of Sorrow", image: "/images/character/renoa/starter4.png" },
    ],
    unique: [
      {
        name: "Instant Judgement",
        image: "/images/character/renoa/unique1.png",
      },
      {
        name: "Ballad of Pitch Black",
        image: "/images/character/renoa/unique2.png",
      },
      {
        name: "Flower of Devoured Fate",
        image: "/images/character/renoa/unique3.png",
      },
      {
        name: "Last-Ditch Assault",
        image: "/images/character/renoa/unique4.png",
      },
    ],
  },
  veronica: {
    portrait: "/images/characters/veronicaportrait.webp",
    starter: [
      { name: "Rapid Fire", image: "/images/character/veronica/starter1.png" },
      { name: "Rapid Fire", image: "/images/character/veronica/starter2.png" },
      {
        name: "Illusion of Golden Daffodils",
        image: "/images/character/veronica/starter3.png",
      },
      {
        name: "Firing Preparation",
        image: "/images/character/veronica/starter4.png",
      },
    ],
    unique: [
      { name: "Repose", image: "/images/character/veronica/unique1.png" },
      {
        name: "Pendant of Resolution",
        image: "/images/character/veronica/unique2.png",
      },
      { name: "Sir Kowalski", image: "/images/character/veronica/unique3.png" },
      {
        name: "Bombardment Prep",
        image: "/images/character/veronica/unique4.png",
      },
    ],
  },
  "mei-lin": {
    portrait: "/images/characters/meilinportrait.webp",
    starter: [
      { name: "Strike", image: "/images/character/mei-lin/starter1.png" },
      { name: "Strike", image: "/images/character/mei-lin/starter2.png" },
      {
        name: "Flame Dragon Guardian",
        image: "/images/character/mei-lin/starter3.png",
      },
      {
        name: "Flame Dragon Jewel",
        image: "/images/character/mei-lin/starter4.png",
      },
    ],
    unique: [
      {
        name: "Rising Dragon Spire",
        image: "/images/character/mei-lin/unique1.png",
      },
      {
        name: "Unity of Attack and Defense",
        image: "/images/character/mei-lin/unique2.png",
      },
      {
        name: "Spirit of the Aroma",
        image: "/images/character/mei-lin/unique3.png",
      },
      {
        name: "Flame Dragon’s Sovereighty",
        image: "/images/character/mei-lin/unique4.png",
      },
    ],
  },
  orlea: {
    portrait: "/images/characters/orleaportrait.webp",
    starter: [
      {
        name: "Attack, My Minions",
        image: "/images/character/orlea/starter1.png",
      },
      {
        name: "Attack, My Minions",
        image: "/images/character/orlea/starter2.png",
      },
      {
        name: "Heaven’s Healing",
        image: "/images/character/orlea/starter3.png",
      },
      { name: "Sacred Censer", image: "/images/character/orlea/starter4.png" },
    ],
    unique: [
      {
        name: "Growth Acceleration",
        image: "/images/character/orlea/unique1.png",
      },
      { name: "Annoying", image: "/images/character/orlea/unique2.png" },
      {
        name: "Growing Creature",
        image: "/images/character/orlea/unique3.png",
      },
      { name: "Will of Light", image: "/images/character/orlea/unique4.png" },
    ],
  },
  rin: {
    portrait: "/images/characters/rinportrait.webp",
    starter: [
      {
        name: "Dark Mist Sword: First Form",
        image: "/images/character/rin/starter1.png",
      },
      {
        name: "Dark Mist Sword: Third Form",
        image: "/images/character/rin/starter2.png",
      },
      { name: "Protection", image: "/images/character/rin/starter3.png" },
      { name: "Drawing Slash", image: "/images/character/rin/starter4.png" },
    ],
    unique: [
      {
        name: "Dark Mist Secret Art: Destruction",
        image: "/images/character/rin/unique1.png",
      },
      {
        name: "Dark Mist Secret Art: Annihilation",
        image: "/images/character/rin/unique2.png",
      },
      {
        name: "Dark Mist Inner Art",
        image: "/images/character/rin/unique3.png",
      },
      {
        name: "Dark Mist Secret Art: Black Dance",
        image: "/images/character/rin/unique4.png",
      },
    ],
  },
  magna: {
    portrait: "/images/characters/magnaportrait.webp",
    starter: [
      { name: "Frozen Fist", image: "/images/character/magna/starter1.png" },
      { name: "Frost Shield", image: "/images/character/magna/starter3.png" },
      { name: "Frost Shield", image: "/images/character/magna/starter3.png" },
      { name: "Ice Fragment", image: "/images/character/magna/starter4.png" },
    ],
    unique: [
      {
        name: "Glacial Iron Fist",
        image: "/images/character/magna/unique1.png",
      },
      { name: "Ice Wall", image: "/images/character/magna/unique2.png" },
      { name: "Frost Charge", image: "/images/character/magna/unique3.png" },
      {
        name: "Storm of Bitter Cold",
        image: "/images/character/magna/unique4.png",
      },
    ],
  },
  khalipe: {
    portrait: "/images/characters/khalipeportrait.webp",
    starter: [
      { name: "Lashing", image: "/images/character/khalipe/starter1.png" },
      { name: "Upward Slash", image: "/images/character/khalipe/starter2.png" },
      { name: "Tyr’s Vow", image: "/images/character/khalipe/starter3.png" },
      {
        name: "Vulture Ejection",
        image: "/images/character/khalipe/starter4.png",
      },
    ],
    unique: [
      {
        name: "Greatsword Aquila",
        image: "/images/character/khalipe/unique1.png",
      },
      { name: "Overpower", image: "/images/character/khalipe/unique2.png" },
      { name: "Rally", image: "/images/character/khalipe/unique3.png" },
      {
        name: "Absolute Protection",
        image: "/images/character/khalipe/unique4.png",
      },
    ],
  },
  sereniel: {
    portrait: "/images/characters/serenielportrait.webp",
    starter: [
      { name: "Pulse Fire", image: "/images/character/sereniel/starter1.webp" },
      { name: "Pulse Fire", image: "/images/character/sereniel/starter2.webp" },
      {
        name: "Magnetic Field",
        image: "/images/character/sereniel/starter3.webp",
      },
      {
        name: "Homing Laser",
        image: "/images/character/sereniel/starter4.webp",
      },
    ],
    unique: [
      {
        name: "Plasma Missile",
        image: "/images/character/sereniel/unique1.webp",
      },
      {
        name: "Shining Core",
        image: "/images/character/sereniel/unique2.webp",
      },
      {
        name: "Cobalt Light",
        image: "/images/character/sereniel/unique3.webp",
      },
      {
        name: "Pale Shooting Star",
        image: "/images/character/sereniel/unique4.webp",
      },
    ],
  },
  chizuru: {
    portrait: "/images/characters/chizuruportrait.webp",
    starter: [
      { name: "Moonslash", image: "/images/character/chizuru/starter1.png" },
      { name: "Moonslash", image: "/images/character/chizuru/starter2.png" },
      {
        name: "Spiritflame’s Ward",
        image: "/images/character/chizuru/starter3.png",
      },
      {
        name: "Karmic Flames",
        image: "/images/character/chizuru/starter4.png",
      },
    ],
    unique: [
      { name: "Tsukuyomi", image: "/images/character/chizuru/unique1.png" },
      { name: "Bound At Dusk", image: "/images/character/chizuru/unique2.png" },
      { name: "Oni Hunt", image: "/images/character/chizuru/unique3.png" },
      {
        name: "Shadow of the Moon",
        image: "/images/character/chizuru/unique4.png",
      },
    ],
  },
  luke: {
    portrait: "/images/characters/lukeportrait.webp",
    starter: [
      { name: "Single Shot", image: "/images/character/luke/starter1.png" },
      { name: "Single Shot", image: "/images/character/luke/starter2.png" },
      {
        name: "Shadow Concealment",
        image: "/images/character/luke/starter3.png",
      },
      { name: "Rapid Fire", image: "/images/character/luke/starter4.png" },
    ],
    unique: [
      { name: "Stealth Reload", image: "/images/character/luke/unique1.png" },
      {
        name: "Seize the Opportunity",
        image: "/images/character/luke/unique2.png",
      },
      {
        name: "Dance of the Demon",
        image: "/images/character/luke/unique3.png",
      },
      { name: "Finisher Round", image: "/images/character/luke/unique4.png" },
    ],
  },
};
const DEFAULT_CARD_IMAGES = {
  neutral: "/images/card/neutral.png",
  monster: "/images/card/monster.png",
  forbidden: "/images/card/forbidden.png",
  starter: "/images/card/starter.png",
  placeholder: "/images/card/placeholder.png",
  remove: "/images/card/remove.png",
} as const;
const TIER_LIMITS: Record<number, number> = {
  1: 30,
  2: 40,
  3: 50,
  4: 60,
  5: 70,
  6: 80,
  7: 90,
  8: 100,
  9: 110,
  10: 120,
  11: 130,
  12: 140,
  13: 150,
  14: 160,
  15: 170,
  16: 180,
};
// prettier-ignore
const FACTION_BORDER_MAP: Record<string, string[]> = {
  "/images/card/order-border.png": [
    "amir",
    "luke",
    "hugo",
    "yuki"
    ],
  "/images/card/void-border.png": [
    "tressa",
    "rin",
    "renoa",
    "rei",
    "kayron",
    "chizuru",
  ],
  "/images/card/instinct-border.png": [
    "nia",
    "khalipe",
    "orlea",
    "cassius",
    "sereniel",
    "narja",
  ],
  "/images/card/passion-border.png": [
    "selena",
    "lucas",
    "mei-lin",
    "maribell",
    "veronica",
    "owen",
  ],
  "/images/card/justice-border.png": [
    "magna",
    "mika",
    "beryl",
    "haru"
  ],
};
type CardType = "neutral" | "monster" | "forbidden" | "starter";
interface DeckCard {
  id: string;
  name: string;
  image?: string;
  cardType: CardType;
  isStartingCard: boolean;
  hasNormalEpiphany: boolean;
  hasDivineEpiphany: boolean;
  isRemoved: boolean;
  wasConverted: boolean;
  isMutantSample?: boolean;
  isDuplicated?: boolean;
  isAdded?: boolean;
  grade?: "normal" | "rare" | "legendary";
}
interface Action {
  type:
    | "epiphany"
    | "divine"
    | "duplicate"
    | "convert"
    | "remove"
    | "add"
    | "mutant";
  cardId: string;
  previousDeck?: DeckCard[];
}
const formatCharacterName = (key: string): string =>
  key
    .split(/[-_ ]+/)
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : ""))
    .join(" ");
export function RunTracker() {
  const [character, setCharacter] = useState<string>("none");
  const [tier, setTier] = useState(1);
  const [nightmareMode, setNightmareMode] = useState(false);
  const [deck, setDeck] = useState<DeckCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [showAddCard, setShowAddCard] = useState(false);
  const [open, setOpen] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [actionHistory, setActionHistory] = useState<Action[]>([]);
  const limit = TIER_LIMITS[tier] + (nightmareMode ? 10 : 0);
  const percentage = (totalPoints / limit) * 100;

  useEffect(() => {
    const saved = sessionStorage.getItem("czn-run-tracker");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCharacter(parsed.character ?? "none");
        setTier(parsed.tier ?? 1);
        setNightmareMode(parsed.isNightmare ?? false);
        setDeck(parsed.deck ?? []);
        setActionHistory(parsed.actionHistory ?? []);
        setTotalPoints(parsed.totalPoints ?? 0);
      } catch (e) {
        console.error("Failed to load saved state", e);
      }
    } else {
      initializePlaceholderDeck();
    }
  }, []);

  useEffect(() => {
    if (character !== "none" || deck.length > 0) {
      sessionStorage.setItem(
        "czn-run-tracker",
        JSON.stringify({
          character,
          tier,
          isNightmare: nightmareMode,
          deck,
          actionHistory,
          totalPoints,
        }),
      );
    }
  }, [character, tier, nightmareMode, deck, actionHistory, totalPoints]);

  // Inside the useEffect that calculates totalPoints
  useEffect(() => {
    const cardPoints = deck.reduce(
      (sum, card) => sum + getCardPointValue(card),
      0,
    );

    const activeDups = deck.filter(
      (c) => c.isDuplicated && !c.isRemoved && !c.wasConverted,
    ).length;
    const dupPoints = Math.max(0, activeDups - 2) * 40;

    const removedValuableStarters = deck.filter((card) => {
      if (
        !card.isStartingCard ||
        card.isDuplicated ||
        (!card.isRemoved && !card.wasConverted)
      ) {
        return false;
      }
      const pos = parseInt(card.id);
      return !isNaN(pos) && pos >= 1 && pos <= 4;
    }).length;

    const removalPoints = removedValuableStarters * 20;

    setTotalPoints(cardPoints + dupPoints + removalPoints);
  }, [deck]);
  const initializePlaceholderDeck = () => {
    setDeck(
      Array.from({ length: 8 }, (_, i) => ({
        id: String(i + 1),
        name: "",
        cardType: "starter" as CardType,
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      })),
    );
  };
  const handleCharacterChange = (value: string) => {
    setCharacter(value);
    if (value === "none") {
      initializePlaceholderDeck();
      return;
    }
    const data = CHARACTER_CARDS[value];
    if (!data) return;
    const newDeck: DeckCard[] = [
      ...data.starter.map((c, i) => ({
        id: String(i + 1),
        name: c.name,
        image: c.image,
        cardType: "starter" as CardType,
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      })),
      ...data.unique.map((c, i) => ({
        id: String(i + 5),
        name: c.name,
        image: c.image,
        cardType: "starter" as CardType,
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      })),
    ];
    setDeck(newDeck);
  };
  const recordAction = (action: Action) => {
    setActionHistory((prev) => [...prev, action]);
  };
  const getCardPointValue = (card: DeckCard): number => {
    if (card.isRemoved || card.wasConverted) return 0;
    let points = 0;
    if (card.cardType === "starter") {
      // 0 base
    } else if (card.cardType === "neutral") {
      points += 20;
    } else if (card.cardType === "forbidden") {
      points += 20;
    } else if (card.cardType === "monster") {
      if (card.grade === "normal") points += 20;
      else if (card.grade === "rare") points += 50;
      else if (card.grade === "legendary") points += 80;
      else points += 80; // default legendary
    }
    if (card.hasDivineEpiphany) {
      points += 20;
    }
    return points;
  };
  const getActiveDuplicatesCount = () => {
    return deck.filter((c) => c.isDuplicated && !c.isRemoved && !c.wasConverted)
      .length;
  };
  const getRemovalsCount = () => {
    return deck.filter((c) => c.isRemoved || c.wasConverted).length;
  };
  const toggleEpiphany = (cardId: string, type: "normal" | "divine") => {
    const card = deck.find((c) => c.id === cardId);
    if (!card || card.isRemoved || card.cardType === "forbidden") return;
    const isDivine = type === "divine";
    const current = isDivine ? card.hasDivineEpiphany : card.hasNormalEpiphany;
    const opposite = isDivine ? card.hasNormalEpiphany : card.hasDivineEpiphany;
    if (current && opposite) return;
    recordAction({
      type: isDivine ? "divine" : "epiphany",
      cardId,
      previousDeck: [...deck],
    });
    setDeck((prev) =>
      prev.map((c) =>
        c.id === cardId
          ? {
              ...c,
              [isDivine ? "hasDivineEpiphany" : "hasNormalEpiphany"]: !current,
            }
          : c,
      ),
    );
    setSelectedCard(null);
  };
  const duplicateCard = (cardId: string) => {
    if (getActiveDuplicatesCount() >= 4) return; // Max 4 duplicates
    const card = deck.find((c) => c.id === cardId);
    if (!card || card.isRemoved) return;
    const newCard: DeckCard = {
      ...card,
      id: Date.now().toString(),
      isDuplicated: true,
      isRemoved: false,
    };
    recordAction({
      type: "duplicate",
      cardId,
      previousDeck: [...deck],
    });
    setDeck((prev) => [...prev, newCard]);
    setSelectedCard(null);
  };

  const convertCard = (cardId: string) => {
    if (getRemovalsCount() >= 5) return; // Max 5 removals
    const card = deck.find((c) => c.id === cardId);
    if (
      !card ||
      card.isRemoved ||
      card.wasConverted ||
      card.cardType === "forbidden"
    )
      return;
    recordAction({
      type: "convert",
      cardId,
      previousDeck: [...deck],
    });

    const newNeutralCard: DeckCard = {
      ...card,
      id: `converted-${card.id}-${Date.now()}`,
      cardType: "neutral" as const,
      name: "Neutral Card",
      image: DEFAULT_CARD_IMAGES.neutral,
      wasConverted: false,
      isStartingCard: false,
      isAdded: true,
      hasNormalEpiphany: false,
      hasDivineEpiphany: false,
    };
    setDeck((prev) => [
      ...prev.map((c) => (c.id === cardId ? { ...c, wasConverted: true } : c)),
      newNeutralCard,
    ]);
    setSelectedCard(null);
  };
  const removeCard = (cardId: string) => {
    if (getRemovalsCount() >= 5) return; // Max 5 removals
    const card = deck.find((c) => c.id === cardId);
    if (!card || card.isRemoved || card.cardType === "forbidden") return;
    recordAction({
      type: "remove",
      cardId,
      previousDeck: [...deck],
    });
    setDeck((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, isRemoved: true } : c)),
    );
    setSelectedCard(null);
  };
  const convertToMutantSample = (cardId: string) => {
    if (getRemovalsCount() >= 5) return; // Max 5 removals
    const card = deck.find((c) => c.id === cardId);
    if (!card || card.isRemoved || card.cardType === "forbidden") return;
    recordAction({
      type: "mutant",
      cardId,
      previousDeck: [...deck],
    });
    setDeck((prev) =>
      prev.map((c) =>
        c.id === cardId
          ? {
              ...c,
              isRemoved: true,
              isMutantSample: true,
              name: "Mutant Sample",
              image: DEFAULT_CARD_IMAGES.remove,
            }
          : c,
      ),
    );
    setSelectedCard(null);
  };
  const addNewCard = (type: CardType, grade?: DeckCard["grade"]) => {
    const names = {
      neutral: "Neutral Card",
      monster: "Monster Card",
      forbidden: "Forbidden Card",
      starter: "Starter Card",
    };
    const newCard: DeckCard = {
      id: Date.now().toString(),
      name: names[type],
      image: DEFAULT_CARD_IMAGES[type],
      cardType: type,
      isStartingCard: false,
      hasNormalEpiphany: false,
      hasDivineEpiphany: false,
      isRemoved: false,
      wasConverted: false,
      isAdded: true,
      grade: type === "monster" ? grade : undefined,
    };
    recordAction({
      type: "add",
      cardId: newCard.id,
      previousDeck: [...deck],
    });
    setDeck((prev) => [...prev, newCard]);
    setShowAddCard(false);
  };
  const resetDeck = () => {
    handleCharacterChange(character);
    setTotalPoints(0);
    setActionHistory([]);
  };
  const undoLastAction = () => {
    if (actionHistory.length === 0) return;
    const last = actionHistory[actionHistory.length - 1];
    if (last.previousDeck) setDeck(last.previousDeck);
    setActionHistory((prev) => prev.slice(0, -1));
    setSelectedCard(null);
  };
  const deleteCard = (cardId: string) => {
    setDeck((prev) => prev.filter((c) => c.id !== cardId));
  };
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!selectedCard) return;
      const el = document.getElementById(`card-${selectedCard}`);
      if (el && !el.contains(e.target as Node)) {
        setSelectedCard(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [selectedCard]);
  const renderCard = (card: DeckCard, isBase: boolean) => {
    const isSelected = selectedCard === card.id;
    const factionBorder = Object.entries(FACTION_BORDER_MAP).find(([, chars]) =>
      chars.includes(character),
    )?.[0];
    return (
      <div
        key={card.id}
        id={`card-${card.id}`}
        className={`group relative aspect-[2/3] cursor-pointer rounded-xl overflow-hidden transition-all hover:scale-102 ${
          isSelected ? "" : ""
        } ${card.isRemoved ? "opacity-20" : ""} ${
          card.wasConverted && isBase ? "opacity-20" : ""
        } bg-black/40 border border-white/10`}
        onClick={() => {
          if (card.isMutantSample || (card.wasConverted && isBase)) return;
          card.isRemoved
            ? setSelectedCard(null)
            : setSelectedCard(isSelected ? null : card.id);
        }}
      >
        {card.image ? (
          <img
            src={card.image}
            alt={card.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: card.isDuplicated
                ? "scaleX(-1) scale(1.05)"
                : "scale(1.05)",
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/40 text-xs">
            No Image
          </div>
        )}
        {/* Faction / Type Borders */}
        {isBase && factionBorder && (
          <img
            src={factionBorder}
            alt="Faction border"
            className="z-10 scale-105 absolute left-0 top-0 bottom-0 w-auto h-full object-cover object-left pointer-events-none opacity-100"
          />
        )}
        {card.cardType === "neutral" && !card.isStartingCard && (
          <img
            src="/images/card/neutral-border.png"
            className="z-10 scale-105 absolute left-0 top-0 bottom-0 w-auto h-full object-cover object-left pointer-events-none opacity-100"
          />
        )}
        {card.cardType === "monster" && (
          <img
            src="/images/card/monster-border.png"
            className="z-10 scale-105 absolute left-0 top-0 bottom-0 w-auto h-full object-cover object-left pointer-events-none opacity-100"
          />
        )}
        {card.cardType === "forbidden" && (
          <img
            src="/images/card/neutral-border.png"
            className="z-10 scale-105 absolute left-0 top-0 bottom-0 w-auto h-full object-cover object-left pointer-events-none opacity-100"
          />
        )}
        {card.isDuplicated && (
          <img
            src="/images/card/deco_card_copy.png"
            className="z-10 scale-100 absolute right-0 top-0 bottom-0 w-auto h-full object-cover pointer-events-none opacity-100"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 p-2 flex flex-col justify-between">
          <div>
            <div className="flex gap-1 mt-1 pl-2">
              {card.hasDivineEpiphany && (
                <img
                  src="/images/card/icon_card_battle_expand_nihilum.png"
                  alt="Divine"
                  className="h-16 w-10"
                />
              )}
              {card.hasNormalEpiphany && (
                <img
                  src="/images/card/icon_card_battle_expand_default.png"
                  alt="Epiphany"
                  className="h-14 w-14"
                />
              )}
            </div>
          </div>
          <div className="text-right font-bold drop-shadow-md pr-1">
            {getCardPointValue(card)}
          </div>
        </div>
        {isSelected && !card.isRemoved && !card.isMutantSample && (
          <div className="absolute inset-0 flex flex-col justify-center gap-1 p-2 z-30 bg-black/60 rounded-md">
            <Dialog
              open={!!selectedCard}
              onOpenChange={(open) => !open && setSelectedCard(null)}
            >
              <DialogContent className="sm:max-w-md bg-gradient-to-b from-card/95 to-card/80 backdrop-blur-lg border border-purple-500/20 shadow-2xl rounded-2xl">
                <DialogHeader className="pb-3 border-b border-border/40">
                  <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                    {selectedCard &&
                      deck.find((c) => c.id === selectedCard)?.name}
                  </DialogTitle>

                  <DialogDescription className="text-center text-sm mt-1.5 text-muted-foreground/90">
                    Total{" "}
                    <span className="font-semibold text-purple-300">
                      +
                      {getCardPointValue(
                        deck.find((c) => c.id === selectedCard) ||
                          ({ cardType: "starter" } as any),
                      )}
                    </span>{" "}
                    points
                  </DialogDescription>
                </DialogHeader>

                {selectedCard &&
                  (() => {
                    const card = deck.find((c) => c.id === selectedCard)!;
                    if (card.isRemoved || card.isMutantSample) return null;

                    const cardPosition = parseInt(card.id);
                    const isProtectedBaseCard =
                      !isNaN(cardPosition) &&
                      (cardPosition <= 3 || cardPosition === 8);
                    const isForbidden = card.cardType === "forbidden";

                    return (
                      <div className="space-y-6 py-5">
                        {/* ── Epiphany Section ── */}
                        {!isProtectedBaseCard && !isForbidden && (
                          <div className="space-y-3">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300/80 text-center">
                              Epiphany
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                disabled={card.hasDivineEpiphany}
                                onClick={() =>
                                  toggleEpiphany(card.id, "normal")
                                }
                                className={`
                                h-11 text-sm font-medium transition-all duration-200
                                border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-950/20 hover:shadow-purple-500/10
                                ${
                                  card.hasNormalEpiphany
                                    ? "bg-red-950/30 border-red-500/40 text-red-400 hover:bg-red-950/40"
                                    : ""
                                }
                              `}
                              >
                                {card.hasNormalEpiphany
                                  ? "Remove"
                                  : "Normal Epiphany"}
                              </Button>

                              <Button
                                variant="outline"
                                size="sm"
                                disabled={card.hasNormalEpiphany}
                                onClick={() =>
                                  toggleEpiphany(card.id, "divine")
                                }
                                className={`
                                h-11 text-sm font-medium transition-all duration-200
                                border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-950/20 hover:shadow-purple-500/10
                                ${
                                  card.hasDivineEpiphany
                                    ? "bg-indigo-950/40 border-indigo-400/50 text-red-400 hover:bg-indigo-950/50"
                                    : ""
                                }
                              `}
                              >
                                {card.hasDivineEpiphany
                                  ? "Remove"
                                  : "Divine Epiphany"}
                              </Button>
                            </div>
                          </div>
                        )}

                        {/* ── Actions Section ── */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300/80 text-center">
                            {isForbidden ? "Forbidden Actions" : "Card Actions"}
                          </h4>

                          <div className="grid gap-2.5">
                            {/* Duplicate */}
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={getActiveDuplicatesCount() >= 4}
                              title={
                                getActiveDuplicatesCount() >= 4
                                  ? "Maximum 4 duplicates reached"
                                  : undefined
                              }
                              onClick={() => duplicateCard(card.id)}
                              className={`
                              h-11 text-sm font-medium justify-center transition-all duration-200
                              border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-950/20 hover:shadow-purple-500/10
                            `}
                            >
                              Duplicate Card
                              {card.isDuplicated && (
                                <span className="ml-2 text-xs opacity-70">
                                  (copy)
                                </span>
                              )}
                            </Button>

                            {/* Convert */}
                            {!isForbidden && (
                              <Button
                                variant="outline"
                                size="sm"
                                disabled={card.wasConverted}
                                onClick={() => {
                                  convertCard(card.id);
                                  setSelectedCard(null);
                                }}
                                className={`
                                h-11 text-sm font-medium justify-center transition-all duration-200
                                border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-950/20 hover:shadow-purple-500/10
                                disabled:opacity-50 disabled:hover:bg-transparent disabled:cursor-not-allowed
                              `}
                              >
                                Convert to Neutral Card
                              </Button>
                            )}

                            {/* Mutant Sample */}
                            {!isForbidden && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  convertToMutantSample(card.id);
                                  setSelectedCard(null);
                                }}
                                className={`
                                h-11 text-sm font-medium justify-center transition-all duration-200
                                border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-950/20 hover:shadow-purple-500/10
                              `}
                              >
                                Convert to [Remove] Tag
                              </Button>
                            )}
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => {
                                removeCard(card.id);
                                setSelectedCard(null);
                              }}
                              className={`
                              h-11 text-sm font-medium justify-center mt-1
                              bg-gradient-to-r from-red-600/20 to-red-800/20 border-red-500/40 
                              hover:from-red-600/40 hover:to-red-800/40 hover:shadow-red-500/20
                              transition-all duration-200
                            `}
                            >
                              Remove Card
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    );
  };
  const baseCards = deck.filter((c) => {
    const id = parseInt(c.id);
    return !isNaN(id) && id >= 1 && id <= 8 && !c.isDuplicated;
  });
  const addedCards = deck.filter((c) => c.isDuplicated || c.isAdded);
  return (
    <TooltipProvider>
      <div className="space-y-6 max-w-7xl mx-auto px-6">
        <div className="text-center py-8 -mt-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-2xl leading-tight text-left">
            Save Data Helper
          </h2>
        </div>
        <Card className="border-border/60 bg-card/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Run Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1 space-y-3 w-full">
                <div className="flex items-center justify-between">
                  {/* Tier Label */}
                  <Label className="text-base font-medium">
                    Faint Memory Tier
                  </Label>
                  <div className="flex items-center gap-4">
                    <Checkbox
                      id="nightmare"
                      checked={nightmareMode}
                      onCheckedChange={(v) => setNightmareMode(!!v)}
                      className="w-5 h-5 rounded border-1 "
                    />
                    <Label
                      htmlFor="nightmare"
                      className="text-lg font-bold cursor-pointer select-none text-foreground"
                    >
                      Deep Trauma
                    </Label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="rounded-full p-1 hover:bg-accent/50 transition-colors">
                          <HelpCircle className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>+10 points to Faint Memory Limit</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                {/* Tier Buttons */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                    (t) => (
                      <Button
                        key={t}
                        variant="outline"
                        size="sm"
                        onClick={() => setTier(t)}
                        className={`
                      group relative overflow-hidden font-medium transition-colors duration-150
                      ${
                        tier === t
                          ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-transparent"
                          : "hover:border-purple-400"
                      }
                      `}
                      >
                        <div className="pointer-events-none absolute inset-0">
                          <div
                            className="
                          absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                          -translate-x-[150%] skew-x-12
                          transition-transform duration-0 group-hover:duration-1000
                          group-hover:translate-x-[120%] ease-out
                        "
                          />
                        </div>
                        {tier === t && <div className="" />}
                        <span className="relative z-10">{t}</span>
                      </Button>
                    ),
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-base">Character</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between h-20 px-3"
                  >
                    <div className="flex items-center gap-3">
                      {character === "none" ? (
                        <>
                          <div className="w-16 h-16 rounded-xl border-2 border-dashed border-muted-foreground/50 flex items-center justify-center bg-secondary">
                            <X className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <span className="text-muted-foreground">
                            Select a character
                          </span>
                        </>
                      ) : character && CHARACTER_CARDS[character]?.portrait ? (
                        <>
                          <div className="w-16 h-16 rounded-xl overflow-hidden border-1 border-gray-500/50 shadow-md">
                            <img
                              src={CHARACTER_CARDS[character].portrait}
                              alt={formatCharacterName(character)}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="font-medium">
                            {formatCharacterName(character)}
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                            {formatCharacterName(character)[0]}
                          </div>
                          <span>{formatCharacterName(character)}</span>
                        </>
                      )}
                    </div>
                    <ChevronsUpDown className="h-4 w-4 opacity-80 shrink-0" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-full p-0"
                  align="start"
                  sideOffset={5}
                >
                  <Command className="max-h-76 overflow-y-auto">
                    <CommandInput placeholder="Search character..." />
                    <CommandList>
                      <CommandEmpty>No character found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          value="none"
                          onSelect={() => {
                            handleCharacterChange("none");
                            setOpen(false);
                          }}
                        >
                          <div className="flex items-center gap-4 w-full">
                            <div className="w-10 h-10 rounded-xl border-2 border-dashed border-muted-foreground/50 flex items-center justify-center bg-secondary">
                              <X className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <span className="font-medium">None</span>
                          </div>
                          {character === "none" && (
                            <Check className="ml-auto h-5 w-5" />
                          )}
                        </CommandItem>
                        {Object.keys(CHARACTER_CARDS)
                          .sort()
                          .map((key) => {
                            const portrait = CHARACTER_CARDS[key].portrait;
                            return (
                              <CommandItem
                                key={key}
                                value={key}
                                onSelect={() => {
                                  handleCharacterChange(key);
                                  setOpen(false);
                                }}
                              >
                                <div className="flex items-center gap-4 w-full">
                                  {portrait ? (
                                    <div className="w-10 h-10 rounded-xl overflow-hidden border-1 border-gray-500/30 shadow">
                                      <img
                                        src={portrait}
                                        alt={formatCharacterName(key)}
                                        className="w-full h-full object-cover object-top scale-100"
                                      />
                                    </div>
                                  ) : (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/80 to-cyan-500/80 flex items-center justify-center text-white font-bold">
                                      {formatCharacterName(key)[0]}
                                    </div>
                                  )}
                                  <span className="font-medium">
                                    {formatCharacterName(key)}
                                  </span>
                                </div>
                                {character === key && (
                                  <Check className="ml-auto h-5 w-5" />
                                )}
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-base">
                <span className="text-muted-foreground">Points Used</span>
                <span
                  className={`font-bold text-lg ${
                    percentage > 100 ? "text-red-400" : ""
                  }`}
                >
                  {totalPoints} / {limit} {nightmareMode && "(+10)"}
                </span>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    percentage > 100
                      ? "bg-red-500"
                      : "bg-gradient-to-r from-purple-500 to-cyan-400"
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
              {percentage > 100 && (
                <p className="text-sm text-red-400">
                  Over cap by {totalPoints - limit} points
                </p>
              )}
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-base text-muted-foreground">
                    Removed
                  </span>
                  <span
                    className={`font-semibold px-2 py-0.5 rounded-full text-sm ${
                      getRemovalsCount() >= 5
                        ? "bg-red-500/20 text-red-400 border border-red-500/40"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {getRemovalsCount()}/5
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-base text-muted-foreground">
                    Duplicated
                  </span>
                  <span
                    className={`font-semibold px-2 py-0.5 rounded-full text-sm ${
                      getActiveDuplicatesCount() >= 4
                        ? "bg-red-500/20 text-red-400 border border-red-500/40"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {getActiveDuplicatesCount()}/4
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Cards Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/60 bg-card/40 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl">Base Cards</CardTitle>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={undoLastAction}
                    disabled={!actionHistory.length}
                    variant="outline"
                    className="
                    bg-card/80 border-border/50 text-purple-300
                    hover:bg-purple-500/10 hover:border-purple-400
                    hover:translate-y-[-2px]
                    disabled:opacity-40 disabled:hover:translate-y-0
                    transition-all
                  "
                  >
                    <Undo className="h-4 w-4" />
                    Undo
                  </Button>
                  <Button
                    size="sm"
                    onClick={resetDeck}
                    variant="outline"
                    className="
                    bg-card/80 border-red-500/40 text-red-400
                    hover:bg-red-500/10 hover:border-red-500/60
                    hover:translate-y-[-2px]
                    transition-all
                  "
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {baseCards.map((card) => renderCard(card, true))}
              </div>
            </CardContent>
          </Card>
          {/* Added Cards */}
          <Card className="border-border/60 bg-card/40 backdrop-blur-sm">
            <CardHeader className="pb-4.5">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Added Cards</CardTitle>
                <span className="text-sm text-muted-foreground">
                  {addedCards.length} card{addedCards.length !== 1 ? "s" : ""}
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {addedCards.map((card) => renderCard(card, false))}
                <Dialog open={showAddCard} onOpenChange={setShowAddCard}>
                  <DialogTrigger asChild>
                    <div
                      className={`
                      group relative aspect-[2/3] cursor-pointer rounded-xl overflow-hidden 
                      transition-all hover:scale-102 bg-black/30 border-2 border-dashed border-purple-400/40 
                      hover:border-purple-400/70 hover:bg-purple-950/10 flex items-center justify-center
                    `}
                    >
                      <div className="flex flex-col items-center justify-center gap-3 text-muted-foreground group-hover:text-purple-300 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-muted/40 flex items-center justify-center border border-purple-400/30 group-hover:border-purple-400/60 group-hover:bg-purple-500/10 transition-all">
                          <Plus className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-md bg-gradient-to-b from-card/95 to-card/80 backdrop-blur-lg border border-purple-500/20 shadow-2xl rounded-2xl">
                    <DialogHeader className="pb-3 border-b border-border/40">
                      <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                        Add a New Card
                      </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6 py-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Neutral */}
                        <Button
                          variant="outline"
                          className={`
                          h-28 flex flex-col items-center justify-center text-center transition-all duration-200
                          hover:scale-[1.02]
                        `}
                          onClick={() => {
                            addNewCard("neutral");
                            setShowAddCard(false);
                          }}
                        >
                          <div className="text-lg font-semibold text-white">
                            Neutral Card
                          </div>
                          <div className="text-sm text-muted-foreground/90 mt-1.5">
                            +20 points
                          </div>
                        </Button>

                        {/* Forbidden */}
                        <Button
                          variant="outline"
                          className={`
                          h-28 flex flex-col items-center justify-center text-center transition-all duration-200
                          hover:scale-[1.02]
                        `}
                          onClick={() => {
                            addNewCard("forbidden");
                            setShowAddCard(false);
                          }}
                        >
                          <div className="text-lg font-semibold text-yellow-300">
                            Forbidden Card
                          </div>
                          <div className="text-sm text-muted-foreground/90 mt-1.5">
                            +20 points
                          </div>
                        </Button>
                      </div>

                      {/* Monster Cards */}
                      <div className="space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300/80 text-center">
                          Monster Cards
                        </h4>

                        <div className="grid grid-cols-3 gap-3">
                          {[
                            {
                              grade: "normal",
                              label: "Normal",
                              points: 20,
                              color: "white-500/30",
                              hover: "white-600/20",
                              textColor: "white-300",
                            },
                            {
                              grade: "rare",
                              label: "Rare",
                              points: 50,
                              color: "cyan-500/30",
                              hover: "cyan-600/20",
                              textColor: "cyan-300",
                            },
                            {
                              grade: "legendary",
                              label: "Legendary",
                              points: 80,
                              color: "purple-600/40",
                              hover: "purple-700/25",
                              textColor: "purple-400",
                            },
                          ].map((item) => (
                            <Button
                              key={item.grade}
                              variant="outline"
                              className={`
                              h-24 flex flex-col items-center justify-center text-center transition-all duration-200
                              border-${item.color} 
                              hover:border-opacity-70 hover:bg-${item.hover} hover:shadow-${item.textColor.replace("300", "500")}/10 hover:scale-[1.02]
                            `}
                              onClick={() => {
                                addNewCard(
                                  "monster",
                                  item.grade as DeckCard["grade"],
                                );
                                setShowAddCard(false);
                              }}
                            >
                              <div
                                className={`font-semibold text-${item.textColor}`}
                              >
                                {item.label}
                              </div>
                              <div className="text-xs text-muted-foreground/90 mt-1.5">
                                +{item.points} points
                              </div>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
