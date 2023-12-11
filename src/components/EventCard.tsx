import React from 'react';
import { Event } from '@/model/Event';
import { Tags } from '@/components/Tags';
import Link from 'next/link';
import { Speaker } from '@/model/Speaker';

type EventCardProps = {
  event: Event;
  speaker: Speaker;
  isActive: boolean;
};

export const EventCard = ({ event, speaker, isActive }: EventCardProps) => {
  return (
    <Link href={`speakers/#${event.id}`}>
      <div className="text-left">
        {isActive && <h3 className="text-right font-bold">Práve prebieha</h3>}
        <h1 className="font-bold text-3xl">{event.title}</h1>
        <h2 className="font-bold text-3xl"> {speaker?.name} </h2>
        {event.description && <p>{event.description}</p>}
        <div className="flex justify-end pt-5">
          <Tags tags={event.tags ?? []} />
        </div>
      </div>
    </Link>
  );
};
