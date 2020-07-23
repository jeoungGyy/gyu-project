import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import ReactSVG from '../../images/react_logo.svg';

@inject('todo')
@observer
class TodoItem extends Component {
  delayPageTodo = (pageName) => {
    const {
      history: { push },
    } = this.props;
    const { common } = this.props.todo.root;
    common.loadingDelay(push, pageName);
  };

  render() {
    const { delayPageTodo } = this;

    return (
      <li className="todo">
        <Link
          to={{
            pathname: '',
          }}
          onClick={() => delayPageTodo('todo')}
        >
          <div className="box">
            <div className="img">
              <img src={require('../../images/project_img4.png')} alt="" />
              <div className="round">
                <img src={ReactSVG} alt="React Logo" />
              </div>
            </div>
            <div className="summary">
              <div className="line">
                <p className="t">내가쓰는 Todo</p>
                <p className="u">ReactApp</p>
                <p className="s">2018.12.06</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default TodoItem;
