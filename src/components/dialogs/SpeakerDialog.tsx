import { useState } from "react";
import { BasicDialog } from "./BasicDialog";
import { Speaker } from "@/model/Speaker";



type SpeakerDialogProps = {
    speaker: Speaker | undefined,
    onSubmit: (speaker: Speaker, image: File) => void,
    close: () => void,
    isOpen: boolean,
};

export const SpeakerDialog = ({ speaker, onSubmit, close, isOpen }: SpeakerDialogProps) => {
    const [image, setImage] = useState<File | undefined>(undefined);

    const handleFileChange = (event: any) => {
        console.log(event.target.files[0])
        setImage(event.target.files[0])
    };
    return (<BasicDialog 
    value={speaker} 
    getFields={(speaker) => [
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
            key: 'url',
            title: 'Profilový obrázek',
            input: (register) =>
            <div>
                <input
                type="file"
                id="url"
                {...register('value.url')}
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
            />
            </div>
                
        }
    ]} 
    onSubmit={(speaker) => {
        onSubmit(speaker, image!!)
    }} 
    close={close} 
    isOpen={isOpen} 
    />
    );
}