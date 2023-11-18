import { EventType } from '@/eventType';

export type Event = {
  id: number;
  type: EventType;
  title?: string;
  speaker?: string;
  description?: string;
  tags?: string[];  //Tag[]
  startTime?: Date;
  endTime?: Date;
  active?: boolean;
};
