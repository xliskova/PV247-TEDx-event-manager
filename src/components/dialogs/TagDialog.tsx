import { Tag } from "@prisma/client";
import { BasicDialog } from "./BasicDialog";



type TagDialogProps = {
    tag: Tag | undefined,
    onSubmit: (tag: Tag) => void,
    close: () => void,
    isOpen: boolean,
};

export const TagDialog = ({ tag, onSubmit, close, isOpen }: TagDialogProps) => {
    return (
        <BasicDialog
            value={tag}
            fields={[
                {
                    key: 'title',
                    title: 'Název',
                    input: (register) => <input
                        type="text"
                        id="title"
                        {...register('value.title', { required: 'Title is required' })}
                        className="w-full p-2 border rounded"
                    />
                },
                {
                    key: 'color',
                    title: 'Barva',
                    input: (register) => <input
                        type="text"
                        id="color"
                        {...register('value.color', { required: 'Color is required' })}
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

