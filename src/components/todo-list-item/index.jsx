import React from 'react';

import './index.scss';


export const TodoListItem = ({ text, email, username, status, id, onDeleted }) => {
  return (
    <div className={"todo-list__item"} id={id}>
      <div>
        <p className="todo-list-item-label">User Name {username}</p>
        <p className="todo-list-item-label">Email {email}</p>
        <p className="todo-list-item-label">Task {text}</p>
        <p className="todo-list-item-label">Status {status}</p>
      </div>

      <div>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
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
      </div>
    </div>
  )

};
