import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import WeatherItemHeader from './WeatherItemHeader';
import WeatherItemList from './WeatherItemList';
import { Icon } from 'react-icons-kit';
import { ic_place } from 'react-icons-kit/md';
import './WeatherItem.scss';

@inject('weather')
@observer
class WeatherItem extends Component {
  componentDidMount() {}

  render() {
    const { weather } = this.props;
    const { date } = weather.root.clock;
    let week = [
      '일요일(SUN)',
      '월요일(MON)',
      '화요일(TUE)',
      '수요일(WED)',
      '목요일(THU)',
      '금요일(FRI)',
      '토요일(SAT)'
    ];
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dateDay = date.getDate();
    let day = week[date.getDay()];
    let h = date.getHours();
    let m = date.getMinutes();

    const listHeader = weather.selectedItems.map((info, index) => {
      if (info.category === 'T3H' || info.category === 'VEC') {
        return (
          <WeatherItemHeader
            key={index}
            category={info.category}
            fcstValue={info.fcstValue}
          />
        );
      } else {
        return false;
      }
    });

    const list = weather.selectedItems.map((info, index) => {
      if (
        info.category === 'POP' ||
        info.category === 'PTY' ||
        info.category === 'SKY' ||
        info.category === 'REH'
      ) {
        return (
          <WeatherItemList
            key={index}
            category={info.category}
            fcstValue={info.fcstValue}
          />
        );
      } else {
        return false;
      }
    });
    return (
      <li className="weather">
        <div className="WeatherItem">
          <div className="top">
            <div className="left">
              <p className="t">
                {h === 12 ? '12' : h % 12}:{m < 10 ? '0' + m : m}
                <span className="ampm">{h < 12 ? 'am' : 'pm'}</span>
              </p>
              <p className="w">
                {year}년 {month}월 {dateDay}일 {day}
              </p>
              <p className="a">
                <Icon icon={ic_place} /> 강남구 봉은사로 442
              </p>
            </div>
            <div className="right">
              <p className="img">
                {(() => {
                  if (date.getHours() < 20 || date.getHours() > 6) {
                    return (
                      <img
                        src={require('../../images/icon_sunny.png')}
                        alt=""
                      />
                    );
                  } else {
                    return (
                      <img src={require('../../images/icon_moon.png')} alt="" />
                    );
                  }
                })()}
              </p>
              <p className="o">{listHeader}</p>
            </div>
          </div>
          <ul className="bottom">{list}</ul>
        </div>
      </li>
    );
  }
}

export default WeatherItem;
