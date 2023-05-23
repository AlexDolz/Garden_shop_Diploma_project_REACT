import React from 'react';
import s from './DiscountForm.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const DiscountForm = () => {
  return (
    <form className={s.discount__form}>
      <Input className={s.discount__input} text='+49' />
      <Button className={s.discount__btn} text='Get a discount' />
    </form>
  );
};

export default DiscountForm;
