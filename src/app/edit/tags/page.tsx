'use client';
import React, { useState } from 'react';
import { TagTable } from '@/components/tables/TagTable';
import { Button } from '@mui/material';
import { Tag } from '@prisma/client';
import { useQueryClient } from 'react-query';
import { TagDialog } from '@/components/dialogs/TagDialog';
import { deleteTag, saveTag, useTags } from '@/app/api/api';

const EditTagsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState<number | null>(null);

  const queryClient = useQueryClient();

  const { data: tags, isLoading } = useTags();

  if (isLoading) return <div>Loading...</div>;

  const handleDeleteRow = async (idToBeDeleted: number) => {
    await deleteTag(idToBeDeleted, () => queryClient.invalidateQueries('tags'));
  };

  const handleEditRow = (index: number) => {
    setRowToEdit(index);
    setModalOpen(true);
  };

  return (
    <div>
      <TagDialog
        tag={tags?.find((it: Tag) => it.id === rowToEdit)}
        onSubmit={async (tag: Tag) => {
          await saveTag(tag, () => queryClient.invalidateQueries('tags'));
        }}
        close={() => {
            setModalOpen(false)
            setRowToEdit(null)
        }}
        isOpen={modalOpen}
      />
      <TagTable
        deleteRow={handleDeleteRow}
        editRow={handleEditRow}
        tags={tags ?? []}
      />
      <Button
        variant="outlined"
        color="inherit"
        onClick={() => {
          setRowToEdit(null);
          setModalOpen(true);
        }}
      >
        Nový tag
      </Button>
    </div>
  );
};

export default EditTagsPage;
