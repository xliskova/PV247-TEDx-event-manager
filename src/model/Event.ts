import { EventType } from '@/eventType';
import { Tag } from '@prisma/client';
import { Speaker } from './Speaker';

export type Event = {
  id: number;
  eventType: EventType;
  title?: string;
  speakerId?: number;
  description?: string;
  tags?: Tag[];
  startTime?: Date;
  endTime?: Date;
};
