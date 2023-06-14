import React from 'react';
import classNames from 'classnames';
import s from './Button.module.css';

const Button = ({ text, className, onClick, disabled, style }) => {
  const buttonClasses = classNames(s.button, {
    [s.header__btn]: className === 'header__btn',
    [s.head__btn]: className === 'head__btn',
    [s.categories__btn]: className === 'categories__btn',
    [s.discount__btn]: className === 'discount__btn',
    [s.add__to__cart__modal]: className === 'add__to__cart__modal',
    [s.add__to__cart__btn]: className === 'add__to__cart__btn',
    [s.order__btn]: className === 'order__btn',
  });
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
