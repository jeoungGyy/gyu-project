import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import './MovieDate.scss';

const MovieDate = ({ onDayChange, layer, onLayerClose }) => {
  const MONTHS = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월'
  ];
  const WEEKDAYS_SHORT = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <>
      {!layer && (
        <div className="calendar">
          <div className="area">
            <DayPicker
              onDayClick={onDayChange}
              months={MONTHS}
              weekdaysShort={WEEKDAYS_SHORT}
            />
            <div className="btn">
              <button type="button" onClick={onLayerClose}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDate;
