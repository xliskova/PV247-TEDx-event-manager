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
    <>
      {currentEvents && currentEvents?.length > 0 && (
        <div>
          <p className="bg-red pt-10 text-xl text-center">
            Momentálne prebieha:
          </p>
          {currentEvents.map((event) => (
            <h1 key={event.id} className="bg-red pb-10 text-5xl text-center font-bold">
              {event.title}
            </h1>
          ))}
        </div>
      )}
      {nextEvent && (
        <div>
          <p className="bg-red pb-10 text-xl text-center">
            Nasleduje: {nextEvent?.title}
          </p>
          <p className="bg-red pb-10 text-xl text-center">
            Zostáva:{' '}
            {formatCountdown(
              nextEvent?.startTime.getTime() - new Date().getTime(),
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default CurrentEvent;
