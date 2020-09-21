import React from 'react';
import TodoConfirmList from './TodoConfirmList';

import './TodoConfirm.scss';

const TodoConfirm = ({
  todoList,
  onTodoDelete,
  onTodo,
  onComplete,
  onSubListPatch,
  onCommentPatch,
}) => {
  const confirm = todoList.filter((confirm) => confirm.btnConfirm);

  const confirmList = confirm.map((info, index) => {
    return (
      <TodoConfirmList
        info={info}
        key={index}
        onTodoDelete={onTodoDelete}
        onTodo={onTodo}
        onComplete={onComplete}
        onSubListPatch={onSubListPatch}
        onCommentPatch={onCommentPatch}
      />
    );
  });

  return (
    <div className="TodoConfirm">
      <h3>확인</h3>

      <ul className="list">{confirmList}</ul>
    </div>
  );
};

export default TodoConfirm;
