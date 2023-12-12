import React, { ReactNode } from 'react';
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

type TableColumn<T> = {
  name: String;
  valueFn: (row: T) => ReactNode;
};

type TableProps<T> = {
  deleteRow: (idToBeDeleted: number) => void;
  editRow: (idToBeEdited: number) => void;
  rows: T[];
  getKey: (row: T) => number;
  columns: TableColumn<T>[];
};

export const BasicTable = <T,>({
  deleteRow,
  editRow,
  rows,
  columns,
  getKey,
}: TableProps<T>) => {
  return (
    <Table className="mb-5">
      <TableHead style={{backgroundColor:'#E62B1E', fontWeight: '700'}}>
        <TableRow>
          {columns.map((column, index) => (
            <TableCell key={index}>{column.name}</TableCell>
          ))}
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, colIndex) => (
              <TableCell size="large" key={colIndex}>{column.valueFn(row)}</TableCell>
            ))}
            <TableCell className="text-right">
              <div>
                <IconButton aria-label="edit">
                  <EditIcon onClick={() => editRow(getKey(row))} />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon onClick={() => deleteRow(getKey(row))} />
                </IconButton>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
