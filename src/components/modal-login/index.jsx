import React, { useState } from "react";

import { Input } from "../input";
import { validName } from "../valid";

import "./index.scss";

export const ModalLogin = ({ change, status }) => {
  const [email, useEmail] = useState("");
  const [name, useName] = useState("");
  const [pass, usePass] = useState("");
  const [errName, useErrName] = useState("");
  const [errPass, useErrPass] = useState("");

  const valid = (value, type) => {
    switch (type) {
      case "text":
        validName(value, useName, useErrName);
        break;
      case "password":
        validName(value, usePass, useErrPass);
        break;
      default:
        break;
    }
  };
  console.log(status);

  const fetchLog = () => {
    change("admin", "123");
  };

  const onChangeSearch = (e) => {
    const value = e.target.value;
    console.log(value);
    valid(value, e.target.type);
  };
  return (
    <div className={"modal-login"}>
      <form className="form-group" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          className={`form-control ${errName}`}
          change={onChangeSearch}
          placeholder={"login"}
          defaultValue={""}
        />
        <Input
          type="password"
          className={`form-control  ${errPass}`}
          change={onChangeSearch}
          placeholder={"password"}
          defaultValue={""}
        />
        <Input
          type="submit"
          value="SEND"
          fetch={fetchLog}
          className={"btn btn-outline-danger"}
        />
      </form>
    </div>
  );
};
