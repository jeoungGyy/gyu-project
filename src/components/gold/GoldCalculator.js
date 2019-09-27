import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_clear } from 'react-icons-kit/md';

const GoldCalculator = ({
  buyTotal,
  sellTotal,
  marginSellTotal,
  marginGoldValue,
  calculatorToggle,
  onGoldValue,
  onBuyGoldValue,
  onGoldToggleTrue
}) => {
  const buyValue = String(Math.floor(buyTotal)).replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    '$1,'
  );
  const sellValue = String(Math.floor(sellTotal)).replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    '$1,'
  );
  const marginGoldValueList = (
    <>
      {!marginGoldValue ? (
        <span>0</span>
      ) : marginSellTotal > 0 ? (
        '-' +
        String(Math.floor(marginSellTotal)).replace(
          /(\d)(?=(?:\d{3})+(?!\d))/g,
          '$1,'
        ) +
        ' 손해'
      ) : (
        String(Math.floor(Math.abs(marginSellTotal))).replace(
          /(\d)(?=(?:\d{3})+(?!\d))/g,
          '$1,'
        ) + ' 이익'
      )}
    </>
  );

  String(Math.floor(marginSellTotal)).replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    '$1,'
  );

  return (
    <>
      {calculatorToggle && (
        <div className="items">
          <table>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col style={{ width: '21%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '21%' }} />
              <col style={{ width: '10%' }} />
              <col />
              <col style={{ width: '72px' }} />
            </colgroup>
            <tbody>
              <tr>
                <th rowSpan="2">그램</th>
                <td rowSpan="2">
                  <input
                    type="text"
                    placeholder="숫자 입력"
                    onChange={onGoldValue}
                    className="h1"
                  />
                </td>
                <th>살때</th>
                <td>{buyValue}</td>
                <th className="sellbg">팔때</th>
                <td>{sellValue}</td>
                <td rowSpan="2" className="bg">
                  <button
                    type="button"
                    className="btn"
                    onClick={onGoldToggleTrue}
                  >
                    <Icon icon={ic_clear} />
                  </button>
                </td>
              </tr>
              <tr>
                <th>살때 가격</th>
                <td>
                  <input
                    type="text"
                    placeholder="3.75g 기준"
                    onChange={onBuyGoldValue}
                    className="h2"
                  />
                </td>
                <th className="sellbg">차익 금액</th>
                <td>{marginGoldValueList}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default GoldCalculator;
