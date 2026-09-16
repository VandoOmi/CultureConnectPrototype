import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function TextField({ label, className = '', ...rest }: TextFieldProps) {
  return (
    <label className="flex w-full flex-col gap-1">
      {label && <span className="text-sm text-cc-muted">{label}</span>}
      <input
        className={`w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-cc-cyan focus:ring-2 focus:ring-cc-cyan/40 ${className}`}
        {...rest}
      />
    </label>
  );
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function TextArea({ label, className = '', ...rest }: TextAreaProps) {
  return (
    <label className="flex w-full flex-col gap-1">
      {label && <span className="text-sm text-cc-muted">{label}</span>}
      <textarea
        className={`w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-cc-cyan focus:ring-2 focus:ring-cc-cyan/40 ${className}`}
        {...rest}
      />
    </label>
  );
}
