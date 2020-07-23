import React from 'react';
import './ButtonDefault.scss';

const ButtonDefault = () => {
  return (
    <ul className="flex">
      <li>
        <button type="button" className="Da">
          <span>Button</span>
          <div className="liquid"></div>
        </button>
      </li>
      <li>
        <button className="Db">Loading</button>
      </li>
      <li>
        <div className="Dc">
          <div className="DC_bg"></div>
          <button className="DC_button">TEXT</button>
        </div>
      </li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
    </ul>
  );
};

export default ButtonDefault;
