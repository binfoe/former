import { useState, type FC } from 'react';
import type { NestArrayFormField } from '../../common';
import { FieldLabel } from './Label';
import { FieldList } from './Field';

export const NestArrayField: FC<{
  field: NestArrayFormField;
  // onUpdate: () => void;
  onChange: () => void;
}> = ({ field, onChange }) => {
  const [items, setItems] = useState(field.items ?? []);

  return (
    <div className='mx-2'>
      <div className='flex w-full items-center rounded-tl-md rounded-tr-md border border-b-0 border-solid border-border bg-blue-50 px-2 py-2'>
        <FieldLabel field={field} />
      </div>
      <div className='flex w-full flex-wrap gap-y-4 rounded-bl-md rounded-br-md border border-t-0 border-solid border-border py-4'>
        <FieldList
          onChange={(items) => {
            field.items = items;
            setItems(items);
            onChange();
          }}
          fields={items}
        />
      </div>
    </div>
  );
};
