import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TodoConfirmList from './TodoConfirmList';

import './TodoConfirm.scss';

@inject('todo')
@observer
class TodoConfirm extends Component {
  render() {
    const { todo } = this.props;

    const confirm = todo.todoList.filter((confirm) => confirm.btnConfirm);

    const confirmList = confirm.map((info, index) => {
      return <TodoConfirmList info={info} key={index} />;
    });

    return (
      <div className="TodoConfirm">
        <h3>확인</h3>

        <ul className="list">{confirmList}</ul>
      </div>
    );
  }
}

export default TodoConfirm;
