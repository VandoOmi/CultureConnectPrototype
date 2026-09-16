import { Check } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export function Checkbox({ checked, onChange, label, className = '' }: CheckboxProps) {
  return (
    <label className={`inline-flex cursor-pointer items-center gap-2 ${className}`}>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-colors ${
          checked ? 'border-cc-ink bg-cc-ink text-white' : 'border-cc-ink bg-white'
        }`}
      >
        {checked && <Check size={14} strokeWidth={3} />}
      </button>
      {label && <span className="select-none">{label}</span>}
    </label>
  );
}
