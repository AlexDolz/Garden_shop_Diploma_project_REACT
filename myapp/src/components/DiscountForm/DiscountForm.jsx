import React from 'react';
import s from './DiscountForm.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const DiscountForm = () => {
  return (
    <form className={s.discount__form}>
      <Input text='+49' style='discount__input' />
      <Button text='Get a discount' style='discount__btn' />
    </form>
  );
};

export default DiscountForm;
