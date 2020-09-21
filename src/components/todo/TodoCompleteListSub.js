import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_more_vert } from 'react-icons-kit/md';

const TodoCompleteListSub = ({ info, index, onTodo, onConfirm }) => {
  const [toggle, setToggle] = useState(false);

  const dateString = info.createdDate
    .toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
    .substring(0, 10);

  const subComments = info.comments.map((info, index) => (
    <li key={index}>
      <p>{info.comment}</p>
    </li>
  ));

  const year = info.completeDate
    .toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
    .substring(0, 4);
  const month = info.completeDate
    .toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
    .substring(5, 10);

  // Handle
  // '할일'목록으로 넘기기
  const handleTodo = () => {
    setToggle(false);
    onTodo(info._id);
  };
  // '확인'목록으로 넘기기
  const handleConfirm = () => {
    setToggle(false);
    onConfirm(info._id);
  };

  return (
    <li className="slideInUp" style={{ animationDelay: index * 100 + 'ms' }}>
      <div className="compleateDate">
        <div className="items">
          <p className="y">{year}</p>
          <p className="md">{month}</p>
        </div>
      </div>

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
            <button type="button" onClick={handleConfirm}>
              확인
            </button>
          </li>
        </ul>
      )}
    </li>
  );
};

export default TodoCompleteListSub;
