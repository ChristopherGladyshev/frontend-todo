import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppHeader } from "../app-header";
import { SearchPanel } from "../search-panel";
import { TodoList } from "../todo-list";
import { ItemStatusFilter } from "../item-status-filter";
import { ItemAddForm } from "../item-add-form";
import { Modal } from "../form";

import { fetchTodoList } from "../../store/todo-list/actions";
import { status } from "../../store/todo-list/selectors";

import "./index.scss";

export const App = () => {
  const getData = useSelector(status);
  const [data, setData] = useState({
    status: null,
    message: {
      tasks: [],
    },
  });
  const [stat] = useState(true);
  const [task, setTask] = useState("");

  const statusFilter = (e) => {
    let search = null;
    if (e) {
      search = e.target.value;
    }

    const arr = {
      status: null,
      message: {
        tasks: [],
      },
    };
    switch (task) {
      case "All":
        setData(getData);
        search = null;
        break;

      case "User Name":
        setData(getData);
       
        data.message.tasks.forEach((element) => {
          const { username } = element;
          const isUser = username.startsWith(search);
          if (isUser) {
            arr.status = "User Search";
            arr.message.tasks.push(element);
          }
        });
       
        if (arr.status === "User Search") {
          search = null;
          setData(arr);
        }
        break;
      case "Email":
        setData(getData);
        data.message.tasks.forEach((element) => {
          const { email } = element;
          const isEmail = email.startsWith(search);
          if (isEmail) {
            arr.status = "Email Search";
            arr.message.tasks.push(element);
          }
        });
        
        if (arr.status === "Email Search") {
          search = null;
          setData(arr);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    return statusFilter();
  });

  useEffect(() => {
    if (stat) {
      fetchTodoList().then((DATA) => setData(DATA));
    }
  }, [stat]);

  const deleteTask = (id) => {
    fetch(`http://194.87.214.215:3000/task/${id}`, {
      method: "DELETE",
    })
      .then((request) => request.json())
      .then((data) => {
        if (data.status === "delete") {
          fetchTodoList().then((DATA) => setData(DATA));
        }
      });
  };

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel change={statusFilter} />
        <ItemStatusFilter onFilterStatus={setTask} task={task} />
      </div>
      <TodoList todos={data} onDeleted={deleteTask} />
      <ItemAddForm addItem={() => {}} />
      <Modal/>
    </div>
  );
};
