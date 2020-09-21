import React, { useState } from 'react';
import TodoCompleteListSub from './TodoCompleteListSub';

import './TodoCompleteList.scss';

const TodoCompleteList = ({ todoList, onTodo, onConfirm }) => {
  const [select, setSelect] = useState('전체');

  const completeList = todoList
    .filter((todo) => todo.btnComplete)
    .sort(
      (curr, next) =>
        new Date(next.completeDate).getTime() -
        new Date(curr.completeDate).getTime()
    );
  const tag = completeList.map((info) => info.tags);
  const tagChoice = Array.from(new Set(tag)).sort();

  const hashList = tagChoice.map((name, index) => {
    return (
      <li key={index}>
        <button
          type="button"
          onClick={(e) => setSelect(e.currentTarget.textContent)}
          className={name === select ? 'active' : undefined}
        >
          {name}
        </button>
      </li>
    );
  });

  const todoCompleteTags = completeList.filter((info) =>
    select === '전체' ? info.tags : info.tags === select
  );

  const todoCompleteLists = todoCompleteTags.map((info, index) => {
    return (
      <TodoCompleteListSub
        info={info}
        key={index}
        index={index}
        onTodo={onTodo}
        onConfirm={onConfirm}
      />
    );
  });

  return (
    <div className="TodoCompleteList">
      <ul className="hash">
        <li>
          <button
            type="button"
            className={select === '전체' ? 'active' : undefined}
            onClick={(e) => setSelect(e.currentTarget.textContent)}
          >
            전체
          </button>
        </li>
        {hashList}
      </ul>
      <ul className="list">{todoCompleteLists}</ul>
    </div>
  );
};

export default TodoCompleteList;
