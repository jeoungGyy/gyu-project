import React from 'react';
import TodoTodo from './TodoTodo';
import TodoConfirm from './TodoConfirm';
import TodoComplete from './TodoComplete';
import './TodoPage.scss';

const TodoPage = () => {
  return (
    <div className="TodoPage">
      <div className="global">
        <div className="gheader">
          <h1>정규 Todo</h1>
          <div className="colors">
            <button type="button" className="red"></button>
            <button type="button" className="orange"></button>
            <button type="button" className="gray"></button>
            <button type="button" className="blue"></button>
            <button type="button" className="green"></button>
          </div>
        </div>
        <div className="hcontrol">
          <button type="button">메인</button>
          <button type="button">로그인</button>
        </div>
      </div>
      <div className="pages">
        <TodoConfirm />
        <TodoTodo />
        <TodoComplete />
      </div>
    </div>
  );
};

export default TodoPage;
