interface Props {
  label: string;
  bgColorClass?: string;
  textColorClass?: string;
  className?: string;
  title?: string;
}

export const LabelBadge = ({
  label,
  bgColorClass = "bg-slate-600/50",
  textColorClass = "text-slate-300",
  className = "",
  title,
}: Props) => {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium border ${bgColorClass} ${textColorClass} ${className}`}
      title={title || label}
    >
      {label}
    </span>
  );
};
