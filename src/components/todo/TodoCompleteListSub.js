import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'react-icons-kit';
import { ic_more_vert } from 'react-icons-kit/md';

@inject('todo')
@observer
class TodoCompleteListSub extends Component {
  state = {
    toggle: false,
  };

  // State
  stateToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
      commentToggle: false,
    });
  };

  // Handle
  // '할일'목록으로 넘기기
  handleTodo = () => {
    const { todo, info } = this.props;
    this.setState({
      toggle: false,
    });
    todo.actTodo(info._id);
  };
  // '확인'목록으로 넘기기
  handleConfirm = () => {
    const { todo, info } = this.props;
    this.setState({
      toggle: false,
    });
    todo.actConfirm(info._id);
  };

  render() {
    const { stateToggle, handleConfirm, handleTodo } = this;
    const { info, index } = this.props;
    const { toggle } = this.state;

    const dateString = info.createdDate
      .toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
      .substring(0, 10);

    const subComments = info.comments.map((info, index) => (
      <li key={index}>
        <p>{info.comment}</p>
      </li>
    ));

    const year = info.completeDate.substring(0, 4);
    const month = info.completeDate.substring(5, 10);

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
              <button type="button" onClick={handleConfirm}>
                확인
              </button>
            </li>
          </ul>
        )}
      </li>
    );
  }
}

export default TodoCompleteListSub;
