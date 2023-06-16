import React from 'react';
import s from './Navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import CartCounter from '../CartCounter/CartCounter';

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className={s.navigation}>
      <ul>
        <li>
          <NavLink
            exact
            to='/'
            className={location.pathname === '/' ? s.activeLink : ''}
          >
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/products'
            className={location.pathname === '/products' ? s.activeLink : ''}
          >
            All Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sales'
            className={location.pathname === '/sales' ? s.activeLink : ''}
          >
            All Sales
          </NavLink>
        </li>
      </ul>
      <div className={s.navigation__icon__container}>
        <NavLink to='/cart'>
          <HiOutlineShoppingBag className={s.navigation__cart__icon} />
          <CartCounter />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
