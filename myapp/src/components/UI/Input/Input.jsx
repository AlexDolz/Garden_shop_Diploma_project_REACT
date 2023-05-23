import React from 'react';
import classNames from 'classnames';
import s from './Input.module.css';

const Input = ({ text, style }) => {
  const inputClasses = classNames(s.input, {
    [s.discount__input]: style === 'discount__input',
  });
  return <input type='number' className={inputClasses} placeholder={text} />;
};

export default Input;
