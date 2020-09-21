import React, { useState, useRef } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_create } from 'react-icons-kit/md';

const TodoTodoSearch = ({ onTodoWrite, tagList }) => {
  const [inputs, setInputs] = useState({
    name: '',
    tag: '',
  });
  const nameInput = useRef();
  const tagInput = useRef();

  const { name, tag } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const StateTagSelect = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setInputs({
      ...inputs,
      tag: value,
    });
  };

  const todoWrite = (e) => {
    if (name === '') {
      alert('할일을 작성해주세요.');
      nameInput.current.focus();
      return;
    }
    if (tag === '') {
      alert('Tag를 작성해주세요.');
      tagInput.current.focus();
      return;
    }

    setInputs({
      name: '',
      tag: '',
    });
    onTodoWrite(name, tag);
  };

  const tags = tagList.map((info, index) => {
    return <option key={index}>{info}</option>;
  });

  return (
    <div>
      <div className="search_input">
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={name}
          ref={nameInput}
        />
        <button type="button" onClick={todoWrite}>
          <Icon icon={ic_create} title="검색" />
        </button>
      </div>
      <div className="search_tag">
        <input
          type="text"
          name="tag"
          onChange={onChange}
          value={tag}
          placeholder="Tag 작성"
          ref={tagInput}
        />
        <select onChange={StateTagSelect}>
          <option>Tag 선택</option>
          {tags}
        </select>
      </div>
    </div>
  );
};

export default React.memo(TodoTodoSearch);
