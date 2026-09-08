import { cn } from "../../utils/helpers";

/**
 * Small pill label, e.g. discount tags or stage names.
 */
function Badge({ children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill bg-secondary px-3 py-1 text-xs font-semibold text-bg",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
