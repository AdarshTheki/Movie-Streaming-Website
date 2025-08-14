import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './style.scss';

const GoToButton = () => {
  const [visible, setVisible] = useState(false);

  const goToButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    const windowsScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowsScroll > 20) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className="goToButton">
      {visible && (
        <div className="goToButton__container">
          <FaArrowUp onClick={goToButton} />
        </div>
      )}
    </div>
  );
};

export default GoToButton;
