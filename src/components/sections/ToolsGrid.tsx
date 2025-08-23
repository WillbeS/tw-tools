import { Container } from "@/components/ui/Container";
import { ToolCard } from "@/components/common/ToolCard";
import { tools } from "@/data/tools";

export function ToolsGrid() {
  return (
    <section className="py-16">
      <Container>
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Available Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </Container>
    </section>
  );
}
