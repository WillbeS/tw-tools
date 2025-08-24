import { World } from "./types";

export const getLatestWorld = (worlds: World[]): World | null => {
  if (worlds.length === 0) return null;

  let latest = worlds[0];
  for (const world of worlds) {
    if (!world.name.includes("World")) {
      break;
    }
    latest = world;
  }

  return latest;
};
