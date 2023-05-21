import React from 'react';
import s from './AddToCartButton.module.css';

const AddToCartButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.add__to__cart__btn}>
      Add to cart
    </button>
  );
};

export default AddToCartButton;
