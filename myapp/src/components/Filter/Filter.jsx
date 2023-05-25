import React from 'react';
import s from './Filter.module.css';
import Input from '../UI/Input/Input';
import { useDispatch } from 'react-redux';
import { filterProductsBySaleAction } from '../../store/Reducers/productListReducer';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.filter__wrapper}>
      <form className={s.form}>
        <label className={s.filter__label}>
          Price
          <Input
            type='number'
            placeholder='from'
            className='filter__input'
            name='from'
          />
          <Input
            type='number'
            placeholder='to'
            className='filter__input'
            name='to'
          />
        </label>
        <label className={`${s.filter__label} ${s.filter__label__discount}`}>
          Discounted items
          <Input
            onClick={event =>
              dispatch(filterProductsBySaleAction(event.target.checked))
            }
            type='checkbox'
            className='filter__checkbox'
          />
        </label>
        <label className={`${s.filter__label} ${s.filter__label__sort}`}>
          Sorted
          <select name='sort' className={s.filter__select}>
            <option value=''>by default</option>
            <option value='0'>by title</option>
            <option value='1'>by price</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Filter;
