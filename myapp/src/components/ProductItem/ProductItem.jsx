import React, { useState } from 'react';
import s from './ProductItem.module.css';
import Button from '../UI/Button/Button';

const ProductItem = ({ image, price, discont_price, title }) => {
  const backEndUrl = 'http://localhost:3333';
  const discountPercentage = Math.round(
    ((price - discont_price) / price) * 100
  );

  return (
    <div className={s.product__item}>
      <div className={s.product__img__wrapper}>
        <img
          className={s.product__img}
          src={`${backEndUrl}${image}`}
          alt={title}
        />
        {/* addToCartButton onclick{handleAddToCart} to make! */}
        <div className={s.product__modal}>
          <Button text='Add to cart' style='add__to__cart__btn' />
        </div>
      </div>
      <div className={s.product__price__wrapper}>
        {discont_price ? (
          <>
            <p className={s.product__current__price}>{discont_price}$</p>
            <p className={s.product__discount__price}>{price}$</p>
            <p className={s.product__discount__percentage}>
              -{discountPercentage}%
            </p>
          </>
        ) : (
          <p className={s.product__current__price}>{price}$</p>
        )}
      </div>
      <h3 className={s.product__title}>{title}</h3>
    </div>
  );
};

export default ProductItem;
