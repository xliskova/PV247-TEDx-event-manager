import { EventType } from '@/eventType';
import { Tag } from '@prisma/client';

export type Event = {
  id: number;
  type: EventType;
  title?: string;
  speaker?: string;
  description?: string;
  tags?: Tag[];
  startTime?: Date;
  endTime?: Date;
  active?: boolean;
};
