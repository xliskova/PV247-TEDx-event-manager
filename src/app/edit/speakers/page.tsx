'use client';
import React, { useState } from 'react';
import { TagTable } from '@/components/tables/TagTable';
import { Button } from '@mui/material';
import { Speaker, Tag } from '@prisma/client';
import { useQuery, useQueryClient } from 'react-query';
import { TagDialog } from '@/components/dialogs/TagDialog';
import { deleteSpeaker, saveSpeaker, useSpeakers } from '@/app/api/api';
import { SpeakerDialog } from '@/components/dialogs/SpeakerDialog';
import { SpeakerTable } from '@/components/tables/SpeakerTable';

const EditSpeakersPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState<number | null>(null);

  const queryClient = useQueryClient();

  const { data: speakers, isLoading } = useSpeakers();

  if (isLoading) return <div>Loading...</div>;

  const handleDeleteRow = async (idToBeDeleted: number) => {
    await deleteSpeaker(idToBeDeleted, () =>
      queryClient.invalidateQueries('speakers'),
    );
  };

  const handleEditRow = (index: number) => {
    setRowToEdit(index);
    setModalOpen(true);
  };

  return (
    <div>
      <SpeakerDialog
        speaker={speakers?.find((it: Speaker) => it.id === rowToEdit)}
        onSubmit={(speaker: Speaker) =>
          saveSpeaker(speaker, () => queryClient.invalidateQueries('speakers'))
        }
        close={() => setModalOpen(false)}
        isOpen={modalOpen}
      />
      <SpeakerTable
        deleteRow={handleDeleteRow}
        editRow={handleEditRow}
        speakers={speakers ?? []}
      />
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

export default EditSpeakersPage;
