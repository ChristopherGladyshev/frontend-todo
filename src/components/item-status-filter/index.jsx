/* eslint-disable no-unused-expressions */
import React from "react";

import "./index.scss";

export const ItemStatusFilter = ({ onFilterStatus, task }) => {




  return (
    <div className="btn-group">
      <button
        type="button"
        className={task === "All" ? "btn btn-info":"btn btn-outline-secondary"}
        onClick={() => {
          onFilterStatus("All");
        }}
      >
        All
      </button>
      <button
        type="button"
        className={task === "User Name" ? "btn btn-info":"btn btn-outline-secondary"}
        onClick={(e) => {
          onFilterStatus("User Name");
        }}
      >
        User Name
      </button>
      <button
        type="button"
        onClick={() => {
          onFilterStatus("Email");
        }}
        className={task === "Email" ? "btn btn-info":"btn btn-outline-secondary"}
      >
        Email
      </button>
      <button
        type="button"
        onClick={() => {
          onFilterStatus("Task text");
        }}
        className={task === "Task text" ? "btn btn-info":"btn btn-outline-secondary"}
      >
        Task text
      </button>
    </div>
  );
};
