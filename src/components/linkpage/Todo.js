import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_launch } from 'react-icons-kit/md';
import ReactSVG from '../../images/react_logo.svg';

const Todo = () => {
  return (
    <li>
      <a
        href="//jeounggyy.github.io/screen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="img">
          <img src={require('../../images/project_img11.png')} alt="" />
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
            <p className="s">2018.08.23</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default Todo;
