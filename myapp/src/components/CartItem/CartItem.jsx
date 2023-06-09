import React from 'react';
import s from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import ProductPrice from '../ProductPrice/ProductPrice';
import { IoCloseOutline } from 'react-icons/io5';

const CartItem = ({ id, title, image, discont_price, price, count, page }) => {
  const rootUrl = 'http://localhost:3333';
  const dispatch = useDispatch();

  return (
    <div className={s.cart__item}>
      <img className={s.item__img} src={`${rootUrl}${image}`} alt={title} />
      <div className={s.title__counter__wrapper}>
        <h5 className={s.item__title}>{title}</h5>
        <div className={s.counter__wrapper}>
          <HiOutlineMinus className={s.counter__decr} />
          <p className={s.counter__count}>{count}</p>
          <HiOutlinePlus className={s.counter__incr} />
        </div>
      </div>
      <ProductPrice
        price={price}
        discont_price={discont_price}
        showPercentage={false}
        page='cart'
      />
      <IoCloseOutline className={s.close__mark} />
    </div>
  );
};

export default CartItem;
