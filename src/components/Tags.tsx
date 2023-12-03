import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Tag } from '@prisma/client';

export const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <Stack direction="row" spacing={1}>
      {tags.map((t) => (
        <Chip key={t.id} label={t.title} color={t.color} />
      ))}
    </Stack>
  );
};
