import { cn } from "../../utils/helpers";

/**
 * Generic surface card used across pricing, artists and schedule blocks.
 */
function Card({ children, className = "", highlighted = false }) {
  return (
    <div
      className={cn(
        "rounded-card border p-8",
        highlighted
          ? "border-primary bg-surface-alt"
          : "border-border bg-surface",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
