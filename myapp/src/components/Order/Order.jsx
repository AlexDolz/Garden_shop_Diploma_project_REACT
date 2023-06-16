import s from './Order.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { sendOrderRequest } from '../../asynActions/requests';
import { removeAllCartProductsAction } from '../../store/Reducers/cartReducer';
import { useState } from 'react';

const Order = ({ onOrderComplete }) => {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();
  const [orderComplete, setOrderComplete] = useState(false);
  const totalOrderSum = cart
    .reduce(
      (accum, elem) =>
        accum +
        elem.count * (elem.discont_price ? elem.discont_price : elem.price),
      0
    )
    .toFixed(2)
    .replace('.', ',');

  const handleKeyDown = event => {
    const allowedKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Backspace',
      '+',
    ];

    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    const convertedTotalSum = parseFloat(totalOrderSum);

    if (convertedTotalSum === 0) {
      setOrderComplete(false);
    } else {
      sendOrderRequest(event.target.phone_num.value);
      dispatch(removeAllCartProductsAction());
      event.target.reset();
      setOrderComplete(true);
      localStorage.removeItem('discountComplete');
      onOrderComplete();
    }
  };

  return (
    <div className={s.order__wrapper}>
      <h3 className={s.order__title}>Order details</h3>
      <div className={s.order__total__sum__wrapper}>
        <p className={s.order__total}>Total</p>
        <p className={s.order__sum}>
          {totalOrderSum}
          <span className={s.order__sum__span}>$</span>
        </p>
      </div>
      {orderComplete && (
        <p className={s.order__complete}>Your order complete :)</p>
      )}
      <form onSubmit={formSubmit} className={s.order__form}>
        <Input
          placeholder='Phone number'
          className='order__input'
          name='phone_num'
          type='text'
          onKeyDown={handleKeyDown}
          required
        />
        <Button text='Order' className='order__btn' />
      </form>
    </div>
  );
};

export default Order;
