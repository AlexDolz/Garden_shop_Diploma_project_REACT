const defaultState = [];

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
const FILTER_PRODUCTS_BY_SALE = 'FILTER_PRODUCTS_BY_SALE';
// const GET_PRODUCT_LIST_PAGE_PRODUCTS = 'GET_PRODUCT_LIST_PAGE_PRODUCTS';

export const productListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      const newState = action.payload.map(elem => ({
        ...elem,
        showBySale: true,
      }));
      return newState;

    // case GET_PRODUCT_LIST_PAGE_PRODUCTS:
    //   return [...state, ...action.payload];

    case FILTER_PRODUCTS_BY_SALE:
      if (action.payload) {
        return state.map(elem => {
          if (elem.discont_price === null) {
            elem.showBySale = false;
          }
          return elem;
        });
      } else {
        return state.map(elem => ({ ...elem, showBySale: true }));
      }

    default:
      return state;
  }
};

export const getProductListAction = payload => ({
  type: GET_PRODUCT_LIST,
  payload,
});
export const filterProductsBySaleAction = payload => ({
  type: FILTER_PRODUCTS_BY_SALE,
  payload,
});
// export const getProductListPageProductsAction = payload => ({
//   type: GET_PRODUCT_LIST_PAGE_PRODUCTS,
//   payload,
// });
