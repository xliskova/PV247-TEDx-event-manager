
import Chip from '@mui/material/Chip';
import { Speaker, } from '@prisma/client';
import { BasicTable } from './BasicTable';

type TagTableProps = {
  deleteRow: (idToBeDeleted: number) => void,
  editRow: (index: number) => void,
  speakers: Speaker[],
};

export const SpeakerTable = ({ deleteRow, editRow, speakers }: TagTableProps) => {
  return (
    <BasicTable
      deleteRow={deleteRow}
      editRow={editRow}
      rows={speakers}
      getKey={(speaker) => speaker.id}
      columns={
        [
          {
            name: 'Název',
            valueFn: (speaker) => speaker.name
          },
          {
            name: 'Popis',
            valueFn: (speaker) => speaker.description
          },
          {
            name: 'Fotka',
            valueFn: (speaker) => speaker.image
          }
        ]
      }
    />
  );
};
