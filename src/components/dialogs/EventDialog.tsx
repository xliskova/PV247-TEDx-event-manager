import { Event } from "@prisma/client";
import { useForm } from "react-hook-form";
import { BasicDialog } from "./BasicDialog";
import { EventType } from "@/eventType";



type EventDialogProps = {
    event: Event | undefined,
    onSubmit: (event: Event) => void,
    close: () => void,
    isOpen: boolean,
};

export const EventDialog = ({ event, onSubmit, close, isOpen }: EventDialogProps) => {
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
            }
        ]}
        onSubmit={onSubmit}
        close={close}
        isOpen={isOpen}
    />
    );
}