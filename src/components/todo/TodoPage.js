import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TodoTodo from './TodoTodo';
import TodoConfirm from './TodoConfirm';
import TodoComplete from './TodoComplete';
import TodoGlobal from './TodoGlobal';
import TodoLogin from './TodoLogin';

import './TodoPage.scss';

@inject('todo')
@observer
class TodoPage extends Component {
  delayMain = (pageName, e) => {
    e.preventDefault();
    const {
      history: { push },
    } = this.props;
    const { common } = this.props.todo.root;
    common.loadingDelay(push, pageName);
  };

  handleAuthCheck = () => {
    const { todo } = this.props;

    todo.actAuthCheck();
  };
  handleAuthLogin = () => {
    const { todo } = this.props;

    todo.actAuthLogin();
  };
  handleAuthLogout = () => {
    const { todo } = this.props;

    todo.actAuthLogout();
  };

  render() {
    const {
      delayMain,
      handleAuthCheck,
      handleAuthLogin,
      handleAuthLogout,
    } = this;
    const { todo } = this.props;

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
              <button type="button" className="green" onClick={handleAuthCheck}>
                체
              </button>
              <button type="button" className="blue" onClick={handleAuthLogin}>
                로
              </button>
              <button
                type="button"
                className="orange"
                onClick={handleAuthLogout}
              >
                아
              </button>
            </div>
          </div>
          <TodoGlobal delayMain={delayMain} />
        </div>
        <div className="pages">
          <TodoConfirm />
          <TodoTodo />
          <TodoComplete />
        </div>

        {!todo.loginToggle && <TodoLogin />}
      </div>
    );
  }
}

export default TodoPage;
