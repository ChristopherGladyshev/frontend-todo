import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppHeader } from "../app-header";
import { SearchPanel } from "../search-panel";
import { TodoList } from "../todo-list";
import { ItemStatusFilter } from "../item-status-filter";
import { ItemAddForm } from "../item-add-form";
import { LogoutBtn } from "../logout-btn";
import { ModalLogin } from "../modal-login";
import { AddTaskModal } from "../modal-add-form";

import { fetchTodoList } from "../../store/todo-list/actions";
import { fetchLogin } from "../../store/login/actions";
import { statusList } from "../../store/todo-list/selectors";
import { statusLogin } from "../../store/login/selectors";

import "./index.scss";

export const App = () => {
  const getData = useSelector(statusList);
  const getStatusLog = useSelector(statusLogin);
  const [data, setData] = useState({
    status: null,
    message: {
      tasks: [],
    },
  });
  const [stat] = useState(true);
  const [task, setTask] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

        getData.message.tasks.forEach((element) => {

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
        getData.message.tasks.forEach((element) => {
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

  const addTsks = (email, task, status) => {
    const user = localStorage.getItem("name") || null;

    if (localStorage.getItem("token")) {
      fetch("http://194.87.214.215:3000/task", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          email: email,
          text: task,
          status: status,
        }),
      })
        .then((request) => request.json())
        .then((data) => {
          if (data.status === "ok") {
            setIsErr(false);
            setIsSuccess(true);
            setTimeout(() => {
              setIsSuccess(false);
            }, 3000);
          } else {
            setIsErr(true);
          }
        });
      fetchTodoList().then((DATA) => setData(DATA));
    }
  };

  const udeteSuccess = (id, email, text, status) => {
    const user = localStorage.getItem("name") || null;
    if (user) {
      fetch(`http://194.87.214.215:3000/task/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          email: email,
          text: text,
          status: status === "done" ? "is work" : "done",
        }),
      })
        .then((response) => response.json())
        .then((data) => {fetchTodoList().then((DATA) => setData(DATA));});
       
    }else{
        setIsOpen(true);
    }
  };

  const logaut = () => {
    if (localStorage.getItem("token") || getStatusLog.token) {
      return <LogoutBtn />;
    }
  };

  const addModal = () => {
    if (localStorage.getItem("token") && isOpen) {
      return (
        <AddTaskModal
          status={getStatusLog}
          add={addTsks}
          isOpen={isOpen}
          close={setIsOpen}
          isErr={isErr}
          isSuccess={isSuccess}
        />
      );
    } else {
      return (
        <ModalLogin
          change={fetchLogin}
          status={getStatusLog}
          isOpen={isOpen}
          changeIsOpen={setIsOpen}
        />
      );
    }
  };
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel change={statusFilter} />
        <ItemStatusFilter onFilterStatus={setTask} task={task} />
      </div>
      <TodoList
        todos={data}
        onDeleted={deleteTask}
        udeteSuccess={udeteSuccess}
      />
      <ItemAddForm addForm={setIsOpen} />
      {logaut()}
      {addModal()}
    </div>
  );
};
