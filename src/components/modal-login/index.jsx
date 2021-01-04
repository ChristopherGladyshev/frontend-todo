import React, { useState } from "react";

import { Input } from "../input";
import { validName } from "../valid";

import "./index.scss";

export const ModalLogin = ({ change, status, isOpen, changeIsOpen }) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [errName, setErrName] = useState("");
  const [errPass, setErrPass] = useState("");
  const [errStatus, setErrStatus] = useState(false);

  const valid = (value, type) => {
    switch (type) {
      case "text":
        validName(value, setName, setErrName);
        break;
      case "password":
        validName(value, setPass, setErrPass);
        break;
      default:
        break;
    }
  };

  const fetchLog = () => {
    if (name && pass) {
      change(name, pass).then((data) => {
        if (data.token) {
          changeIsOpen(false);
          setErrStatus(false);
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", name);
        } else {
          setErrStatus(true);
          setInterval(() => {
            setErrStatus(false);
          }, 3000);
          setPass("");
        }
      });
    }
  };

  const onChangeSearch = (e) => {
    const value = e.target.value;
    valid(value, e.target.type);
  };

  const changeFetch = () => {
    fetchLog();
  };

  return (
    <div>
      <div
        className={errStatus ? "alert alert-danger error" : "alert-close"}
        role="alert"
      >
        <strong>Ошибка!</strong> Неверный логин или пароль
      </div>
      <div
        className={isOpen ? "modal-login modal-login-active" : "modal-login "}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Task</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={() => {
                changeIsOpen(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form className="form-group" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="text"
              className={`form-control ${errName}`}
              change={onChangeSearch}
              placeholder={"login"}
              defaultValue={""}
              messageError={
                "Login should only consist of Latin letters and numbers."
              }
            />
            <Input
              type="password"
              className={`form-control  ${errPass}`}
              change={onChangeSearch}
              placeholder={"password"}
              defaultValue={""}
              messageError={"The password must be at least 3 characters long."}
            />
            <Input
              type="submit"
              value="SEND"
              fetch={changeFetch}
              className={"btn btn-outline-danger"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
