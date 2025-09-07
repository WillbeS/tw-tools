// lib/format.ts
export type FormatNumberOptions = Intl.NumberFormatOptions & {
  locale?: string;
};

export function formatNumber(
  value: number | bigint | null | undefined,
  opts: FormatNumberOptions = {}
) {
  if (value === null || value === undefined) return "";
  const { locale, ...options } = opts;
  return new Intl.NumberFormat(locale, options).format(value as number);
}

// 1) Default to the user's environment (good general default)
// formatNumber(123789566); // e.g. "123,789,566" in en-US

// 2) Force Bulgarian-style grouping (spaces) if your UI is BG
// formatNumber(123789566, { locale: "bg-BG" }); // "123 789 566" (non-breaking space)

// 3) Fixed decimals (e.g., metrics)
// formatNumber(1234.567, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // "1,234.57"

// 4) Compact (for dashboards)
// formatNumber(123789566, { notation: "compact", compactDisplay: "short" }); // "124M"

// 5) Currency
// formatNumber(1299.9, { style: "currency", currency: "BGN", locale: "bg-BG" });
// "1 299,90 лв."
