import React from 'react';
import Img from '../LazyImage/Img';

const NoPoster = () => {
  return (
    <div className="rowPoster" style={{ alignItems: 'flex-start' }}>
      <Img src={null} alt="no poster" className={'rowImg'} />
      <h3>Results not founds !</h3>
    </div>
  );
};

export default NoPoster;
