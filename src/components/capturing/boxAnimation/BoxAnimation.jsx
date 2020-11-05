import React from 'react';
import './BoxAnimation.css';

const BoxAnimation = () => {
  return (
    <div className="box-animation">
      <div>
        <h2>Box Animation</h2>

        <div className="square">
          <span></span>
          <span></span>
          <span></span>
          <h3>Post Title</h3>
          <p>
            모든 국민은 보건에 관하여 국가의 보호를 받는다. 국가는 건전한
            소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한
            소비자보호운동을 법률이 정하는 바에 의하여 보장한다.
          </p>
          <p className="more">더보기</p>
        </div>
      </div>
    </div>
  );
};

export default BoxAnimation;
