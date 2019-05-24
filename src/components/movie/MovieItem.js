import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import ReactSVG from '../../images/react_logo.svg';

import MovieItemList from './MovieItemList';
import './MovieItem.scss';

@inject('movie')
@observer
class MovieItem extends Component {
  delayPageMove = pageName => {
    const {
      history: { push }
    } = this.props;
    const { common } = this.props.movie.root;
    common.loadingDelay(push, pageName);
    // common.loadingDelay(push);
  };

  render() {
    const { delayPageMove } = this;
    const { movie } = this.props;
    const movieList = movie.movieDaily.dailyBoxOfficeList.map((info, index) => {
      if (index <= 4) {
        return (
          <MovieItemList
            key={index}
            rank={info.rank}
            rankInten={info.rankInten}
            rankOldAndNew={info.rankOldAndNew}
            movieNm={info.movieNm}
            salesAmt={info.salesAmt}
            audiCnt={info.audiCnt}
            audiAcc={info.audiAcc}
          />
        );
      } else {
        return false;
      }
    });

    return (
      <li className="movie">
        <div className="area">
          <div className="box">
            <p className="title">일별 박스오피스</p>
            <table className="wtable">
              <colgroup>
                <col style={{ width: '8px' }} />
                <col style={{ width: '35px' }} />
                <col />
                <col style={{ width: '85px' }} />
                <col style={{ width: '70px' }} />
                <col style={{ width: '85px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th />
                  <th />
                  <th>영화명</th>
                  <th>일간 매출액</th>
                  <th>일간 관객수</th>
                  <th>누적 관객수</th>
                </tr>
              </thead>
              <tbody>{movieList}</tbody>
            </table>
            <div className="round left">
              <img src={ReactSVG} alt="React Logo" />
            </div>
            <div className="round right">
              <img
                src={require('../../images/movie_openapi.png')}
                alt="Open API"
              />
            </div>
          </div>

          <Link
            to={{
              pathname: ''
            }}
            onClick={() => delayPageMove('movie')}
          >
            <div className="summary">
              <div className="line">
                <p className="t">영화 정보</p>
                <p className="u">ReactApp, 영화진흥위원회 Open API</p>
                <p className="s">2019.05.23</p>
              </div>
            </div>
          </Link>
        </div>
      </li>
    );
  }
}

export default MovieItem;
