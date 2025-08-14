import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';

export default function InfinityScrolling({
  renderListItem,
  getData,
  listData = [],
  type,
}) {
  const [sort, setSort] = useState('popularity-az');
  const [category, setCategory] = useState('popular');
  const pageNumber = useRef(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      await getData(type, category, pageNumber.current);
    } catch (error) {
      console.log(error?.message);
    } finally {
      setLoading(false);
    }
  }, [category, getData, type]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lastElementObserver = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          pageNumber.current += 1;
          fetchData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchData, loading]
  );

  const sortOptions = useMemo(() => {
    return {
      'popularity-az': (a, b) => a.popularity - b.popularity,
      'popularity-za': (a, b) => b.popularity - a.popularity,
      'vote_average-az': (a, b) => a.vote_average - b.vote_average,
      'vote_average-za': (a, b) => b.vote_average - a.vote_average,
    };
  }, []);

  const sorted = useMemo(() => {
    return [...listData]?.sort(sortOptions[sort]);
  }, [listData, sort, sortOptions]);

  const renderList = useCallback(() => {
    if (sorted.length === 0) {
      return <h2>Data Not Found !.</h2>;
    }
    return sorted.map((item, index) => (
      <React.Fragment key={index}>
        {renderListItem(
          { ...item, show: 'movie' },
          index,
          index === sorted.length - 1 ? lastElementObserver : null
        )}
      </React.Fragment>
    ));
  }, [sorted, renderListItem, lastElementObserver]);

  return (
    <Wrapper>
      <div className="filterContainer">
        <div className="filterOption">
          <label htmlFor="sort">Filters By</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}>
            <option value="popularity-az">Popularity ascending</option>
            <option value="popularity-za">Popularity descending</option>
            <option value="vote_average-az">Rating ascending</option>
            <option value="vote_average-za">Rating descending</option>
          </select>
        </div>

        <div className="filterOption">
          <label htmlFor="menuType">Menu Type:</label>
          {type === 'movie' ? (
            <select
              id="menuType"
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value="popular">popular</option>
              <option value="now_playing">now playing</option>
              <option value="upcoming">upcoming</option>
              <option value="top_rated">top rated</option>
            </select>
          ) : (
            <select
              id="menuType"
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value="popular">popular</option>
              <option value="airing_today">airing today</option>
              <option value="on_the_air">On error TV</option>
              <option value="top_rated">top rated</option>
            </select>
          )}
        </div>
      </div>
      <div className="infinityScreen">{renderList()}</div>
      <div className="spinner"></div>
    </Wrapper>
  );
}
