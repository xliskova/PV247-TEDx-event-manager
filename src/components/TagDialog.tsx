import { Tag } from "@prisma/client";
import { useForm } from "react-hook-form";



type TagDialogProps = {
    tag: Tag | null,
    onSubmit: (tag: Tag) => void,
    close: () => void,
    isOpen: boolean,
};

export const TagDialog = ({ tag, onSubmit, close, isOpen }: TagDialogProps) => {
    const { register, handleSubmit, formState, reset, setValue } = useForm();
    if (tag) {
      setValue('tag', tag)
    }

    if (!isOpen) {
        return <></>;
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 border-black">
            <form onSubmit={handleSubmit((data) => {
                onSubmit(data.tag as Tag)
                reset();
                close();
            })} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        {...register('tag.title', { required: 'Title is required' })}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">
                        Color
                    </label>
                    <input
                        type="text"
                        id="color"
                        {...register('tag.color', { required: 'Color is required' })}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

