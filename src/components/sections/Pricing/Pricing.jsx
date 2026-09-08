import { pricingPlans } from "../../../data/pricing";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <section id="pricing" className="bg-surface py-24 md:py-32">
      <Container>
        <SectionTitle eyebrow="Get in" title="Plans you'll love" align="center" />

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
