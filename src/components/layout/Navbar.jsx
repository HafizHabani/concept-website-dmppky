import { navigation } from "../../data/navigation";
import { profile } from "../../data/profile";
import { useScroll } from "../../hooks/useScroll";
import { useDisclosure } from "../../hooks/useDisclosure";
import Button from "../common/Button";
import Container from "../common/Container";
import { cn } from "../../utils/helpers";

/**
 * Fixed top navigation. Switches to a solid background once the page
 * has scrolled past the hero, and collapses into a menu on mobile.
 */
function Navbar() {
  const isScrolled = useScroll(24);
  const { isOpen, toggle, close } = useDisclosure(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-bg/90 backdrop-blur border-b border-border" : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="font-display text-lg font-bold text-text">
            {profile.name}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#pricing" variant="primary">
              Buy Ticket
            </Button>
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              {isOpen ? (
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="border-t border-border bg-bg md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={close}
                  className="rounded-lg px-2 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-text"
                >
                  {item.label}
                </a>
              ))}
              <Button href="#pricing" variant="primary" className="mt-2 w-full" onClick={close}>
                Buy Ticket
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;
