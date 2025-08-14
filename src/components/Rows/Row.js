import React from 'react';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import CircularBar from '../Progressbar/CircularProgressBar';
import Genres from './Genres';
import LazyImage from '../LazyImage/LazyImage';

const Row = ({
  show,
  release_date,
  first_air_date,
  name,
  title,
  id,
  poster_path,
  vote_average,
  genre_ids,
}) => {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w185/${poster_path}`
    : null;
  const names = (name || title)?.substring(0, 23);
  const date = dayjs(release_date || first_air_date).format('DD MMM, YYYY');

  return (
    <div className="rowPostContainer">
      <NavLink to={`/show/${show}/${id}`} className="rowPoster">
        <LazyImage src={posterUrl} className={'rowImg'} />
        <CircularBar percentage={(vote_average * 10)?.toFixed(0)} />
        <Genres genres={genre_ids} />
      </NavLink>
      <div className="rowDetails">
        <NavLink to={`/show/${show}/${id}`} className="rowTitle">
          {names}
        </NavLink>
        <p className="rowReleaseDate">{date}</p>
      </div>
    </div>
  );
};
export default Row;
