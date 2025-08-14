import React, { useEffect, useRef, useState } from 'react';
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';
import placeholderImg from '../../assets/picture-grey.svg';
import BannerDetail from './BannerDetail';

const ImageSlider = ({ slides, timeStamp = 50000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleInterval = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    const intervalId = setInterval(handleInterval, timeStamp);
    return () => clearInterval(intervalId);
  }, [slides.length, timeStamp]);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  useEffect(() => {
    ref.current.scrollTo({
      left: currentIndex * 105,
      behavior: 'smooth',
    });
  }, [currentIndex]);

  const imageUrls = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${slides[currentIndex]?.backdrop_path}`;
  const [imgSrc, setImgSrc] = useState(placeholderImg || imageUrls);
  const customClass =
    placeholderImg && imgSrc === placeholderImg
      ? 'loadingImage'
      : 'loadedImage';

  useEffect(() => {
    // Update imgSrc when slides or currentIndex change
    setImgSrc(placeholderImg || imageUrls);
  }, [slides, currentIndex, imageUrls]);

  // Create a single Image object
  const imageObject = useRef(new Image());

  useEffect(() => {
    const { current: newImage } = imageObject;
    newImage.src = imageUrls;
    newImage.onload = () => {
      setImgSrc(imageUrls);
    };
    // Clean up
    return () => {
      newImage.onload = null;
    };
  }, [imageUrls]);

  return (
    <div
      className={`bg-image-poster ${customClass}`}
      style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className="bg-color-gradient">
        <div className="banner-width">
          {/* Banner Content */}
          <BannerDetail {...slides[currentIndex]} />
          {/* Slider Image */}
          <div className="slider-image">
            <div
              className="container-slide scrollbar"
              ref={ref}
              style={{ gap: 10 }}>
              {slides.length &&
                slides.map((item, index) => (
                  <div
                    className={`card ${currentIndex === index ? 'active' : ''}`}
                    key={item?.id}
                    onClick={() => setCurrentIndex(index)}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${item?.poster_path}`}
                      alt={item?.id}
                      width={100}
                    />
                  </div>
                ))}
            </div>
            <div
              id={!currentIndex ? 'displayNone' : ''}
              className="slider_leftArrow"
              onClick={goToPrevious}>
              <FaCircleArrowLeft />
            </div>
            <div className="slider_rightArrow" onClick={goToNext}>
              <FaCircleArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
