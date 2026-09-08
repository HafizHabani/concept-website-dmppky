import { cn } from "../../../utils/helpers";

/**
 * Single artist photo tile. `size` controls the grid span so the
 * gallery reads as an asymmetric wall rather than a uniform grid.
 */
function ArtistCard({ artist }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-card border border-border bg-surface",
        artist.size === "tall" ? "row-span-2" : "aspect-[4/3]"
      )}
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="h-full w-full object-cover grayscale-[20%] transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-5">
        <p className="font-display text-base text-text">{artist.name}</p>
        <p className="text-xs text-muted">{artist.role}</p>
      </div>
    </div>
  );
}

export default ArtistCard;
