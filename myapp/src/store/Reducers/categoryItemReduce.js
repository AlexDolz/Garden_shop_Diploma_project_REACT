const defaultState = {};

const GET_CATEGORY_ITEM_PRODUCTS = 'GET_CATEGORY_ITEM_PRODUCTS';
const SORT_CATEGORY_ITEM_PRODUCTS = 'SORT_CATEGORY_ITEM_PRODUCTS';
const FILTER_CATEGORY_ITEM_PRODUCTS_BY_SALE =
  'FILTER_CATEGORY_ITEM_PRODUCTS_BY_SALE';
const SORT_BY_RANGE_CATEGORY_ITEM_PRODUCTS =
  'SORT_BY_RANGE_CATEGORY_ITEM_PRODUCTS';

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
      if (action.payload === 'title_a_z') {
        sortedState.sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.payload === 'title_z_a') {
        sortedState.sort((a, b) => b.title.localeCompare(a.title));
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
      const filteredData = state.data.map(elem => {
        if (action.payload) {
          if (elem.discunt_price !== null) {
            return { ...elem, showBySale: true };
          } else {
            return { ...elem, showBySale: false };
          }
        } else {
          return { ...elem, showBySale: true };
        }
      });
      return { ...state, data: filteredData };

    case SORT_BY_RANGE_CATEGORY_ITEM_PRODUCTS:
      const { from, to } = action.payload;

      const hasFrom = from !== '';
      const hasTo = to !== '';

      const filteredData2 = state.data.map(elem => {
        const price = elem.discont_price || elem.price;
        const isInRange =
          (!hasFrom || price >= +from) && (!hasTo || price <= +to);
        return {
          ...elem,
          rangeActive: isInRange,
        };
      });

      return {
        ...state,
        data: filteredData2,
      };

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
export const sortByRangeCategoryItemProductsAction = payload => ({
  type: SORT_BY_RANGE_CATEGORY_ITEM_PRODUCTS,
  payload,
});
