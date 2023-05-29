import React from 'react';
import s from './CategoryItemProductList.module.css';
import Filter from '../Filter/Filter';
import ProductItem from '../ProductItem/ProductItem';

const CategoryItemProductList = ({ categoryProducts }) => {
  // if (products.length === 0) {
  //   return <NotFoundPage/>
  // }

  return (
    <div>
      <Filter page='productListPage' />
      <div className={s.category__product__list}>
        {categoryProducts.map((elem, index) => (
          <ProductItem key={index} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItemProductList;
