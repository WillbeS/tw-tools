"use client";

import { Container } from "@/components/ui/Container";
import { MapHeader } from "@/components/world-maps/MapHeader";
import { MapControls } from "@/components/world-maps/MapControls";
import { MapDisplay } from "@/components/world-maps/MapDisplay";
import { useWorldMaps } from "@/hooks/useWorldMaps";
import { mapTypes } from "@/data/map-types";

export default function WorldMapsPage() {
  const {
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
  } = useWorldMaps();

  return (
    <div className="py-8">
      <Container>
        <MapHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <MapControls
              worlds={worlds}
              mapTypes={mapTypes}
              selectedWorld={selectedWorld}
              selectedMapType={selectedMapType}
              isLoading={isLoading}
              isLoadingWorlds={isLoadingWorlds}
              error={error}
              worldsError={worldsError}
              onWorldChange={setSelectedWorld}
              onMapTypeChange={setSelectedMapType}
              onGenerateMap={generateMap}
            />
          </div>

          <div className="lg:col-span-2">
            <MapDisplay
              mapImage={mapImage}
              selectedWorld={selectedWorld}
              selectedMapType={selectedMapType}
              worlds={worlds}
              mapTypes={mapTypes}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
