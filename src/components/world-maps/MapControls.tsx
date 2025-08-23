import { RefreshCw, Map as MapIcon, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Select } from "@/components/ui/Select";
import { InfoPanel } from "@/components/ui/InfoPanel";
import { World, MapType } from "@/lib/types";

interface MapControlsProps {
  worlds: World[];
  mapTypes: MapType[];
  selectedWorld: string;
  selectedMapType: string;
  isLoading: boolean;
  isLoadingWorlds: boolean;
  error: string | null;
  worldsError: string | null;
  onWorldChange: (world: string) => void;
  onMapTypeChange: (mapType: string) => void;
  onGenerateMap: () => void;
}

export function MapControls({
  worlds,
  mapTypes,
  selectedWorld,
  selectedMapType,
  isLoading,
  isLoadingWorlds,
  error,
  worldsError,
  onWorldChange,
  onMapTypeChange,
  onGenerateMap,
}: MapControlsProps) {
  const worldOptions = worlds.map((world) => ({
    value: world.id,
    label: world.name,
  }));

  const mapTypeOptions = mapTypes.map((type) => ({
    value: type.id,
    label: type.name,
  }));

  const selectedMapTypeData = mapTypes.find((t) => t.id === selectedMapType);

  return (
    <Card>
      <h3 className="text-xl font-semibold text-white mb-6">Map Settings</h3>

      {/* World Selection */}
      <div className="mb-6">
        {isLoadingWorlds ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-blue-500 mr-2" />
            <span className="text-slate-300">Loading worlds...</span>
          </div>
        ) : worldsError ? (
          <div className="p-3 bg-red-900/50 border border-red-700 rounded-lg mb-4">
            <p className="text-red-200 text-sm">
              Failed to load worlds: {worldsError}
            </p>
          </div>
        ) : (
          <Select
            label="Select World"
            value={selectedWorld}
            onChange={onWorldChange}
            placeholder="Choose a world..."
            options={worldOptions}
            disabled={worlds.length === 0}
          />
        )}
      </div>

      {/* Map Type Selection */}
      <Select
        label="Map Type"
        value={selectedMapType}
        onChange={onMapTypeChange}
        placeholder="Choose map type..."
        options={mapTypeOptions}
        description={selectedMapTypeData?.description}
        className="mb-6"
        disabled={isLoadingWorlds}
      />

      {/* Generate Button */}
      <button
        onClick={onGenerateMap}
        disabled={
          !selectedWorld ||
          !selectedMapType ||
          isLoading ||
          isLoadingWorlds ||
          worlds.length === 0
        }
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mb-4"
      >
        {isLoading ? (
          <RefreshCw className="h-5 w-5 animate-spin" />
        ) : (
          <MapIcon className="h-5 w-5" />
        )}
        <span>
          {isLoading
            ? "Generating..."
            : isLoadingWorlds
            ? "Loading..."
            : "Generate Map"}
        </span>
      </button>

      {/* Error Display */}
      {error && (
        <div className="mb-6 p-3 bg-red-900/50 border border-red-700 rounded-lg">
          <p className="text-red-200 text-sm">{error}</p>
        </div>
      )}

      {/* Info Panel */}
      <InfoPanel title="Daily Updates">
        <p>
          All maps are automatically updated once daily with fresh data from the
          game servers.
        </p>
      </InfoPanel>
    </Card>
  );
}
