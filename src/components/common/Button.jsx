import { cn } from "../../utils/helpers";

const VARIANTS = {
  primary:
    "bg-primary text-white hover:bg-primary-dim shadow-glow",
  outline:
    "border border-border text-text hover:border-primary hover:text-primary",
  ghost: "text-text hover:text-primary",
};

/**
 * Shared call-to-action button. Renders an <a> when `href` is given,
 * otherwise a <button>.
 */
function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 font-body text-sm font-semibold transition-colors duration-200",
    VARIANTS[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
