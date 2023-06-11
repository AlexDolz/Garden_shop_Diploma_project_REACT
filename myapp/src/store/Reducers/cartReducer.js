const storage = JSON.parse(localStorage.getItem('cart'));
const defaultState = storage ? storage : [];

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const INCR_COUNT = 'INCR_COUNT';
const DECT_COUNT = 'DECT_COUNT';
const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT';

const sameProductCheck = (state, payload) => {
  const productExist = state.find(elem => elem.id === payload.id);
  if (productExist) {
    productExist.count++;
    return [...state];
  } else {
    return [...state, { ...payload, count: 1 }];
  }
};

const updateLocalStorage = tempState =>
  localStorage.setItem('cart', JSON.stringify(tempState));

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const tempState = sameProductCheck(state, action.payload);
      updateLocalStorage(tempState);
      return tempState;

    case INCR_COUNT:
      return state.map(elem => {
        if (elem.id === action.payload) {
          elem.count++;
        }
        updateLocalStorage([...state]);
        return elem;
      });

    case DECT_COUNT:
      const item = state.find(elem => elem.id === action.payload);
      if (item.count > 1) {
        item.count--;
      } else {
        state = state.filter(elem => elem.id !== action.payload);
      }
      updateLocalStorage([...state]);
      return [...state];

    case REMOVE_CART_PRODUCT:
      const tempState2 = state.filter(elem => elem.id !== action.payload);
      updateLocalStorage(tempState2);
      return tempState2;

    default:
      return state;
  }
};

export const addProductToCartAction = payload => ({
  type: ADD_PRODUCT_TO_CART,
  payload,
});
export const incrCountAction = payload => ({
  type: INCR_COUNT,
  payload,
});
export const decrCountAction = payload => ({
  type: DECT_COUNT,
  payload,
});
export const removeCartProductAction = payload => ({
  type: REMOVE_CART_PRODUCT,
  payload,
});
