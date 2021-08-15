import * as React from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

export default function SearchBar() {
  return (
    <Combobox aria-label="choose a fruit">
      <ComboboxInput />
      <ComboboxPopover>
        <ComboboxList>
          <ComboboxOption value="Apple" />
          <ComboboxOption value="Banana" />
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
