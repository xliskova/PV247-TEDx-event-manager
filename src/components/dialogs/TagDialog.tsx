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
  const [color, setColor] = React.useState('#ffffff');
  const handleChange = (newColor: string) => {
    setColor(newColor);
    if (tag) {
      tag.color = newColor;
    }
  };

  return (
    <BasicDialog
      value={tag}
      fields={[
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
              value={tag ? tag!.color : color}
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
