import React, { useState } from "react";
import { Input } from "../input";

import { validName, validEmail } from "../valid";

import "./index.scss";

export const AddTaskModal = ({ isErr, isSuccess, add, isOpen, close }) => {
  const [email, useEmail] = useState("");
  const [task, useTask] = useState("");
  const [statusTask, useStatusTask] = useState("");
  const [errEmail, useErrEmail] = useState("");
  const [errTask, useErrTask] = useState("");
  const [errStatusTask, useErrStatusTask] = useState("");

  const valid = (value, name) => {
    switch (name) {
      case "email":
        validEmail(value, useEmail, useErrEmail);
        break;
      case "task":
        validName(value, useTask, useErrTask);
        break;
      case "status":
        validName(value, useStatusTask, useErrStatusTask);
        break;
      default:
        break;
    }
  };

  const onChangeSearch = (e) => {
    const value = e.target.value;
    valid(value, e.target.id);
  };

  const fetchLog = () => {
    if (email && task && statusTask) {
      add(email, task, statusTask);
    }
  };

  return (
    <div className={isOpen ? "modal-add modal-add-active" : "modal-add"}>
      <div
        className={isErr ? "alert alert-danger error" : "alert-close"}
        role="alert">
        <strong>Ошибка!</strong> И как ты это замутил ?
      </div>
      <div
        className={isSuccess ? "alert alert-success" : "alert-close"}
        role="alert">
        <h4 className="alert-heading">Done!</h4>
        <p>Record created successfully</p>
      </div>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Task</h5>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => {
              close(false);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form className="form-group" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            className={`form-control ${errEmail}`}
            change={onChangeSearch}
            placeholder={"email"}
            defaultValue={""}
            name={"email"}
            id={"email"}
          />
          <Input
            type="text"
            className={`form-control ${errTask}`}
            change={onChangeSearch}
            placeholder={"task text"}
            defaultValue={""}
            id={"task"}
          />
          <Input
            type="text"
            className={`form-control ${errStatusTask}`}
            change={onChangeSearch}
            placeholder={"status"}
            defaultValue={""}
            id={"status"}
          />
          <Input
            type="submit"
            value="SEND"
            fetch={fetchLog}
            className={"btn btn-outline-danger"}
          />
        </form>
      </div>
    </div>
  );
};
