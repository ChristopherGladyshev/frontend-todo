import React from "react";

import "./index.scss";

export const Input = ({ type, placeholder, value, cange, name, className }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        className={className}
        onChange={cange}
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};
