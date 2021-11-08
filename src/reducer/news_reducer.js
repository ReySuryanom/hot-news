import {
  SET_QUERY_SEARCH,
  TOGGLE_NAVBAR,
  ADD_TO_SAVED_NEWS,
  GET_NEWS,
  SET_LOADING,
} from '../actions';

export const initialState = {
  news: [],
  saved_news: [],
  query: 'indonesia',
  isLoading: true,
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
        query: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };

    case ADD_TO_SAVED_NEWS:
      return {
        ...state,
        saved_news: [...state.saved_news, action.payload],
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
