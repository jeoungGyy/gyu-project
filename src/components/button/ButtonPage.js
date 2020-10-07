import React from 'react';
import ButtonColor from './ButtonColor';
import ButtonGradation from './ButtonGradation';
import ButtonDefault from './ButtonDefault';
import ButtonHover from './ButtonHover';
// import ButtonClick from './ButtonClick';
import './ButtonPage.scss';

const ButtonPage = () => {
  return (
    <div className="ButtonPage">
      <h2>CSS/SVG Buttons</h2>

      <h3>자주사용하는 색상표</h3>
      <ButtonColor />

      <h3>그라데이션 색상표</h3>
      <ButtonGradation />

      <h3>애니메이션 버튼</h3>
      <ButtonDefault />

      <h3>Hover 버튼</h3>
      <ButtonHover />

      {/* <h3>Click 버튼</h3>
      <ButtonClick /> */}
    </div>
  );
};

export default ButtonPage;
