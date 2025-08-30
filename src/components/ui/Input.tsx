import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = {
  label: string;
  placeholder?: string;
  description?: string;
  className?: string;
  disabled?: boolean;
} & ComponentPropsWithoutRef<"input">;

export function Input({
  label,
  placeholder,
  description,
  className,
  disabled = false,
  ...inputProps
}: InputProps) {
  return (
    <div className={className}>
      <label
        className={cn(
          "block text-sm font-medium mb-2",
          disabled ? "text-slate-500" : "text-slate-300"
        )}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "w-full px-3 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:border-transparent transition-colors",
          disabled
            ? "bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed"
            : "bg-slate-700 border-slate-600 focus:ring-green-500 hover:border-slate-500"
        )}
        {...inputProps}
      />
      {description && (
        <p
          className={cn(
            "text-sm mt-1",
            disabled ? "text-slate-600" : "text-slate-400"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
