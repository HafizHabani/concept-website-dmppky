import { profile } from "../../../data/profile";
import Button from "../../common/Button";
import Container from "../../common/Container";
import SocialLinks from "../../common/SocialLinks";

/**
 * Full-bleed opening section. The oversized, slightly offset headline
 * is the one bold move on the page — everything around it stays quiet.
 */
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-stage-gradient pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <p className="font-display text-sm uppercase tracking-wide text-secondary">
            {profile.tagline}
          </p>

          <h1 className="mt-6 font-display text-6xl leading-[0.95] text-text sm:text-7xl md:text-8xl">
            {profile.title}
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button href="#pricing" variant="primary">
              {profile.ctaLabel}
            </Button>
            <SocialLinks />
          </div>

          <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-8">
            <div>
              <dt className="text-xs text-muted">Dates</dt>
              <dd className="mt-1 font-display text-lg text-text">{profile.dateRange}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Location</dt>
              <dd className="mt-1 font-display text-lg text-text">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
