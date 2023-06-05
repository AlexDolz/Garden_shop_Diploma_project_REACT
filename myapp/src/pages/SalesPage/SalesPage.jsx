import React from 'react';
import s from './SalesPage.module.css';
import ProductList from '../../components/ProductList/ProductList';
import Filter from '../../components/Filter/Filter';

const SalesPage = () => {
  return (
    <div>
      <div className='container'>
        <h2 className={s.sales__page__title}>Products with sale</h2>
      </div>
      <div className='container'>
        <ProductList showAllSale showCheckbox={false} />
      </div>
    </div>
  );
};

export default SalesPage;
