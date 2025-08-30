import { useState } from "react";
import { CostRecord } from "@/lib/types";
import { CostRecords } from "./CostRecords";
import { UnitCostForm } from "./UnitCostsForm";

export const UnitCosts = () => {
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
          Unit Cost Calculator
        </h2>
        <p className="text-slate-400">
          Calculate resources needed to build your troops
        </p>
      </div>

      <div className="mx-auto">
        <UnitCostForm onSubmit={addRecord} />
      </div>

      <CostRecords records={costRecords} remove={removeRecord} />
    </section>
  );
};
