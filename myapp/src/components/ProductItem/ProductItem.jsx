import s from './ProductItem.module.css';
import Button from '../UI/Button/Button';
import { NavLink } from 'react-router-dom';
import ProductPrice from '../ProductPrice/ProductPrice';

const ProductItem = ({ image, price, discont_price, title, id }) => {
  const rootUrl = 'http://localhost:3333';

  // const discountPercentage = Math.round(
  //   ((price - discont_price) / price) * 100
  // );

  return (
    <div className={s.product__item}>
      <NavLink to={`/products/${id}`}>
        <div className={s.product__img__wrapper}>
          <img
            className={s.product__img}
            src={`${rootUrl}${image}`}
            alt={title}
          />
          <div className={s.product__modal}>
            <Button text='Add to cart' className='add__to__cart__modal' />
          </div>
        </div>
        {/* <div
          className={`${s.product__price__wrapper} ${
            discont_price ? '' : s.align__start
          }`}
        >
          {discont_price ? (
            <>
              <p className={s.product__discount__price}>
                {discont_price}
                <span className={s.product__discount__price_span}>$</span>
              </p>
              <p className={s.product__old__price}>{price}$</p>
              <p className={s.product__discount__percentage}>
                -{discountPercentage}%
              </p>
            </>
          ) : (
            <p className={s.product__discount__price}>
              {price}
              <span className={s.product__discount__price_span}>$</span>
            </p>
          )}
        </div> */}
        <ProductPrice price={price} discont_price={discont_price} />
        <h3 className={s.product__title}>{title}</h3>
      </NavLink>
    </div>
  );
};

export default ProductItem;
