import React from 'react';

const TodoLogin = () => {
  return (
    <div className="login">
      <div className="area">
        <form className="form">
          <div>
            <span>아이디</span>{' '}
            <input type="text" placeholder="아이디를 입력하세요." />
          </div>
          <div>
            <span>비밀번호</span>{' '}
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              autoComplete="off"
            />
          </div>
        </form>
        <div className="btn">
          <button>로그인</button>
        </div>
      </div>
    </div>
  );
};

export default TodoLogin;
