import React from 'react';
import { Event } from '@/model/Event';
import { Tags } from '@/components/Tags';
import Link from 'next/link';

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link href={`speakers/#${event.id}`}>
      <div className="text-left">
        {event.active && (
          <h3 className="text-right font-bold">Práve prebieha</h3>
        )}
        <h1 className="font-bold text-3xl">{event.title}</h1>
        <h2 className="font-bold text-3xl"> {event.speaker} </h2>
        {event.description && <p>{event.description}</p>}
        <div className="flex justify-end pt-5">
          <Tags />
        </div>
      </div>
    </Link>
  );
};
