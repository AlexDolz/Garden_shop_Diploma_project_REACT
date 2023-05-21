import React from 'react';
import s from './DiscountForm.module.css';
import Input from '../UI/Input/Input';

const DiscountForm = () => {
  return (
    <form className={s.discount__form}>
      <Input className={s.discount__input} text='+49' />
    </form>
  );
};

export default DiscountForm;
