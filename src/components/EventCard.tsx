import React from 'react';
import { Event } from '@/model/Event';

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="text-left">
      {event.active && <h1 className="text-right font-bold">Práve prebieha</h1>}
      <h1 className="font-bold text-3xl">{event.title}</h1>
      <h2 className="font-bold text-3xl"> {event.speaker} </h2>
      {event.description && <p>{event.description}</p>}
      <div className="flex justify-end gap-2">
        <p className="border rounded-2xl p-2">Tag</p>
        <p className="border rounded-2xl p-2">Dlhý Tag</p>
        <p className="border rounded-2xl p-2">Ďalší Tag</p>
      </div>
    </div>
  )
}
