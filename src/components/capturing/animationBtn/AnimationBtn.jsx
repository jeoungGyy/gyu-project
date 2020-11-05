import React from 'react';
import './AnimationBtn.css';

const AnimationBtn = () => {
  return (
    <div className="animation-button">
      <h2>Animation Button</h2>

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
      </ul>
    </div>
  );
};

export default AnimationBtn;
