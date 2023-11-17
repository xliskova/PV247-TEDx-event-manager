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
export const Timeline = () => {
  const getIcon = (event: Event) => {
    switch (event.type) {
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

  return (
    <div className="App m-3 p-5">
      <h1 className="text-3xl font-bold p-2"> TEDx Trenčín - tu bude názov podujatia </h1>
      <VerticalTimeline>
        {data.map((item, index) => {
          const contentStyle = item.active
            ? { background: '#E62B1E', color: 'black' }
            : undefined;
          return (
            <VerticalTimelineElement
              key={index}
              contentStyle={contentStyle}
              date={item.startTime.toLocaleString()}
              visible={true}
              icon={getIcon(item).icon}
              iconStyle={getIcon(item).iconStyle}
            >
              <EventCard event={item}/>

            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
