import { ComponentPropsWithoutRef } from "react";

type Props = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  label?: string;
} & ComponentPropsWithoutRef<"input">;

export const Checkbox = ({
  checked,
  setChecked,
  label,
  className = "",
  ...inputProps
}: Props) => {
  return (
    <label
      className={`inline-flex items-center space-x-3 mb-4 cursor-pointer group ${className}`}
    >
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          {...inputProps}
        />
        <div
          className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
            checked
              ? "bg-amber-500 border-amber-500"
              : "bg-slate-800 border-slate-600 group-hover:border-slate-500"
          }`}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white absolute top-0.5 left-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="text-slate-300 group-hover:text-slate-200 transition-colors">
        {label}
      </span>
    </label>
  );
};
