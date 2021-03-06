import { useState, useCallback } from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((value) => !value), []);

  return [value, toggle];
};

export default useToggle;
