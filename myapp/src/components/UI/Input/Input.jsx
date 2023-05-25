import React from 'react';
import classNames from 'classnames';
import s from './Input.module.css';

const Input = ({ placeholder, className, name, type, onClick }) => {
  const inputClasses = classNames({
    [s.discount__input]: className === 'discount__input',
    [s.filter__input]: className === 'filter__input',
    [s.filter__checkbox]: className === 'filter__checkbox',
  });

  return (
    <input
      type={type}
      className={inputClasses}
      placeholder={placeholder}
      name={name}
      onClick={onClick}
    />
  );
};

export default Input;
