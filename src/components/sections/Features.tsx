import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/common/FeatureCard";
import { features } from "@/data/features";

export function Features() {
  return (
    <section className="py-16 bg-slate-800/30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
