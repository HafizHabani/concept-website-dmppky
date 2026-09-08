import { profile } from "../../../data/profile";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <SectionTitle
            eyebrow="Why Festava"
            title={profile.aboutTitle}
            description={profile.aboutIntro}
          />

          <div className="flex flex-col gap-8">
            {profile.aboutPoints.map((point) => (
              <div key={point.id} className="flex gap-5 border-b border-border pb-8 last:border-none">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg text-text">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
