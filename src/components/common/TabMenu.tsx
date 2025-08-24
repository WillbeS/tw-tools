import { ReactNode, useState } from "react";
import { Card } from "@/components/ui/Card";

interface Tab {
  key: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (key: string) => void;
  children: Record<string, ReactNode>;
}

export function TabMenu({ tabs, defaultTab, children, onTabChange }: Props) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.key);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    if (onTabChange) onTabChange(key);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex space-x-1 mb-6 bg-slate-800/50 p-1 rounded-lg backdrop-blur-sm">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => handleTabClick(key)}
            className={`flex-1 py-3 px-6 font-semibold rounded-md transition-all duration-200 ${
              activeTab === key
                ? "bg-amber-500 text-white shadow-lg"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <Card>{children[activeTab]}</Card>
    </div>
  );
}
