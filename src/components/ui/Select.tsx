import { cn } from "@/lib/utils";

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  description?: string;
  className?: string;
  disabled?: boolean;
}

export function Select({
  label,
  value,
  onChange,
  placeholder,
  options,
  description,
  className,
  disabled = false,
}: SelectProps) {
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
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={cn(
          "w-full px-3 py-2 border rounded-md text-white focus:outline-none focus:ring-2 focus:border-transparent transition-colors",
          disabled
            ? "bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed"
            : "bg-slate-700 border-slate-600 focus:ring-green-500 hover:border-slate-500"
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
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
