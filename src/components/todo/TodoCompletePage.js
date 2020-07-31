import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TodoCompletePagePie from './TodoCompletePagePie';
import TodoCompletePageStick from './TodoCompletePageStick';

@inject('todo')
@observer
class TodoCompletePage extends Component {
  render() {
    const { todo } = this.props;

    const complete = todo.todoList.filter((complete) => complete.btnComplete);
    const tag = complete.map((info) => info.tags);
    let tagChoice = tag
      .reduce(function (a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
      }, [])
      .sort();

    // const test = complete.map(
    //   (info) => info.filter((tag) => tag.tags === todo.tagList).length
    //   // (info) => console.log(info)
    // );

    const aa = tagChoice.map((info) => {
      return (info = { name: info, y: 10, z: 30 });
    });

    // console.log(tagChoice);

    return (
      <div>
        <TodoCompletePagePie tagChoice={aa} />
        <TodoCompletePageStick />
      </div>
    );
  }
}

export default TodoCompletePage;
