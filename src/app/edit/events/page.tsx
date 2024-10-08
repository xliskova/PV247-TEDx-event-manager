'use client';
import React, {useEffect, useState} from 'react';
import { Event } from "@/model/Event";
import { Button } from '@mui/material';
import { useQueryClient } from 'react-query';
import { deleteEvent, saveEvent, useEvents } from '@/app/api/api';
import { EventDialog } from '@/components/dialogs/EventDialog';
import { EventTable } from '@/components/tables/EventTable';

const EditEventsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState<number | null>(null);

  const queryClient = useQueryClient();

  const { data: events, isLoading } = useEvents();

  if (isLoading) return <div>Loading...</div>;

  const handleDeleteRow = async (idToBeDeleted: number) => {
    await deleteEvent(idToBeDeleted, () =>
      queryClient.invalidateQueries('events'),
    );
  };

  const handleEditRow = (index: number | null) => {
      setRowToEdit(index);
      setModalOpen(true);
  };

  return (
    <div className="mb-5">
      <EventDialog
        event={events?.find((it: Event) => it.id === rowToEdit)}
        onSubmit={(event: Event) =>
          saveEvent(event, () => queryClient.invalidateQueries('events'))
        }
        close={() => {
            setModalOpen(false)
            setRowToEdit(null)
        }}
        isOpen={modalOpen}
      />
      <EventTable
        deleteRow={handleDeleteRow}
        editRow={handleEditRow}
        events={events ?? []}
      />
      <Button
        variant="outlined"
        color="inherit"
        className="text-dark-grey m-5"
        onClick={() => {
          handleEditRow(null)
        }}
      >
        Nová událost
      </Button>
    </div>
  );
};

export default EditEventsPage;
