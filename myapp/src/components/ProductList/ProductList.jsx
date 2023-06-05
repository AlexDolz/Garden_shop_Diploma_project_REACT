import React, { useEffect } from 'react';
import s from './ProductList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../asynActions/requests';
import ProductItem from '../ProductItem/ProductItem';
import Filter from '../Filter/Filter';

const ProductList = ({
  categoryProducts,
  showAllSale,
  showRandomProducts,
  showCheckbox,
  onChange,
  location,
  showFilter = true,
}) => {
  const dispatch = useDispatch();
  const productList = useSelector(store =>
    store.productList?.filter(elem => elem.showBySale && elem.rangeActive)
  );

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  let filteredProducts = categoryProducts || productList;

  if (showRandomProducts) {
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
    <div>
      {showFilter && (
        <Filter
          onChange={onChange}
          location={location}
          showCheckbox={showCheckbox}
        />
      )}
      <div className={s.products__list}>
        {filteredProducts.map((elem, index) => (
          <ProductItem key={index} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
