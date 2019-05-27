import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_launch } from 'react-icons-kit/md';
import ReactSVG from '../../images/react_logo.svg';

const TimeLine = () => {
  return (
    <li>
      <Link
        to={{
          pathname: 'https://d1d7owdiau2n6k.cloudfront.net/index.html'
        }}
        target="_blank"
      >
        <div className="img">
          <img src={require('../../images/project_img2.png')} alt="" />
          <div className="round">
            <img src={ReactSVG} alt="React Logo" />
          </div>
        </div>
        <div className="summary">
          <div className="line">
            <p className="t">
              그때 그 사건 <Icon icon={ic_launch} />
            </p>
            <p className="u">ReactApp (AWS S3 Hosting)</p>
            <p className="s">2019.02.13</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default TimeLine;
