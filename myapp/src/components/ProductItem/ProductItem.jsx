import s from './ProductItem.module.css';
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import ProductPrice from '../ProductPrice/ProductPrice';
import { useDispatch } from 'react-redux';
import { addProductToCartAction } from '../../store/Reducers/cartReducer';
import { useState } from 'react';

const ProductItem = ({ product }) => {
  const [buttonText, setButtonText] = useState('Add to cart');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { image, price, discont_price, title, id } = product;
  const rootUrl = 'http://localhost:3333';

  const handleItemClick = () => {
    navigate(`/products/${id}`);
  };

  const handleAddToCartClick = event => {
    event.stopPropagation();
    dispatch(addProductToCartAction(product));
    setButtonText('Added to cart!');
    setTimeout(() => {
      setButtonText('Add to cart');
    }, 1000);
  };

  return (
    <div className={s.product__item} onClick={handleItemClick}>
      <div className={s.product__img__wrapper}>
        <img
          className={s.product__img}
          src={`${rootUrl}${image}`}
          alt={title}
        />
        <div className={s.product__modal}>
          <Button
            text={buttonText}
            className='add__to__cart__modal'
            onClick={handleAddToCartClick}
          />
        </div>
      </div>

      <ProductPrice price={price} discont_price={discont_price} />
      <h3 className={s.product__title}>{title}</h3>
    </div>
  );
};

export default ProductItem;
