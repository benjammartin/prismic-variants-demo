import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const BUTTON_NAME = "Button";

const variants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-base)] text-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-8 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        Primary: "bg-gray-900 text-white hover:bg-gray-800",
        Secondary: "border border-gray-900 text-gray-12 hover:bg-gray-100",
      },
      size: {
        default: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "Primary",
      size: "default",
    },
  }
);

type NativeButtonProps = React.ComponentProps<"button">;
interface ButtonProps extends NativeButtonProps, VariantProps<typeof variants> {
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,

  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={cn(variants({ variant, size, className }))} {...props} />
  );
};

Button.displayName = BUTTON_NAME;

export { Button, variants };
