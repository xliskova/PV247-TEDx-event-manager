import Chip from '@mui/material/Chip';
import { Speaker } from '@prisma/client';
import { BasicTable } from './BasicTable';
import { CldImage } from 'next-cloudinary';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

type TagTableProps = {
  deleteRow: (idToBeDeleted: number) => void;
  editRow: (index: number) => void;
  speakers: Speaker[];
};

export const SpeakerTable = ({
  deleteRow,
  editRow,
  speakers,
}: TagTableProps) => {
  return (
    <BasicTable
      deleteRow={deleteRow}
      editRow={editRow}
      rows={speakers}
      getKey={(speaker) => speaker.id}
      columns={[
        {
          name: 'Název',
          valueFn: (speaker) => speaker.name,
        },
        {
          name: 'Popis',
          valueFn: (speaker) => speaker.description,
        },
        {
          name: 'Fotka',
          valueFn: (speaker) => (
            <CldImage
              alt={speaker.name}
              src={speaker.url ?? ''}
              width="50"
              height="50"
            />
          ),
        },
      ]}
    />
  );
};
