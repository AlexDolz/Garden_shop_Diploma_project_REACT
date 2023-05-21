import React from 'react';
import classNames from 'classnames';

const Button = ({ text, className }) => {
  const buttonClasses = classNames(className);
  return <button className={buttonClasses}>{text}</button>;
};

export default Button;
