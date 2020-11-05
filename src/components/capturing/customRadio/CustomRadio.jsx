import React, { Component } from 'react';
import './CustomRadio.css';

class CustomRadio extends Component {
  render() {
    return (
      <div className="custom-radio">
        <h2>Custom Radio</h2>

        <div className="custom-title">Select Your option</div>
        <div className="custom-box">
          <input type="radio" name="select" id="option-1" />
          <input type="radio" name="select" id="option-2" />
          <input type="radio" name="select" id="option-3" />
          <input type="radio" name="select" id="option-4" />
          <label htmlFor="option-1" className="option-1">
            <div className="dot"></div>
            <div className="text">Gamer</div>
          </label>
          <label htmlFor="option-2" className="option-2">
            <div className="dot"></div>
            <div className="text">YouTuber</div>
          </label>
          <label htmlFor="option-3" className="option-3">
            <div className="dot"></div>
            <div className="text">Student</div>
          </label>
          <label htmlFor="option-4" className="option-4">
            <div className="dot"></div>
            <div className="text">Developer</div>
          </label>
        </div>
      </div>
    );
  }
}

export default CustomRadio;
