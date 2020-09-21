import React, { useState } from 'react';
import TodoTodoListSub from './TodoTodoListSub';
import { Icon } from 'react-icons-kit';
import { ic_more_vert, ic_priority_high } from 'react-icons-kit/md';

const TodoTodoList = ({
  info,
  index,
  onConfirm,
  onComplete,
  onTodoDelete,
  onImportantCheck,
  onTodoPatch,
  onSubListPatch,
  onCommentPatch,
}) => {
  const [select, setSelect] = useState({
    toggle: false,
    commentToggle: false,
    important: false,
  });
  const [value, setValue] = useState('');

  // State
  const stateToggle = (e) => {
    e.preventDefault();
    setSelect({
      toggle: !select.toggle,
    });
  };
  const stateCommentToggle = (e) => {
    e.preventDefault();
    setSelect({
      toggle: false,
      commentToggle: !select.commentToggle,
    });
  };
  const stateCommentClose = (e) => {
    e.preventDefault();
    setSelect({
      commentToggle: false,
    });
  };

  // Handle
  const handleCommentValue = (e) => {
    e.preventDefault();
    setSelect({
      commentToggle: false,
    });
    onTodoPatch(info._id, value);
  };
  const handleComplete = (e) => {
    e.preventDefault();
    setSelect({
      toggle: false,
    });
    onComplete(info._id);
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    setSelect({
      toggle: false,
    });
    onConfirm(info._id);
  };
  const handleTodoDelete = (e) => {
    e.preventDefault();
    setSelect({
      toggle: false,
    });
    onTodoDelete(info._id);
  };

  const dateString = info.createdDate
    .toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
    .substring(0, 10);

  const sublist = info.comments.map((sinfo, i) => {
    return (
      <TodoTodoListSub
        key={i}
        sinfo={sinfo}
        id={info._id}
        onSubListPatch={onSubListPatch}
        onCommentPatch={onCommentPatch}
      />
    );
  });

  return (
    <li className="flipInX" style={{ animationDelay: index * 200 + 'ms' }}>
      <div className={`import ${info.important && 'active'}`}>
        <button type="button" onClick={() => onImportantCheck(info._id)}>
          <Icon icon={ic_priority_high} title="긴급" />
        </button>
      </div>

      <div className="con">
        <p className="title">
          [{info.tags}] {info.subject}
        </p>
        {select.commentToggle && (
          <div className="swrite">
            <textarea
              cols="10"
              rows="3"
              name="value"
              value={value}
              onChange={({ target: { value } }) => setValue(value)}
            ></textarea>

            <div className="modifyBtn">
              <button type="button" onClick={handleCommentValue}>
                등록
              </button>
              <button type="button" onClick={stateCommentClose}>
                취소
              </button>
            </div>
          </div>
        )}
        {!sublist.length === false && <ul className="sublist">{sublist}</ul>}
        <p className="date">{dateString}</p>
      </div>

      <button type="button" className="option" onClick={stateToggle}>
        <Icon icon={ic_more_vert} title="옵션열기" />
      </button>
      {select.toggle && (
        <ul className="panel">
          <li>
            <button type="button" onClick={stateCommentToggle}>
              댓글
            </button>
          </li>
          <li>
            <button type="button" onClick={handleConfirm}>
              확인
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

export default TodoTodoList;
