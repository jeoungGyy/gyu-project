import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'react-icons-kit';
import { ic_more_vert } from 'react-icons-kit/md';
import TodoTodoListSub from './TodoTodoListSub';

@inject('todo')
@observer
class TodoConfirmList extends Component {
  state = {
    toggle: false,
    commentToggle: false,
  };

  // State
  stateToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
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
  // '할일'목록으로 넘기기
  handleTodo = () => {
    const { todo, info } = this.props;
    this.setState({
      toggle: false,
    });
    todo.actTodo(info._id);
  };
  // '완료'목록으로 넘기기
  handleComplete = () => {
    const { todo, info } = this.props;
    this.setState({
      toggle: false,
    });
    todo.actComplete(info._id);
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

  render() {
    const {
      stateToggle,
      handleTodo,
      handleComplete,
      handleTodoDelete,
      handleSubListPatch,
      handleCommentPatch,
    } = this;
    const { info } = this.props;
    const { toggle } = this.state;

    const dateString = info.createdDate
      .toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
      .substring(0, 10);

    const subComments = info.comments.map((sinfo, index) => {
      return (
        <TodoTodoListSub
          key={index}
          sinfo={sinfo}
          onSubListPatch={handleSubListPatch}
          onCommentPatch={handleCommentPatch}
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

        <button type="button" className="option" onClick={stateToggle}>
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
  }
}

export default TodoConfirmList;
