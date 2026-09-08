import { cn } from "../../utils/helpers";

/**
 * Shared text input / textarea used in forms. Pass `as="textarea"` for
 * multi-line fields.
 */
function Field({ as = "input", className = "", ...rest }) {
  const Element = as;
  return (
    <Element
      className={cn(
        "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-muted focus:border-primary",
        as === "textarea" && "min-h-32 resize-none",
        className
      )}
      {...rest}
    />
  );
}

export default Field;
