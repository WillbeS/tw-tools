import { TabMenu } from "@/components/common/TabMenu";

import { BuildingCosts } from "./BuildingCosts";
import { UnitCosts } from "./UnitCosts";

export default function CostCalculator() {
  return (
    <>
      <TabMenu
        tabs={[
          { key: "buildings", label: "🏰 Buildings" },
          { key: "units", label: "⚔️ Units" },
        ]}
        defaultTab="buildings"
      >
        {{
          buildings: <BuildingCosts />,
          units: <UnitCosts />,
        }}
      </TabMenu>
    </>
  );
}
