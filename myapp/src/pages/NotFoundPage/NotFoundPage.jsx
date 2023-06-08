import React, { useEffect } from 'react';
import s from './NotFoundPage.module.css';
import not_found_page from './media/not_found_page.jpg';

const NotFoundPage = ({ type }) => {
  useEffect(() => {
    const defaultTitle = document.title;
    if (type === 'not_found') {
      document.title = 'Error - Not_found_page';
    }

    return () => {
      document.title = defaultTitle;
    };
  }, []);
  return (
    <div className={s.not__found__wrapper}>
      <img
        className={s.not__found__img}
        src={not_found_page}
        alt='not_found_page'
      />
    </div>
  );
};

export default NotFoundPage;
