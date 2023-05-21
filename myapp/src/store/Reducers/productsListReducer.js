const defaultState = [];

const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';

export const productsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return [...action.payload];

    default:
      return state;
  }
};

export const getProductsListAction = payload => ({
  type: GET_PRODUCTS_LIST,
  payload,
});
