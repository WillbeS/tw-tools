import { Download, Map as MapIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CopyInput } from "@/components/ui/CopyInput";
import { World, MapType } from "@/lib/types";

interface MapDisplayProps {
  mapImage: string | null;
  selectedWorld: string;
  selectedMapType: string;
  worlds: World[];
  mapTypes: MapType[];
  onDownload: () => void;
}

export function MapDisplay({
  mapImage,
  selectedWorld,
  selectedMapType,
  worlds,
  mapTypes,
  onDownload,
}: MapDisplayProps) {
  const selectedWorldData = worlds.find((w) => w.id === selectedWorld);
  const selectedMapTypeData = mapTypes.find((t) => t.id === selectedMapType);

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Generated Map</h3>
        {mapImage && (
          <button
            onClick={onDownload}
            className="flex items-center space-x-2 px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
        )}
      </div>

      {mapImage && (
        <CopyInput
          label="Share Link (Discord-ready)"
          value={mapImage}
          className="mb-4"
        />
      )}

      <div className="bg-slate-800 rounded-lg p-4 min-h-96 flex items-center justify-center">
        {mapImage ? (
          <div className="w-full text-center">
            <img
              src={mapImage}
              alt={`${selectedWorld} ${selectedMapType} map`}
              className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
              onError={() => {}}
            />
            <p className="text-slate-400 text-sm mt-2">
              {selectedWorldData?.name} - {selectedMapTypeData?.name}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <MapIcon className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">
              Select a world and map type, then click "Generate Map" to display
              the visualization.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
