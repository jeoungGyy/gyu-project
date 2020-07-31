import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_create, ic_delete, ic_clear } from 'react-icons-kit/md';

class TodoTodoListSub extends Component {
  state = {
    commentListToggle: false,
    commentModify: false,
    commentModifyValue: '',
  };

  // State
  stateCommentListOpen = () => {
    this.setState({
      commentListToggle: true,
    });
  };
  stateCommentListCancle = () => {
    this.setState({
      commentListToggle: false,
    });
  };
  stateModifyToggle = () => {
    const { sinfo } = this.props;

    this.setState({
      commentListToggle: false,
      commentModify: true,
      commentModifyValue: sinfo.comment,
    });
  };
  stateModifyClose = () => {
    this.setState({
      commentModify: false,
    });
  };
  stateModifyValue = (e) => {
    this.setState({
      commentModifyValue: e.target.value,
    });
  };

  // Handle
  // 코멘트 리스트 삭제 - 리턴
  handleSubListPatch = (id) => {
    const { onSubListPatch } = this.props;
    this.setState({
      commentListToggle: false,
    });
    onSubListPatch(id);
  };
  // 코멘트 리스트 수정 - 리턴
  HandleCommentPatch = (id) => {
    const { onCommentPatch } = this.props;
    this.setState({
      commentModify: false,
    });
    onCommentPatch(this.state.commentModifyValue, id);
  };

  render() {
    const {
      stateCommentListOpen,
      stateCommentListCancle,
      handleSubListPatch,
      stateModifyToggle,
      stateModifyClose,
      HandleCommentPatch,
      stateModifyValue,
    } = this;
    const { sinfo } = this.props;
    const { commentListToggle, commentModify, commentModifyValue } = this.state;

    return (
      <li>
        {!commentModify ? (
          <p onClick={stateCommentListOpen}>- {sinfo.comment}</p>
        ) : (
          <>
            <textarea
              cols="10"
              rows="3"
              className="modifyTa"
              defaultValue={commentModifyValue}
              onChange={stateModifyValue}
            ></textarea>
            <div className="modifyBtn">
              <button
                type="button"
                onClick={() => HandleCommentPatch(sinfo._id)}
              >
                등록
              </button>
              <button type="button" onClick={stateModifyClose}>
                취소
              </button>
            </div>
          </>
        )}

        {commentListToggle && (
          <div className="controls">
            <button type="button" onClick={stateModifyToggle}>
              <Icon icon={ic_create} title="수정" />
            </button>
            <button type="button">
              <Icon
                icon={ic_delete}
                title="삭제"
                onClick={() => handleSubListPatch(sinfo._id)}
              />
            </button>
            <button type="button" onClick={stateCommentListCancle}>
              <Icon icon={ic_clear} title="취소" />
            </button>
          </div>
        )}
      </li>
    );
  }
}

export default TodoTodoListSub;
