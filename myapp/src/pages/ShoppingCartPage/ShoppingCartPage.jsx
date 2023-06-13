import React, { useEffect, useRef } from 'react';
import s from './ShoppingCartPage.module.css';
import { NavLink } from 'react-router-dom';
import { SlArrowRight } from 'react-icons/sl';
import CartList from '../../components/CartList/CartList';
import Order from '../../components/Order/Order';

const ShoppingCartPage = ({ type }) => {
  const orderCompleteRef = useRef(null);
  useEffect(() => {
    const defaultTitle = document.title;
    if (type === 'cart') {
      document.title = 'Garden - Your cart';
    }

    return () => {
      document.title = defaultTitle;
    };
  }, [type]);

  const handleOrderComplete = () => {
    if (orderCompleteRef.current) {
      orderCompleteRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='container'>
      <div ref={orderCompleteRef}></div>
      <div className={s.shopping__cart__info__wrapper}>
        <h2 className={s.shopping__cart__title}>Shopping cart</h2>
        <NavLink to={'/products'}>
          <div className={s.link__wrapper}>
            <p className={s.back__to__store__link}>Back to the store</p>
            <SlArrowRight className={s.back__to__store__arrow} />
          </div>
        </NavLink>
      </div>
      <div className={s.cart__order__wrapper}>
        <CartList />
        <Order onOrderComplete={handleOrderComplete} />
      </div>
    </div>
  );
};

export default ShoppingCartPage;
