import React from 'react';
import Chip from '@mui/material/Chip';
import { Tag } from '@prisma/client';
import { BasicTable } from './BasicTable';
import { isColorDark } from '../Tags';

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
          name: 'Názov',
          valueFn: (tag) => (
            <Chip
              key={tag.id}
              label={tag.title}
              color={'primary'}
              style={{
                backgroundColor: tag.color,
                color: isColorDark(tag.color) ? 'white' : 'black',
                fontWeight: 'bold',
                marginBottom: '5px',
                marginRight: '5px',
              }}
            />
          ),
        },
      ]}
    />
  );
};
