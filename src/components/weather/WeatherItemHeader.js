import React from 'react';

const WeatherItemHeader = ({ category, fcstValue }) => {
  return (
    <>
      {category === 'T3H' && fcstValue + '℃'}
      {category === 'VEC' && ' / 풍향: ' + fcstValue + '㎧'}
    </>
  );
};

export default WeatherItemHeader;
