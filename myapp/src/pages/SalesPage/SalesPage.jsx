import React from 'react';
import s from './SalesPage.module.css';
import ProductList from '../../components/ProductList/ProductList';
import Filter from '../../components/Filter/Filter';

const SalesPage = () => {
  return (
    <div>
      <div className='container'>
        <h2 className={s.sales__page__title}>Products with sale</h2>
        <Filter filter='notAllFilters' />
      </div>
      <div className='container'>
        <ProductList showAllSale />
      </div>
    </div>
  );
};

export default SalesPage;
