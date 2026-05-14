import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  heavy?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, heavy, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("glass", heavy && "glass-heavy", className)}
      {...props}
    >
      {children}
    </div>
  )
);

GlassCard.displayName = "GlassCard";
export default GlassCard;
