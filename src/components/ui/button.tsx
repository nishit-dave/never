import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-[transform,background-color,color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-paper hover:bg-ink-soft shadow-[var(--shadow-border)]",
        accent: "bg-accent text-accent-fg hover:bg-accent-hover",
        ghost: "bg-transparent text-ink hover:bg-paper-2",
        night: "bg-night-fg text-night hover:bg-paper",
        line: "bg-transparent text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-[12px]",
        md: "h-12 px-5 text-[15px] rounded-[14px]",
        lg: "h-14 px-6 text-base rounded-[16px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
