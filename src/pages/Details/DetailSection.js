import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { PlayIcon } from '../../components/VideoPopup/PlayIcon';
import VideoPopup from '../../components/VideoPopup/VideoPopup';
// import CircularProgressBar from '../../Components/Progressbar/CircularProgressBar';
import lazy from '../../assets/picture-grey.svg';
import useFetch from '../../hooks/useFetch';
import PosterLoading from '../../components/Loading/PosterLoading';
import { formatCurrency } from '../../components/utils';

export default function DetailSection() {
  const { mediaType, id } = useParams();
  const { data: detail, loading } = useFetch(`/${mediaType}/${id}`);
  const { data: videos } = useFetch(`/${mediaType}/${id}/videos`);

  // VideoPopup show details in this
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const {
    original_language,
    name,
    title,
    genres,
    release_date,
    first_air_date,
    overview,
    vote_average,
    vote_count,
    runtime,
    poster_path,
    origin_country,
    homepage,
    status,
    budget,
    revenue,
    backdrop_path,
  } = detail;

  const ImageURL = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : lazy;
  const bgImageURL = backdrop_path
    ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`
    : '';

  if (loading) return <PosterLoading />;

  return (
    <div
      className="bg-image-poster"
      style={{ background: `url(${bgImageURL})` }}>
      <div className="bg-color-gradient">
        <div className="details__container">
          <NavLink to={homepage} target="__blank">
            <img src={ImageURL} alt="pic.org" title="Official Website" />
          </NavLink>
          <div className="details__detail">
            <h1 className="details__name">{name || title || 'NA'}</h1>
            <div className="detail-column">
              <div>
                <span>status</span>
                <span>:</span>
                <span>{status}</span>
              </div>
              <div>
                <span>Days</span>
                <span>:</span>
                <span>
                  {dayjs(release_date || first_air_date).format('DD MMM YYYY')}
                </span>
              </div>
              <div>
                <span>language</span>
                <span>:</span>
                <span>{origin_country || original_language || 'NA'}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>:</span>
                <span>
                  {genres?.map((e) => {
                    return <span key={e?.id}>{e?.name || 'NA'}, </span>;
                  })}
                </span>
              </div>
              <div>
                <span>time</span>
                <span>:</span>
                <span>{runtime || 'NA'} minutes</span>
              </div>
              <div>
                <span>rating</span>
                <span>:</span>
                <span>{vote_average || 'NA'}</span>
              </div>
              <div>
                <span>vote count</span>
                <span>:</span>
                <span>{vote_count || 'NA'}</span>
              </div>
              <div>
                <span>Budget</span>
                <span>:</span>
                <span>{formatCurrency(budget) || 'NA'}</span>
              </div>
              <div>
                <span>Revenue</span>
                <span>:</span>
                <span>{formatCurrency(revenue) || 'NA'}</span>
              </div>
            </div>
            <div
              className="playbtn"
              onClick={() => {
                setShow(true);
                setVideoId(videos?.results[0]?.key);
              }}>
              <PlayIcon />
              Play Trailer
            </div>
            <div className="disc">
              <h3>Description:</h3>
              <p>{overview || 'NA'}</p>
            </div>
          </div>
        </div>
        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </div>
    </div>
  );
}
