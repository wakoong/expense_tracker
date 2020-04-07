import { useState } from 'react';

// Use for boolean states
export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
}

// Use for selecting an item
export function useSelect(initialValue, id) {
  const [values, setValue] = useState(initialValue);
  const [selected, setSelect] = useState('');

  const selectValue = (id) => {
    setSelect(id);
    setValue({ ...values, January: !values.January });
  };

  console.log(selected, values);

  return [values, selected, selectValue];
}
