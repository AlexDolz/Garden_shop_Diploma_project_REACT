import { getCategoriesListAction } from '../store/Reducers/categoriesListReducer';
import { getCategoryItemProductsAction } from '../store/Reducers/categoryItemReduce';
import { getProductListAction } from '../store/Reducers/productListReducer';

const rootUrl = 'http://localhost:3333';

const categoriesListUrl = `${rootUrl}/categories/all`;

export const fetchCategoriesList = () => {
  return function (dispatch) {
    fetch(categoriesListUrl)
      .then(res => res.json())
      .then(data => dispatch(getCategoriesListAction(data)));
  };
};

const productListUrl = `${rootUrl}/products/all`;

export const fetchProductList = () => {
  return function (dispatch) {
    fetch(productListUrl)
      .then(res => res.json())
      .then(data => dispatch(getProductListAction(data)));
  };
};

const getDiscountUrl = `${rootUrl}/sale/send`;

export const discountRequest = discount => {
  fetch(getDiscountUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(discount),
  })
    .then(res => res.json())
    .then(data => console.log(data));
  console.log(discount);
};

const categoryItemProductsUrl = `${rootUrl}/categories/`;

export const fetchCategoryItemProducts = id => {
  return function (dispatch) {
    fetch(`${categoryItemProductsUrl}${id}`)
      .then(res => res.json())
      .then(data => dispatch(getCategoryItemProductsAction(data)));
  };
};
