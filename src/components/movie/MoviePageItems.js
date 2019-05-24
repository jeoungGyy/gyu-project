import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_today, ic_date_range, ic_movie } from 'react-icons-kit/md';

const MoviePageItems = ({ onDayLayerToggle, onMovieSearch, dayTextChange }) => {
  return (
    <div className="right">
      <button
        type="button"
        className={
          `${dayTextChange}` === 'day' || `${dayTextChange}` === undefined
            ? 'active'
            : undefined
        }
        onClick={() => onDayLayerToggle('day')}
      >
        <p className="icon">
          <Icon icon={ic_today} />
        </p>
        <p className="text">일별</p>
      </button>
      <button
        type="button"
        className={`${dayTextChange}` === 'week' ? 'active' : undefined}
        onClick={() => onDayLayerToggle('week')}
      >
        <p className="icon">
          <Icon icon={ic_date_range} />
        </p>
        <p className="text">주말</p>
      </button>
      <button
        type="button"
        className={`${dayTextChange}` === 'film' ? 'active' : undefined}
        onClick={() => onMovieSearch('film')}
      >
        <p className="icon">
          <Icon icon={ic_movie} />
        </p>
        <p className="text">검색</p>
      </button>
    </div>
  );
};

export default MoviePageItems;
