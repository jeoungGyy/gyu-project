import React from 'react';
import './InputAnimation.css';

const InputAnimation = () => {
  return (
    <div className="input-animation">
      <h2>Animation Input</h2>

      <div className="form">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="lable-name">
          <span className="content-name">Name</span>
        </label>
      </div>
    </div>
  );
};

export default InputAnimation;
