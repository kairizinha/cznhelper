import { Attributes } from "@/types/card";

export const ATTRIBUTE_COLORS: Record<
  Attributes,
  {
    bg: string;
    border: string;
    text: string;
    hover: string;
    gradientFrom: string;
    gradientTo: string;
    badgeBg: string;
  }
> = {
  Instinct: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-800",
    hover: "hover:bg-yellow-100",
    gradientFrom: "from-yellow-400",
    gradientTo: "to-yellow-600",
    badgeBg: "bg-yellow-100",
  },
  Justice: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    hover: "hover:bg-blue-100",
    gradientFrom: "from-blue-400",
    gradientTo: "to-blue-600",
    badgeBg: "bg-blue-100",
  },
  Order: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    hover: "hover:bg-green-100",
    gradientFrom: "from-green-400",
    gradientTo: "to-green-600",
    badgeBg: "bg-green-100",
  },
  Passion: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-800",
    hover: "hover:bg-red-100",
    gradientFrom: "from-red-400",
    gradientTo: "to-red-600",
    badgeBg: "bg-red-100",
  },
  Void: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-800",
    hover: "hover:bg-purple-100",
    gradientFrom: "from-purple-400",
    gradientTo: "to-purple-600",
    badgeBg: "bg-purple-100",
  },
};
