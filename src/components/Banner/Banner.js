import React from 'react';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import ImageSlider from './ImageSlider';
import './Banner.scss';

export default function Banner() {
  const { bannerList, loading, error } = useSelector(
    (state) => state.fetchData
  );

  if (loading) return <LoadingComponent />;

  if (error) return <ErrorComponent errorMessage={error} />;

  return <ImageSlider slides={bannerList} />;
}

function LoadingComponent() {
  const styles = {
    position: 'relative',
    minHeight: '400px',
    width: '80%',
    paddingTop: '4rem',
  };
  return (
    <div style={styles} className="max-width">
      <br />
      <Skeleton
        baseColor="#222"
        highlightColor="#333"
        width="100%"
        height={30}
      />
      <Skeleton
        baseColor="#222"
        highlightColor="#333"
        width="80%"
        height={20}
      />
      <Skeleton
        baseColor="#222"
        highlightColor="#333"
        width="90%"
        height={30}
      />
      <Skeleton
        baseColor="#222"
        highlightColor="#333"
        width="50%"
        height={10}
      />
      <br />
      <br />
      <Skeleton
        baseColor="#222"
        highlightColor="#333"
        width="100%"
        height={20}
      />
      <Skeleton
        baseColor="#222"
        highlightColor="#333"
        width="80%"
        height={10}
      />
      <Skeleton
        baseColor="#222"
        highlightColor="#333"
        width="60%"
        height={10}
      />
      <Skeleton
        baseColor="#222"
        highlightColor="#333"
        width="100%"
        height={20}
      />
      <br />
      <Skeleton
        baseColor="#222"
        highlightColor="#333"
        width="80%"
        height={30}
      />
      <Skeleton
        baseColor="#222"
        highlightColor="#333"
        width="50%"
        height={30}
      />
    </div>
  );
}

function ErrorComponent({ errorMessage }) {
  const styles = {
    width: '80%',
    margin: '10px auto',
    minHeight: '400px',
  };
  return <div className={styles}>{errorMessage}</div>;
}
