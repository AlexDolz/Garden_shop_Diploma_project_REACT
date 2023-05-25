import { getCategoriesListAction } from '../store/Reducers/categoriesListReducer';
import {
  getProductListAction,
  // getProductListPageProductsAction,
} from '../store/Reducers/productListReducer';

const backEndUrl = 'http://localhost:3333';

const categoriesListUrl = `${backEndUrl}/categories/all`;

export const fetchCategoriesList = () => {
  return function (dispatch) {
    fetch(categoriesListUrl)
      .then(res => res.json())
      .then(data => dispatch(getCategoriesListAction(data)));
  };
};

const productListUrl = `${backEndUrl}/products/all`;

export const fetchProductList = () => {
  return function (dispatch) {
    fetch(productListUrl)
      .then(res => res.json())
      .then(data => dispatch(getProductListAction(data)));
  };
};

// export const fetchProductListPage = () => {
//   return function (dispatch) {
//     fetch(productListUrl)
//       .then(res => res.json())
//       .then(data => dispatch(getProductListPageProductsAction(data)));
//   };
// };

const getDiscountUrl = `${backEndUrl}/sale/send`;

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
};
