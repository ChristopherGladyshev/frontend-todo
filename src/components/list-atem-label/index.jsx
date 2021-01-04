import React, { useState } from "react";

import "./index.scss";

export const TodoListItem = ({
  text,
  email,
  username,
  status,
}) => {
const ladbelText =()=>{
    if(status === "done"){
        return "todo-list-item-label success";
    }else { return"todo-list-item-label"}
}
   
  return (
    <div>
      <p className={ladbelText}>User Name {username}</p>
      <p className={ladbelText}>Email {email}</p>
      <p className={ladbelText}>Task {text}</p>
      <p className={ladbelText}>Status {status}</p>
    </div>
  );
};
