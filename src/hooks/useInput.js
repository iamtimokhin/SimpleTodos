import React from "react";

const useInput = (initialValue, required) => {
  const [value, setValue] = React.useState(initialValue);
  const [error, setError] = React.useState(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    if (!e.target.value && required) setError("Required Field");
    else setError(null);
  };

  return {
    value,
    onChange,
    onBlur,
  };
};

export default useInput;
