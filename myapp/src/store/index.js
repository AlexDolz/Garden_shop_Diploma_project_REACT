import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesListReducer } from './Reducers/categoriesListReducer';
import thunk from 'redux-thunk';
import { productListReducer } from './Reducers/productListReducer';
import { cartReducer } from './Reducers/cartReducer';
import { productInfoReducer } from './Reducers/productInfoReducer';

const rootReducer = combineReducers({
  categoriesList: categoriesListReducer,
  productList: productListReducer,
  cart: cartReducer,
  productInfo: productInfoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
