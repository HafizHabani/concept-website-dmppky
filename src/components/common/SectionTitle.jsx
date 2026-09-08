import { cn } from "../../utils/helpers";

/**
 * Consistent heading block used at the top of each page section.
 * @param {string} eyebrow - short context line above the heading
 * @param {string} title - the section heading
 * @param {string} [description] - optional supporting copy
 * @param {"left"|"center"} [align]
 */
function SectionTitle({ eyebrow, title, description, align = "left", className = "" }) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-display text-sm text-secondary">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl leading-tight text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;
