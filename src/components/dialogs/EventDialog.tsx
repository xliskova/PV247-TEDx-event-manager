import { Event } from "@prisma/client";
import { useForm } from "react-hook-form";
import { BasicDialog } from "./BasicDialog";
import { EventType } from "@/eventType";
import { useSpeakers, useTags } from "@/app/api/api";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";



type EventDialogProps = {
    event: Event | undefined,
    onSubmit: (event: Event) => void,
    close: () => void,
    isOpen: boolean,
};

export const EventDialog = ({ event, onSubmit, close, isOpen }: EventDialogProps) => {
    const { data: speakers, isLoading: isSpeakersLoading } = useSpeakers()
    const { data: tags, isLoading: isTagsLoading } = useTags()

    if (isSpeakersLoading || isTagsLoading) return (<div>Loading...</div>);

    return (<BasicDialog
        value={event}
        fields={[
            {
                key: 'title',
                title: 'Popisek',
                input: (register) => <input
                    type="text"
                    id="title"
                    {...register('value.title', { required: 'Title is required' })}
                    className="w-full p-2 border rounded"
                />
            },
            {
                key: 'description',
                title: 'Popis',
                input: (register) => <input
                    type="text"
                    id="description"
                    {...register('value.description', { required: 'Description is required' })}
                    className="w-full p-2 border rounded"
                />
            },
            {
                key: 'eventType',
                title: 'Typ události',
                input: (register) => <select
                    id="eventType"
                    {...register('value.eventType', { required: 'Event type is required' })}
                    className="w-full p-2 border rounded"
                >
                    {[EventType.DISCUSSION, EventType.PERFORMANCE, EventType.TALK, EventType.OTHER].map((eventType) => (
                        <option key={eventType} value={eventType}>{eventType}</option>
                    ))}
                </select>
            },
            {
                key: 'startTime',
                title: 'Začátek',
                input: (register) => <input
                    type="datetime-local"
                    {...register('value.startTime', { required: 'Start time is required' })}
                    className="w-full p-2 border rounded"
                />
            },
            {
                key: 'endTime',
                title: 'Konec',
                input: (register) => <input
                    type="datetime-local"
                    {...register('value.endTime', { required: 'End time is required' })}
                    className="w-full p-2 border rounded"
                />
            },
            {
                key: 'speakerId',
                title: 'Řečník',
                input: (register) => <Select
                    id="speakerId"
                    {...register('value.speakerId', { required: 'Event type is required' })}
                    className="w-full p-2 border rounded"
                >
                    {speakers?.map((speaker) => (
                        <MenuItem key={speaker.id} value={speaker.id}>{speaker.name}</MenuItem>
                    ))}
                </Select>
            },
            /*{
                key: 'tags',
                title: 'Tagy',
                input: (register, value) => <Select
                    multiple={true}
                    id="tags"
                    defaultValue={[]}
                    value={value?.tags ?? []}
                    inputProps={register('value.tags')}
                    className="w-full p-2 border rounded"
                >
                    {tags?.map((tag) => (
                        <MenuItem key={tag.id} value={tag.id}>{tag.title}</MenuItem>
                    ))}
                </Select>
            }*/
        ]}
        onSubmit={onSubmit}
        close={close}
        isOpen={isOpen}
    />
    );
}