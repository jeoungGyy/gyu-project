import React from 'react';
import './Emoticon.scss';

const Emoticon = () => {
  return (
    <div className="emoticon">
      <h2>Animation Emoticon</h2>

      <div className="emoticon-body">
        <div className="emoji  emoji--like">
          <div className="emoji__hand">
            <div className="emoji__thumb"></div>
          </div>
        </div>
        <div className="emoji  emoji--love">
          <div className="emoji__heart"></div>
        </div>
        <div className="emoji  emoji--haha">
          <div className="emoji__face">
            <div className="emoji__eyes"></div>
            <div className="emoji__mouth">
              <div className="emoji__tongue"></div>
            </div>
          </div>
        </div>
        <div className="emoji  emoji--yay">
          <div className="emoji__face">
            <div className="emoji__eyebrows"></div>
            <div className="emoji__mouth"></div>
          </div>
        </div>
        <div className="emoji  emoji--wow">
          <div className="emoji__face">
            <div className="emoji__eyebrows"></div>
            <div className="emoji__eyes"></div>
            <div className="emoji__mouth"></div>
          </div>
        </div>
        <div className="emoji  emoji--sad">
          <div className="emoji__face">
            <div className="emoji__eyebrows"></div>
            <div className="emoji__eyes"></div>
            <div className="emoji__mouth"></div>
          </div>
        </div>
        <div className="emoji  emoji--angry">
          <div className="emoji__face">
            <div className="emoji__eyebrows"></div>
            <div className="emoji__eyes"></div>
            <div className="emoji__mouth"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emoticon;
