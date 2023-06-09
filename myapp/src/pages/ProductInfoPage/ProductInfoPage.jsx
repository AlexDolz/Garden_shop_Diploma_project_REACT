import React, { useEffect } from 'react';
import s from './ProductInfoPage.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import ProductPrice from '../../components/ProductPrice/ProductPrice';
import product_not_found from './media/product_not_found.png';
import { addProductToCartAction } from '../../store/Reducers/cartReducer';

const ProductInfoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productList = useSelector(store => store.productList.productList);
  const productItem = productList.find(elem => elem.id === +id);

  const rootUrl = 'http://localhost:3333';

  useEffect(() => {
    const defaultTitle = document.title;
    if (!productItem) {
      document.title = 'Product not found';
    } else {
      document.title = `Garden - ${productItem.title}`;
    }

    return () => {
      document.title = defaultTitle;
    };
  }, [productItem]);

  if (!productItem) {
    return (
      <div className={s.product__not__found__wrapper}>
        <img src={product_not_found} alt='product_not_found' />
      </div>
    );
  } else {
    return (
      <div className='container'>
        <div className={s.product__info__wrapper}>
          <div className={s.title__img__wrapper}>
            <h2 className={s.product__title}>{productItem.title}</h2>
            <img
              className={s.product__img}
              src={`${rootUrl}${productItem.image}`}
              alt='product_img'
            />
          </div>
          <div className={s.price__btn__descr__wrapper}>
            <div className={s.price__btn__wrapper}>
              <ProductPrice
                price={productItem.price}
                discont_price={productItem.discont_price}
                page='info'
              />
              <Button
                className='add__to__cart__btn'
                text='To cart'
                onClick={() => dispatch(addProductToCartAction(productItem))}
              />
            </div>
            <div className={s.descr__wrapper}>
              <h3 className={s.descr__title}>Description</h3>
              <p className={s.descr}>{productItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductInfoPage;
