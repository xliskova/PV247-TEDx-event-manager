import React, { useState } from 'react';
import { Event } from '@/model/Event';
import { Tags } from '@/components/Tags';
import Link from 'next/link';
import { Speaker } from '@/model/Speaker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { EventType } from '@/eventType';

type EventCardProps = {
  event: Event;
  speaker: Speaker;
  isActive: boolean;
};

export const EventCard = ({ event, speaker, isActive }: EventCardProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <>
      <div className="text-left p-1 rounded-lg bg-white">
        {isActive && (
          <h3 className="text-right font-bold text-red-500">Práve prebieha</h3>
        )}
        <h1 className="font-bold text-2xl mb-2">{event.title}</h1>
        {event.eventType !== 'OTHER' && (
          <>
            <Link href={`speakers/#${event.speakerId}`}>
              <h3 className="font-bold lg:text-3xl text-small mb-4 text-slate-600">
                {speaker?.name}
              </h3>
            </Link>
            {event.eventType !== 'DISCUSSION' ? (
              <div className="mb-4">
                <div className="flex items-center">
                  <span className="text-blue-500 font-semibold">Popis:</span>
                  <button
                    onClick={toggleDescription}
                    className="ml-2 text-blue-500 underline flex items-center hover:text-blue-700 transition-colors duration-300"
                  >
                    <FontAwesomeIcon
                      icon={isDescriptionOpen ? faChevronUp : faChevronDown}
                      className="ml-1"
                    />
                  </button>
                </div>
                {isDescriptionOpen && event.description && (
                  <p className="mt-2 p-1 rounded-lg bg-gray-100 shadow-md">
                    {event.description}
                  </p>
                )}
              </div>
            ) : (
              <p className="mt-2 text-justify rounded-lg bg-gray-100">
                {event.description}
              </p>
            )}
            <div className="flex flex-wrap justify-end pt-5">
              <Tags tags={event.tags ?? []} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
