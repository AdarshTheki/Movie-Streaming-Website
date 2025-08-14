import React from 'react';
import './Wrapper.scss';

const Wrapper = ({ children }) => {
  return <div className="contentWrapper">{children}</div>;
};

export default Wrapper;
