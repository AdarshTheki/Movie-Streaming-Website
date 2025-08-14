import React from 'react';
import { FaStar, FaPlay, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { formateDate } from '../utils';

const BannerDetail = ({
  title,
  name,
  original_name,
  release_date,
  vote_average,
  original_language,
  popularity,
  overview,
  id,
}) => {
  const navigate = useNavigate();

  // Date Manage
  const releaseDate = new Date(release_date);
  const today = new Date();
  const daysDifference = Math.ceil(
    (today - releaseDate) / (1000 * 60 * 60 * 24)
  );
  return (
    <div className="banner__contents">
      <p className="release">
        {formateDate(release_date)?.toLocaleLowerCase() || 'NA'}
      </p>
      <p className="banner__title">{title || name || original_name}</p>
      <div className="banner__detail">
        <p style={{ display: 'flex', placeItems: 'center', gap: 10 }}>
          <FaStar color="yellow" fontSize={20} />
          {vote_average?.toFixed(1) || 'NA'}
        </p>
        |
        <p>
          <span>{daysDifference || 'NA'}</span> days left
        </p>
        |
        <p>
          [<span>{original_language || 'NA'}</span>]
        </p>
        |<p>{popularity?.toFixed(1)}K</p>
      </div>
      <h2 className="banner__description">{overview}</h2>
      <div className="banner__buttons">
        <button
          className="btn red-btn"
          style={{ background: 'var(--red)' }}
          onClick={() => navigate(`/show/movie/${id}`)}>
          <FaPlay color="white" /> Play Now
        </button>
        <button
          className="btn black-btn"
          style={{ background: 'var(--black-800)' }}>
          <FaPlus color="white" /> Watch Lists
        </button>
      </div>
    </div>
  );
};

export default BannerDetail;
