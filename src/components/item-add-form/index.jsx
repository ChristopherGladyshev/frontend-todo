import React from "react";

import "./index.scss";

export const ItemAddForm = ({ addForm }) => {
    
  return (
    <div className="item-add-form">
      <button
        className="btn btn-outline-secondary"
        onClick={() => {
          addForm(true);
        }}
      >
        Add task
      </button>
    </div>
  );
};
