import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_launch } from 'react-icons-kit/md';
import ReactSVG from '../../images/react_logo.svg';

const FreeFonts = () => {
  return (
    <li>
      <Link
        to={{
          pathname: '//jeounggyy.github.io/free-fonts/'
        }}
        target="_blank"
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
      </Link>
    </li>
  );
};

export default FreeFonts;
