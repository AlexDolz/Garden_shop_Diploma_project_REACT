import React from 'react';
import s from './Sale.module.css';
import ProductList from '../ProductList/ProductList';

const Sale = () => {
  return (
    <div className='container'>
      <h2 className={s.sale__title} id='sale'>
        Sale
      </h2>
      <ProductList />
    </div>
  );
};

export default Sale;
