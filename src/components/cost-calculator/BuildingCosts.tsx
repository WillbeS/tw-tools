import { useState } from "react";
import { CostRecord } from "@/lib/types";
import { BuildingCostForm } from "./BuildingCostForm";
import { CostRecords } from "./CostRecords";

export const BuildingCosts = () => {
  const [costRecords, setCostRecords] = useState<CostRecord[]>([]);

  const addRecord = (record: CostRecord) => {
    setCostRecords((prev) => [...prev, record]);
  };

  const removeRecord = (record: CostRecord) => {
    setCostRecords((prev) => prev.filter((r) => r.id !== record.id));
  };

  return (
    <section className="space-y-6">
      <div className="text-center py-3">
        <h2 className="text-3xl font-bold text-white mb-2">
          Building Cost Calculator
        </h2>
        <p className="text-slate-400">
          Calculate resources needed to upgrade your buildings
        </p>
      </div>

      <BuildingCostForm onSubmit={addRecord} />
      <CostRecords records={costRecords} remove={removeRecord} />
    </section>
  );
};
