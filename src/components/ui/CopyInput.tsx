import { useState } from "react";
import { cn } from "@/lib/utils";

import { Copy, Check } from "lucide-react";

interface CopyInputProps {
  label: string;
  value: string;
  className?: string;
}

export function CopyInput({ label, value, className }: CopyInputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      console.log(err);
      const textArea = document.createElement("textarea");
      textArea.value = value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>
      <div className="flex space-x-2">
        <input
          type="text"
          value={value}
          readOnly
          className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleCopy}
          className={cn(
            "px-3 py-2 rounded-md transition-colors flex items-center space-x-1",
            copied
              ? "bg-green-600 text-white"
              : "bg-slate-700 hover:bg-slate-600 text-white"
          )}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span className="text-sm">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span className="text-sm">Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
