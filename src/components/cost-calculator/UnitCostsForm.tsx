import { useState } from "react";

import rawData from "@/data/unitCosts.json";
import { CostRecord, Resources, UnitCostsData } from "@/lib/types";
import { randomId } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";

const UNIT_COSTS = rawData as UnitCostsData;

export const UnitCostForm = ({
  onSubmit,
}: {
  onSubmit: (record: CostRecord) => void;
}) => {
  const [unit, setUnit] = useState("");
  const [amount, setAmount] = useState(0);

  const [isReducedCost, setIsReducedCost] = useState(false);

  const handleSubmit = () => {
    validateForm();

    const costs = UNIT_COSTS[unit].costs;
    const percent = isReducedCost ? 0.95 : 1;

    const resources: Resources = {
      wood: Math.round(costs.wood * percent) * amount,
      clay: Math.round(costs.clay * percent) * amount,
      iron: Math.round(costs.iron * percent) * amount,
    };

    const record: CostRecord = {
      id: randomId(),
      name: `${unit} (${amount})`,
      resources,
      reduced: isReducedCost,
    };

    onSubmit(record);
    resetForm();
  };

  const validateForm = () => {
    if (unit === "") {
      throw Error("You must select a unit");
    }
    if (!UNIT_COSTS[unit]) {
      throw Error("Invalid unit name: " + unit);
    }
    if (amount < 0) {
      throw Error("Invalid unit amount: " + amount);
    }
  };

  const resetForm = () => {
    setUnit("");
    setAmount(0);
    setIsReducedCost(false);
  };

  const unitOptions = Object.keys(UNIT_COSTS).map((unitName) => ({
    value: unitName,
    label: unitName,
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          label="Unit"
          placeholder="Select Unit"
          value={unit}
          onChange={setUnit}
          options={unitOptions}
        />
        <Input
          label="Amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          disabled={!unit}
        />

        <div className="flex items-end">
          <Button
            onClick={handleSubmit}
            disabled={!unit || !amount}
            variant="primary"
            className="w-full disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
            Add
          </Button>
        </div>
      </div>

      <Checkbox
        label="5% Reduced Cost (War Commander)"
        checked={isReducedCost}
        setChecked={setIsReducedCost}
      />
    </div>
  );
};
