import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppHeader } from '../app-header';
import { SearchPanel } from '../search-panel';
import { TodoList } from '../todo-list';
import { ItemStatusFilter } from '../item-status-filter';
import { ItemAddForm } from '../item-add-form';

import { fetchTodoList } from "../../store/todo-list/actions";
import { status } from "../../store/todo-list/selectors";

import './index.scss';
const todoDeta = [
  {
    text: 'Drink Coffee',
    email: "tima-999@inbox.ru",
    username: "rim",
    status: 0,
    id: 1,
  },
  {
    text: 'Build React App',
    email: "timonr-999@inbox.ru",
    username: "rim",
    status: 0,
    id: 2,
  },
  {
    text: 'Make Awesome App',
    email: "timyr-999@inbox.ru",
    username: "admin",
    status: 0,
    id: 3,
  },
]




export const App = () => {

  const dispatch = useDispatch;
  const data = useSelector(status);
  console.log(data)
  dispatch(fetchTodoList());

  const submit = (id) => {
    console.log(id) 
  };

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList
        todos={todoDeta}
        onDeleted={submit}
      />
      <ItemAddForm
        addItem={() => { }}
      />
    </div>
  )
};