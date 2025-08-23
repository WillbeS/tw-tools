import { Map } from "lucide-react";

export function MapHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Map className="h-8 w-8 text-green-500" />
        <h1 className="text-3xl font-bold text-white">World Maps</h1>
      </div>
      <p className="text-slate-300 max-w-2xl mx-auto">
        Generate detailed world maps with player and tribe ratings for all
        Tribal Wars worlds. Maps are updated daily with the latest data.
      </p>
    </div>
  );
}
