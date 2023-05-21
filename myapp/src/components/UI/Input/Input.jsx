import React from 'react';
import classNames from 'classnames';

const Input = ({ text, className }) => {
  const inputClasses = classNames(className);
  return <input type='text' className={inputClasses} placeholder={text} />;
};

export default Input;
