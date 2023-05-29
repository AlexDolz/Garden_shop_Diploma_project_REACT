import React from 'react';
import s from './CategoryItem.module.css';
import { NavLink } from 'react-router-dom';

const CategoryItem = ({ image, title, id }) => {
  const backEndUrl = 'http://localhost:3333';
  return (
    <div className={s.category__item}>
      <NavLink to={`/categories/${id}`}>
        <div className={s.category__img__wrapper}>
          <img
            className={s.category__img}
            src={`${backEndUrl}${image}`}
            alt={title}
          />
        </div>
        <h3 className={s.category__title}>{title}</h3>
      </NavLink>
    </div>
  );
};

export default CategoryItem;
