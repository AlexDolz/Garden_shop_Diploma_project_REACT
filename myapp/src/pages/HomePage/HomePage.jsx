import React from 'react';
import s from './HomePage.module.css';
import Head from '../../components/Head/Head';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import DiscountContainer from '../../components/DiscountContainer/DiscountContainer';
import Sale from '../../components/Sale/Sale';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Head />
      <div className='container'>
        <div className={s.categories__texts__btn}>
          <h2 className={s.categories__title}>Catalog</h2>
          <NavLink to={'/categoriesList'}>
            <button className={s.categories__btn}>All categories</button>
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
