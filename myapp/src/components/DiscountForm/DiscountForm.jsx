import React from 'react';
import s from './DiscountForm.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { discountRequest } from '../../asynActions/requests';

const DiscountForm = () => {
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

  const getDiscount = event => {
    event.preventDefault();
    const { phone_num } = event.target;

    const discount = {
      phone_num: phone_num.value,
    };
    discountRequest(discount);
    event.target.reset();
  };

  return (
    <form onSubmit={getDiscount} className={s.discount__form}>
      <Input
        placeholder='+49'
        className='discount__input'
        name='phone_num'
        type='text'
        onKeyDown={handleKeyDown}
      />
      <Button text='Get a discount' className='discount__btn' />
    </form>
  );
};

export default DiscountForm;
