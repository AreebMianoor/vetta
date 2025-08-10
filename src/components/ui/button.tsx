import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost' | 'primary' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'xl'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/20 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-white text-black hover:bg-white/90': variant === 'default',
            'bg-white/10 text-white hover:bg-white/20': variant === 'secondary',
            'bg-transparent text-white hover:bg-white/5': variant === 'ghost',
            'bg-gradient-to-r from-brand-blue via-brand-violet to-brand-bright text-white hover:brightness-110 shadow-lg shadow-brand-blue/20': variant === 'primary',
            'bg-transparent border border-brand-blue/20 text-white hover:bg-brand-blue/5 hover:border-brand-blue/40': variant === 'outline',
            'h-10 px-5 text-base': size === 'default',
            'h-9 px-4 text-sm': size === 'sm',
            'h-12 px-8 text-lg': size === 'lg',
            'h-14 px-10 text-lg': size === 'xl',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }