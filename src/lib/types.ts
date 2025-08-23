import { LucideIcon } from "lucide-react";

export interface Tool {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface World {
  id: string;
  name: string;
  speed: number;
}

export interface MapType {
  id: string;
  name: string;
  description: string;
}

export interface MapState {
  selectedWorld: string;
  selectedMapType: string;
  mapImage: string | null;
  isLoading: boolean;
  error: string | null;
  copied: boolean;
}
