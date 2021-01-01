import React from "react";

import "./index.scss";

export const ItemStatusFilter = ({ onFilterStatus }) => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          onFilterStatus("All");
        }}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => {
          onFilterStatus("User Name");
        }}
      >
        User Name
      </button>
      <button
        type="button"
        onClick={() => {
          onFilterStatus("email");
        }}
        className="btn btn-outline-secondary"
      >
        Email
      </button>
      <button
        type="button"
        onClick={() => {
          onFilterStatus("Task text");
        }}
        className="btn btn-outline-secondary"
      >
        Task text
      </button>
    </div>
  );
};
