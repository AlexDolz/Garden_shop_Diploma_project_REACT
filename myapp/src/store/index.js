import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesListReducer } from './Reducers/categoriesListReducer';
import thunk from 'redux-thunk';
import { productListReducer } from './Reducers/productListReducer';

const rootReducer = combineReducers({
  categoriesList: categoriesListReducer,
  productList: productListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
