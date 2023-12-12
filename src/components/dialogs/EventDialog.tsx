import { BasicDialog } from "./BasicDialog";
import { EventType } from "@/eventType";
import { Event } from "@/model/Event";
import { useSpeakers, useTags } from "@/app/api/api";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { format } from 'date-fns';
import {DateTimePicker} from "@mui/x-date-pickers";
import {Controller} from "react-hook-form";



type EventDialogProps = {
    event: Event | undefined,
    onSubmit: (event: Event) => void,
    close: () => void,
    isOpen: boolean,
};

export const EventDialog = ({ event, onSubmit, close, isOpen }: EventDialogProps) => {
    const { data: speakers, isLoading: isSpeakersLoading } = useSpeakers();
    const { data: tags, isLoading: isTagsLoading } = useTags();
    const [selectedTags, setSelectedTags] = useState<number[]>([])

    if (isSpeakersLoading || isTagsLoading) return (<div>Loading...</div>);

    return (<BasicDialog
        value={event}
        getFields={(event) => [
            {
                key: 'title',
                title: 'Názov',
                input: (form) => <input
                    type="text"
                    id="title"
                    {...form.register('value.title', { required: 'Title is required' })}
                    className="w-full p-2 border rounded"
                />
            },
            {
                key: 'description',
                title: 'Popis',
                input: (form) => <textarea
                    id="description"
                    {...form.register('value.description', { required: 'Description is required' })}
                    className="w-full p-2 border rounded"
                />
            },
            {
                key: 'eventType',
                title: 'Typ udalosti',
                input: (form) => <select
                    id="eventType"
                    {...form.register('value.eventType', { required: 'Event type is required' })}
                    className="w-full p-2 border rounded"
                >
                    {[EventType.DISCUSSION, EventType.PERFORMANCE, EventType.TALK, EventType.OTHER].map((eventType) => (
                        <option key={eventType} value={eventType}>{eventType}</option>
                    ))}
                </select>
            },
            {
                key: 'startTime',
                title: 'Začiatok',
                input: (form) => <Controller
                    control={form.control}
                    name="value.startTime"
                    render={({
                                 field: { onChange, value, ref},
                             }) => (
                        <DateTimePicker
                            value={value}
                            onChange={onChange} // send value to hook form
                            inputRef={ref}
                        />
                    )}
                />
            },
            {
                key: 'endTime',
                title: 'Koniec',
                input: (form) => <Controller
                    control={form.control}
                    name="value.endTime"
                    render={({
                                 field: { onChange, value, ref},
                             }) => (
                        <DateTimePicker
                            value={value}
                            onChange={onChange} // send value to hook form
                            inputRef={ref}
                        />
                    )}
                />
            },
            {
                key: 'speakerId',
                title: 'Rečník',
                input: (form) => <Select
                    id="speakerId"
                    defaultValue={event?.speakerId}
                    {...form.register('value.speakerId', { required: 'Speaker is required' })}
                    className="w-full p-2 border rounded"
                >
                    {speakers?.map((speaker) => (
                        <MenuItem key={speaker.id} value={speaker.id}>{speaker.name}</MenuItem>
                    ))}
                </Select>
            },
            {
                key: 'tags',
                title: 'Tagy',
                input: (form) => <Select
                    multiple={true}
                    id="tagIds"
                    defaultValue={event?.tags?.map(tag => tag.id) ?? []}
                    onChange={(event) => {
                        setSelectedTags(event.target.value as number[])
                    }}
                    inputProps={form.register('tagIds')}
                    className="w-full p-2 border rounded"
                >
                    {tags?.map((tag) => (
                        <MenuItem key={tag.id} value={tag.id}>{tag.title}</MenuItem>
                    ))}
                </Select>
            }
        ]}
        onSubmit={(e) => onSubmit({...e, tags: selectedTags.map((tagId: number) => tags?.find(tag => tag.id === tagId)!!)})}
        close={close}
        isOpen={isOpen}
    />
    );
}
