import React from 'react';
import s from './CategoriesListPage.module.css';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const CategoriesListPage = () => {
  return (
    <div>
      <div className='container'>
        <h2 className={s.categories__title}>Categories</h2>
      </div>
      <CategoriesList />
    </div>
  );
};

export default CategoriesListPage;
