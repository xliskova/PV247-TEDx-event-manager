'use client';
import React, { useState } from 'react';
import { TagTable } from '@/components/TagTable';
import { Button } from '@mui/material';

const EditTagsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tags, setTags] = useState([[]]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex: number) => {
    setTags(tags.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index: number) => {
    setRowToEdit(index);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setTags([...tags, newRow])
      : setTags(
          tags.map((currRow, index) => {
            if (index !== rowToEdit) return currRow;

            return newRow;
          }),
        );
  };
  return (
    <div className="h-screen text-center m-16">
      <TagTable deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <Button
        variant="outlined"
        color="inherit"
        className="text-dark-grey m-5"
        onClick={() => setModalOpen(true)}
      >
        Nový tag
      </Button>
    </div>
  );
};

export default EditTagsPage;
