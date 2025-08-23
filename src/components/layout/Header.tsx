import Link from "next/link";
import { Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-amber-500" />
            <h1 className="text-2xl font-bold text-white">TW Tools</h1>
          </Link>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
