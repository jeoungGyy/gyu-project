import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_search } from 'react-icons-kit/md';

const MovieSearch = ({ onMovieInSearch, onSelectChoice, onInputChoice }) => {
  return (
    <form className="search" onSubmit={onMovieInSearch}>
      <select onChange={onSelectChoice}>
        <option value="movieNm">영화명</option>
        <option value="directorNm">감독명</option>
        <option value="movieInNm">배우명</option>
      </select>
      <input type="text" onChange={onInputChoice} />
      <button className="btn">
        <Icon icon={ic_search} title="검색" />
      </button>
    </form>
  );
};

export default MovieSearch;
