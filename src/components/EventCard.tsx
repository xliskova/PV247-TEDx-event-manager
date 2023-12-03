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
          <Tags
            tags={[
              { id: 1, title: 'IT', color: 'primary', eventId: event.id },
              { id: 2, title: 'Tech', color: 'error', eventId: event.id },
              {
                id: 3,
                title: 'Enviroment',
                color: 'success',
                eventId: event.id,
              },
              { id: 4, title: 'AI', color: 'secondary', eventId: event.id },
            ]}
          />
        </div>
      </div>
    </Link>
  );
};
