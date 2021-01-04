import React, { useState } from "react";

import "./index.scss";

export const TodoListItem = ({
  text,
  email,
  username,
  status,
  id,
  onDeleted,
  udeteSuccess,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValueEmail, setinputValueEmail] = useState("");
  const [inputValueTask, setinputValueTask] = useState("");

  const edit = () => {
    if (isEdit) {
      return (
        <div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              onChange={(e) => {
                setinputValueEmail(e.target.value);
              }}
              defaultValue={`${email}`}
            />
          </div>
          <div>
            <label htmlFor="">Task</label>
            <input
              type="text"
              onChange={(e) => {
                setinputValueTask(e.target.value);
              }}
              defaultValue={`${text}`}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p className="todo-list-item-label">User Name {username}</p>
          <p className="todo-list-item-label">Email {email}</p>
          <p className="todo-list-item-label">Task {text}</p>
          <p className="todo-list-item-label">Status {status}</p>
        </div>
      );
    }
  };
  const toggleEdit = () => {
   
    udeteSuccess(id, inputValueEmail, inputValueTask, status);
    if (!isEdit) {
      setIsEdit(true);
    } else setIsEdit(false);
  };

  return (
    <div className={"todo-list__item"}>
      {edit()}

      <div>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={() => {
            udeteSuccess(id, email, text, status);
          }}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          onClick={onDeleted}
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={() => {
            toggleEdit();
          }}
        >
          <i className="fa fa-cog" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
