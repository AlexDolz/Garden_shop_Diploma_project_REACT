import React, { useState } from 'react';
import s from './ProductItem.module.css';
import AddToCartButton from '../UI/AddToCartButton/AddToCartButton';

const ProductItem = ({ image, price, discont_price, title }) => {
  const backEndUrl = 'http://localhost:3333';
  const discountPercentage = Math.round(
    ((price - discont_price) / price) * 100
  );

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // const handleAddToCart = () => {

  // }

  return (
    <div
      className={s.product__item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={s.product__img}
        src={`${backEndUrl}${image}`}
        alt={title}
      />
      <div className={s.product__price}>
        <p className={s.product__current__price}>{price}$</p>
        {discont_price && (
          <p className={s.product__discount__price}>{discont_price}$</p>
        )}
        {discont_price && (
          <p className={s.product__discount__percentage}>
            -{discountPercentage}%
          </p>
        )}
      </div>
      <h3 className={s.product__title}>{title}</h3>
      {isHovered && (
        <div className={s.product__modal}>
          {/* addToCartButton onclick{handleAddToCart} to make! */}
          <AddToCartButton />
        </div>
      )}
    </div>
  );
};

export default ProductItem;
