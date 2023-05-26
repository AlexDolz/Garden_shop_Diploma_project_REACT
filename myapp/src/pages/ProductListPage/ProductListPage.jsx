// import React, { useEffect } from 'react';
import s from './ProductListPage.module.css';
import ProductList from '../../components/ProductList/ProductList';
import Filter from '../../components/Filter/Filter';
// import { fetchProductListPage } from '../../asynActions/requests';
// import { useDispatch } from 'react-redux';

const ProductListPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProductListPage());
  // }, []);
  return (
    <div>
      <div className='container'>
        <h2 className={s.products__list__title}>All Products</h2>
        <Filter />
      </div>
      <div className='container'>
        <ProductList showAll />
      </div>
    </div>
  );
};

export default ProductListPage;
