import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active?: boolean;
}

export function IconButton({ children, active = false, className = '', ...rest }: IconButtonProps) {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
        active
          ? 'border-cc-cyan bg-cc-cyan text-white'
          : 'border-cc-ink/70 bg-white text-cc-ink hover:bg-cc-light'
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
