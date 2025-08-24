import { useState } from "react";
import rawData from "@/data/buildingCosts.json";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox"; // Keep the custom checkbox

import { BuildingCostsData, CostRecord, Resources } from "@/lib/types";
import { randomId } from "@/lib/utils";

const BUILDING_COSTS = rawData as BuildingCostsData;

export const BuildingCostForm = ({
  onSubmit,
}: {
  onSubmit: (record: CostRecord) => void;
}) => {
  const [building, setBuilding] = useState("");
  const [minLevel, setMinLevel] = useState("");
  const [maxLevel, setMaxLevel] = useState("");
  const [isReducedCost, setIsReducedCost] = useState(false);

  const levelsCount = BUILDING_COSTS[building]?.costsPerLevel.length || 0;
  const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);
  const levels = range(levelsCount);

  const handleSubmit = () => {
    const start = Number(minLevel);
    const end = Number(maxLevel);

    validateForm(start, end);

    const resources: Resources = {
      wood: 0,
      clay: 0,
      iron: 0,
    };

    for (let i = start; i <= end; i++) {
      const costsPerLevel = BUILDING_COSTS[building].costsPerLevel[i - 1];
      const wood = isReducedCost
        ? costsPerLevel.wood - costsPerLevel.wood * 0.2
        : costsPerLevel.wood;
      const clay = isReducedCost
        ? costsPerLevel.clay - costsPerLevel.clay * 0.2
        : costsPerLevel.clay;
      const iron = isReducedCost
        ? costsPerLevel.iron - costsPerLevel.iron * 0.2
        : costsPerLevel.iron;
      resources.wood += Math.floor(wood);
      resources.clay += Math.floor(clay);
      resources.iron += Math.floor(iron);
    }

    const record: CostRecord = {
      id: randomId(),
      name: `${building} (${start}-${end} lv)`,
      resources,
      reduced: isReducedCost,
    };

    onSubmit(record);
    resetForm();
  };

  const validateForm = (start: number, end: number) => {
    if (building === "") {
      throw Error("You must select a building");
    }
    if (!BUILDING_COSTS[building]) {
      throw Error("Invalid building name: " + building);
    }
    if (start < 1 || start > levelsCount) {
      throw Error("Invalid min level: " + start);
    }
    if (end < 1 || end > levelsCount) {
      throw Error("Invalid max level: " + end);
    }
    if (start > end) {
      throw Error("Min level cannot be higher than max level");
    }
  };

  const resetForm = () => {
    setBuilding("");
    setMinLevel("");
    setMaxLevel("");
    setIsReducedCost(false);
  };

  // Generate options for your Select component format
  const buildingOptions = Object.keys(BUILDING_COSTS).map((buildingName) => ({
    value: buildingName,
    label: buildingName,
  }));

  const levelOptions = levels.map((level) => ({
    value: level.toString(),
    label: level.toString(),
  }));

  const availableMaxLevels = levels
    .filter((level) => !minLevel || level >= Number(minLevel))
    .map((level) => ({
      value: level.toString(),
      label: level.toString(),
    }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select
          label="Building"
          placeholder="Select Building"
          value={building}
          onChange={setBuilding}
          options={buildingOptions}
        />

        <Select
          label="Min Level"
          placeholder="Select Min Level"
          value={minLevel}
          onChange={setMinLevel}
          options={levelOptions}
          disabled={!building}
        />

        <Select
          label="Max Level"
          placeholder="Select Max Level"
          value={maxLevel}
          onChange={setMaxLevel}
          options={availableMaxLevels}
          disabled={!building || !minLevel}
        />

        <div className="flex items-end">
          <Button
            onClick={handleSubmit}
            disabled={!building || !minLevel || !maxLevel}
            variant="primary"
            className="w-full disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
            Add
          </Button>
        </div>
      </div>

      <Checkbox
        label="Apply 20% Reduced Cost"
        checked={isReducedCost}
        setChecked={setIsReducedCost}
      />
    </div>
  );
};
