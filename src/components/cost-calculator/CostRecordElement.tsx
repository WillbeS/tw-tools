import { X } from "lucide-react";
import { CostRecord } from "@/lib/types";
import { LabelBadge } from "@/components/ui/LabelBadge";
import { Resource } from "@/components/common/Resource";

interface Props {
  record: CostRecord;
  onRemove: (record: CostRecord) => void;
}

export const CostRecordElement = ({ record, onRemove }: Props) => {
  return (
    <div className="group relative flex flex-col md:flex-row gap-4 justify-between items-start bg-slate-800/30 border border-slate-700 rounded-lg p-4 hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-200 pr-14">
      <div className="flex-1 md:max-w-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">{record.name}</span>
          {record.reduced && (
            <LabelBadge
              label="Reduced"
              bgColorClass="bg-green-500/20"
              textColorClass="text-green-400"
            />
          )}
        </div>
      </div>

      <div className="flex gap-6 text-slate-300">
        <Resource name="wood" quantity={record.resources.wood} />
        <Resource name="clay" quantity={record.resources.clay} />
        <Resource name="iron" quantity={record.resources.iron} />
      </div>

      <button
        className="absolute top-[14px] right-3 text-slate-400 hover:text-red-400 transition-colors p-1 rounded"
        onClick={() => onRemove(record)}
        title="Remove"
      >
        <X className="w-5 h-5 font-bold" />
      </button>
    </div>
  );
};
