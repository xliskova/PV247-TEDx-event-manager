import Chip, { ChipPropsColorOverrides } from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Tag } from '@prisma/client';

export const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <Stack className='flex flex-wrap' direction="row" spacing={0}>
      {tags.map((t) => (
        <Chip
          key={t.id}
          label={t.title}
          color={'primary'}
          style={{ backgroundColor: t.color, marginBottom: '5px', marginRight: '5px' }}
        />
      ))}
    </Stack>
  );
};
