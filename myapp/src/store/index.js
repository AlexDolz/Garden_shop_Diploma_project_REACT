import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesListReducer } from './Reducers/categoriesListReducer';
import thunk from 'redux-thunk';
import { productListReducer } from './Reducers/productListReducer';
import { cartReducer } from './Reducers/cartReducer';

const rootReducer = combineReducers({
  categoriesList: categoriesListReducer,
  productList: productListReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
