import React from 'react';

const Crew = ({ credit_id, job, name, popularity, profile_path, id }) => {
  return (
    <div style={{ marginBottom: 5, minWidth: 250 }}>
      <h3>
        {name}{' '}
        <span style={{ color: 'red', fontSize: 12 }}>
          {popularity?.toFixed(1)}K ❤
        </span>
      </h3>
      <p>{job}</p>
    </div>
  );
};

export default Crew;
