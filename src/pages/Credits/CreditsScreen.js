import React from 'react';
import { useLocation } from 'react-router-dom';
import './CreditsScreen.scss';
import Crew from './Crew';
import Cast from './Cast';
import useFetch from '../../hooks/useFetch';

const CreditsScreen = () => {
  const location = useLocation();
  const path = location.pathname.replace('/credits', '');
  const { data, loading } = useFetch(`${path}/credits`);

  if (loading || data?.message) {
    return (
      <div className="loading" style={{ minHeight: '80vh', fontSize: '2rem' }}>
        <h1 data-text="Loading...">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="credits__screen max-width">
      <div>
        <h1>Casts</h1>
        <div className="credits__cast">
          {data?.cast.map((cast) => (
            <Cast key={cast?.credit_id} {...cast} />
          ))}
        </div>
      </div>
      <div>
        <h1>Crew</h1>
        <div className="credits__crew">
          {data?.crew.map((crew) => (
            <Crew key={crew?.credit_id} {...crew} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreditsScreen;
