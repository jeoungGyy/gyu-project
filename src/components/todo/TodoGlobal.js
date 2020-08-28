import React from 'react';
import { Link } from 'react-router-dom';

const TodoGlobal = ({ delayMain }) => {
  return (
    <div className="hcontrol">
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
