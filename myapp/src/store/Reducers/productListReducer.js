const defaultState = {
  titlePage: {},
  productList: [],
};

const PRODUCT_LIST_BY_CATEGORY = 'PRODUCT_LIST_BY_CATEGORY';
const PRODUCT_LIST_BY_SALE = 'PRODUCT_LIST_BY_SALE';
const FILTER_PRODUCTS_BY_SALE = 'FILTER_PRODUCTS_BY_SALE';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const FILTER_BY_RANGE = 'FILTER_BY_RANGE';

export const productListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_BY_CATEGORY:
      if (action.payload.category.title) {
        return {
          titlePage: action.payload.category,
          productList: action.payload.data.map(elem => ({
            ...elem,
            showBySale: true,
            rangeActive: true,
          })),
        };
      } else {
        return {
          titlePage: { title: 'All products' },
          productList: action.payload.data.map(elem => ({
            ...elem,
            showBySale: true,
            rangeActive: true,
          })),
        };
      }

    case PRODUCT_LIST_BY_SALE:
      return {
        titlePage: { title: 'Product with Sale' },
        productList: state.productList
          .filter(elem => elem.discont_price)
          .map(elem => ({ ...elem, showBySale: true, rangeActive: true })),
      };

    case FILTER_PRODUCTS_BY_SALE:
      if (action.payload) {
        return {
          ...state,
          productList: [...state.productList].map(elem => {
            if (elem.discont_price === null) {
              elem.showBySale = false;
            }
            return elem;
          }),
        };
      } else {
        return {
          ...state,
          productList: [...state.productList].map(elem => ({
            ...elem,
            showBySale: true,
          })),
        };
      }

    case SORT_PRODUCTS:
      let sortedState = [...state.productList];
      if (action.payload === 'title_a_z') {
        return {
          ...state,
          productList: [...state.productList].sort((a, b) =>
            a.title.localeCompare(b.title)
          ),
        };
      } else if (action.payload === 'title_z_a') {
        return {
          ...state,
          productList: [...state.productList].sort((a, b) =>
            b.title.localeCompare(a.title)
          ),
        };
      } else if (action.payload === 'ascending_price') {
        return {
          ...state,
          productList: [...state.productList].sort((a, b) => {
            const priceA = a.discont_price || a.price;
            const priceB = b.discont_price || b.price;
            return priceA - priceB;
          }),
        };
      } else if (action.payload === 'descending_price') {
        return {
          ...state,
          productList: [...state.productList].sort((a, b) => {
            const priceA = a.discont_price || a.price;
            const priceB = b.discont_price || b.price;
            return priceB - priceA;
          }),
        };
      } else if (action.payload === 'default') {
        return {
          ...state,
          productList: [...state.productList].sort((a, b) => a.id - b.id),
        };
      }
      return sortedState;

    case FILTER_BY_RANGE:
      const { from, to } = action.payload;
      console.log(action.payload);

      const hasFrom = from !== '';
      const hasTo = to !== '';

      return {
        ...state,
        productList: [...state.productList].map(elem => {
          const price = elem.discont_price || elem.price;
          const isInRange =
            (!hasFrom || price >= +from) && (!hasTo || price <= +to);
          return {
            ...elem,
            rangeActive: isInRange,
          };
        }),
      };

    default:
      return state;
  }
};

export const productListByCategoryAction = payload => ({
  type: PRODUCT_LIST_BY_CATEGORY,
  payload,
});
export const productListBySaleAction = () => ({
  type: PRODUCT_LIST_BY_SALE,
});
export const filterProductsBySaleAction = payload => ({
  type: FILTER_PRODUCTS_BY_SALE,
  payload,
});
export const sortProductsAction = payload => ({
  type: SORT_PRODUCTS,
  payload,
});
export const filterByRangeAction = payload => ({
  type: FILTER_BY_RANGE,
  payload,
});
