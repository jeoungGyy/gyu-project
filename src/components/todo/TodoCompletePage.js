import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TodoCompletePagePie from './TodoCompletePagePie';
import TodoCompletePageStick from './TodoCompletePageStick';

@inject('todo')
@observer
class TodoCompletePage extends Component {
  render() {
    const { todo } = this.props;
    if (!todo.tagList.length) return false;

    const complete = todo.todoList.filter((complete) => complete.btnComplete);
    const tag = complete.map((info) => info.tags);
    const tagChoice = Array.from(new Set(tag)).sort();
    const yz = tagChoice.map(
      (tagName) =>
        complete
          .map((allList) => allList.tags === tagName)
          .filter((tags) => tags).length
    );

    const variablepie = tagChoice.map((info, index) => {
      return (info = { name: info, y: yz[index], z: (yz[index] * 10) / 2 });
    });

    return (
      <div>
        <TodoCompletePagePie tagChoice={variablepie} />
        <TodoCompletePageStick valueTagChoice={tagChoice} valueYZ={yz} />
      </div>
    );
  }
}

export default TodoCompletePage;
