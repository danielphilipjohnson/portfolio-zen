import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"


const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary button - Moss green theme for main actions
        primary:
          "bg-[color:var(--color-moss-500)] text-[color:var(--color-stone-50)] shadow-sm hover:bg-[color:var(--color-moss-400)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-moss-200)] focus-visible:ring-offset-2 active:bg-[color:var(--color-moss-600)] disabled:bg-[color:var(--color-moss-200)] disabled:text-[color:var(--color-moss-400)] disabled:opacity-80",

        // Secondary button - Water blue theme for alternative actions
        secondary:
          "bg-[color:var(--color-water-500)] text-[color:var(--color-stone-50)] shadow-sm hover:bg-[color:var(--color-water-400)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-water-200)] focus-visible:ring-offset-2 active:bg-[color:var(--color-water-600)] disabled:bg-[color:var(--color-water-200)] disabled:text-[color:var(--color-water-400)] disabled:opacity-80",

        // Tertiary button - Stone theme for low-emphasis actions
        tertiary:
          "bg-[color:var(--color-stone-200)] text-[color:var(--color-stone-800)] hover:bg-[color:var(--color-stone-300)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-stone-500)] focus-visible:ring-offset-2 active:bg-[color:var(--color-stone-400)] disabled:bg-[color:var(--color-stone-100)] disabled:text-[color:var(--color-stone-500)] disabled:opacity-80",

        // Outline button - Bordered moss theme with lower visual prominence
        outline:
          "border border-[color:var(--color-moss-600)] bg-transparent text-[color:var(--color-moss-600)] hover:bg-[color:var(--color-moss-50)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-moss-200)] focus-visible:ring-offset-2 active:bg-[color:var(--color-moss-100)] disabled:border-[color:var(--color-moss-300)] disabled:text-[color:var(--color-moss-300)] disabled:opacity-80",

        // Destructive button - Danger theme for delete/remove actions
        destructive:
          "bg-[color:var(--color-danger-500)] text-white shadow-sm hover:bg-[color:var(--color-danger-400)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-danger-200)] focus-visible:ring-offset-2 active:bg-[color:var(--color-danger-600)] disabled:bg-[color:var(--color-danger-200)] disabled:text-[color:var(--color-danger-400)] disabled:opacity-80",

        // Ghost button - Low-visual-impact theme
        ghost:
          "bg-transparent text-[color:var(--color-moss-600)] hover:bg-[color:var(--color-moss-50)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-moss-200)] focus-visible:ring-offset-2 active:bg-[color:var(--color-moss-100)] disabled:text-[color:var(--color-moss-300)] disabled:opacity-80",

        // Link button - Text-like appearance
        link:
          "bg-transparent text-[color:var(--color-water-600)] p-0 h-auto hover:underline focus-visible:ring-2 focus-visible:ring-[color:var(--color-water-200)] focus-visible:ring-offset-2 disabled:text-[color:var(--color-water-300)] disabled:opacity-80",

        // Clay button - Warm accent theme for creative actions
        clay:
          "bg-[color:var(--color-clay-600)] text-[color:var(--color-stone-50)] shadow-sm hover:bg-[color:var(--color-clay-400)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-clay-200)] focus-visible:ring-offset-2 active:bg-[color:var(--color-clay-700)] disabled:bg-[color:var(--color-clay-200)] disabled:text-[color:var(--color-clay-400)] disabled:opacity-80",
      },
      size: {
        sm: "h-8 px-2 py-1 text-xs rounded",
        md: "h-9 px-4 py-2 text-sm rounded",
        lg: "h-11 px-6 py-3 text-base rounded",
        icon: "h-9 w-9 p-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

/**
 * Button component for Zen Code | Bonsai Design system
 * 
 * A versatile button component with variants inspired by nature:
 * - primary (moss): Main actions - growth and nurturing
 * - secondary (water): Alternative actions - flow and support
 * - tertiary (stone): Low-emphasis actions - stability and foundation
 * - outline: Bordered variant with reduced visual weight
 * - destructive: For potentially dangerous actions
 * - ghost: Minimally visible for dense UIs
 * - link: Text-like appearance for inline actions
 * - clay: Warm accent for creative actions
 */
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }