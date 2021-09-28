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
  const [isSort, setIsSort] = useState(true);

  const statusFilter = (e) => {
    let search = null;
    if (e) {
      search = e.target.value;
    }

    switch (task) {
      case "All":
        setData(getData);
        break;

      case "User Name":
        if (isSort) {
          data.message.tasks.sort((a, b) => {
            if (a.username.toLowerCase() < b.username.toLowerCase()) {
              return -1;
            }
            if (a.username.toLowerCase() > b.username.toLowerCase()) {
              return 1;
            }
            return 0;
          });
          data.message.tasks.reverse();
          setData(data);
          setIsSort(false);
          setTask('')
        } else {
          data.message.tasks.sort((a, b) => {
            if (a.username.toLowerCase() < b.username.toLowerCase()) {
              return -1;
            }
            if (a.username.toLowerCase() > b.username.toLowerCase()) {
              return 1;
            }
            return 0;
          });
          setData(data);
          setIsSort(true);
          setTask('')
        }
        break;
      case "Email":
        if (isSort) {
            data.message.tasks.sort((a, b) => {
              if (a.email.toLowerCase() < b.email.toLowerCase()) {
                return -1;
              }
              if (a.email.toLowerCase() > b.email.toLowerCase()) {
                return 1;
              }
              return 0;
            });
            data.message.tasks.reverse();
            setData(data);
            setIsSort(false);
            setTask('')
          } else {
            data.message.tasks.sort((a, b) => {
              if (a.email.toLowerCase() < b.email.toLowerCase()) {
                return -1;
              }
              if (a.email.toLowerCase() > b.email.toLowerCase()) {
                return 1;
              }
              return 0;
            });
            setData(data);
            setIsSort(true);
            setTask('')
          }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    statusFilter();
  }, [data])

  useEffect(() => {
    return statusFilter();
  });

  useEffect(() => {
    if (stat) {
      fetchTodoList().then((DATA) => setData(DATA));
    }
  }, [stat]);

  const deleteTask = (id) => {
    fetch(`http://si-cat.ru/api/task/${id}`, {
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
      fetch("http://si-cat.ru/api/task/", {
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
      fetch(`http://si-cat.ru/api/task/${id}`, {
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
        .then((data) => {
          fetchTodoList().then((DATA) => setData(DATA));
        });
    } else {
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
        {/* <SearchPanel change={statusFilter} /> */}
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
