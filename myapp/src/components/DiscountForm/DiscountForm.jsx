import React from 'react';
import s from './DiscountForm.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { discountRequest } from '../../asynActions/requests';

const DiscountForm = () => {
  const getDiscount = event => {
    event.preventDefault();
    const { number } = event.target;

    const discount = {
      number: number.value,
    };
    discountRequest(discount);
    event.target.reset();
  };

  return (
    <form onSubmit={getDiscount} className={s.discount__form}>
      <Input
        placeholder='+49'
        className='discount__input'
        name='number'
        type='number'
      />
      <Button text='Get a discount' className='discount__btn' />
    </form>
  );
};

export default DiscountForm;
