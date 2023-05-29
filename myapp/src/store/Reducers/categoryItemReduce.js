const defaultState = {};

const GET_CATEGORY_ITEM_PRODUCTS = 'GET_CATEGORY_ITEM_PRODUCTS';

export const categoryItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY_ITEM_PRODUCTS:
      return { ...action.payload };

    default:
      return state;
  }
};

export const getCategoryItemProductsAction = payload => ({
  type: GET_CATEGORY_ITEM_PRODUCTS,
  payload,
});
