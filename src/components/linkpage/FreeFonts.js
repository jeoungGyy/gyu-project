import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_launch } from 'react-icons-kit/md';
import ReactSVG from '../../images/react_logo.svg';

const FreeFonts = () => {
  return (
    <li>
      <a
        href="//jeounggyy.github.io/free-fonts"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="img">
          <img src={require('../../images/project_img.png')} alt="" />
          <div className="round">
            <img src={ReactSVG} alt="React Logo" />
          </div>
        </div>
        <div className="summary">
          <div className="line">
            <p className="t">
              상업용 무료 폰트 모음 <Icon icon={ic_launch} />
            </p>
            <p className="u">ReactApp (GitHub Hosting)</p>
            <p className="s">2019.04.17</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default FreeFonts;
