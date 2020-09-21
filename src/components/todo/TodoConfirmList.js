import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_more_vert } from 'react-icons-kit/md';
import TodoTodoListSub from './TodoTodoListSub';

const TodoConfirmList = ({
  info,
  onTodoDelete,
  onTodo,
  onComplete,
  onSubListPatch,
  onCommentPatch,
}) => {
  const [toggle, setToggle] = useState(false);

  // Handle
  const handleTodo = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    onTodo(info._id);
  };
  const handleComplete = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    onComplete(info._id);
  };
  const handleTodoDelete = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    onTodoDelete(info._id);
  };

  const dateString = info.createdDate
    .toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
    .substring(0, 10);

  const subComments = info.comments.map((sinfo, index) => {
    return (
      <TodoTodoListSub
        key={index}
        sinfo={sinfo}
        onSubListPatch={onSubListPatch}
        onCommentPatch={onCommentPatch}
      />
    );
  });

  return (
    <li>
      <div className="con">
        <p className="title">
          [{info.tags}] {info.subject}
        </p>
        {!subComments.length === false && (
          <ul className="sublist">{subComments}</ul>
        )}
        <p className="date">{dateString}</p>
      </div>

      <button
        type="button"
        className="option"
        onClick={() => setToggle(!toggle)}
      >
        <Icon icon={ic_more_vert} title="옵션열기" />
      </button>
      {toggle && (
        <ul className="panel">
          <li>
            <button type="button" onClick={handleTodo}>
              할일
            </button>
          </li>
          <li>
            <button type="button" onClick={handleComplete}>
              완료
            </button>
          </li>
          <li>
            <button type="button" onClick={handleTodoDelete}>
              삭제
            </button>
          </li>
        </ul>
      )}
    </li>
  );
};

export default TodoConfirmList;
