import React from 'react';
import s from './DiscountContainer.module.css';
import discount_img from './media/discount_img.png';
import DiscountForm from '../DiscountForm/DiscountForm';

const DiscountContainer = () => {
  return (
    <div className={s.discount__container}>
      <div className={s.discount__content}>
        <img
          className={s.discount__img}
          src={discount_img}
          alt='discount_img'
        />
        <div className={s.discount__info}>
          <h2 className={s.discount__title}>5% off</h2>
          <h4 className={s.discount__subtitle}>on the first order</h4>
          <DiscountForm />
        </div>
      </div>
    </div>
  );
};

export default DiscountContainer;
