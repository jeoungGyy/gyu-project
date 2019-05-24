import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_launch } from 'react-icons-kit/md';
import ReactSVG from '../../images/react_logo.svg';

const CardHistory = () => {
  return (
    <li>
      <Link
        to={{
          pathname: '//d2wz52cyqa4zgb.cloudfront.net/index.html'
        }}
        target="_blank"
      >
        <div className="img">
          <img src={require('../../images/project_img3.png')} alt="" />
          <div className="round">
            <img src={ReactSVG} alt="React Logo" />
          </div>
        </div>
        <div className="summary">
          <div className="line">
            <p className="t">
              카드 이력 관리 <Icon icon={ic_launch} />
            </p>
            <p className="u">ReactApp (AWS S3 Hosting)</p>
            <p className="s">2018.12.06</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardHistory;
