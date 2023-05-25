import React from 'react';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
// import { fetchProductListPage } from '../../asynActions/requests';

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <nav className={s.navigation}>
      <ul>
        <li>
          <NavLink to='/'>Main Page</NavLink>
        </li>
        <li>
          <NavLink
            to='/products'
            // onClick={() => dispatch(fetchProductListPage())}
          >
            All Products
          </NavLink>
        </li>
        <li>
          <NavLink to='/sales'>All Sales</NavLink>
        </li>
      </ul>
      <div className={s.navigation__icon__container}>
        <NavLink to='/cart'>
          <HiOutlineShoppingBag className={s.navigation__icon} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
