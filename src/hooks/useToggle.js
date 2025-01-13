import { useState, useCallback } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback((newValue) => {
    setValue((currentValue) =>
      typeof newValue === 'boolean' ? newValue : !currentValue
    );
  }, []);

  return [value, toggleValue];
}

export default useToggle;
