import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const baseClasses =
    "px-8 py-3 rounded-lg font-semibold transition-colors inline-block";
  const variants = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white",
    secondary: "border border-slate-600 hover:border-slate-500 text-white",
  };

  const buttonClasses = cn(baseClasses, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return <button className={buttonClasses}>{children}</button>;
}
