import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_create } from 'react-icons-kit/md';

class TodoTodoSearch extends Component {
  state = {
    inputValue: '',
    tagValue: '',
  };

  stateInputValue = (e) => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({
      inputValue: value,
    });
  };
  stateTagValue = (e) => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({
      tagValue: value,
    });
  };

  handleTagSelect = (e) => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({
      tagValue: value,
    });
  };

  render() {
    const { stateInputValue, stateTagValue, handleTagSelect } = this;
    const { onTodoWrite, tagList } = this.props;
    const { inputValue, tagValue } = this.state;

    const tags = tagList.map((info, index) => {
      return <option key={index}>{info}</option>;
    });

    return (
      <form onSubmit={() => onTodoWrite(inputValue, tagValue)}>
        <div className="search_input">
          <input type="text" onChange={stateInputValue} value={inputValue} />
          <button>
            <Icon icon={ic_create} title="검색" />
          </button>
        </div>
        <div className="search_tag">
          <input
            type="text"
            placeholder="Tag 작성"
            onChange={stateTagValue}
            value={tagValue}
          />
          <select onChange={handleTagSelect}>
            <option>Tag 선택</option>
            {tags}
          </select>
        </div>
      </form>
    );
  }
}

export default TodoTodoSearch;
