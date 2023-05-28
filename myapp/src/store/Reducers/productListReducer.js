const defaultState = [];

const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';
const FILTER_PRODUCTS_BY_SALE = 'FILTER_PRODUCTS_BY_SALE';
// const GET_PRODUCT_LIST_PAGE_PRODUCTS = 'GET_PRODUCT_LIST_PAGE_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const SORT_BY_RANGE = 'SORT_BY_RANGE';

export const productListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      const newState = action.payload.map(elem => ({
        ...elem,
        showBySale: true,
        rangeActive: true,
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

    case SORT_PRODUCTS:
      let sortedState = [...state];
      if (action.payload === 'title') {
        sortedState.sort((a, b) =>
          a[action.payload].localeCompare(b[action.payload])
        );
      } else if (action.payload === 'ascending_price') {
        sortedState.sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceA - priceB;
        });
      } else if (action.payload === 'descending_price') {
        sortedState.sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceB - priceA;
        });
      } else if (action.payload === 'default') {
        return sortedState.sort((a, b) => a.id - b.id);
      }
      return sortedState;

    case SORT_BY_RANGE:
      const { from, to } = action.payload;

      return state.map(elem => ({
        ...elem,
        rangeActive:
          from === '' || to === ''
            ? true
            : (elem.discont_price &&
                elem.discont_price >= from &&
                elem.discont_price <= to) ||
              (elem.price && elem.price >= from && elem.price <= to),
      }));
    // How to sort in range? by price or by discount price or both? !!!

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
export const sortProductsAction = payload => ({
  type: SORT_PRODUCTS,
  payload,
});
export const sortByRangeAction = payload => ({
  type: SORT_BY_RANGE,
  payload,
});
