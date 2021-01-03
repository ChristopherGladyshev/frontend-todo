import React, { useState } from "react";

import { Input } from "../input";
import { validName,  validTel, validEmail}from "../valid";

import "./index.scss";

export const Modal = () => {
  const [email, useEmail] = useState("");
  const [name, useName] = useState("");
  const [tel, useTel] = useState("");
  const [errEmail, useErrEmail] = useState("");
  const [errName, useErrName] = useState("");
  const [errTel, useErrTel] = useState("");

  const valid = (value, type) => {
    switch (type) {
      case "text":
        validName(value, useName, useErrName);
        break;
      case "tel":
        validTel(value, useTel, useErrTel);
        break;
      case "email":
        validEmail(value, useEmail, useErrEmail);
        break;
      default:
        break;
    }
  };

  const onChangeSearch = (e) => {
    const value = e.target.value;
    valid(value, e.target.type);
  };
  return (
    <div>
      <form className="form-group" onSubmit={(e) => e.preventDefault()}>
        <Input type="text" className={"form-control is-valid"} change={onChangeSearch}/>
        <Input type="submit" value="SEND" />
      </form>
    </div>
  );
};
