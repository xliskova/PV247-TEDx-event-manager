'use client';
import React from 'react';
import { data } from '@/data';
import { Event } from '@/model/Event';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faUser,
  faComments,
  faGlassCheers,
} from '@fortawesome/free-solid-svg-icons';
import { EventCard } from '@/components/EventCard';
import { EventType } from '@/eventType';

const talkIcon = {
  icon: <FontAwesomeIcon icon={faUser} />,
  iconStyle: { background: 'red', color: '#fff' },
};
const performanceIcon = {
  icon: <FontAwesomeIcon icon={faMusic} />,
  iconStyle: { background: '#5CB9F1FF', color: '#fff' },
};
const discusionIcon = {
  icon: <FontAwesomeIcon icon={faComments} />,
  iconStyle: { background: '#f1b05c', color: '#fff' },
};
const partyIcon = {
  icon: <FontAwesomeIcon icon={faGlassCheers} />,
  iconStyle: { background: 'grey', color: '#fff' },
};

const getIcon = (eventType: EventType) => {
  switch (eventType) {
    case 'TALK':
      return talkIcon;
    case 'PERFORMANCE':
      return performanceIcon;
    case 'DISCUSSION':
      return discusionIcon;
    default:
      return partyIcon;
  }
};

export const Timeline = () => {
  return (
    <div className="App p-5 bg-grey">
      <h1 className="text-3xl font-bold p-2">
        {' '}
        TEDx Trenčín - tu bude názov podujatia{' '}
      </h1>
      <VerticalTimeline>
        {data.map((item, index) => {
          const contentStyle = item.active
            ? { background: '#E62B1E', color: 'black' }
            : undefined;
          return (
            <VerticalTimelineElement
              key={index}
              contentStyle={contentStyle}
              date={item.startTime && item.startTime.toLocaleString()}
              dateClassName="text-left"
              visible={true}
              icon={getIcon(item.type).icon}
              iconStyle={getIcon(item.type).iconStyle}
            >
              {item.title && <EventCard event={item} />}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
