import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import WeatherItemList from './WeatherItemList';
import { Icon } from 'react-icons-kit';
import { ic_place } from 'react-icons-kit/md';
import './WeatherItem.scss';

@inject('weather')
@observer
class WeatherItem extends Component {
  componentDidMount() {
    // const { weather } = this.props;
    // weather.weatherList();
  }

  render() {
    // const { weather } = this.props;
    // const { date } = weather.root.clock;
    // const aaa = String(date);
    // console.log(date);
    // const list = weather.selectedItems.map((info, index) => {
    //   if (
    //     info.category === 'POP' ||
    //     info.category === 'PTY' ||
    //     info.category === 'SKY' ||
    //     info.category === 'T3H' ||
    //     info.category === 'REH'
    //   ) {
    //     return (
    //       <WeatherItemList
    //         key={index}
    //         category={info.category}
    //         fcstValue={info.fcstValue}
    //       />
    //     );
    //   } else {
    //     return false;
    //   }
    // });
    return (
      <li className="weather">
        <div className="WeatherItem">
          <div className="top">
            <div className="left">
              <p className="t">
                18:45 <span>AM</span>
              </p>
              <p className="w">10월 10일 목요일</p>
              <p className="a">
                <Icon icon={ic_place} /> 화양동
              </p>
            </div>
            <div className="right">
              <p className="img">
                <img src={require('../../images/icon_sunny.png')} alt="" />
              </p>
              <p className="o">
                25℃
                <i className="fas fa-tint" /> 18%
              </p>
            </div>
          </div>
          <ul className="bottom">
            <li>
              <div>
                <p className="t">강수확률</p>
                <p className="s">18%</p>
              </div>
            </li>
            <li>
              <div>
                <p className="t">강수형태</p>
                <p className="s">
                  <i className="fas fa-cloud-showers-heavy" />
                </p>
              </div>
            </li>
            <li>
              <div>
                <p className="t">강수량</p>
                <p className="s">2㎟</p>
              </div>
            </li>
            <li>
              <div>
                <p className="t">하늘상태</p>
                <p className="s">
                  <i className="fas fa-sun" />
                </p>
              </div>
            </li>
          </ul>
          {/* <div />
        <ul className="weatherList">{list}</ul> */}
        </div>
      </li>
    );
  }
}

export default WeatherItem;
