import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Tag } from '@prisma/client';

export const isColorDark = (color: string) => {
  const rgb = color.match(/\d+/g);
  if (!rgb) return false;
  const r = parseInt(rgb[0], 10);
  const g = parseInt(rgb[1], 10);
  const b = parseInt(rgb[2], 10);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 140;
};

export const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <Stack className="flex flex-wrap justify-end" direction="row" spacing={0}>
      {tags.map((t) => (
        <Chip
          key={t.id}
          label={t.title}
          color={'primary'}
          style={{
            backgroundColor: t.color,
            color: isColorDark(t.color) ? 'white' : 'black',
            fontWeight: 'bold',
            marginBottom: '5px',
            marginRight: '5px',
          }}
        />
      ))}
    </Stack>
  );
};
