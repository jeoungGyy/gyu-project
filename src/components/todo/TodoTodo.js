import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TodoTodoList from './TodoTodoList';
import TodoTodoSearch from './TodoTodoSearch';

import './TodoTodo.scss';

@inject('todo')
@observer
class TodoTodo extends Component {
  // 쓰기
  handleTodoWrite = (inputValue, tagValue) => {
    const { todo } = this.props;
    if (inputValue === '' || tagValue === '') {
      alert('ddddddd');
      return false;
    }
    return false;
    // todo.actTodoWrite(inputValue, tagValue);
  };

  render() {
    const { handleTodoWrite } = this;
    const { todo } = this.props;
    const { subLoading } = this.props.todo.root.common;

    if (!todo.todoList.length) return false;

    const defaultList = todo.todoList.filter((todo) => todo.btnTodo);
    const todoList = defaultList.map((info, index) => {
      return <TodoTodoList info={info} key={index} index={index} />;
    });

    return (
      <div className="TodoTodo">
        <h2>할 일</h2>
        <TodoTodoSearch onTodoWrite={handleTodoWrite} tagList={todo.tagList} />

        {!todoList.length && (
          <div className="empty">등록된 내용이 없습니다.</div>
        )}
        <ul className="list">{todoList}</ul>

        {subLoading && (
          <div className="spinner_area">
            <div className="spinner" />
          </div>
        )}
      </div>
    );
  }
}

export default TodoTodo;
