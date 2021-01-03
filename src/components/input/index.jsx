import React from "react";

import "./index.scss";

export const Input = ({
  type,
  placeholder,
  value,
  change,
  name,
  className,
  defaultValue,
  fetch,
}) => {
  return (
    <div className="wrapper-input">
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        name={name}
        className={className}
        onChange={change}
        onClick={fetch}
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};
