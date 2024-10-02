'use client';

import { Timeline } from '@/components/Timeline';
import { useEvents, useSpeakers } from '@/app/api/api';
import CurrentEvent from './CurrentEvent';
import { Event } from '@/model/Event';
import { useEffect, useState } from 'react';
import LoadingIndicator from './LoadingIndicator';

const getCurrentEvents = (events: Event[]) => {
  const now = new Date().getTime();
  return events.filter(
    (event) =>
      event.startTime.getTime() <= now &&
      event.endTime &&
      event.endTime?.getTime() >= now,
  );
};

const getNextEvent = (events: Event[]) => {
  const now = new Date().getTime();
  return events
    .filter((event) => event.startTime.getTime() > now)
    .sort((event) => event.startTime.getTime())
    .at(0);
};

const Program = () => {
  const { data: events, isLoading: isLoadingEvents } = useEvents();
  const { data: speakers, isLoading: isLoadingSpeakers } = useSpeakers();
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);
  const [nextEvent, setNextEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvents(getCurrentEvents(events ?? []));
      setNextEvent(getNextEvent(events ?? []) ?? null);
    }, 1000);
    return () => clearInterval(interval);
  }, [events]);

  useEffect(() => {
    if (!isLoadingEvents && !isLoadingSpeakers) {
      setIsLoading(false);
    }
  }, [isLoadingEvents, isLoadingSpeakers]);

  events?.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <CurrentEvent currentEvents={currentEvents} nextEvent={nextEvent} />
        <Timeline
          events={events ?? []}
          currentEvents={currentEvents}
          speakers={speakers ?? []}
        />
      </div>
    </div>
  );
};

export default Program;
