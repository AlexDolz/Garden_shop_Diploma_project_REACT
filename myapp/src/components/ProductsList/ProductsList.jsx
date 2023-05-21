import React, { useEffect } from 'react';
import s from './ProductsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from '../../asynActions/requests';
import ProductItem from '../ProductItem/ProductItem';

const ProductsList = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(store => store.productsList);

  useEffect(() => {
    dispatch(fetchProductsList());
  }, []);

  const discountProducts = productsList
    .filter(product => product.discont_price)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className={s.products__list}>
      {discountProducts.map((elem, index) => (
        <ProductItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default ProductsList;
