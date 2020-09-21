import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { Icon } from 'react-icons-kit';
import { ic_error } from 'react-icons-kit/md';

import MovieSelectItems from './MovieSelectItems';
import MoviePageItems from './MoviePageItems';
import MoviePageList from './MoviePageList';
import MovieSearchPageList from './MovieSearchPageList';
import MovieDate from './MovieDate';
import MovieSearch from './MovieSearch';
import MovieSearchActPageList from './MovieSearchActPageList';
import './MoviePage.scss';

let dayWeekend;
let totCnt;

@inject('movie')
@observer
class MoviePageDay extends Component {
  delayPageMove = (pageName, e) => {
    e.preventDefault();
    const {
      history: { push },
    } = this.props;
    const { common } = this.props.movie.root;
    common.loadingDelay(push, pageName);
  };

  handleMovieList = (e) => {
    const { movie } = this.props;
    movie.actMovieList(e.target.value);
  };

  handleDayLayerToggle = (value) => {
    const { movie } = this.props;
    movie.actDayLayerToggle(value);
  };

  handleLayerClose = () => {
    const { movie } = this.props;
    movie.actDayLayerClose();
  };

  handleMovieSearch = (value) => {
    const { movie } = this.props;
    movie.actMovieSearch(value);
  };

  handleDayChange = (day) => {
    const { movie } = this.props;
    movie.actDayChange(day);
  };

  handleMovieInSearch = (e) => {
    e.preventDefault();
    const { movie } = this.props;
    movie.actMovieInSearch();
  };

  handleSelectChoice = (e) => {
    const { movie } = this.props;
    let value = e.target.value;
    movie.actSelectChoice(value);
  };
  handleInputChoice = (e) => {
    const { movie } = this.props;
    let value = e.target.value;
    movie.actInputChoice(value);
  };

  handleListMore = () => {
    const { movie } = this.props;
    movie.actListMore();
  };

  handleMovieInAnchor = (e) => {
    // const { movie } = this.props;
    // let targetName = e.currentTarget.textContent;
    // movie.actMovieInAnchor(targetName);
  };

