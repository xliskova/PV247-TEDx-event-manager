import { Event } from '@/model/Event';

const formatCountdown = (t: number) => {
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((t % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s `;
};

type CurrentEventProps = {
  currentEvents: Event[];
  nextEvent: Event | null;
};

const CurrentEvent = ({ currentEvents, nextEvent }: CurrentEventProps) => {
  return (
    <div>
      {currentEvents && currentEvents?.length > 0 && (
        <div className="bg-red pt-3 text-l text-center text-white">
          <p>Momentálne prebieha:</p>
          {currentEvents.map((event) => (
            <h1 key={event.id} className="lg:text-3xl pb-0 font-bold">
              {event.title}
            </h1>
          ))}
        </div>
      )}
      {nextEvent && (
        <div className="bg-red text-l pt-3 text-center text-white">
          <p>Nasleduje:</p>
          <p className="text-xl lg:text-3xl px-3 font-bold">
            {nextEvent?.title}
          </p>
          <p className="py-3">
            Zostáva:{' '}
            {formatCountdown(
              nextEvent?.startTime.getTime() - new Date().getTime(),
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrentEvent;
