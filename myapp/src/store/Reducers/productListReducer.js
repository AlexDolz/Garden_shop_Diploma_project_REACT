const defaultState = [];

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';

export const productListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return [...action.payload];

    default:
      return state;
  }
};

export const getProductListAction = payload => ({
  type: GET_PRODUCT_LIST,
  payload,
});
