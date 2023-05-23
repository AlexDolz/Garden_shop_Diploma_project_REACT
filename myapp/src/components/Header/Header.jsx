import React from 'react';
import s from './Header.module.css';
import header_logo from './media/header_logo.png';
import Button from '../UI/Button/Button';
import Navigation from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header__wrapper}>
      <div className={s.header__logo__btn__container}>
        <NavLink to={'/'}>
          <img className={s.header__logo} src={header_logo} alt='header_logo' />
        </NavLink>
        <NavLink to={'/categoriesList'}>
          <Button text='Catalog' style='header__btn' />
        </NavLink>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
