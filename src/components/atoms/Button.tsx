import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const baseClass =
  'rounded-full px-7 py-3.5 inline-flex justify-center items-center gap-2 text-neutral bg-primary transition-all'
const defaultVariantClass = ''
const disabledVariantClass = 'bg-neutral-20 text-neutral-60 cursor-not-allowed '
const outlineVariantClass =
  'border-1.5 bg-transparent border-primary text-primary'
const roundedFullVariantClass = 'p-3.5'

const stateClass =
  'hover:text-neutral active:text-neutral focus:text-neutral hover:bg-primary-40 active:bg-primary focus:bg-primary-60'

const variants = {
  variant: {
    default: cn(defaultVariantClass, stateClass),
    disabled: disabledVariantClass,
    outline: cn(outlineVariantClass, stateClass),
    roundedFull: cn(roundedFullVariantClass, stateClass),
  },
}

const buttonVariants = cva(baseClass, {
  variants,
  defaultVariants: {
    variant: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        disabled={variant === 'disabled'}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants, variants }
