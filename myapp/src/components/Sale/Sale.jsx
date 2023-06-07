import React, { useEffect } from 'react';
import s from './Sale.module.css';
import ProductList from '../ProductList/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductList } from '../../asynActions/requests';

const Sale = () => {
  const dispatch = useDispatch();
  const productList = useSelector(store => store.productList.productList);

  useEffect(() => {
    dispatch(fetchAllProductList('sale'));
  }, [dispatch]);

  const randomSalesProducts = productList
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <div className='container'>
      <h2 className={s.sale__title} id='sale'>
        Sale
      </h2>
      <ProductList products={randomSalesProducts} />
    </div>
  );
};

export default Sale;
