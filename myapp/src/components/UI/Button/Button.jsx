import React from 'react';
import classNames from 'classnames';
import s from './Button.module.css';

const Button = ({ text, className, onClick }) => {
  const buttonClasses = classNames({
    [s.header__btn]: className === 'header__btn',
    [s.head__btn]: className === 'head__btn',
    [s.categories__btn]: className === 'categories__btn',
    [s.discount__btn]: className === 'discount__btn',
    [s.add__to__cart__btn]: className === 'add__to__cart__btn',
  });
  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
