import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_launch } from 'react-icons-kit/md';
import ReactSVG from '../../images/react_logo.svg';

const CardHistory = () => {
  return (
    <li>
      <div
        className="nolink"
        onClick={() => {
          alert('AWS 무료 사용기한 만료로 사용이 중지됩니다.');
        }}
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
      </div>
    </li>
  );
};

export default CardHistory;
