import React from 'react';
import s from './CartList.module.css';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const CartList = () => {
  const cart = useSelector(store => store.cart);

  return (
    <div className={s.cart__list}>
      {cart.map((elem, index) => (
        <CartItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default CartList;
