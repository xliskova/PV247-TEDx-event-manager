import Chip, { ChipPropsColorOverrides } from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Tag } from '@prisma/client';
import { TagColor } from '@/schemas/TagSchema';

export const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <Stack direction="row" spacing={1}>
      {tags.map((t) => (
        <Chip
          key={t.id}
          label={t.title}
          color={'primary'}
          style={{ backgroundColor: t.color }}
        />
      ))}
    </Stack>
  );
};
