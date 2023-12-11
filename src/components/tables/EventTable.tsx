import { Event } from "@/model/Event";
import { BasicTable } from './BasicTable';
import { EventGetDto } from '@/server/dto/EventDto';
import {format} from "date-fns";

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
      columns={
        [
          {
            name: 'Popisek',
            valueFn: (event) => event.title
          },
          {
            name: 'Popis',
            valueFn: (event) => event.description
          },
          {
            name: 'Typ události',
            valueFn: (event) => event.eventType.toString()
          },
          {
            name: 'Začátek',
            valueFn: (event) => event?.startTime ? format(event.startTime, 'dd.MM.yyyy HH:mm') : ''
          },
          {
            name: 'Konec',
            valueFn: (event) => event?.endTime ? format(event.endTime, 'dd.MM.yyyy HH:mm') : ''
          }
        ]
      }
    />
  );
};
