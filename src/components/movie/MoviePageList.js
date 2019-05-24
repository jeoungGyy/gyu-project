import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_insert_photo } from 'react-icons-kit/md';

const MoviePageList = ({
  rank,
  rankInten,
  rankOldAndNew,
  movieCd,
  movieNm,
  openDt,
  salesAmt,
  salesInten,
  salesChange,
  salesAcc,
  audiCnt,
  audiInten,
  audiChange,
  audiAcc,
  scrnCnt,
  showCnt
}) => {
  return (
    <li>
      <div className="poa">
        <div className="poster">
          <Icon icon={ic_insert_photo} title="" />
        </div>
        <i className="rank">{rank}</i>
        <i className="rankInten">
          {(() => {
            if (rankOldAndNew === 'NEW') {
              return <span className="new">NEW</span>;
            } else {
              if (`${rankInten}` > 0) {
                return (
                  <>
                    <span className="blue">▲</span> {rankInten}
                  </>
                );
              } else if (`${rankInten}` < 0) {
                return (
                  <>
                    <span className="red">▼</span> {rankInten.replace(/-/g, '')}
                  </>
                );
              } else {
                return <span className="maintain">-</span>;
              }
            }
          })()}
        </i>
      </div>
      <p className="title">{movieNm}</p>
      <p className="release">
        개봉일: {openDt} ({movieCd})
      </p>
      <ul>
        <li>
          <span>스크린수:</span>{' '}
          {scrnCnt.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}관
        </li>
        <li>
          <span>상영된 횟수:</span>{' '}
          {showCnt.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}회
        </li>
        <li>
          <span>관객수:</span>{' '}
          {audiCnt.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}명
        </li>
        <li>
          <span>누적 관객수:</span>{' '}
          {audiAcc.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}명
        </li>
        <li>
          <span>전일 대비 관객수:</span>{' '}
          {audiInten.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}명
        </li>
        <li>
          <span>전일 대비 관객수 증감비율:</span> {audiChange}%
        </li>
        <li>
          <span>매출액:</span>{' '}
          {salesAmt.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}원
        </li>
        <li>
          <span>누적 매출액:</span>{' '}
          {salesAcc.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}원
        </li>
        <li>
          <span>전일 대비 매출액 증감분:</span>{' '}
          {salesInten.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}원
        </li>
        <li>
          <span>전일 대비 매출액 증감 비율:</span> {salesChange}%
        </li>
      </ul>
    </li>
  );
};

export default MoviePageList;
