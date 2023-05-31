import React from 'react';
import s from './CategoryItem.module.css';
import { NavLink } from 'react-router-dom';
import { rootUrl } from '../..';

const CategoryItem = ({ image, title, id }) => {
  return (
    <div className={s.category__item}>
      <NavLink to={`/categories/${id}`}>
        <div className={s.category__img__wrapper}>
          <img
            className={s.category__img}
            src={`${rootUrl}${image}`}
            alt={title}
          />
        </div>
        <h3 className={s.category__title}>{title}</h3>
      </NavLink>
    </div>
  );
};

export default CategoryItem;
