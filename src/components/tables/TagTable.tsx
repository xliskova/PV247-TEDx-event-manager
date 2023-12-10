import React from 'react';
import Chip from '@mui/material/Chip';
import { Tag } from '@prisma/client';
import { BasicTable } from './BasicTable';

type TagTableProps = {
  deleteRow: (idToBeDeleted: number) => void;
  editRow: (index: number) => void;
  tags: Tag[];
};

export const TagTable = ({ deleteRow, editRow, tags }: TagTableProps) => {
  return (
    <BasicTable
      deleteRow={deleteRow}
      editRow={editRow}
      rows={tags}
      getKey={(tag) => tag.id}
      columns={[
        {
          name: 'Název',
          valueFn: (tag) => (
            <Chip
              className="px-5"
              key={tag.id}
              label={tag.title}
              sx={{ bgcolor: tag.color, color: 'black' }}
            />
          ),
        },
      ]}
    />
  );
};
