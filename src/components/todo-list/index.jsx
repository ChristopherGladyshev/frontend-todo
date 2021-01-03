/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { TodoListItem } from "../todo-list-item";
import { PageBtn } from "../page-btn";

import "./index.scss";

export const TodoList = ({ todos, onDeleted }) => {
  const [indexPage, setIndexPage] = useState(0);

  function handleClick() {}

  const count = todos.message.total_task_count;
  const cnt = 3;
  const cnt_page = Math.ceil(count / cnt);
  let page = [];
  let paginator = [];
  let indexP = 0;
  let itemArr = [];

  const pageSwitch = (index) => {
    setIndexPage(index);
  };

    if (cnt_page) {
      for (let i = 0; i < cnt_page; i++) {
        paginator.push(
          <PageBtn
            indexPage={indexPage}
            index={i}
            pageSwitch={pageSwitch}
            handleClick={handleClick}
          />
        );
      }
    };

    todos.message.tasks.forEach((item, i) => {
      const { _id, ...itemProps } = item;

      itemArr.push(
        <li key={_id} className="list-group-item">
          <TodoListItem
            {...itemProps}
            onDeleted={() => {
              onDeleted(_id);
            }}
          />
        </li>
      );
      if (itemArr.length >= 3 || count - 1 === i || todos.message.tasks.length-1 === i) {
        page.push(
          <ul
            className={
              indexP === indexPage
                ? "list-group todo-list active"
                : "list-group todo-list"
            }
          >
            {itemArr}
          </ul>
        );
        indexP++;
        itemArr = [];
      }
    });

  return (
    <div>
      <div className="wrapper-page">{page[indexPage]}</div>
      <div>{paginator}</div>
    </div>
  );
};
