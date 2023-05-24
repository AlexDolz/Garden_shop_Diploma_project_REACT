import React from 'react';
import s from './ProductListPage.module.css';
import ProductList from '../../components/ProductList/ProductList';

const ProductListPage = () => {
  return (
    <div>
      <div className='container'>
        <h2 className={s.products__list__title}>All Products</h2>
      </div>
      <div className='container'>
        <ProductList showAll />
      </div>
    </div>
  );
};

export default ProductListPage;
