import { Tag } from '@prisma/client';
import { BasicDialog } from './BasicDialog';
import { MuiColorInput } from 'mui-color-input';
import React from 'react';
import {Controller} from "react-hook-form";

type TagDialogProps = {
  tag: Tag | undefined;
  onSubmit: (tag: Tag) => void;
  close: () => void;
  isOpen: boolean;
};

export const TagDialog = ({ tag, onSubmit, close, isOpen }: TagDialogProps) => {
  return (
    <BasicDialog
      value={tag}
      getFields={(tag) => [
        {
          key: 'title',
          title: 'Název',
          input: (form) => (
            <input
              type="text"
              id="title"
              {...form.register('value.title', { required: 'Title is required' })}
              className="w-full p-2 border rounded"
            />
          ),
        },
        {
          key: 'color',
          title: 'Barva',
          input: (form) => (
              <Controller
                  control={form.control}
                  name="value.color"
                  render={({
                             field: { onChange, value, ref},
                           }) => (
                      <MuiColorInput
                          value={value}
                          onChange={onChange} // send value to hook form
                          inputRef={ref}
                      />
                  )}
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
