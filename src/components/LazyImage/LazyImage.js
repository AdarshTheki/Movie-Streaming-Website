import React, { useEffect, useState } from 'react';
import placeholderImg from '../../assets/no-poster.png';

export default function LazyImage({ src, className }) {
  const [imgSrc, setImgSrc] = useState(placeholderImg || src);

  const customClass =
    placeholderImg && imgSrc === placeholderImg
      ? 'loadingImage'
      : 'loadedImage';

  useEffect(() => {
    const newImage = new Image();
    newImage.src = src;
    newImage.onload = () => {
      setImgSrc(src);
    };
    // Clean up
    return () => {
      newImage.onload = null;
    };
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt="moPoster"
      className={className + ' ' + customClass}
    />
  );
}

// class:
// .loadingImage {
//     filter: blur(10px);
// }
// .loadedImage {
//     filter: blur(0px);
//     transition: filter 0.5s linear;
// }
