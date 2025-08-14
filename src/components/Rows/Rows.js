import React, { useCallback, useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import RowLoading from '../Loading/RowLoading';
import Row from './Row';
import './Rows.css';

function Rows({ fetchUrl, show, toggle }) {
  const { data, loading, error } = useFetch(fetchUrl);
  const containerRef = useRef(null);

  const sideScroll = useCallback((direction) => {
    const scrollAmount = direction === 'left' ? -400 : 400;
    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  if (loading || error) return <LoadData />;

  function LoadData() {
    return (
      <div style={{ lineHeight: 3 }}>
        <RowLoading width={160} height={220} counts={8} />
        <RowLoading width={160} height={20} counts={8} />
      </div>
    );
  }

  return (
    <div
      className={`row__container scrollbar ${toggle ? 'grid' : 'flex'}`}
      ref={containerRef}>
      {data.results.length ? (
        data?.results?.map((movie) => (
          <Row key={movie.id} {...movie} show={show} />
        ))
      ) : (
        <LoadData />
      )}
      {data.results.length
        ? !toggle && (
            <>
              <div id="leftArrow" onClick={() => sideScroll('left')}>
                <FaAngleLeft size={25} />
              </div>
              <div id="rightArrow" onClick={() => sideScroll('right')}>
                <FaAngleRight size={25} />
              </div>
            </>
          )
        : null}
    </div>
  );
}

export default Rows;
