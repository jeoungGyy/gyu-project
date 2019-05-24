import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_launch } from 'react-icons-kit/md';
import ReactSVG from '../../images/react_logo.svg';

const Todo = () => {
  return (
    <li>
      <Link
        to={{
          pathname: 'https://jeounggyy.github.io/screen/'
        }}
        target="_blank"
      >
        <div className="img">
          <img src={require('../../images/project_img4.png')} alt="" />
          <div className="round">
            <img src={ReactSVG} alt="React Logo" />
          </div>
        </div>
        <div className="summary">
          <div className="line">
            <p className="t">
              오늘 할 일 <Icon icon={ic_launch} />
            </p>
            <p className="u">ReactApp (GitHub Hosting)</p>
            <p className="s">2018.12.06</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Todo;
