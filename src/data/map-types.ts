import { MapType } from "@/lib/types";

export const mapTypes: MapType[] = [
  {
    id: "conquers",
    name: "Last Conquers",
    description: "Shows recent village conquers and territorial changes",
  },
  {
    id: "top20_tribes",
    name: "Top 20 Tribes - Points",
    description: "Top 20 tribes ranked by total points",
  },
  {
    id: "top20_all_tribes",
    name: "Top 20 Tribes - OD",
    description: "Top 20 tribes ranked by total opponent defeats",
  },
  {
    id: "top20_att_tribes",
    name: "Top 20 Tribes - ODA",
    description: "Top 20 tribes ranked by attack opponent defeats",
  },
  {
    id: "top20_def_tribes",
    name: "Top 20 Tribes - ODD",
    description: "Top 20 tribes ranked by defense opponent defeats",
  },
  {
    id: "top20_players",
    name: "Top 20 Players - Points",
    description: "Top 20 players ranked by total points",
  },
  {
    id: "top20_all_players",
    name: "Top 20 Players - OD",
    description: "Top 20 players ranked by total opponent defeats",
  },
  {
    id: "top20_att_players",
    name: "Top 20 Players - ODA",
    description: "Top 20 players ranked by attack opponent defeats",
  },
  {
    id: "top20_def_players",
    name: "Top 20 Players - ODD",
    description: "Top 20 players ranked by defense opponent defeats",
  },
  {
    id: "top20_sup_players",
    name: "Top 20 Players - ODS",
    description: "Top 20 players ranked by support opponent defeats",
  },
];
