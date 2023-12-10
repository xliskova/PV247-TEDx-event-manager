import { Event } from '@prisma/client';
import { BasicTable } from './BasicTable';
import { EventGetDto } from '@/server/dto/EventDto';

type EventTableProps = {
  deleteRow: (idToBeDeleted: number) => void;
  editRow: (index: number) => void;
  events: Event[];
};

export const EventTable = ({ deleteRow, editRow, events }: EventTableProps) => {
  return (
    <BasicTable
      deleteRow={deleteRow}
      editRow={editRow}
      rows={events}
      getKey={(event) => event.id}
      columns={[
        {
          name: 'Popisek',
          valueFn: (event) => event.title,
        },
        {
          name: 'Popis',
          valueFn: (event) => event.description,
        },
        {
          name: 'Typ události',
          valueFn: (event) => event.eventType,
        },
        {
          name: 'Začátek',
          valueFn: (event) => event.startTime.toString(),
        },
        {
          name: 'Popis',
          valueFn: (event) => event.endTime.toString(),
        },
      ]}
    />
  );
};
