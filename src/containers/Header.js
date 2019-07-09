import React from 'react';
import './Header.scss';
import { Icon } from 'react-icons-kit';
import {
  ic_alarm,
  ic_alarm_add,
  ic_alarm_off,
  ic_alarm_on
} from 'react-icons-kit/md';

const Header = () => {
  return (
    <header className="header">
      <h1>임정규 작업 폴더</h1>
      <p>머리에서 생각하는 속도와 말하는 속도를 비슷하게 맞춰라.</p>
      <div className="icons">
        <Icon icon={ic_alarm} />
        <Icon icon={ic_alarm_add} />
        <Icon icon={ic_alarm_off} />
        <Icon icon={ic_alarm_on} />
      </div>
    </header>
  );
};

export default Header;
