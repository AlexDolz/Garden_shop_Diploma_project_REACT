import React from 'react';
import s from './Header.module.css';
import header_logo from './media/header_logo.png';
import Button from '../UI/Button/Button';
// import Navigation from '../Navigation/Navigation';
import { NavLink, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import CartCounter from '../CartCounter/CartCounter';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const Header = () => {
  const location = useLocation();

  // const burgerMenuStyles = {
  //   bmMenuWrap: {
  //     width: '100%',
  //     background: '#edf7fa',
  //     height: '120px',
  //   },

  //   bmBurgerButton: {
  //     position: 'absolute',
  //     width: '38px',
  //     height: '22px',
  //     right: '18px',
  //     top: '20px',
  //   },
  //   bmBurgerBars: {
  //     background: '#21243D',
  //   },
  //   bmCrossButton: {
  //     height: '24px',
  //     width: '24px',
  //   },
  //   bmCross: {
  //     background: '#21243D',
  //     width: '3px',
  //     height: '24px',
  //   },
  //   bmMenu: {
  //     background: '#edf7fa',
  //     padding: '10px',
  //     fontSize: '22px',
  //   },
  //   // bmOverlay: {
  //   //   background: 'lightgray',
  //   //   opacity: 0.15,
  //   // },

  //   bmItemList: {
  //     color: '#b8b7ad',
  //     padding: '0.8em',
  //     display: 'grid',
  //     gridTemplateColumns: 'repeat(2,1fr)',
  //     textAlign: 'center',
  //     gap: '10px',
  //   },
  // };
  return (
    <header className={s.header__wrapper}>
      <div className={s.header__logo__btn__container}>
        <NavLink to={'/'}>
          <img className={s.header__logo} src={header_logo} alt='header_logo' />
        </NavLink>
        <NavLink to={'/categories'}>
          <Button text='Catalog' className='header__btn' />
        </NavLink>
      </div>
      {/* <Navigation /> */}
      <div className={s.desktop__menu}>
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
                className={
                  location.pathname === '/products' ? s.activeLink : ''
                }
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
      </div>
      <div className={s.burger__menu}>
        {/* <Menu right styles={burgerMenuStyles} noOverlay> */}
        <Menu>
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
                  className={
                    location.pathname === '/products' ? s.activeLink : ''
                  }
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
          </nav>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
