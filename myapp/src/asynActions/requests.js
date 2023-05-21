import { getCategoriesListAction } from '../store/Reducers/categoriesListReducer';
import { getProductsListAction } from '../store/Reducers/productsListReducer';

const backEndUrl = 'http://localhost:3333';

const categoriesListUrl = `${backEndUrl}/categories/all`;

export const fetchCategoriesList = () => {
  return function (dispatch) {
    fetch(categoriesListUrl)
      .then(res => res.json())
      .then(data => dispatch(getCategoriesListAction(data)));
  };
};

const productsListUrl = `${backEndUrl}/products/all`;

export const fetchProductsList = () => {
  return function (dispatch) {
    fetch(productsListUrl)
      .then(res => res.json())
      .then(data => dispatch(getProductsListAction(data)));
  };
};
