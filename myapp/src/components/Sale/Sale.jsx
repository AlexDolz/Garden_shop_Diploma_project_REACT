import React from 'react';
import s from './Sale.module.css';
import ProductsList from '../ProductsList/ProductsList';

const Sale = () => {
  return (
    <div className='container'>
      <h2 className={s.sale__title} id='sale'>
        Sale
      </h2>
      <ProductsList />
    </div>
  );
};

export default Sale;
