import React from 'react';
import classNames from 'classnames';
import s from './Button.module.css';

const Button = ({ text, style, onClick }) => {
  const buttonClasses = classNames(s.button, {
    [s.header__btn]: style === 'header__btn',
    [s.head__btn]: style === 'head__btn',
    [s.categories__btn]: style === 'categories__btn',
    [s.discount__btn]: style === 'discount__btn',
    [s.add__to__cart__btn]: style === 'add__to__cart__btn',
  });
  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
