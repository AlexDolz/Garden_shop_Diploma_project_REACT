import React from 'react';
import classNames from 'classnames';

const AddToCartButton = ({ className }) => {
  const addToCartBtnClasses = classNames(className);
  return <button className={addToCartBtnClasses}>Add to cart</button>;
};

export default AddToCartButton;
