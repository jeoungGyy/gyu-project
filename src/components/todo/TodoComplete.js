import React, { Component } from 'react';
import TodoCompletePage from './TodoCompletePage';

import './TodoComplete.scss';

class TodoComplete extends Component {
  render() {
    return (
      <div className="TodoComplete">
        <h3>완료</h3>

        <div className="tab">
          <button type="button" className="graph active">
            그래프
          </button>
          <button type="button" className="list">
            리스트
          </button>
        </div>
        <TodoCompletePage />
      </div>
    );
  }
}

export default TodoComplete;
