import React from 'react';
import s from './ProductPrice.module.css';

const ProductPrice = ({ discont_price, price, page }) => {
  const discountPercentage = Math.round(
    ((price - discont_price) / price) * 100
  );

  return (
    <div
      className={`${s.product__price__wrapper} ${s[page]} ${
        discont_price ? '' : `${s.align__start} ${s[page]}`
      }`}
    >
      {discont_price ? (
        <>
          <p className={`${s.product__discount__price} ${s[page]}`}>
            {discont_price}
            <span className={s.product__discount__price_span}>$</span>
          </p>
          <p className={s.product__old__price}>{price}$</p>
          <p className={`${s.product__discount__percentage} ${s[page]}`}>
            -{discountPercentage}%
          </p>
        </>
      ) : (
        <p className={`${s.product__discount__price} ${s[page]}`}>
          {price}
          <span className={s.product__discount__price_span}>$</span>
        </p>
      )}
    </div>
  );
};

export default ProductPrice;
