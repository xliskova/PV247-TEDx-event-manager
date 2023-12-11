import Chip from '@mui/material/Chip';
import { BasicTable } from './BasicTable';
import { CldImage } from 'next-cloudinary';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import { Speaker } from '@/model/Speaker';

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
              width="30"
              height="0"
            />
          ),
        },
      ]}
    />
  );
};
