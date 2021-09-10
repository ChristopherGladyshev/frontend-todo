import React from "react";

import "./index.scss";

export const LogoutBtn = () => {
  const cliarStore = () => {
    localStorage.clear();
  };
  return (
    <div className="item-add-form">
      <button className="btn btn-outline-secondary" onClick={cliarStore}>
        Logout
      </button>
    </div>
  );
};
