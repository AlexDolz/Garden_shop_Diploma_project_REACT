import React from 'react';
import s from './HomePage.module.css';
import Head from '../../components/Head/Head';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import DiscountContainer from '../../components/DiscountContainer/DiscountContainer';
import Sale from '../../components/Sale/Sale';
import { NavLink } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';

const HomePage = () => {
  return (
    <div>
      <Head />
      <div className='container'>
        <div className={s.categories__texts__btn}>
          <h2 className={s.categories__section__title}>Catalog</h2>
          <NavLink to={'/categories'}>
            <Button text='All categories' className='categories__btn' />
          </NavLink>
        </div>
      </div>

      <CategoriesList numCategories={4} />
      <DiscountContainer />
      <Sale />
    </div>
  );
};

export default HomePage;
