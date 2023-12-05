import Chip, { ChipPropsColorOverrides } from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Tag } from '@prisma/client';
import { OverridableStringUnion } from '@mui/types';

type ColorType = OverridableStringUnion<
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning',
  ChipPropsColorOverrides
>;

export const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <Stack direction="row" spacing={1}>
      {tags.map((t) => (
        <Chip key={t.id} label={t.title} color={t.color as ColorType} />
      ))}
    </Stack>
  );
};
