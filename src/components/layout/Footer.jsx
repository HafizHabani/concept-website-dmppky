import { navigation } from "../../data/navigation";
import { profile } from "../../data/profile";
import Container from "../common/Container";
import SocialLinks from "../common/SocialLinks";

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-text">{profile.name}</p>
            <p className="mt-3 max-w-xs text-sm text-muted">{profile.aboutIntro}</p>
            <SocialLinks className="mt-5" />
          </div>

          <div>
            <p className="font-display text-sm text-secondary">Links</p>
            <ul className="mt-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-sm text-muted hover:text-text">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm text-secondary">Have a question?</p>
            <p className="mt-4 text-sm text-muted">{profile.contact.phone}</p>
            <p className="mt-1 text-sm text-muted">{profile.contact.email}</p>
            <p className="mt-4 text-sm text-muted">{profile.contact.address}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted md:flex-row">
          <p>{profile.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-text">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
