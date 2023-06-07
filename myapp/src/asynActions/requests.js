import { getCategoriesListAction } from '../store/Reducers/categoriesListReducer';
import {
  productListByCategoryAction,
  productListBySaleAction,
} from '../store/Reducers/productListReducer';

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

export function fetchAllProductList(type) {
  return function (dispatch) {
    fetch(productListUrl)
      .then(res => res.json())
      .then(data => {
        dispatch(productListByCategoryAction({ data, category: {} }));
        if (type === 'sale') {
          dispatch(productListBySaleAction());
        }
      });
  };
}

const categoryItemProductsUrl = `${rootUrl}/categories/`;

export function fetchProductListByCategory(id) {
  return function (dispatch) {
    fetch(`${categoryItemProductsUrl}/${id}`)
      .then(res => res.json())
      .then(data => dispatch(productListByCategoryAction(data)));
  };
}

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
