import { Speaker } from "@prisma/client";
import { useForm } from "react-hook-form";
import { BasicDialog } from "./BasicDialog";



type SpeakerDialogProps = {
    speaker: Speaker | undefined,
    onSubmit: (speaker: Speaker) => void,
    close: () => void,
    isOpen: boolean,
};

export const SpeakerDialog = ({ speaker, onSubmit, close, isOpen }: SpeakerDialogProps) => {
    return (<BasicDialog 
    value={speaker} 
    fields={[
        {
            key: 'name',
            title: 'Jméno',
            input: (register) => <input
                type="text"
                id="name"
                {...register('value.name', { required: 'Name is required' })}
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
            key: 'image',
            title: 'Fotka',
            input: (register) => <input
                type="text"
                id="image"
                {...register('value.image', { required: 'Image is required' })}
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