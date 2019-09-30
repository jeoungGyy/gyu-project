import React from 'react';
import { Link } from 'react-router-dom';
import './LottoNumber.scss';

const LottoNumber = ({
  onLottoNumber,
  onDelayPageLotto,
  onLottoRound,
  onRoundSelect,
  onRoundSearch
}) => {
  if (!onLottoNumber.drwNoDate) {
    return false;
  }

  const selectOption = onLottoRound.map((info, index) => (
    <option key={index} value={info}>
      {info}
    </option>
  ));

  const firstWinamnt = (onLottoNumber.firstWinamnt + '').replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    '$1,'
  );
  const totSellamnt = (onLottoNumber.totSellamnt + '').replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    '$1,'
  );
  const firstAccumamnt = (onLottoNumber.firstAccumamnt + '').replace(
    /(\d)(?=(?:\d{3})+(?!\d))/g,
    '$1,'
  );
  const dateY = onLottoNumber.drwNoDate.split('-')[0];
  const dateM = onLottoNumber.drwNoDate.split('-')[1];
  const dateD = onLottoNumber.drwNoDate.split('-')[2];

  return (
    <div className="LottoNumber">
      <h2>{onLottoNumber.drwNo}회 당첨결과</h2>
      <p className="sub">
        ({dateY}년 {dateM}월 {dateD}일 추첨)
      </p>
      <div className="ball">
        <div className="nm">
          <span className="bgColor1">{onLottoNumber.drwtNo1}</span>
          <span className="bgColor1">{onLottoNumber.drwtNo2}</span>
          <span className="bgColor2">{onLottoNumber.drwtNo3}</span>
          <span className="bgColor2">{onLottoNumber.drwtNo4}</span>
          <span className="bgColor3">{onLottoNumber.drwtNo5}</span>
          <span className="bgColor3">{onLottoNumber.drwtNo6}</span>
        </div>

        <div className="nd">+</div>
        <div className="ne">
          <span>{onLottoNumber.bnusNo}</span>
        </div>
      </div>
      <table className="lottoTable">
        <colgroup>
          <col style={{ width: '70px' }} />
          <col style={{ width: '120px' }} />
          <col />
          <col style={{ width: '120px' }} />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th rowSpan="2" className="tac">
              1등
            </th>
            <th>당첨자</th>
            <td>{onLottoNumber.firstPrzwnerCo}</td>
            <th>당첨금액</th>
            <td>{firstWinamnt}원</td>
          </tr>
          <tr>
            <th>총 판매금액</th>
            <td>{totSellamnt}원</td>
            <th>1등 총액</th>
            <td>{firstAccumamnt}원</td>
          </tr>
        </tbody>
      </table>

      <div className="round">
        <select onChange={onRoundSelect}>{selectOption}</select>
        <button type="button" className="btn blue" onClick={onRoundSearch}>
          조회
        </button>
        <Link
          className="btn gray"
          to={{
            pathname: ''
          }}
          onClick={e => onDelayPageLotto('', e)}
        >
          메인
        </Link>
      </div>
    </div>
  );
};

export default LottoNumber;
