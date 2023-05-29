import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesListReducer } from './Reducers/categoriesListReducer';
import thunk from 'redux-thunk';
import { productListReducer } from './Reducers/productListReducer';
import { categoryItemReducer } from './Reducers/categoryItemReduce';

const rootReducer = combineReducers({
  categoriesList: categoriesListReducer,
  productList: productListReducer,
  categoryItemProducts: categoryItemReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
