import React from 'react';
import s from './CategoryItem.module.css';

const CategoryItem = ({ image, title }) => {
  const backEndUrl = 'http://localhost:3333';
  return (
    <div className={s.category__item}>
      <div className={s.category__img__wrapper}>
        <img
          className={s.category__img}
          src={`${backEndUrl}${image}`}
          alt={title}
        />
      </div>
      <h3 className={s.category__title}>{title}</h3>
    </div>
  );
};

export default CategoryItem;
