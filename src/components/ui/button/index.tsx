import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:opacity-50 ",
    {
        variants: {
            variants: {
                primary: "bg-bg-primary text-white shadow",
                white: "bg-white text-black shadow-sm",
                outline:
                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            },
            size: {
                default: "w-[30px] h-[15px]",
                md: "w-[36px] h-[21px]",
                lg: "sm:w-[234px] w-[160px] sm:h-[72px] h-[46px]",
                icon: "h-9 w-9",
            },
            rounded: {
                full: "rounded-full",
                lg: "rounded-lg",
            },
            iconButton: {
                true: "aspect-square px-0",
                false: "",
            },
            circleButton: {
                true: "aspect-square px-0",
                false: "",
            },
        },
        defaultVariants: {
            variants: "primary",
            size: "default",
            rounded: "full",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variants, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variants, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
