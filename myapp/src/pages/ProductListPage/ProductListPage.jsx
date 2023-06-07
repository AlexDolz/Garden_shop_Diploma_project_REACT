import s from './ProductListPage.module.css';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import {
  fetchAllProductList,
  fetchProductListByCategory,
} from '../../asynActions/requests';
import ProductList from '../../components/ProductList/ProductList';
import Filter from '../../components/Filter/Filter';

const ProductListPage = ({ type }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const titlePage = useSelector(store => store.productList.titlePage);
  const productList = useSelector(
    store => store.productList.productList
  ).filter(elem => elem.showBySale && elem.rangeActive);

  const [filterValues, setFilterValues] = useState({});

  const handleFilterChange = newFilterValues => {
    setFilterValues(newFilterValues);
  };

  useEffect(() => {
    if (type === 'category') {
      dispatch(fetchProductListByCategory(id));
    } else {
      dispatch(fetchAllProductList(type));
    }
  }, [id, type]);

  const locationRef = useRef(null);

  useEffect(() => {
    const previousLocation = locationRef.current;
    locationRef.current = location;

    if (previousLocation && previousLocation.pathname !== location.pathname) {
      resetFilter();
    }
  }, [location]);

  const resetFilter = () => {
    setFilterValues({});
  };

  useEffect(() => {
    const defaultTitle = document.title;

    return () => {
      document.title = defaultTitle;
    };
  }, []);

  useEffect(() => {
    document.title = titlePage.title;
  }, [titlePage]);

  return (
    <div className='container'>
      <h2 className={s.products__page__title}>{titlePage.title}</h2>
      <div className='product_wrapper'>
        <Filter
          type={type}
          filterValues={filterValues}
          onFilterChange={handleFilterChange}
          key={location.pathname}
        />
        <ProductList products={productList} />
      </div>
    </div>
  );
};

export default ProductListPage;
