import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-button transform hover:scale-[1.02] transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-button transition-all duration-300",
        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
        corporate: "bg-gradient-primary text-white font-semibold hover:shadow-premium transform hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-500 backdrop-blur-sm",
        "corporate-outline": "border-2 border-primary text-primary bg-transparent font-semibold hover:bg-primary hover:text-white hover:shadow-button transform hover:scale-[1.02] transition-all duration-300",
        premium: "bg-gradient-premium text-white font-semibold shadow-premium hover:shadow-corporate transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500",
        glass: "bg-gradient-glass backdrop-blur-md border border-white/20 text-foreground font-medium hover:bg-white/30 hover:shadow-glass transform hover:scale-[1.02] transition-all duration-400",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
