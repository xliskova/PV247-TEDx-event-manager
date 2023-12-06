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

const tags = [
  { id: 1, title: 'IT', color: 'primary', eventId: 1 },
  { id: 2, title: 'Tech', color: 'error', eventId: 1 },
  {
    id: 3,
    title: 'Enviroment',
    color: 'success',
    eventId: 1,
  },
  { id: 4, title: 'AI', color: 'secondary', eventId: 1 },
];
export const TagTable = (deleteRow, editRow) => {
  return (
    <div className="w-full">
      <Table>
        <TableHead className="bg-red">
          <TableRow>
            <TableCell className="font-bold text-left px-10">Tag</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Chip
                    className="px-5"
                    key={tag.id}
                    label={tag.title}
                    color={tag.color as ColorType}
                  />
                </TableCell>
                <TableCell className="text-right">
                  <span>
                    <IconButton aria-label="edit" size="large">
                      <EditIcon onClick={() => editRow(index)} />
                    </IconButton>
                    <IconButton aria-label="delete" size="large">
                      <DeleteIcon onClick={() => deleteRow(index)} />
                    </IconButton>
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
