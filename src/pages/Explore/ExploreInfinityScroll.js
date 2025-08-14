import React, { useCallback, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../config/instance';
import Row from '../../components/Rows/Row';
import InfinityScreen from './InfinityScreen';
import './ExploreScreen.scss';

export default function ExploreInfinityScroll() {
  const { mediaType } = useParams();
  const [data, setData] = useState([]);
  const controllerRef = useRef(null);

  const renderItem = useCallback(
    (item, key, ref) => (
      <div ref={ref} key={key}>
        <Row key={item.id} {...item} />
      </div>
    ),
    []
  );

  const getData = useCallback(async (type, category, page) => {
    try {
      if (controllerRef.current) controllerRef.current.abort();
      controllerRef.current = new AbortController();

      const response = await instance.get(
        `/${type}/${category}?language=en-US&page=${page}`,
        { signal: controllerRef.current.signal }
      );

      if (!response.data.results) {
        throw new Error('Network response was not ok');
      }

      setData((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching data:', error?.message);
    }
  }, []);

  return (
    <>
      <InfinityScreen
        type={mediaType === 'movie' ? 'movie' : 'tv'}
        renderListItem={renderItem}
        listData={data}
        getData={getData}
      />
    </>
  );
}
