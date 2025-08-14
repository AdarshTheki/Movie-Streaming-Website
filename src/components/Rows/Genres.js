import React from 'react';
import { useSelector } from 'react-redux';

const Genres = ({ genres = [] }) => {
  const { genreList } = useSelector((state) => state.fetchData);

  const genreName = genreList.find((item) => genres?.includes(item?.id));

  return <span className="genre">{genreName?.name || '# NA'}</span>;
};

export default Genres;
