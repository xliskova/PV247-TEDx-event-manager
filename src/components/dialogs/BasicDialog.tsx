import { Tag } from "@prisma/client";
import {ReactNode, useEffect} from "react";
import {FieldValues, UseFormRegister, useForm, UseFormReturn} from "react-hook-form";


type DialogField = {
    key: string,
    title: ReactNode,
    input: (form: UseFormReturn<FieldValues, any, undefined>) => ReactNode
}

type BasicDialogProps<T> = {
    value: T | undefined,
    getFields: (value: T | undefined) => DialogField[],
    onSubmit: (value: T) => void,
    close: () => void,
    isOpen: boolean,
};

export const BasicDialog = <T,>({ value, onSubmit, close, isOpen, getFields }: BasicDialogProps<T>) => {
    const form = useForm()
    const { handleSubmit, reset, setValue } = form;
    if (value) {
        setValue('value', value)
    }

    if (!isOpen) {
        return <></>;
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-10">
            <div className="max-w-md mx-auto p-8 border rounded bg-white">
            <form onSubmit={handleSubmit((data) => {
                onSubmit(data.value as T)
                reset();
                close();
            })}>
                {getFields(value).map((field: DialogField) => (
                    <div className="mb-4" key={field.key}>
                        <label htmlFor={field.key} className="block text-gray-700 text-sm font-bold mb-2">
                            {field.title}
                        </label>
                        {field.input(form)}
                    </div>
                ))}
                <div>
                <button
                        type="button"
                        className="m-4 py-2 px-4 hover:bg-grey border rounded"
                        onClick={() => {
                            reset();
                            setValue('value', undefined)
                            close();
                        }}
                    >
                        Zavřít
                    </button>
                    <button
                        type="submit"
                        className="m-4 py-2 px-4 hover:bg-grey border rounded"
                    >
                        Uložit
                    </button>
                </div>
            </form>

            </div>
        </div>
    );
}

