import { Map, Calculator, Clock } from "lucide-react";
import { Feature } from "@/lib/types";

export const features: Feature[] = [
  {
    icon: Map,
    title: "Interactive World Maps",
    description:
      "Visualize all worlds with comprehensive player and tribe rating systems",
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Calculator,
    title: "Resource Optimization",
    description:
      "Precise cost calculations for buildings and units to maximize efficiency",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Task Management",
    description:
      "Advanced timing tools to coordinate complex operations perfectly",
    gradient: "from-purple-500 to-pink-600",
  },
];
