import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TodoCompleteListSub from './TodoCompleteListSub';

import './TodoCompleteList.scss';

@inject('todo')
@observer
class TodoCompleteList extends Component {
  stateTagName = (e) => {
    const { todo } = this.props;
    todo.actTagName(e.currentTarget.textContent);
  };

  render() {
    const { stateTagName } = this;
    const { todo } = this.props;

    if (!todo.todoList.length) return false;

    const completeList = todo.todoList.filter((todo) => todo.btnComplete);
    const tag = completeList.map((info) => info.tags);
    const tagChoice = Array.from(new Set(tag)).sort();

    const hashList = tagChoice.map((name, index) => {
      return (
        <li key={index}>
          <button
            type="button"
            onClick={stateTagName}
            className={todo.tagName === name ? 'active' : undefined}
          >
            {name}
          </button>
        </li>
      );
    });

    const todoCompleteTags = completeList.filter((info) =>
      todo.tagName === '전체' ? info.tags : info.tags === todo.tagName
    );

    const todoCompleteLists = todoCompleteTags.map((info, index) => {
      return <TodoCompleteListSub info={info} key={index} />;
    });

    return (
      <div className="TodoCompleteList">
        <ul className="hash">
          <li>
            <button
              type="button"
              className={todo.tagName === '전체' ? 'active' : undefined}
              onClick={stateTagName}
            >
              전체
            </button>
          </li>
          {hashList}
        </ul>
        <ul className="list">{todoCompleteLists}</ul>
      </div>
    );
  }
}

export default TodoCompleteList;
