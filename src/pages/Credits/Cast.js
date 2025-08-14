import React from 'react';
import { NavLink } from 'react-router-dom';

const Cast = ({
  credit_id,
  job,
  name,
  original_name,
  popularity,
  profile_path,
  id,
}) => {
  const profileImage = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w200/${profile_path})`,
  };
  return (
    <div className="profile-image" style={profileImage}>
      <NavLink
        to={`https://www.google.com/search?q=${original_name}`}
        className="cast-names _link"
        target="_blank">
        {name || 'NA'}
      </NavLink>
      <p className="cast-popularity">
        {popularity?.toFixed(1)}K{' '}
        <span style={{ color: 'yellow' }}>&#10028;</span>
      </p>
    </div>
  );
};

export default Cast;
