import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppHeader } from "../app-header";
import { SearchPanel } from "../search-panel";
import { TodoList } from "../todo-list";
import { ItemStatusFilter } from "../item-status-filter";
import { ItemAddForm } from "../item-add-form";

import { fetchTodoList } from "../../store/todo-list/actions";
import { status } from "../../store/todo-list/selectors";

import "./index.scss";

export const App = () => {
  const getData = useSelector(status);
  const [data, setData] = useState([]);

  const statusFilter = (task) => {
    console.log(task);
    switch (task) {
      case "All":
        return setData(getData);
      case "User Name":
        console.log(data);
        data.message.tasks.forEach((element) => {
          const { username } = element;
          console.log(username);
        });
        return setData();

      default:
        break;
    }
  };

  useEffect(() => {
    fetchTodoList();
    setData(getData);
  }, []);

  const deleteTask = (id) => {
    fetch(`http://194.87.214.215:3000/task/${id}`, {
      method: "DELETE",
    })
      .then((request) => request.json())
      .then((data) => {
        if (data.status === "delete") fetchTodoList();
      });
  };

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter onFilterStatus={statusFilter} />
      </div>
      <TodoList todos={data} onDeleted={deleteTask} />
      <ItemAddForm addItem={() => {}} />
    </div>
  );
};
