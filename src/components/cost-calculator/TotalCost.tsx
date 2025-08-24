import { Resource } from "@/components/common/Resource";

interface Props {
  totalWood: number;
  totalClay: number;
  totalIron: number;
}

export const TotalCost = ({ totalWood, totalClay, totalIron }: Props) => {
  const hasResources = totalWood > 0 || totalClay > 0 || totalIron > 0;

  if (!hasResources) return null;

  return (
    <div className="mt-6 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <span className="text-xl font-bold text-amber-400">Total Cost</span>
        <div className="flex gap-6 text-slate-300 font-semibold">
          <Resource name="wood" quantity={totalWood} />
          <Resource name="clay" quantity={totalClay} />
          <Resource name="iron" quantity={totalIron} />
        </div>
      </div>
    </div>
  );
};
