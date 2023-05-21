const defaultState = [];

const GET_CATEGORIES_LIST = 'GET_CATEGORIES_LIST';

export const categoriesListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_LIST:
      return [...action.payload];

    default:
      return state;
  }
};

export const getCategoriesListAction = payload => ({
  type: GET_CATEGORIES_LIST,
  payload,
});
