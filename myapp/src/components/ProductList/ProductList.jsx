import React, { useEffect } from 'react';
import s from './ProductList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../asynActions/requests';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ categoryProducts, showAll, showAllSale }) => {
  const dispatch = useDispatch();
  const productList = useSelector(store =>
    store.productList?.filter(elem => elem.showBySale && elem.rangeActive)
  );

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  let filteredProducts = categoryProducts || productList;

  if (!showAll) {
    filteredProducts = productList
      .filter(elem => elem.discont_price)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }
  if (showAllSale) {
    filteredProducts = productList.filter(elem => elem.discont_price);
  }

  // if (products.length === 0) {
  //   return <NotFoundPage/>
  // }
  return (
    <div className={s.products__list}>
      {filteredProducts.map((elem, index) => (
        <ProductItem key={index} {...elem} />
      ))}
    </div>
  );
};

export default ProductList;
