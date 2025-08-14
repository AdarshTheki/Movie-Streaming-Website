import React, { useState } from 'react';
import Rows from '../../components/Rows/Rows';
import { IoGrid, IoList } from 'react-icons/io5';

const TrendingSection = ({ title, items, defaultItem, fetchUrl, show }) => {
  const [toggle, setToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem);

  return (
    <div className="trending">
      <div className="trending__setting">
        <h1 className="trending__title">{title}</h1>
        <button onClick={() => setToggle(!toggle)} className={`toggle__btn`}>
          {toggle ? <IoGrid fontSize={20} /> : <IoList fontSize={20} />}
        </button>
        <div className="trending__buttons">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedItem(item)}
              className={`trending__btn ${selectedItem === item && 'isActive'}`}>
              {item.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>
      <div className="trending__row">
        <Rows
          fetchUrl={`/${fetchUrl}/${selectedItem}`}
          show={show}
          toggle={toggle}
        />
        <div className="box-shadow"></div>
      </div>
    </div>
  );
};

export default TrendingSection;
