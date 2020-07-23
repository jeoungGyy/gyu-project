import React from 'react';
import './ButtonHover.scss';

const ButtonHover = () => {
  return (
    <ul className="flex">
      <li>
        <button className="Ha">Ghost</button>
      </li>
      <li>
        <button className="Hb">Fill In</button>
      </li>
      <li>
        <button className="Hc">Pulse</button>
      </li>
      <li>
        <button className="Hd">Open</button>
      </li>
      <li>
        <button className="He">Close</button>
      </li>
      <li>
        <button className="Hf">Slash</button>
      </li>
      <li>
        <button className="Hg">Fill Up</button>
      </li>
      <li>
        <button className="Hh">Slide</button>
      </li>
      <li>
        <button className="Hi">Through</button>
      </li>
      <li>
        <button className="Hj">Cross Bar</button>
      </li>
      <li>
        <button className="Hk">Hover</button>
      </li>
      <li>
        <button className="Hl">
          <div></div>
        </button>
      </li>
      <li>
        <button className="Hm">
          <span>Hover Me</span>
          <svg>
            <polyline
              className="o1"
              points="0 0, 150 0, 150 55, 0 55, 0 0"
            ></polyline>
            <polyline
              className="o2"
              points="0 0, 150 0, 150 55, 0 55, 0 0"
            ></polyline>
          </svg>
        </button>
      </li>
      <li>
        <button className="Hn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <p>H</p>
        </button>
      </li>
      <li>
        <button className="Ho">
          <span>hover me</span>
        </button>
      </li>
      <li>
        <button className="Hp">Liquid Fill</button>
      </li>
      <li>
        <div className="Hq">
          <button>More</button>
        </div>
      </li>
      <li>
        <button className="Hr">Peter River</button>
      </li>
      <li>11111</li>
      <li>11111</li>
    </ul>
  );
};

export default ButtonHover;
