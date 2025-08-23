import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="py-20">
      <Container className="text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Dominate Tribal Wars
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Advanced tools and calculators to help you conquer the battlefield,
          manage your empire, and lead your tribe to victory.
        </p>
        <div className="flex gap-4 justify-center">
          <Button href="/tools" variant="primary">
            Explore Tools
          </Button>
          <Button href="/guides" variant="secondary">
            Read Guides
          </Button>
        </div>
      </Container>
    </section>
  );
}
