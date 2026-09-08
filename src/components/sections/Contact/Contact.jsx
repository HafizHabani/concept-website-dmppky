import { profile } from "../../../data/profile";
import { useContactForm } from "../../../hooks/useContactForm";
import Button from "../../common/Button";
import Container from "../../common/Container";
import Field from "../../common/Field";
import SectionTitle from "../../common/SectionTitle";

function Contact() {
  const { values, status, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionTitle eyebrow="Say hello" title="Interested? Let's talk" />
            <div className="mt-8 flex flex-col gap-4 text-sm text-muted">
              <p>{profile.contact.phone}</p>
              <p>{profile.contact.email}</p>
              <p>{profile.contact.address}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                name="fullName"
                placeholder="Full name"
                value={values.fullName}
                onChange={handleChange}
                required
              />
              <Field
                type="email"
                name="email"
                placeholder="Email address"
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
            <Field
              name="company"
              placeholder="Company"
              value={values.company}
              onChange={handleChange}
            />
            <Field
              as="textarea"
              name="message"
              placeholder="Message"
              value={values.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="primary" className="mt-2 w-fit">
              Send message
            </Button>
            {status === "sent" && (
              <p role="status" className="text-sm text-secondary">
                Thanks — your message is in. We'll reply soon.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
