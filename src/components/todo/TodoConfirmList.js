import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'react-icons-kit';
import { ic_more_vert } from 'react-icons-kit/md';

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

  render() {
    const { stateToggle, handleTodo, handleComplete, handleTodoDelete } = this;
    const { info } = this.props;
    const { toggle } = this.state;

    return (
      <li>
        <div className="con">
          <p className="title">
            [{info.tags}] {info.subject}
          </p>
          <ul className="sublist">
            <li>
              <p>
                - 메일: Fwd: 출판사업부(매스티안, 링구아포럼, lfa등) 사이트
                플래시 제거 건
              </p>
            </li>
          </ul>
          <p className="date">2020.07.05</p>
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
