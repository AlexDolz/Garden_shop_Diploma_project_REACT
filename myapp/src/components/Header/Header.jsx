import React from 'react';
import s from './Header.module.css';
import header_logo from './media/header_logo.png';
import Button from '../UI/Button/Button';
// import Navigation from '../Navigation/Navigation';
import { NavLink, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import CartCounter from '../CartCounter/CartCounter';

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
                exact='true'
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
              <svg
                width='28'
                height='30'
                viewBox='0 0 28 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={s.navigation__cart__icon}
              >
                <path
                  d='M14.0001 0.599976C10.679 0.599976 8.0001 3.27888 8.0001 6.59998V7.79998H3.25635L3.2001 8.32498L0.800098 29.325L0.725098 30H27.2751L27.2001 29.325L24.8001 8.32498L24.7438 7.79998H20.0001V6.59998C20.0001 3.27888 17.3212 0.599976 14.0001 0.599976ZM14.0001 1.79998C16.679 1.79998 18.8001 3.92107 18.8001 6.59998V7.79998H9.2001V6.59998C9.2001 3.92107 11.3212 1.79998 14.0001 1.79998ZM4.34385 8.99998H8.0001V10.3687C7.6415 10.5773 7.4001 10.957 7.4001 11.4C7.4001 12.0633 7.93682 12.6 8.6001 12.6C9.26338 12.6 9.8001 12.0633 9.8001 11.4C9.8001 10.957 9.55869 10.5773 9.2001 10.3687V8.99998H18.8001V10.3687C18.4415 10.5773 18.2001 10.957 18.2001 11.4C18.2001 12.0633 18.7368 12.6 19.4001 12.6C20.0634 12.6 20.6001 12.0633 20.6001 11.4C20.6001 10.957 20.3587 10.5773 20.0001 10.3687V8.99998H23.6563L25.9251 28.8H2.0751L4.34385 8.99998Z'
                  fill='black'
                />
              </svg>

              <CartCounter />
            </NavLink>
          </div>
        </nav>
      </div>
      <div className={s.burger__menu}>
        {/* <Menu right styles={burgerMenuStyles} noOverlay> */}
        {/* <Menu> */}
        {/* <nav className={s.navigation}>
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
        </nav> */}
        {/* </Menu> */}
      </div>
    </header>
  );
};

export default Header;
