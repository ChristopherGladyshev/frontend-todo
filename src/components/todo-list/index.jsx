import React from "react";
import { TodoListItem } from "../todo-list-item";
import "./index.scss";

export const TodoList = ({ todos, onDeleted }) => {
  let elements = null;

  if (todos.status) {
    elements = todos.message.tasks.map((item) => {
      const { _id, ...itemProps } = item;
      return (
        <li key={_id} className="list-group-item">
          <TodoListItem
            {...itemProps}
            onDeleted={() => {
              onDeleted(_id);
            }}
          />
        </li>
      );
    });
  }

  return <ul className="list-group todo-list">{elements}</ul>;
};
