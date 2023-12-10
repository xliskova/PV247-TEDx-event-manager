import { Speaker, Tag, Event } from "@prisma/client";
import { useQuery } from "react-query";

const baseUrl = "http://localhost:3000/api/auth";

const deleteEntity = async (entity: string, id: number, onSuccess: () => void) => {
    await fetch(`${baseUrl}/${entity}/${id}`, {
        method: 'DELETE',
    });
    onSuccess();
};

const useEntity = <T>(entity: string, validate: (arg: Response) => void) => useQuery(entity, async () => {
    const res = await fetch(`${baseUrl}/${entity}`);
    validate(res)
    return res.json() as Promise<T[]>;
});

const updateEntity = async(entity: string, id: number, data: any) => {
    await fetch(`${baseUrl}/${entity}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
};

const createEntity = async (entity: string, data: any) => {
    await fetch(`${baseUrl}/${entity}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
};



const useTags = () => useEntity<Tag>('tags', (res) => {
    // todo validate
});

const deleteTag = (id: number, onSuccess: () => void) => deleteEntity('tags', id, onSuccess);

const saveTag = async (tag: Tag, onSuccess: () => void) => {
    if (tag.id) {
        await updateEntity('tags', tag.id, tag);
    } else {
        await createEntity('tags', tag);
    }
    onSuccess();
};

const useSpeakers = () => useEntity<Speaker>('speakers', (res) => {
    // todo validate
});

const deleteSpeaker = (id: number, onSuccess: () => void) => deleteEntity('speakers', id, onSuccess);

const saveSpeaker = async (speaker: Speaker, onSuccess: () => void) => {
    if (speaker.id) {
        await updateEntity('speakers', speaker.id, speaker);
    } else {
        await createEntity('speakers', speaker);
    }
    onSuccess();
};

const useEvents = () => useEntity<Event>('events', (res) => {
    // todo validate
});

const deleteEvent = (id: number, onSuccess: () => void) => deleteEntity('events', id, onSuccess);

const saveEvent = async (event: Event, onSuccess: () => void) => {
    if (event.id) {
        await updateEntity('events', event.id, event);
    } else {
        await createEntity('events', event);
    }
    onSuccess();
};


export { useTags, deleteTag, saveTag, useSpeakers, deleteSpeaker, saveSpeaker, useEvents, deleteEvent, saveEvent };