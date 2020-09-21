import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_create, ic_delete, ic_clear } from 'react-icons-kit/md';

const TodoTodoListSub = ({ sinfo, id, onSubListPatch, onCommentPatch }) => {
  const [toggle, setToggle] = useState({
    commentListToggle: false,
    commentModify: false,
  });
  const [value, setValue] = useState('');

  // State
  const stateCommentListOpen = () => {
    setToggle({
      commentListToggle: true,
    });
  };
  const stateCommentListCancle = () => {
    setToggle({
      commentListToggle: false,
    });
  };
  const stateModifyClose = () => {
    setToggle({
      commentModify: false,
    });
  };
  const stateModifyToggle = () => {
    setToggle({
      commentListToggle: false,
      commentModify: true,
    });
    setValue(sinfo.comment);
  };

  // Handle
  // 코멘트 리스트 삭제 - 리턴
  const handleSubListPatch = () => {
    setToggle({
      commentListToggle: false,
    });
    onSubListPatch(id, sinfo._id);
  };
  // 코멘트 리스트 수정 - 리턴
  const HandleCommentPatch = () => {
    setToggle({
      commentModify: false,
    });
    onCommentPatch(value, id, sinfo._id);
  };

  return (
    <li>
      {!toggle.commentModify ? (
        <p onClick={stateCommentListOpen}>- {sinfo.comment}</p>
      ) : (
        <>
          <textarea
            cols="10"
            rows="3"
            className="modifyTa"
            defaultValue={value}
            onChange={({ target: { value } }) => setValue(value)}
          ></textarea>
          <div className="modifyBtn">
            <button type="button" onClick={HandleCommentPatch}>
              등록
            </button>
            <button type="button" onClick={stateModifyClose}>
              취소
            </button>
          </div>
        </>
      )}

      {toggle.commentListToggle && (
        <div className="controls">
          <button type="button" onClick={stateModifyToggle}>
            <Icon icon={ic_create} title="수정" />
          </button>
          <button type="button">
            <Icon icon={ic_delete} title="삭제" onClick={handleSubListPatch} />
          </button>
          <button type="button" onClick={stateCommentListCancle}>
            <Icon icon={ic_clear} title="취소" />
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoTodoListSub;
