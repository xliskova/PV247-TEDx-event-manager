import { Tag } from '@prisma/client';
import { BasicDialog } from './BasicDialog';
import { MuiColorInput } from 'mui-color-input';
import React from 'react';

type TagDialogProps = {
  tag: Tag | undefined;
  onSubmit: (tag: Tag) => void;
  close: () => void;
  isOpen: boolean;
};

export const TagDialog = ({ tag, onSubmit, close, isOpen }: TagDialogProps) => {
  const [color, setColor] = React.useState(tag?.color ?? '#ffffff');
  const handleChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <BasicDialog
      value={tag}
      getFields={(tag) => [
        {
          key: 'title',
          title: 'Název',
          input: (register) => (
            <input
              type="text"
              id="title"
              {...register('value.title', { required: 'Title is required' })}
              className="w-full p-2 border rounded"
            />
          ),
        },
        {
          key: 'color',
          title: 'Barva',
          input: (register) => (
            <MuiColorInput
              id="color"
              value={color}
              fallbackValue={tag?.color}
              {...register('value.color', { required: 'Color is required' })}
              onChange={handleChange}
            />
          ),
        },
      ]}
      onSubmit={onSubmit}
      close={close}
      isOpen={isOpen}
    />
  );
};
