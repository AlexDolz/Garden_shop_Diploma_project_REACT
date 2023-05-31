const defaultState = {};

const GET_CATEGORY_ITEM_PRODUCTS = 'GET_CATEGORY_ITEM_PRODUCTS';
const SORT_CATEGORY_ITEM_PRODUCTS = 'SORT_CATEGORY_ITEM_PRODUCTS';
const FILTER_CATEGORY_ITEM_PRODUCTS_BY_SALE =
  'FILTER_CATEGORY_ITEM_PRODUCTS_BY_SALE';

export const categoryItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY_ITEM_PRODUCTS:
      const newState = action.payload.data.map(elem => ({
        ...elem,
        showBySale: true,
        showByRange: true,
      }));

      console.log(newState);
      return { ...action.payload, data: newState };

    case SORT_CATEGORY_ITEM_PRODUCTS:
      let sortedState = [...state.data];
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
        sortedState.sort((a, b) => a.id - b.id);
      }
      return { ...state, data: sortedState };

    case FILTER_CATEGORY_ITEM_PRODUCTS_BY_SALE:
      const filteredData = state.data.filter(elem => {
        if (elem.discont_price === null) {
          return { ...elem, showBySale: action.payload };
        }
        return { ...elem, showBySale: true };
      });
      console.log(filteredData);
      return { ...state, data: filteredData };
    // return { ...state, data: filteredState, showBySale: action.payload };

    default:
      return state;
  }
};

export const getCategoryItemProductsAction = payload => ({
  type: GET_CATEGORY_ITEM_PRODUCTS,
  payload,
});
export const sortCategoryItemProducts = payload => ({
  type: SORT_CATEGORY_ITEM_PRODUCTS,
  payload,
});
export const filterCategoryItemProductsBySaleAction = payload => ({
  type: FILTER_CATEGORY_ITEM_PRODUCTS_BY_SALE,
  payload,
});
