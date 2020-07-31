import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import TodoTodoListSub from './TodoTodoListSub';
import { Icon } from 'react-icons-kit';
import { ic_more_vert, ic_priority_high } from 'react-icons-kit/md';

@inject('todo')
@observer
class TodoTodoList extends Component {
  state = {
    toggle: false,
    commentToggle: false,
    commentValue: '',
    important: false,
  };

  // State
  stateToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
      commentToggle: false,
    });
  };
  stateCommentToggle = () => {
    this.setState({
      toggle: false,
      commentToggle: !this.state.commentToggle,
    });
  };
  stateCommentValue = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };
  stateCommentClose = () => {
    this.setState({
      commentToggle: false,
    });
  };

  // Handle
  // 삭제
  handleTodoDelete = () => {
    const { todo, info } = this.props;
    this.setState({
      toggle: false,
    });
    todo.actTodoDelete(info._id);
  };

  handleImportantCheck = () => {
    const { todo, info } = this.props;
    todo.actImportantCheck(info._id);
  };

  // 코멘트 쓰기
  handleTodoPatch = (id) => {
    const { todo } = this.props;
    this.setState({
      commentToggle: false,
    });
    todo.actTodoPatch(id, this.state.commentValue);
  };
  // 코멘트 리스트 삭제
  handleSubListPatch = (subId) => {
    const { todo, info } = this.props;
    todo.actSubListPatch(info._id, subId);
  };
  // 코멘트 리스트 수정
  handleCommentPatch = (value, subId) => {
    const { todo, info } = this.props;
    todo.actCommentPatch(value, info._id, subId);
  };
  // '확인'목록으로 넘기기
  handleConfirm = () => {
    const { todo, info } = this.props;
    this.setState({
      toggle: false,
    });
    todo.actConfirm(info._id);
  };
  // '완료'목록으로 넘기기
  handleComplete = () => {
    const { todo, info } = this.props;
    this.setState({
      toggle: false,
    });
    todo.actComplete(info._id);
  };

  render() {
    const {
      stateToggle,
      handleTodoDelete,
      stateCommentToggle,
      stateCommentValue,
      handleTodoPatch,
      handleSubListPatch,
      stateCommentClose,
      handleCommentPatch,
      handleImportantCheck,
      handleConfirm,
      handleComplete,
    } = this;
    const { info } = this.props;
    const { toggle, commentToggle } = this.state;

    const dateString = info.createdDate
      .toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
      .substring(0, 10);

    const sublist = info.comments.map((sinfo, i) => {
      return (
        <TodoTodoListSub
          key={i}
          sinfo={sinfo}
          onSubListPatch={handleSubListPatch}
          onCommentPatch={handleCommentPatch}
        />
      );
    });

    return (
      <li>
        <div className={`import ${info.important && 'active'}`}>
          <button type="button" onClick={handleImportantCheck}>
            <Icon icon={ic_priority_high} title="긴급" />
          </button>
        </div>

        <div className="con">
          <p className="title">
            [{info.tags}] {info.subject}
          </p>
          {commentToggle && (
            <div className="swrite">
              <textarea
                cols="10"
                rows="3"
                onChange={stateCommentValue}
              ></textarea>

              <div className="modifyBtn">
                <button type="button" onClick={() => handleTodoPatch(info._id)}>
                  등록
                </button>
                <button type="button" onClick={stateCommentClose}>
                  취소
                </button>
              </div>
            </div>
          )}
          <ul className="sublist">{sublist}</ul>
          <p className="date">{dateString}</p>
        </div>

        <button type="button" className="option" onClick={stateToggle}>
          <Icon icon={ic_more_vert} title="옵션열기" />
        </button>
        {toggle && (
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
  }
}

TodoTodoList.propTypes = {
  info: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    important: PropTypes.bool,
    btnTodo: PropTypes.bool,
    btnComplete: PropTypes.bool,
    btnConfirm: PropTypes.bool,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default TodoTodoList;
