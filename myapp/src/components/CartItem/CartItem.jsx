import React from 'react';
import s from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import ProductPrice from '../ProductPrice/ProductPrice';
import { IoCloseOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import {
  decrCountAction,
  incrCountAction,
  removeCartProductAction,
} from '../../store/Reducers/cartReducer';

const CartItem = ({ id, title, image, discont_price, price, count }) => {
  const rootUrl = 'http://localhost:3333';
  const dispatch = useDispatch();

  return (
    <div className={s.cart__item}>
      <NavLink to={`/products/${id}`}>
        <div className={s.img__wrapper}>
          <img className={s.item__img} src={`${rootUrl}${image}`} alt={title} />
        </div>
      </NavLink>
      <div className={s.title__counter__wrapper}>
        <NavLink to={`/products/${id}`}>
          <h5 className={s.item__title}>{title}</h5>{' '}
        </NavLink>
        <div className={s.counter__wrapper}>
          <HiOutlineMinus
            className={s.counter__decr}
            onClick={() => dispatch(decrCountAction(id))}
          />
          <p className={s.counter__count}>{count}</p>
          <HiOutlinePlus
            className={s.counter__incr}
            onClick={() => dispatch(incrCountAction(id))}
          />
        </div>
      </div>
      <ProductPrice
        price={price}
        discont_price={discont_price}
        showPercentage={false}
        page='cart'
      />
      <IoCloseOutline
        className={s.close__mark}
        onClick={() => dispatch(removeCartProductAction(id))}
      />
    </div>
  );
};

export default CartItem;