  render() {
    const {
      delayPageMove,
      handleMovieList,
      handleDayLayerToggle,
      handleDayChange,
      handleMovieSearch,
      handleLayerClose,
      handleMovieInSearch,
      handleSelectChoice,
      handleInputChoice,
      handleListMore,
      handleMovieInAnchor,
    } = this;
    const { movie } = this.props;
    const { subLoading } = this.props.movie.root.common;

    if (!movie.dayWeekend) {
      dayWeekend = movie.movieDaily.dailyBoxOfficeList;
    } else {
      dayWeekend = movie.movieWeekly.weeklyBoxOfficeList;
    }
    if (movie.selectChoiceNext === 'movieInNm') {
      totCnt = movie.movieActNameSearch.totCnt;
    } else {
      totCnt = movie.movieInSearch.totCnt;
    }

    const moviePageList = dayWeekend.map((info, index) => {
      return (
        <MoviePageList
          key={index}
          rank={info.rank}
          rankInten={info.rankInten}
          rankOldAndNew={info.rankOldAndNew}
          movieCd={info.movieCd}
          movieNm={info.movieNm}
          openDt={info.openDt}
          salesAmt={info.salesAmt}
          salesInten={info.salesInten}
          salesChange={info.salesChange}
          salesAcc={info.salesAcc}
          audiCnt={info.audiCnt}
          audiInten={info.audiInten}
          audiChange={info.audiChange}
          audiAcc={info.audiAcc}
          scrnCnt={info.scrnCnt}
          showCnt={info.showCnt}
          photo={info.photo}
        />
      );
    });

    const movieSearchList = movie.movieInSearch.movieList.map((info, index) => {
      return (
        <MovieSearchPageList
          key={index}
          movieNm={info.movieNm}
          movieNmEn={info.movieNmEn}
          prdtYear={info.prdtYear}
          openDt={info.openDt}
          typeNm={info.typeNm}
          prdtStatNm={info.prdtStatNm}
          nationAlt={info.nationAlt}
          genreAlt={info.genreAlt}
          directors={info.directors}
          companys={info.companys.map((companyInfo) => companyInfo.companyNm)}
          onMovieInAnchor={handleMovieInAnchor}
        />
      );
    });

    const movieSearchActList = movie.movieActNameSearch.peopleList.map(
      (info, index) => {
        return (
          <MovieSearchActPageList
            key={index}
            peopleNm={info.peopleNm}
            peopleNmEn={info.peopleNmEn}
            repRoleNm={info.repRoleNm}
            filmoNames={info.filmoNames}
          />
        );
      }
    );

    return (
      <div className="MoviePage">
        {!movie.listChange ? (
          !movie.dayWeekend ? (
            <>
              <h2>{movie.movieDaily.boxofficeType}</h2>
              <p className="today">
                {!movie.movieDaily.showRange
                  ? undefined
                  : movie.movieDaily.showRange.substring(0, 8)}
              </p>
            </>
          ) : (
            <>
              <h2>{movie.movieWeekly.boxofficeType}</h2>
              <p className="today">{movie.movieWeekly.showRange}</p>
            </>
          )
        ) : (
          <>
            <h2>‘{movie.movieInSearch.inputChoiceClone}’ 검색</h2>
            <p className="today">검색결과 총 {totCnt}건</p>
          </>
        )}

        {movie.searchToggle && (
          <MovieSearch
            onMovieInSearch={handleMovieInSearch}
            onSelectChoice={handleSelectChoice}
            onInputChoice={handleInputChoice}
          />
        )}

        <div className="items">
          {!movie.listChange && (
            <MovieSelectItems
              onMovieList={handleMovieList}
              targetName={movie.targetName}
            />
          )}
          <MoviePageItems
            onDayLayerToggle={handleDayLayerToggle}
            dayTextChange={movie.dayTextChange}
            onMovieSearch={handleMovieSearch}
          />
        </div>

        <MovieDate
          onDayChange={handleDayChange}
          layer={movie.layer}
          onLayerClose={handleLayerClose}
        />

        {!movie.listChange ? (
          !dayWeekend.length ? (
            <ol className="list_mp">
              <li className="empth">
                <p>
                  <Icon icon={ic_error} />
                </p>
                <p>등록된 내용이 없습니다.</p>
                <p>
                  오늘 혹은 이번주는 집계가 되지 않습니다. 어제나 지난 주를
                  선택해주세요.
                </p>
              </li>
            </ol>
          ) : (
            <ol className="list_mp">{moviePageList}</ol>
          )
        ) : movie.selectChoiceNext === 'movieInNm' ? (
          !movie.movieActNameSearch.peopleList.length ? (
            <ol className="list_mp">
              <li className="empth">
                <p>
                  <Icon icon={ic_error} />
                </p>
                <p>검색 결과가 없습니다.</p>
              </li>
            </ol>
          ) : (
            <>
              <ol className="list_movie">{movieSearchActList}</ol>
              <div className="btn_more">
                <button type="button" onClick={handleListMore}>
                  더 보기
                </button>
              </div>
              {subLoading && (
                <div className="spinner_area">
                  <div className="spinner" />
                </div>
              )}
            </>
          )
        ) : !movie.movieInSearch.movieList.length ? (
          <ol className="list_mp">
            <li className="empth">
              <p>
                <Icon icon={ic_error} />
              </p>
              <p>검색 결과가 없습니다.</p>
            </li>
          </ol>
        ) : (
          <>
            <ol className="list_movie">{movieSearchList}</ol>
            <div className="btn_more">
              <button type="button" onClick={handleListMore}>
                더 보기
              </button>
            </div>
            {subLoading && (
              <div className="spinner_area">
                <div className="spinner" />
              </div>
            )}
          </>
        )}

        <div className="home_btn">
          <p>
            자료제공:{' '}
            <a
              href="http://www.kobis.or.kr/kobisopenapi/homepg/main/main.do"
              target="_blank"
              rel="noopener noreferrer"
            >
              영화진흥위원회
            </a>
          </p>
          <Link
            to={{
              pathname: '',
            }}
            onClick={(e) => delayPageMove('', e)}
          >
            메인
          </Link>
        </div>
      </div>
    );
  }
}

export default MoviePageDay;
