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

    // 30일 전 데이터
    let nowDate = new Date();
    const monthDate = nowDate.getTime() - 30 * 24 * 60 * 60 * 1000;
    nowDate.setTime(monthDate);
    const rangeDate =
      nowDate.getFullYear() +
      '-' +
      ('0' + (nowDate.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + nowDate.getDate()).slice(-2);

    const completeRange = complete.filter(
      (complete) => complete.completeDate.substring(0, 10) > rangeDate
    );
    const tagRange = completeRange.map((info) => info.tags);
    const tagChoiceRange = Array.from(new Set(tagRange)).sort();
    const yzRange = tagChoiceRange.map(
      (tagName) =>
        complete
          .map((allList) => allList.tags === tagName)
          .filter((tags) => tags).length
    );

    return (
      <div>
        <TodoCompletePagePie tagChoice={variablepie} />
        <TodoCompletePageStick
          valueTagChoice={tagChoiceRange}
          valueYZ={yzRange}
        />
      </div>
    );
  }
}

export default TodoCompletePage;
