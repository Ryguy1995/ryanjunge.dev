import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-slate-950'

const variantStyles = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-500',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
  ghost:
    'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
}

type Variant = keyof typeof variantStyles

// used to style non-<button>/<a> elements (e.g. router Link) as buttons
export function buttonClassName(variant: Variant = 'primary', className = '') {
  return `${baseStyles} ${variantStyles[variant]} ${className}`
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}) {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function LinkButton({
  variant = 'primary',
  className = '',
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  children: ReactNode
}) {
  return (
    <a className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
