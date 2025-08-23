import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

interface InfoPanelProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function InfoPanel({ title, children, className }: InfoPanelProps) {
  return (
    <div className={cn("p-4 bg-slate-700/50 rounded-lg", className)}>
      <div className="flex items-start space-x-2">
        <Info className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-slate-300">
          <p className="font-medium text-blue-400 mb-1">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
