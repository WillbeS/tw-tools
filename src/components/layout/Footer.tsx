import { Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900/50 py-8">
      <Container className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Shield className="h-6 w-6 text-amber-500" />
          <span className="text-white font-semibold">TW Tools</span>
        </div>
        <p className="text-slate-400 text-sm">
          Unofficial tools for Tribal Wars. Not affiliated with InnoGames GmbH.
        </p>
      </Container>
    </footer>
  );
}
