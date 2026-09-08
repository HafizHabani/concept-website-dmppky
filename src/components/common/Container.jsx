import { cn } from "../../utils/helpers";

/**
 * Centers and constrains section content to a consistent max-width.
 */
function Container({ children, className = "" }) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12", className)}>
      {children}
    </div>
  );
}

export default Container;
