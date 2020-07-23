import React from 'react';

const WeatherItemList = ({ category, fcstValue }) => {
  return (
    <li>
      <div>
        <p className="t">
          {category === 'POP' && '강수확률'}
          {category === 'PTY' && '강수형태'}
          {category === 'REH' && '습도'}
          {category === 'SKY' && '하늘상태'}
        </p>
        <p className="s">
          {category === 'POP' && fcstValue + '%'}
          {(() => {
            if (category === 'PTY' && fcstValue === '1') {
              return <i className="fas fa-cloud-showers-heavy" />;
            } else if (category === 'PTY' && fcstValue === '2') {
              return <i className="fas fa-cloud-meatball" />;
            } else if (category === 'PTY' && fcstValue === '3') {
              return <i className="fas fa-snowflake" />;
            } else if (category === 'PTY' && fcstValue === '4') {
              return <i className="fas fa-umbrella" />;
            } else if (category === 'PTY' && fcstValue === '0') {
              return <span className="small">없음</span>;
            }
          })()}
          {category === 'REH' && fcstValue + '%'}
          {(() => {
            if (category === 'SKY' && fcstValue === '1') {
              return <i className="fas fa-sun" />;
            } else if (category === 'SKY' && fcstValue === '3') {
              return <i className="fas fa-cloud-sun" />;
            } else if (category === 'SKY' && fcstValue === '4') {
              return <i className="fas fa-cloud" />;
            }
          })()}
        </p>
      </div>
    </li>
  );
};

export default WeatherItemList;
