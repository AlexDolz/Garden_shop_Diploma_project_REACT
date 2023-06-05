import React, { useState } from 'react';
import s from './Filter.module.css';
import Input from '../UI/Input/Input';
import { useDispatch } from 'react-redux';
import {
  filterProductsBySaleAction,
  sortByRangeAction,
  sortProductsAction,
} from '../../store/Reducers/productListReducer';
import {
  filterCategoryItemProductsBySaleAction,
  sortByRangeCategoryItemProductsAction,
  sortCategoryItemProducts,
} from '../../store/Reducers/categoryItemReduce';

const Filter = ({ showCheckbox, location }) => {
  const [range, setRange] = useState({});
  const { from = '', to = '' } = range;

  const handleKeyDown = event => {
    const allowedKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Backspace',
      'Tab',
      '.',
    ];

    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const dispatch = useDispatch();

  const handlePriceRange = event => {
    const targetInput = event.target.name;
    const updatedValue = event.target.value;

    setRange(previousRange => ({
      ...previousRange,
      [targetInput]: updatedValue,
    }));

    const newRange = {
      from: targetInput === 'from' ? updatedValue : from || -Infinity,
      to: targetInput === 'to' ? updatedValue : to || Infinity,
    };
    dispatch(
      location === 'categoryProducts'
        ? sortByRangeCategoryItemProductsAction(newRange)
        : sortByRangeAction(newRange)
    );
  };

  const handleFilterBySale = event => {
    dispatch(
      location === 'categoryProducts'
        ? filterCategoryItemProductsBySaleAction(event.target.checked)
        : filterProductsBySaleAction(event.target.checked)
    );
  };

  const handleSortProducts = event => {
    dispatch(
      location === 'categoryProducts'
        ? sortCategoryItemProducts(event.target.value)
        : sortProductsAction(event.target.value)
    );
  };

  return (
    <div className={s.filter__wrapper}>
      <form className={s.form}>
        <label
          className={s.filter__label}
          style={!showCheckbox ? { marginRight: '68px' } : {}}
        >
          Price
          <Input
            type='text'
            placeholder='from'
            className='filter__input'
            name='from'
            onChange={handlePriceRange}
            onKeyDown={handleKeyDown}
          />
          <Input
            type='text'
            placeholder='to'
            className='filter__input'
            name='to'
            onChange={handlePriceRange}
            onKeyDown={handleKeyDown}
          />
        </label>
        {showCheckbox && (
          <label className={`${s.filter__label} ${s.filter__label__discount}`}>
            Discounted items
            <Input
              onClick={handleFilterBySale}
              type='checkbox'
              className='filter__checkbox'
            />
          </label>
        )}
        <label className={`${s.filter__label} ${s.filter__label__sort}`}>
          Sorted
          <select onChange={handleSortProducts} className={s.filter__select}>
            <option value='default'>by default</option>
            <option value='title_a_z'>by title a-z</option>
            <option value='title_z_a'>by title z-a</option>
            <option value='ascending_price'>by ascending price</option>
            <option value='descending_price'>by descending price</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Filter;
