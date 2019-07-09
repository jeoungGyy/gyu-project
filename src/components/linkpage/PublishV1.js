import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_launch } from 'react-icons-kit/md';

const PublishV1 = () => {
  return (
    <li>
      <a
        href="http://limjungk.cafe24.com/document/main.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="img">
          <img src={require('../../images/project_img6.png')} alt="" />
          <div className="round html5">
            <img
              src={require('../../images/html5_logo.png')}
              alt="React Logo"
            />
          </div>
        </div>
        <div className="summary">
          <div className="line">
            <p className="t">
              퍼블리셔 기본 양식 V1 <Icon icon={ic_launch} />
            </p>
            <p className="u">HTML, JQuery (Cafe24 Hosting)</p>
            <p className="s">2014.02.19</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default PublishV1;
