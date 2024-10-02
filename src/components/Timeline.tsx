import React from 'react';
import { Event } from '@/model/Event';
import 'react-vertical-timeline-component/style.min.css';
import { Speaker } from '@/model/Speaker';
import { BlockElement } from './BlockElement';

type TimelineProps = {
  events: Event[];
  speakers: Speaker[];
  currentEvents: Event[];
};

export const Timeline = ({
  events,
  speakers,
  currentEvents,
}: TimelineProps) => {
  return (
    <div className="App p-5 bg-grey">
      <h1 className="lg:text-5xl text-4xl font-bold p-2 my-5">
        {' '}
        Blok 1: Cez čiaru
      </h1>
      <BlockElement
        events={events.slice(0, 6)}
        speakers={speakers}
        currentEvents={currentEvents}
        isFirstBlock={true}
      />
      <h1 className="lg:text-5xl text-4xl font-bold p-2  md:my-24 my-10">
        {' '}
        Blok 2: Bezpečná zóna
      </h1>
      <BlockElement
        events={events.slice(6, 11)}
        speakers={speakers}
        currentEvents={currentEvents}
        isFirstBlock={false}
      />
      <h1 className="lg:text-5xl text-4xl font-bold p-2  md:my-24 my-10">
        {' '}
        Blok 3: Spievaj, spi a hýb sa
      </h1>
      <BlockElement
        events={events.slice(11)}
        speakers={speakers}
        currentEvents={currentEvents}
        isFirstBlock={false}
      />
    </div>
  );
};
