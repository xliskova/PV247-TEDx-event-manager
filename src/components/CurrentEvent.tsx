'use client';

import { useEvents } from '@/app/api/api';
import { Event } from '@/model/Event';
import { useEffect, useState } from 'react';

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
          <h3 className="bg-red pb-10 text-3xl text-center">
            Momentálne prebieha:
          </h3>
          {currentEvents.map((event) => (
            <p key={event.id} className="bg-red pb-10 text-2xl text-center">
              {event.title}
            </p>
          ))}
        </div>
      )}
      {nextEvent && (
        <div>
          <p className="bg-red pb-10 text-3xl text-center">
            Nasledujúci bod programu: {nextEvent?.title}
          </p>
          <p className="bg-red pb-10 text-3xl text-center">
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
