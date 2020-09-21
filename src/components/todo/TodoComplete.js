import React, { useState } from 'react';
import TodoCompletePage from './TodoCompletePage';
import TodoCompleteList from './TodoCompleteList';

import './TodoComplete.scss';

const TodoComplete = ({ todoList, onTodo, onConfirm }) => {
  const [toggle, setToggle] = useState({
    toggle: false,
  });

  return (
    <div className="TodoComplete">
      <h3>완료</h3>

      <div className="tab">
        <button
          type="button"
          className={`btnGraph ${toggle ? 'active' : undefined}`}
          onClick={() => setToggle(true)}
        >
          그래프
        </button>
        <button
          type="button"
          className={`btnList ${!toggle ? 'active' : undefined}`}
          onClick={() => setToggle(false)}
        >
          리스트
        </button>
      </div>
      {toggle ? (
        <TodoCompletePage todoList={todoList} />
      ) : (
        <TodoCompleteList
          todoList={todoList}
          onTodo={onTodo}
          onConfirm={onConfirm}
        />
      )}
    </div>
  );
};

export default TodoComplete;
