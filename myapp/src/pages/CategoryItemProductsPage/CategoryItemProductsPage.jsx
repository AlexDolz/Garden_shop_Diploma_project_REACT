import React, { useEffect } from 'react';
import s from './CategoryItemProductsPage.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryItemProducts } from '../../asynActions/requests';
import ProductList from '../../components/ProductList/ProductList';

const CategoryItemProductsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const categoryItemProducts = useSelector(store => store.categoryItemProducts);

  useEffect(() => {
    dispatch(fetchCategoryItemProducts(id));
  }, []);

  const categoryProducts = categoryItemProducts.data
    ? categoryItemProducts.data
    : [];
  const title = categoryItemProducts.category
    ? categoryItemProducts.category.title
    : '';

  return (
    <div>
      <div className='container'>
        <h2 className={s.category__products__section__title}>{title}</h2>
        <ProductList
          categoryProducts={categoryProducts}
          showCheckbox
          location='categoryProducts'
        />
      </div>
    </div>
  );
};

export default CategoryItemProductsPage;
