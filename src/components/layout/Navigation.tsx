import Link from "next/link";
import { navItems } from "@/data/navigation";

export function Navigation() {
  return (
    <nav className="hidden md:flex space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-slate-300 hover:text-white transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
