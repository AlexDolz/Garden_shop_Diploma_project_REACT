import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesListReducer } from './Reducers/categoriesListReducer';
import thunk from 'redux-thunk';
import { productsListReducer } from './Reducers/productsListReducer';

const rootReducer = combineReducers({
  categoriesList: categoriesListReducer,
  productsList: productsListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
