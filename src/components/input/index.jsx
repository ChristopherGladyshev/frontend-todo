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
  id,
  messageError
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
        id={id}
      />
      <div className="valid-feedback">Looks good!</div>
      <div className="invalid-feedback">
       {messageError}
      </div>
    </div>
  );
};
