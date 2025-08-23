import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Tool } from "@/lib/types";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <Link href={tool.href} className="group">
      <Card hover className="h-full">
        <div className="flex items-center space-x-3 mb-4">
          <Icon
            className={`h-8 w-8 ${tool.color} group-hover:scale-110 transition-transform`}
          />
          <h4 className="text-xl font-semibold text-white">{tool.title}</h4>
        </div>
        <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
          {tool.description}
        </p>
      </Card>
    </Link>
  );
}
