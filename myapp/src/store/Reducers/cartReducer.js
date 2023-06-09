const storage = JSON.parse(localStorage.getItem('cart'));
const defaultState = storage ? storage : [];

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

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

    default:
      return state;
  }
};

export const addProductToCartAction = payload => ({
  type: ADD_PRODUCT_TO_CART,
  payload,
});
