import { EventType } from '@/eventType';
import { Tag } from '@prisma/client';
import { Speaker } from './Speaker';

export type Event = {
  id: number;
  type: EventType;
  title?: string;
  speaker?: Speaker;
  description?: string;
  tags?: Tag[];
  startTime?: Date;
  endTime?: Date;
  active?: boolean;
};
