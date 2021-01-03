import React, { useState } from "react";
import { Input } from '../input';

import { validName, validEmail } from "../valid";

import "./index.scss";

export const AddTaskModal = ({ status, add }) => {

    const [name, useName] = useState("");
    const [email, useEmail] = useState("");
    const [task, useTask] = useState("");
    const [statusTask, useStatusTask] = useState("");
    const [errName, useErrName] = useState("");
    const [errEmail, useErrEmail] = useState("");
    const [errTask, useErrTask] = useState("");
    const [errStatusTask, useErrStatusTask] = useState("");

    const valid = (value, name) => {
        switch (name) {
            case "text":
                validName(value, useName, useErrName);
                console.log(value)
                break;
            case "email":
                validEmail(value, useEmail, useErrEmail);
                break;
            case "task":
                validName(value, useTask, useErrStatusTask);
                console.log(name)
                break;
            case "status":
                validName(value, useStatusTask, useErrTask);
                console.log(name)
                break;
            default:
                break;
        }
    };
    console.log(status);

    const onChangeSearch = (e) => {
        const value = e.target.value;
        valid(value, e.target.type);
    };

    const fetchLog = () => {
        if (name && email && task && statusTask) {
            add(name, email, task, statusTask);
        }
    }


    return (
        <div className={status.token ? "modal-login modal-login-active" : "modal-login"}>
            <form className="form-group" onSubmit={(e) => e.preventDefault()}>
                <Input
                    type="text"
                    className={`form-control ${errName}`}
                    change={onChangeSearch}
                    placeholder={"user name"}
                    defaultValue={""}
                    name={'userName'}
                />
                <Input
                    type="email"
                    className={`form-control ${errEmail}`}
                    change={onChangeSearch}
                    placeholder={"email"}
                    defaultValue={""}
                    name={"email"}
                />
                <Input
                    type="text"
                    className={`form-control ${errTask}`}
                    change={onChangeSearch}
                    placeholder={"task text"}
                    defaultValue={""}
                    name={"task"}
                />
                <Input
                    type="text"
                    className={`form-control ${errStatusTask}`}
                    change={onChangeSearch}
                    placeholder={"status"}
                    defaultValue={""}
                    name={"status"}
                />
                <Input
                    type="submit"
                    value="SEND"
                    fetch={fetchLog}
                    className={"btn btn-outline-danger"}
                />
            </form>
        </div>
    )
};
