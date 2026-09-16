import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
}

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-cc-cyan text-cc-ink hover:bg-cc-cyan-dark',
  outline: 'border border-cc-cyan text-cc-ink hover:bg-cc-light',
  ghost: 'text-cc-ink hover:bg-cc-light',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-5 py-2.5 font-medium transition-colors disabled:opacity-50 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
