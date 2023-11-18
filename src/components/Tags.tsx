import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export const Tags = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="IT" color="primary" />
      <Chip label="Tech" color="error" />
      <Chip label="Enviroment" color="success" />
      <Chip label="AI" color="secondary" />
    </Stack>
  );
};
