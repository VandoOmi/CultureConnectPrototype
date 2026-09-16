import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'cyan' | 'light' | 'white';
}

const variants: Record<NonNullable<CardProps['variant']>, string> = {
  cyan: 'bg-cc-cyan text-cc-ink',
  light: 'bg-cc-light text-cc-ink',
  white: 'bg-white text-cc-ink',
};

export function Card({ children, variant = 'white', className = '', ...rest }: CardProps) {
  return (
    <div
      className={`rounded-2xl p-5 shadow-[var(--shadow-card)] ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
