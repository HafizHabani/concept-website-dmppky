import { socialLinks } from "../../data/socialLinks";
import { cn } from "../../utils/helpers";

const ICONS = {
  facebook: (
    <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.25-1.5 1.5-1.5h1.5V4.25C16.2 4.17 15.3 4 14.25 4 12 4 10.5 5.35 10.5 7.8V10.5H8v3h2.5V21h3Z" />
  ),
  twitter: (
    <path d="M21 6.4c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.6-2.1-.7.4-1.6.8-2.4.9a3.7 3.7 0 0 0-6.3 3.4A10.6 10.6 0 0 1 4 4.9a3.7 3.7 0 0 0 1.1 5 3.6 3.6 0 0 1-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6a3.7 3.7 0 0 1-1.7.1c.5 1.5 1.9 2.6 3.5 2.6A7.4 7.4 0 0 1 3 17.6a10.5 10.5 0 0 0 5.7 1.7c6.8 0 10.6-5.7 10.6-10.6v-.5c.7-.5 1.3-1.2 1.8-1.9Z" />
  ),
  instagram: (
    <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2ZM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm4.6-3.6a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM12 4.6c2.4 0 2.7 0 3.6.05.9.04 1.5.19 1.9.35.5.2.9.44 1.3.84.4.4.64.8.84 1.3.16.4.31 1 .35 1.9.05.9.05 1.2.05 3.6s0 2.7-.05 3.6c-.04.9-.19 1.5-.35 1.9-.2.5-.44.9-.84 1.3-.4.4-.8.64-1.3.84-.4.16-1 .31-1.9.35-.9.05-1.2.05-3.6.05s-2.7 0-3.6-.05c-.9-.04-1.5-.19-1.9-.35a3.5 3.5 0 0 1-1.3-.84 3.5 3.5 0 0 1-.84-1.3c-.16-.4-.31-1-.35-1.9C4.6 14.7 4.6 14.4 4.6 12s0-2.7.05-3.6c.04-.9.19-1.5.35-1.9.2-.5.44-.9.84-1.3.4-.4.8-.64 1.3-.84.4-.16 1-.31 1.9-.35.9-.05 1.2-.05 3.6-.05Z" />
  ),
};

/**
 * Renders social icon links from `data/socialLinks.js`.
 */
function SocialLinks({ className = "" }) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              {ICONS[social.id]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
