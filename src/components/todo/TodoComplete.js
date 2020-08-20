import React, { Component } from 'react';
import TodoCompletePage from './TodoCompletePage';
import TodoCompleteList from './TodoCompleteList';

import './TodoComplete.scss';

class TodoComplete extends Component {
  state = {
    tabToggel: false,
  };

  stateToggleFalse = () => {
    this.setState({
      tabToggel: false,
    });
  };
  stateToggleTrue = () => {
    this.setState({
      tabToggel: true,
    });
  };

  render() {
    const { stateToggleFalse, stateToggleTrue } = this;
    const { tabToggel } = this.state;

    return (
      <div className="TodoComplete">
        <h3>완료</h3>

        <div className="tab">
          <button
            type="button"
            className={`btnGraph ${!tabToggel ? 'active' : undefined}`}
            onClick={stateToggleFalse}
          >
            그래프
          </button>
          <button
            type="button"
            className={`btnList ${tabToggel ? 'active' : undefined}`}
            onClick={stateToggleTrue}
          >
            리스트
          </button>
        </div>
        {!tabToggel ? <TodoCompletePage /> : <TodoCompleteList />}
      </div>
    );
  }
}

export default TodoComplete;
