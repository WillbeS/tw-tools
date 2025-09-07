import { CostRecord } from "@/lib/types";
import { CostRecordElement } from "./CostRecordElement";
import { TotalCost } from "./TotalCost";

interface Props {
  records: CostRecord[];
  remove: (record: CostRecord) => void;
}

export const CostRecords = ({ records, remove }: Props) => {
  const totals = {
    wood: 0,
    clay: 0,
    iron: 0,
  };

  records.forEach((record) => {
    totals.wood += record.resources.wood;
    totals.clay += record.resources.clay;
    totals.iron += record.resources.iron;
  });

  return (
    <>
      <TotalCost
        totalWood={totals.wood}
        totalClay={totals.clay}
        totalIron={totals.iron}
      />
      <div className="mt-6">
        <div className="flex flex-col gap-2">
          {records.map((record) => (
            <CostRecordElement
              key={record.id}
              record={record}
              onRemove={remove}
            />
          ))}
        </div>
      </div>
    </>
  );
};
