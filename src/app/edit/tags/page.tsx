'use client';
import React, { useState } from 'react';
import { TagTable } from '@/components/TagTable';
import { Button } from '@mui/material';
import { Tag } from '@prisma/client';
import { useQuery, useQueryClient } from 'react-query';
import { TagDialog } from '@/components/TagDialog';

const baseUrl = "http://localhost:8080";

const EditTagsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState<number | null>(null);

  const queryClient = useQueryClient()

  const { data: tags, isLoading } = useQuery('tags', async () => {
    const res = await fetch(`${baseUrl}/tags`);
    return res.json();
  })

  const deleteData = async (id: number) => {
    await fetch(`${baseUrl}/tags/${id}`, {
      method: 'DELETE',
    });
    queryClient.invalidateQueries('tags');
  };

  const saveTag = async (tag: Tag) => {
    await fetch(`${baseUrl}/tags`, {
      method: tag.id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tag)  
    });
    queryClient.invalidateQueries('tags');
  };


  if (isLoading) return <div>Loading...</div>;

  const handleDeleteRow = async (idToBeDeleted: number) => {
    await deleteData(idToBeDeleted);
  };

  const handleEditRow = (index: number) => {
    setRowToEdit(index);
    setModalOpen(true);
  };

  return (
    <div>
      <TagDialog tag={tags.find((it: Tag) => it.id === rowToEdit)} onSubmit={(tag: Tag) => saveTag(tag)} close={() => setModalOpen(false)} isOpen={modalOpen} />
      <TagTable deleteRow={handleDeleteRow} editRow={handleEditRow} tags={tags} />
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
