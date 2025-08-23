import { Map, Calculator, Clock } from "lucide-react";
import { Tool } from "@/lib/types";

export const tools: Tool[] = [
  {
    icon: Map,
    title: "World Maps",
    description:
      "Generate world maps with player and tribe ratings for all worlds",
    href: "/world-maps",
    color: "text-green-500",
  },
  {
    icon: Calculator,
    title: "Cost Calculator",
    description:
      "Calculate costs for buildings and units to optimize your resources",
    href: "/cost-calculator",
    color: "text-blue-500",
  },
  {
    icon: Clock,
    title: "TW Timer",
    description:
      "Advanced timed tasks manager for coordinating your operations",
    href: "/tw-timer",
    color: "text-purple-500",
  },
];
