import React from 'react';
import s from './Sale.module.css';
import ProductList from '../ProductList/ProductList';

const Sale = () => {
  return (
    <div className='container'>
      <h2 className={s.sale__title}>Sale</h2>
      <ProductList showRandomProducts showFilter={false} />
    </div>
  );
};

export default Sale;
