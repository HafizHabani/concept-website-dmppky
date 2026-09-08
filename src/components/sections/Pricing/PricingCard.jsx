import { formatPrice } from "../../../utils/formatDate";
import Badge from "../../common/Badge";
import Button from "../../common/Button";
import Card from "../../common/Card";

function PricingCard({ plan }) {
  return (
    <Card highlighted={plan.featured} className="relative flex flex-col">
      {plan.badge && (
        <Badge className="absolute -top-3 right-8">{plan.badge}</Badge>
      )}

      <p className="font-display text-lg text-text">{plan.name}</p>
      <p className="mt-4 font-display text-5xl text-text">
        {formatPrice(plan.price)}
      </p>
      <p className="mt-2 text-sm text-muted">{plan.description}</p>

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-muted">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              aria-hidden="true"
            >
              <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.4 7.4a1 1 0 0 1-1.4 0L3.3 9.5a1 1 0 1 1 1.4-1.4l3.6 3.6 6.7-6.7a1 1 0 0 1 1.4 0Z" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href="#contact"
        variant={plan.featured ? "primary" : "outline"}
        className="mt-8 w-full"
      >
        Buy Ticket
      </Button>
    </Card>
  );
}

export default PricingCard;
