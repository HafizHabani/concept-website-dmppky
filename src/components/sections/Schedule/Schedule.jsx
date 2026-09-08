import { useState } from "react";
import { schedule } from "../../../data/schedule";
import { formatEventLabel } from "../../../utils/formatDate";
import { cn } from "../../../utils/helpers";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

function Schedule() {
  const [activeDayId, setActiveDayId] = useState(schedule[0].id);
  const activeDay = schedule.find((day) => day.id === activeDayId);

  return (
    <section id="schedule" className="py-24 md:py-32">
      <Container>
        <SectionTitle eyebrow="Plan your nights" title="Event schedule" align="center" />

        <div className="mx-auto mt-10 flex w-fit gap-2 rounded-pill border border-border bg-surface p-1">
          {schedule.map((day) => (
            <button
              key={day.id}
              type="button"
              onClick={() => setActiveDayId(day.id)}
              aria-pressed={activeDayId === day.id}
              className={cn(
                "rounded-pill px-5 py-2 text-sm font-medium transition-colors",
                activeDayId === day.id
                  ? "bg-primary text-white"
                  : "text-muted hover:text-text"
              )}
            >
              {day.day}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-center text-sm text-muted">{activeDay.date}</p>
          <ul className="mt-6 flex flex-col divide-y divide-border rounded-card border border-border bg-surface">
            {activeDay.events.map((event) => (
              <li
                key={event.id}
                aria-label={formatEventLabel(event.title, event.time, event.performer)}
                className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display text-lg text-text">{event.title}</p>
                  <p className="mt-1 text-sm text-muted">
                    {event.performer} on the {event.stage}
                  </p>
                </div>
                <p className="text-sm font-medium text-secondary">{event.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Schedule;
