import React from 'react';
import { Event } from '@/model/Event';
import { format } from 'date-fns';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { EventCard } from '@/components/EventCard';
import { EventType } from '@/eventType';
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
      <h1 className="text-5xl font-bold p-2 my-10"> Blok 1: Cez čiaru</h1>
      <BlockElement events={events.slice(0,6)} speakers={speakers} currentEvents={currentEvents} />
      <h1 className="text-5xl font-bold p-2  my-24"> Blok 2: Bezpečná zóna</h1>
      <BlockElement events={events.slice(6,10)} speakers={speakers} currentEvents={currentEvents} />
      <h1 className="text-5xl font-bold p-2  my-24"> Blok 3: Spievaj, spi a hýb sa</h1>
      <BlockElement events={events.slice(10)} speakers={speakers} currentEvents={currentEvents} />
    </div>
  );
};
