import React from 'react';
import TodoTodoList from './TodoTodoList';
import TodoTodoSearch from './TodoTodoSearch';

import './TodoTodo.scss';

const TodoTodo = ({
  todoList,
  tagList,
  subLoading,
  onTodoWrite,
  onConfirm,
  onComplete,
  onTodoDelete,
  onImportantCheck,
  onTodoPatch,
  onSubListPatch,
  onCommentPatch,
}) => {
  const defaultList = todoList.filter((todo) => todo.btnTodo);
  const todoDefaultList = defaultList.map((info, index) => {
    return (
      <TodoTodoList
        info={info}
        key={index}
        index={index}
        onConfirm={onConfirm}
        onComplete={onComplete}
        onTodoDelete={onTodoDelete}
        onImportantCheck={onImportantCheck}
        onTodoPatch={onTodoPatch}
        onSubListPatch={onSubListPatch}
        onCommentPatch={onCommentPatch}
      />
    );
  });

  return (
    <div className="TodoTodo">
      <h2>할 일</h2>
      <TodoTodoSearch
        onTodoWrite={onTodoWrite}
        tagList={tagList}
        onConfirm={onConfirm}
        onComplete={onComplete}
        onTodoDelete={onTodoDelete}
        onImportantCheck={onImportantCheck}
        onTodoPatch={onTodoPatch}
        onSubListPatch={onSubListPatch}
        onCommentPatch={onCommentPatch}
      />

      {!todoList.length && <div className="empty">등록된 내용이 없습니다.</div>}
      <ul className="list">{todoDefaultList}</ul>

      {subLoading && (
        <div className="spinner_area">
          <div className="spinner" />
        </div>
      )}
    </div>
  );
};

export default React.memo(TodoTodo);
