import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'muted' | 'outline' | 'purple';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-tight whitespace-nowrap';
  
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  const variantStyles = {
    default: 'bg-zinc-100 text-zinc-800 border border-zinc-200/80',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200/60',
    muted: 'bg-zinc-100/70 text-zinc-600 border border-zinc-200/50',
    outline: 'bg-transparent text-zinc-600 border border-zinc-200',
    purple: 'bg-indigo-50 text-indigo-700 border border-indigo-200/60',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
