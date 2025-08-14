import React from 'react';
import { useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import './ToolTip.css';

export default function ToolTip({ children, data, handleClick }) {
  const [showTooltips, setShowTooltips] = useState(false);

  const {
    title,
    name,
    original_name,
    release_date,
    vote_average,
    vote_count,
    backdrop_path,
    original_language,
    popularity,
    overview,
    id,
  } = data;

  function handleMouseEnter() {
    setShowTooltips(true);
  }
  function handleMouseLeave() {
    setShowTooltips(false);
  }

  return children ? (
    <div
      onClick={handleClick}
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltips && (
        <div className="tooltip">
          <img
            // src={`https://image.tmdb.org/t/p/original/${slides[currentIndex]?.backdrop_path}`}
            src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
            width={280}
            alt="img"
          />
          <ul className="tooltip-detail">
            <li style={{ color: 'var(--red)' }}>
              <span>Title</span>
              <span>:</span>
              <span style={{ fontWeight: 700 }}>
                {title || original_name || name} [{original_language}]
              </span>
            </li>
            <li>
              <span>release date</span>
              <span>:</span>
              {release_date}
            </li>
            <li style={{ color: 'var(--yellow)' }}>
              <span>Rating</span>
              <span>:</span>
              <RatingSystem starts={vote_average} />
            </li>
            <li style={{ color: 'var(--green)' }}>
              <span>vote count</span>
              <span>:</span>
              {vote_count}
            </li>
            <li>
              <span>popularity</span>
              <span>:</span>
              {Math.round(popularity)}
            </li>
          </ul>
        </div>
      )}
    </div>
  ) : null;
}

function RatingSystem({ starts }) {
  const tempStar = Array.from({ length: 10 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} style={{ color: 'var(--yellow)' }}>
        {starts > number ? (
          <BsStarFill />
        ) : starts > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div style={{ display: 'flex' }}>
      <span>{tempStar}</span>
    </div>
  );
}
