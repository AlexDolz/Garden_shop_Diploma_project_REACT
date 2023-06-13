import s from './Order.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const Order = () => {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();
  console.log(cart);
  let totalOrderSum = cart
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
      <form className={s.order__form}>
        <Input
          placeholder='Phone number'
          className='order__input'
          name='phone_num'
          type='text'
          onKeyDown={handleKeyDown}
        />
        <Button text='Order' className='order__btn' />
      </form>
    </div>
  );
};

export default Order;
