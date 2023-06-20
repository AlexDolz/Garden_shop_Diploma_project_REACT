const defaultState = {};

const GET_PRODUCT_INFO = 'GET_PRODUCT_INFO';

export const productInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCT_INFO:
      return action.payload.status === 'ERR'
        ? action.payload
        : { ...action.payload[0] };
    default:
      return state;
  }
};

export const getProductInfoAction = payload => ({
  type: GET_PRODUCT_INFO,
  payload,
});
