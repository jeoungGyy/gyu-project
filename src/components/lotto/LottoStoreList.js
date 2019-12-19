import React from 'react';
import './LottoStoreList.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const LottoStoreList = ({
  lottoData,
  stateSliderValue,
  onSliderValue,
  onAddressClick
}) => {
  const lottoDataSort = lottoData
    .sort(function(a, b) {
      return a.number - b.number;
    })
    .sort(function(c, d) {
      return c.total - d.total;
    })
    .reverse();

  if (!lottoDataSort[0]) {
    return false;
  }

  const LottoSList = lottoDataSort.map((info, index) => {
    if (info.total < stateSliderValue) {
      return false;
    }
    return (
      <li key={index}>
        <em>{info.total}</em>
        <span className="store" onClick={() => onAddressClick(info.y, info.x)}>
          {info.name}
        </span>
        <span className="address">{info.latlng}</span>
      </li>
    );
  });
  return (
    <div className="LottoStoreList">
      <h3 className="shop">1등 당첨 판매점</h3>
      <div className="storeArea">
        <ul className="storeList">{LottoSList}</ul>
        <div className="listControl">
          <span className="controlBar">
            <Slider
              reverse
              onChange={onSliderValue}
              min={2}
              max={lottoDataSort[0].total}
            />
          </span>
          <span className="controlText">
            <em className="strong">{stateSliderValue}</em>번 이상 당첨
          </span>
        </div>
      </div>
    </div>
  );
};

export default LottoStoreList;
