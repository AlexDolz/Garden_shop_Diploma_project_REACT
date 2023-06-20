import React, { useEffect, useState } from 'react';
import s from './ScrollToTopButton.module.css';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight / 3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`${s['scroll__to__top__button']} ${
        isVisible ? s.visible : ''
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTopButton;
