import React from 'react';

const MovieSelectItems = ({ onMovieList, targetName }) => {
  return (
    <>
      <div className="left">
        <button
          type="button"
          value=""
          className={`${targetName}` === '' ? 'active' : undefined}
          onClick={onMovieList}
        >
          전체
        </button>
        <button
          type="button"
          value="K"
          className={`${targetName}` === 'K' ? 'active' : undefined}
          onClick={onMovieList}
        >
          한국 영화
        </button>
        <button
          type="button"
          value="F"
          className={`${targetName}` === 'F' ? 'active' : undefined}
          onClick={onMovieList}
        >
          외국 영화
        </button>
      </div>
    </>
  );
};

export default MovieSelectItems;
