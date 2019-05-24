import React from 'react';

const MovieItemList = ({
  rank,
  rankInten,
  rankOldAndNew,
  movieNm,
  salesAmt,
  audiCnt,
  audiAcc
}) => {
  return (
    <tr>
      <td>{rank}</td>
      <td>
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
      </td>
      <td className="txt_left">
        {movieNm.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}
      </td>
      <td className="txt_right">
        {salesAmt.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}원
      </td>
      <td className="txt_right">
        {audiCnt.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}명
      </td>
      <td className="txt_right">
        {audiAcc.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}명
      </td>
    </tr>
  );
};

export default MovieItemList;
