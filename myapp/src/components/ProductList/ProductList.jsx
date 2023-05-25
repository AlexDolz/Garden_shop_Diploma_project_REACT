import React, { useEffect } from 'react';
import s from './ProductList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../asynActions/requests';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ showAll }) => {
  const dispatch = useDispatch();
  const productList = useSelector(store => store.productList).filter(
    elem => elem.showBySale
  );

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  let filteredProducts = productList;

  if (!showAll) {
    filteredProducts = productList
      .filter(product => product.discont_price)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }

  return (
    <div className={s.products__list}>
      {filteredProducts.map((elem, index) => (
        <ProductItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default ProductList;
