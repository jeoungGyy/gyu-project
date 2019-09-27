import React from 'react';

const GoldPageSell = ({
  date,
  g24k_s,
  g18k_s,
  g14k_s,
  g24k_s_ch,
  g18k_s_ch,
  g14k_s_ch
}) => {
  const gold24kValue = String(g24k_s).replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    '$1,'
  );
  const gold24kPrep = (
    <em className="color_gray">
      (
      {g24k_s_ch > 0 ? (
        <span className="red">▲</span>
      ) : g24k_s_ch < 0 ? (
        <span className="blue">▼</span>
      ) : (
        <span className="etc">-</span>
      )}{' '}
      {String(g24k_s_ch).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')})
    </em>
  );

  const gold18kValue = String(g18k_s).replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    '$1,'
  );
  const gold18kPrep = (
    <em className="color_gray">
      (
      {g18k_s_ch > 0 ? (
        <span className="red">▲</span>
      ) : g18k_s_ch < 0 ? (
        <span className="blue">▼</span>
      ) : (
        <span className="etc">-</span>
      )}{' '}
      {String(g18k_s_ch).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')})
    </em>
  );

  const gold14kValue = String(g14k_s).replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    '$1,'
  );
  const gold14kPrep = (
    <em className="color_gray">
      (
      {g14k_s_ch > 0 ? (
        <span className="red">▲</span>
      ) : g14k_s_ch < 0 ? (
        <span className="blue">▼</span>
      ) : (
        <span className="etc">-</span>
      )}{' '}
      {String(g14k_s_ch).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')})
    </em>
  );

  return (
    <li>
      <div className="date">
        {date.substring(0, 4)}
        <br />
        {date.substring(5, 10)}
      </div>
      <div className="sub">
        <p>
          순금 <span className="large">{gold24kValue}</span>원 {gold24kPrep}
        </p>
        <p>
          18K <span className="large">{gold18kValue}</span>원 {gold18kPrep}
        </p>
        <p>
          14K <span className="large">{gold14kValue}</span>원 {gold14kPrep}
        </p>
      </div>
    </li>
  );
};

export default GoldPageSell;
