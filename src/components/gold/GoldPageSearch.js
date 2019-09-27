import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

const GoldPageSearch = ({ onEndDay, onDaySearch, onGoldToggleTrue }) => {
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
    <div className="in_left">
      <DayPickerInput
        onDayChange={onEndDay}
        placeholder="날짜 선택"
        dayPickerProps={{
          fromMonth: new Date(2008, 9),
          months: MONTHS,
          weekdaysShort: WEEKDAYS_SHORT
        }}
      />
      <button type="button" className="btn" onClick={onDaySearch}>
        조회
      </button>{' '}
      <button type="button" className="btn" onClick={onGoldToggleTrue}>
        그램 계산기
      </button>
      <p className="ss">(선택한 날짜로부터 150일 전까지 조회됩니다.)</p>
    </div>
  );
};

export default GoldPageSearch;
