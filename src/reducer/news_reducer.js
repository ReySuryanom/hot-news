import { SET_QUERY_SEARCH, TOGGLE_NAVBAR, UPDATE_NEWS } from '../actions';

export const initialState = {
  news: [],
  saved_news: [],
  query: '',
  pages: 0,
};

export const news_reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        pages: action.payload,
      };

    case SET_QUERY_SEARCH:
      return {
        ...state,
        query: action,
      };

    case UPDATE_NEWS:
      return {
        ...state,
        pages: action,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
