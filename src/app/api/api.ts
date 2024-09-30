import { Speaker } from "@/model/Speaker";
import { Event } from "@/model/Event";
import { Tag } from "@prisma/client";
import { useQuery } from "react-query";
import { EventGetDto } from "@/server/dto/EventDto";
import { EventType } from "@/eventType";

const baseUrl = "/api/auth";

const deleteEntity = async (entity: string, id: number, onSuccess: () => void) => {
    await fetch(`${baseUrl}/${entity}/${id}`, {
        method: 'DELETE',
    });
    onSuccess();
};

const useEntity = <T>(entity: string, parse: (arg: Response) => Promise<T[]>) => useQuery(entity, async () => {
    const res = await fetch(`${baseUrl}/${entity}`);
    return parse(res)
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
    return res.json() as Promise<Tag[]>;
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
    return res.json() as Promise<Speaker[]>;
});

const deleteSpeaker = (id: number, onSuccess: () => void) => deleteEntity('speakers', id, onSuccess);

const saveSpeaker = async (speaker: Speaker, image: File, onSuccess: () => void) => {
    const formData = new FormData();
    formData.append('name', speaker.name);
    formData.append('description', speaker.description);
    if (image) {
        formData.append('image', image);
    }
    if (speaker.id) {
        await fetch(`${baseUrl}/speakers/${speaker.id}`, {
            method: 'PUT',
            body: formData
        });
    } else {
        await fetch(`${baseUrl}/speakers`, {
            method: 'POST',
            body: formData
        });
    }
    onSuccess();
};

const useEvents = () => useEntity<Event>('events', async (res) => {
    const eventDtos = await (res.json() as Promise<EventGetDto[]>);
    return eventDtos.map(e => {
        return {
            id: e.id,
            eventType: e.eventType as EventType,
            title: e.title,
            speakerId: e.speakerId,
            description: e.description,
            startTime: new Date(e.startTime),
            endTime: new Date(e.endTime),
            tags: e.tags
        }
    });
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
