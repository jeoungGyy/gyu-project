import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import TodoTodo from './TodoTodo';
import TodoConfirm from './TodoConfirm';
import TodoComplete from './TodoComplete';
import TodoGlobal from './TodoGlobal';
import TodoLogin from './TodoLogin';

import './TodoPage.scss';

@inject(({ todo }) => ({
  todoList: todo.todoList,
  tagList: todo.tagList,
  loginToggle: todo.loginToggle,
  loginOrLogout: todo.loginOrLogout,
  actTodoWrite: todo.actTodoWrite,
  actTodoDelete: todo.actTodoDelete,
  actTodo: todo.actTodo,
  actConfirm: todo.actConfirm,
  actComplete: todo.actComplete,
  actImportantCheck: todo.actImportantCheck,
  actTodoPatch: todo.actTodoPatch,
  actSubListPatch: todo.actSubListPatch,
  actCommentPatch: todo.actCommentPatch,
  actAuthCheck: todo.actAuthCheck,
  actAuthLogin: todo.actAuthLogin,
  actAuthLogout: todo.actAuthLogout,
  actAuthClose: todo.actAuthClose,
  loadingDelay: todo.root.common.loadingDelay,
  subLoading: todo.root.common.subLoading,
}))
@observer
class TodoPage extends Component {
  delayMain = (pageName, e) => {
    e.preventDefault();
    const {
      history: { push },
    } = this.props;
    this.props.loadingDelay(push, pageName);
  };

  // Handle
  // 글 쓰기
  handleTodoWrite = (inputValue, tagValue) => {
    this.props.actTodoWrite(inputValue, tagValue);
  };
  // 삭제
  handleTodoDelete = (id) => {
    this.props.actTodoDelete(id);
  };
  // '할일'목록으로 넘기기
  handleTodo = (id) => {
    this.props.actTodo(id);
  };
  // '확인'목록으로 넘기기
  handleConfirm = (id) => {
    this.props.actConfirm(id);
  };
  // '완료'목록으로 넘기기
  handleComplete = (id) => {
    this.props.actComplete(id);
  };
  // 긴급체크
  handleImportantCheck = (id) => {
    this.props.actImportantCheck(id);
  };

  // 코멘트
  // 코멘트 쓰기
  handleTodoPatch = (id, value) => {
    this.props.actTodoPatch(id, value);
  };
  // 코멘트 리스트 삭제
  handleSubListPatch = (id, subId) => {
    this.props.actSubListPatch(id, subId);
  };
  // 코멘트 리스트 수정
  handleCommentPatch = (value, id, subId) => {
    this.props.actCommentPatch(value, id, subId);
  };

  // 로그인 관련
  // handleAuthCheck = () => {
  //   this.props.actAuthCheck();
  // };
  handleAuthLogin = (id, password) => {
    this.props.actAuthLogin(id, password);
  };
  handleAuthLogout = () => {
    this.props.actAuthLogout();
  };
  handleAuthClose = () => {
    this.props.actAuthClose();
  };

  render() {
    const {
      delayMain,
      // handleAuthCheck,
      handleAuthLogin,
      handleAuthLogout,
      handleTodoDelete,
      handleTodo,
      handleComplete,
      handleSubListPatch,
      handleCommentPatch,
      handleTodoWrite,
      handleImportantCheck,
      handleTodoPatch,
      handleConfirm,
      handleAuthClose,
    } = this;
    const {
      todoList,
      tagList,
      loginToggle,
      loginOrLogout,
      subLoading,
    } = this.props;

    if (loginOrLogout) {
      return (
        <div className="nodb">
          <p>DB가 연결되지 않았습니다.</p>
          <Link
            to={{
              pathname: '',
            }}
            onClick={(e) => delayMain('', e)}
          >
            메인
          </Link>
        </div>
      );
    }

    if (!todoList.length) return false;

    return (
      <div className="TodoPage">
        <div className="global">
          <div className="gheader">
            <h1>정규 Todo</h1>
          </div>
          <TodoGlobal
            delayMain={delayMain}
            onAuthClose={handleAuthClose}
            onAuthLogout={handleAuthLogout}
            // onAuthCheck={handleAuthCheck}
            loginOrLogout={loginOrLogout}
          />
        </div>
        <div className="pages">
          <TodoConfirm
            todoList={todoList}
            onTodoDelete={handleTodoDelete}
            onTodo={handleTodo}
            onComplete={handleComplete}
            onSubListPatch={handleSubListPatch}
            onCommentPatch={handleCommentPatch}
          />
          <TodoTodo
            todoList={todoList}
            tagList={tagList}
            subLoading={subLoading}
            onTodoWrite={handleTodoWrite}
            onConfirm={handleConfirm}
            onComplete={handleComplete}
            onTodoDelete={handleTodoDelete}
            onImportantCheck={handleImportantCheck}
            onTodoPatch={handleTodoPatch}
            onSubListPatch={handleSubListPatch}
            onCommentPatch={handleCommentPatch}
          />
          <TodoComplete
            todoList={todoList}
            onTodo={handleTodo}
            onConfirm={handleConfirm}
          />
        </div>

        {!loginToggle && (
          <TodoLogin
            onAuthLogin={handleAuthLogin}
            onAuthClose={handleAuthClose}
          />
        )}
      </div>
    );
  }
}

export default TodoPage;
