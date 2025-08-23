import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6",
        hover &&
          "hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-200 hover:scale-105",
        className
      )}
    >
      {children}
    </div>
  );
}
