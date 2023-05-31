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
  sortCategoryItemProducts,
} from '../../store/Reducers/categoryItemReduce';

const Filter = ({ page }) => {
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
    dispatch(sortByRangeAction(newRange));
  };

  return (
    <div className={s.filter__wrapper}>
      <form className={s.form}>
        <label
          className={s.filter__label}
          style={page === 'salesPage' ? { marginRight: '68px' } : {}}
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
        {page === 'productListPage' && (
          <label className={`${s.filter__label} ${s.filter__label__discount}`}>
            Discounted items
            <Input
              onClick={event => {
                dispatch(filterProductsBySaleAction(event.target.checked));
                // dispatch(
                //   filterCategoryItemProductsBySaleAction(event.target.checked)
                // );
              }}
              type='checkbox'
              className='filter__checkbox'
            />
          </label>
        )}
        <label className={`${s.filter__label} ${s.filter__label__sort}`}>
          Sorted
          <select
            onChange={event => {
              dispatch(sortProductsAction(event.target.value));
              // dispatch(sortCategoryItemProducts(event.target.value));
            }}
            className={s.filter__select}
          >
            <option value='default'>by default</option>
            <option value='title'>by title</option>
            <option value='ascending_price'>by ascending price</option>
            <option value='descending_price'>by descending price</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Filter;
