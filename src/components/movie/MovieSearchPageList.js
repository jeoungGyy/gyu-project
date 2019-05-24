import React from 'react';
import { Link } from 'react-router-dom';

const MovieSearchPageList = ({
  movieNm,
  movieNmEn,
  prdtYear,
  openDt,
  typeNm,
  prdtStatNm,
  nationAlt,
  genreAlt,
  directors,
  companys,
  onMovieInAnchor
}) => {
  const directorsPeopleNm = directors.map((info, index) => {
    return (
      <Link
        to={{
          pathname: ''
        }}
        key={index}
        onClick={onMovieInAnchor}
      >
        {info.peopleNm}
      </Link>
    );
  });
  return (
    <li>
      <ul>
        <li>
          <span>영화명(국문):</span> {movieNm}
        </li>
        <li>
          <span>영화명(영문):</span> {movieNmEn}
        </li>
        <li>
          <span>제작연도:</span> {prdtYear}년
        </li>
        <li>
          <span>개봉연도:</span>{' '}
          {!openDt
            ? ''
            : openDt.substring(0, 4) +
              '년 ' +
              openDt.substring(4, 6) +
              '월 ' +
              openDt.substring(6, 8) +
              '일'}
        </li>
        <li>
          <span>영화유형:</span> {typeNm}
        </li>
        <li>
          <span>제작상태:</span> {prdtStatNm}
        </li>
        <li>
          <span>제작국가:</span> {nationAlt}
        </li>
        <li>
          <span>영화장르:</span> {genreAlt}
        </li>
        <li>
          <span>영화감독명:</span> {directorsPeopleNm}
        </li>
        <li>
          <span>제작사명:</span> {companys.join(', ')}
        </li>
      </ul>
    </li>
  );
};

export default MovieSearchPageList;
