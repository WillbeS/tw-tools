import { useState, useEffect, useCallback } from "react";
import { World } from "@/lib/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface UseWorldMapsReturn {
  worlds: World[];
  selectedWorld: string;
  selectedMapType: string;
  mapImage: string | null;
  isLoading: boolean;
  error: string | null;
  isLoadingWorlds: boolean;
  worldsError: string | null;
  setSelectedWorld: (world: string) => void;
  setSelectedMapType: (mapType: string) => void;
  generateMap: () => Promise<void>;
}

export function useWorldMaps(): UseWorldMapsReturn {
  const [worlds, setWorlds] = useState<World[]>([]);
  const [selectedWorld, setSelectedWorld] = useState<string>("");
  const [selectedMapType, setSelectedMapType] = useState<string>("conquers"); // Default to first map type
  const [mapImage, setMapImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingWorlds, setIsLoadingWorlds] = useState(true);
  const [worldsError, setWorldsError] = useState<string | null>(null);

  // Fetch worlds from API on component mount
  useEffect(() => {
    const fetchWorlds = async () => {
      setIsLoadingWorlds(true);
      setWorldsError(null);

      try {
        // Replace with your actual Symfony API endpoint for worlds
        console.log("Fetching worlds from API...");
        const response = await fetch(`${API_BASE_URL}/worlds`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch worlds: ${response.statusText}`);
        }

        const data = await response.json();

        // Assuming your API returns an array of worlds or an object with worlds property
        const worldsData = Array.isArray(data) ? data : data.worlds || [];

        setWorlds(worldsData);

        // Auto-select first active world if available
        const firstActiveWorld = worldsData[0];
        if (firstActiveWorld) {
          setSelectedWorld(firstActiveWorld.id);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch worlds";
        setWorldsError(errorMessage);
        console.error("Error fetching worlds:", errorMessage);
      } finally {
        setIsLoadingWorlds(false);
      }
    };

    fetchWorlds();
  }, []);

  const generateMap = useCallback(async () => {
    if (!selectedWorld || !selectedMapType) {
      setError("Please select both a world and map type");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Replace with your actual Symfony API endpoint
      const response = await fetch(
        `${API_BASE_URL}/maps/${selectedWorld}/${selectedMapType}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to load map: ${response.statusText}`);
      }

      // If your API returns the image URL or base64
      const data = await response.json();
      setMapImage(data.imageUrl || data.url || data.image); // Adjust based on your API response
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load map";
      setError(errorMessage);
      console.error("Error generating map:", errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [selectedWorld, selectedMapType]); // Dependencies that generateMap actually uses

  // Auto-generate map when both world and map type are selected
  useEffect(() => {
    const autoGenerate = async () => {
      // Only auto-generate if:
      // 1. We have both world and map type selected
      // 2. We're not currently loading worlds
      // 3. We don't already have a map image
      // 4. We don't have any errors
      if (
        selectedWorld &&
        selectedMapType &&
        !isLoadingWorlds &&
        !mapImage &&
        !worldsError &&
        worlds.length > 0
      ) {
        await generateMap();
      }
    };

    autoGenerate();
  }, [
    selectedWorld,
    selectedMapType,
    isLoadingWorlds,
    worldsError,
    worlds.length,
    mapImage,
    generateMap,
  ]); // Dependencies

  return {
    worlds,
    selectedWorld,
    selectedMapType,
    mapImage,
    isLoading,
    error,
    isLoadingWorlds,
    worldsError,
    setSelectedWorld,
    setSelectedMapType,
    generateMap,
  };
}
