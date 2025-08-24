"use client";
import CostCalculator from "@/components/cost-calculator/CostCalculator";
import { Container } from "@/components/ui/Container";

export default function WorldMapsPage() {
  return (
    <div className="py-8">
      <Container>
        <CostCalculator />
      </Container>
    </div>
  );
}
