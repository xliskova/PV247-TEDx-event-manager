'use client';

import { Timeline } from '@/components/Timeline';
import { useEvents, useSpeakers } from '@/app/api/api';
import CurrentEvent from './CurrentEvent';
import { Event } from '@/model/Event';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvents(getCurrentEvents(events ?? []));
      setNextEvent(getNextEvent(events ?? []) ?? null);
    }, 1000);
    return () => clearInterval(interval);
  });

  events?.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

  if (isLoadingEvents || isLoadingSpeakers) return <h1>Loading...</h1>;

  if (!speakers || !events) return <h1>Unable to fetch data...</h1>;

  return (
    <>
      <CurrentEvent currentEvents={currentEvents} nextEvent={nextEvent} />
      <Timeline
        events={events}
        currentEvents={currentEvents}
        speakers={speakers}
      />
    </>
  );
};

export default Program;
