import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Chip, { ChipPropsColorOverrides } from '@mui/material/Chip';
import { OverridableStringUnion } from '@mui/types';
import { Tag } from '@prisma/client';
import { BasicTable } from './BasicTable';

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

type TagTableProps = {
  deleteRow: (idToBeDeleted: number) => void,
  editRow: (index: number) => void,
  tags: Tag[],
};

export const TagTable = ({ deleteRow, editRow, tags }: TagTableProps) => {
  return (
    <BasicTable
      deleteRow={deleteRow}
      editRow={editRow}
      rows={tags}
      getKey={(tag) => tag.id}
      columns={
        [
          {
            name: 'Název',
            valueFn: (tag) => <Chip
              className="px-5"
              key={tag.id}
              label={tag.title}
              color={tag.color as ColorType}
            />
          }
        ]
      }
    />
  );
};
