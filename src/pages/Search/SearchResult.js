import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from '../../components/Rows/Row';
import instance from '../../config/instance';
import './SearchResult.scss';

const SearchResult = () => {
  const { query } = useParams();
  const [loading, setLoading] = useState(false);
  const [collection, setCollection] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [mediaType, setMediaType] = useState('movie');

  useEffect(() => {
    const initialDataFetch = async () => {
      setLoading(true);
      try {
        const res = await instance.get(
          `/search/multi?query=${query}&page=${page}`
        );
        setTotalPage(res?.data?.total_pages);
        setCollection((prev) => {
          if (page === 1) return res?.data?.results;
          return [...prev, ...res?.data?.results];
        });
      } catch (error) {
        console.error('Error Fetching Data: ', error.message);
      } finally {
        setLoading(false);
      }
    };
    initialDataFetch();
  }, [page, query]);

  const handleInfiniteScroll = useCallback(async () => {
    if (totalPage !== page) {
      const showLoadMore =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight;
      if (showLoadMore) {
        setPage((prev) => prev + 1);
      }
    }
  }, [page, totalPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => window.removeEventListener('scroll', handleInfiniteScroll);
  }, [handleInfiniteScroll]);

  const sortedCollection = [...collection]?.sort((a, b) => {
    if (sortBy === 'popularity') {
      return mediaType === 'tv'
        ? a.popularity - b.popularity
        : b.popularity - a.popularity;
    } else if (sortBy === 'vote_average') {
      return mediaType === 'tv'
        ? a.vote_average - b.vote_average
        : b.vote_average - a.vote_average;
    } else if (sortBy === 'release_date') {
      // Assuming release_date is in ISO format (e.g., 'yyyy-mm-dd')
      return mediaType === 'tv'
        ? new Date(a.release_date) - new Date(b.release_date)
        : new Date(b.release_date) - new Date(a.release_date);
    }
    return null;
  });

  return (
    <div className="searchResult">
      <div className="searchFilter">
        <label htmlFor="searchSort">
          Filters By:{' '}
          <select
            id="searchSort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="vote_average">vote average</option>
            <option value="release_date">release date</option>
          </select>
        </label>
        <button onClick={() => setMediaType('tv')}>Tv Show</button>
        <button onClick={() => setMediaType('movie')}>Movie</button>
        <p>
          You search result is "<span>{query}</span>"
        </p>
      </div>
      {sortedCollection.length === 0 ? (
        <h1 className="sorry">Sorry, Results not found!</h1>
      ) : (
        <div className="row__container grid">
          {sortedCollection?.map((item) => {
            return <Row key={item?.id} {...item} show="movie" />;
          })}
        </div>
      )}
      {!loading && <div className="spinner"></div>}
    </div>
  );
};

export default SearchResult;
