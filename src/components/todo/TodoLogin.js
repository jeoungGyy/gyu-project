import React, { useState } from 'react';

const TodoLogin = ({ onAuthLogin, onAuthClose }) => {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });
  const { id, password } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <div className="area">
        <form className="login-form">
          <div>
            <span>아이디</span>{' '}
            <input
              type="text"
              name="id"
              value={id}
              onChange={onChange}
              placeholder="아이디를 입력하세요."
              required
            />
          </div>
          <div>
            <span>비밀번호</span>{' '}
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="비밀번호를 입력하세요."
              autoComplete="off"
              required
            />
          </div>
        </form>
        <div className="btn">
          <button type="button" onClick={() => onAuthLogin(id, password)}>
            로그인
          </button>
        </div>
        <button type="button" className="close" onClick={onAuthClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default TodoLogin;
