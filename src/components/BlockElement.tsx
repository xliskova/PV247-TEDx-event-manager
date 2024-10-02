import { Speaker } from '@/model/Speaker';
import { Event } from '@/model/Event';
import { format } from 'date-fns';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faUser,
  faComments,
  faGlassCheers,
} from '@fortawesome/free-solid-svg-icons';
import { EventType } from '@/eventType';
import { EventCard } from './EventCard';

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

type TimelineProps = {
  events: Event[];
  speakers: Speaker[];
  currentEvents: Event[];
  isFirstBlock?: boolean;
};

export const BlockElement = ({
  events,
  speakers,
  currentEvents,
  isFirstBlock,
}: TimelineProps) => {
  return (
    <>
      <VerticalTimeline>
        {events?.map((item) => {
          const isActive = currentEvents.includes(item);
          const contentStyle = isActive
            ? { background: '#E62B1E', color: 'black' }
            : undefined;
          return (
            <VerticalTimelineElement
              key={item.id}
              contentStyle={contentStyle}
              date={item.startTime && format(new Date(item.startTime), 'HH:mm')}
              dateClassName="text-left"
              visible={true}
              icon={getIcon(item.eventType).icon}
              iconStyle={getIcon(item.eventType).iconStyle}
            >
              {item.eventType && (
                <EventCard
                  event={item}
                  speaker={
                    speakers!!.find((speaker) => speaker.id == item.speakerId)!!
                  }
                  isActive={isActive}
                />
              )}
            </VerticalTimelineElement>
          );
        })}
        {!isFirstBlock && (
          <VerticalTimelineElement
            key={events.at(-1)?.id}
            dateClassName="text-left"
            visible={true}
            icon={getIcon(EventType.OTHER).icon}
            iconStyle={getIcon(EventType.OTHER).iconStyle}
          ></VerticalTimelineElement>
        )}
      </VerticalTimeline>
    </>
  );
};
