import { EventType } from '@/eventType';
import { Event } from '@/model/Event';

export const data: Event[] = [
  {
    id: 0,
    type: EventType.TALK,
    title: 'Názov talku',
    speaker: 'Meno Priezvisko',
    description: 'Krátky popisok, o čom talk bude',
    tags: [''],
    startTime: new Date('2021-10-01T08:00:00'),
    endTime: new Date('2021-10-01T10:00:00'),
    active: true,
  },
  {
    id: 1,
    type: EventType.TALK,
    title: 'Názov talku',
    speaker: 'Meno Priezvisko',
    description: 'Krátky popisok, o čom talk bude',
    tags: [''],
    startTime: new Date('2021-10-01T09:00:00'),
    endTime: new Date('2021-10-01T10:00:00'),
    active: false,
  },
  {
    id: 2,
    type: EventType.TALK,
    title: 'Názov talku',
    speaker: 'Meno Priezvisko',
    description: 'Krátky popisok, o čom talk bude',
    tags: [''],
    startTime: new Date('2021-10-01T10:00:00'),
    endTime: new Date('2021-10-01T10:00:00'),
    active: false,
  },
  {
    id: 3,
    type: EventType.TALK,
    title: 'Názov talku',
    speaker: 'Meno Priezvisko',
    description: 'Krátky popisok, o čom talk bude',
    tags: [''],
    startTime: new Date('2021-10-01T11:00:00'),
    endTime: new Date('2021-10-01T10:00:00'),
    active: false,
  },
  {
    id: 4,
    type: EventType.DISCUSSION,
    title: 'Diskusia',
    speaker: 'Meno Priezvisko',
    description: 'Krátky popisok, o čom talk bude',
    tags: [''],
    startTime: new Date('2021-10-01T12:00:00'),
    endTime: new Date('2021-10-01T10:00:00'),
    active: false,
  },
  {
    id: 5,
    type: EventType.OTHER,
  },
  {
    id: 6,
    type: EventType.PERFORMANCE,
    title: 'Názov performance',
    speaker: 'Meno Priezvisko',
    description: 'Krátky popisok, o čom talk bude',
    tags: [''],
    startTime: new Date('2021-10-01T13:00:00'),
    endTime: new Date('2021-10-01T10:00:00'),
    active: false,
  },
  {
    id: 7,
    type: EventType.TALK,
    title: 'Názov talku',
    speaker: 'Meno Priezvisko',
    description: 'Krátky popisok, o čom talk bude',
    tags: [''],
    startTime: new Date('2021-10-01T14:00:00'),
    endTime: new Date('2021-10-01T10:00:00'),
    active: false,
  },
  {
    id: 8,
    type: EventType.TALK,
    title: 'Názov talku',
    speaker: 'Meno Priezvisko',
    description: 'Krátky popisok, o čom talk bude',
    tags: [''],
    startTime: new Date('2021-10-01T15:00:00'),
    endTime: new Date('2021-10-01T10:00:00'),
    active: false,
  },
  {
    id: 9,
    type: EventType.TALK,
    title: 'Názov talku',
    speaker: 'Meno Priezvisko',
    description: 'Krátky popisok, o čom talk bude',
    tags: [''],
    startTime: new Date('2021-10-01T16:00:00'),
    endTime: new Date('2021-10-01T10:00:00'),
    active: false,
  },
  {
    id: 10,
    type: EventType.OTHER,
  },
];
