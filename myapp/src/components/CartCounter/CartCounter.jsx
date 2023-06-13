import React from 'react';
import s from './CartCounter.module.css';
import { useSelector } from 'react-redux';

const CartCounter = () => {
  const cart = useSelector(store => store.cart);
  const cartCounter = cart.reduce((accum, elem) => accum + elem.count, 0);
  return (
    <>
      {cartCounter === 0 ? (
        <></>
      ) : (
        <div className={s.cart__counter__wrapper}>
          <p className={s.cart__counter}>{cartCounter}</p>
        </div>
      )}
    </>
  );
};

export default CartCounter;
