import React from 'react';
import s from './ProductsListPage.module.css';
import ProductsList from '../../components/ProductsList/ProductsList';

const ProductsListPage = () => {
  return (
    <div>
      <div className='container'>
        <h2 className={s.products__list__title}>All Products</h2>
      </div>
      <div className='container'>
        <ProductsList showAll />
      </div>
    </div>
  );
};

export default ProductsListPage;
