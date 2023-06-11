import React from 'react';
import s from './CartList.module.css';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import cart_empty from './media/empty_cart.png';

const CartList = () => {
  const cart = useSelector(store => store.cart);

  return (
    <div className={s.cart__list}>
      {cart.length > 0 ? (
        cart.map((elem, index) => <CartItem key={index} {...elem} />)
      ) : (
        <div className={s.empty__cart__wrapper}>
          <img
            className={s.empty__cart__img}
            src={cart_empty}
            alt='empty_cart'
          />
        </div>
      )}
    </div>
  );
};

export default CartList;
