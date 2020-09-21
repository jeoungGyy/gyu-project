import React from 'react';
import { Link } from 'react-router-dom';

const TodoGlobal = ({
  delayMain,
  onAuthClose,
  onAuthLogout,
  onAuthCheck,
  loginOrLogout,
}) => {
  return (
    <div className="hcontrol">
      <button type="button" onClick={onAuthCheck}>
        로그인 체크
      </button>
      {!loginOrLogout ? (
        <button type="button" onClick={onAuthLogout}>
          로그아웃
        </button>
      ) : (
        <button type="button" onClick={onAuthClose}>
          로그인
        </button>
      )}
      <Link
        to={{
          pathname: '',
        }}
        onClick={(e) => delayMain('', e)}
      >
        메인
      </Link>
    </div>
  );
};

export default TodoGlobal;
