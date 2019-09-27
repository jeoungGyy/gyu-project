import React from 'react';

const GoldPageBuy = ({ date, g24k_b, g24k_b_ch }) => {
  const gold24kValue = String(g24k_b).replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    '$1,'
  );
  const gold24kPrep = (
    <em className="color_gray">
      (
      {g24k_b_ch > 0 ? (
        <span className="red">▲</span>
      ) : g24k_b_ch < 0 ? (
        <span className="blue">▼</span>
      ) : (
        <span className="etc">-</span>
      )}{' '}
      {String(g24k_b_ch).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')})
    </em>
  );

  return (
    <li>
      <div className="date">
        {date.substring(0, 4)}
        <br />
        {date.substring(5, 10)}
      </div>
      <p>
        <span className="large">{gold24kValue}</span>원 {gold24kPrep}
      </p>
    </li>
  );
};

export default GoldPageBuy;
