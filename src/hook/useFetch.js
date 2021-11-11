import axios from 'axios';
import { useEffect } from 'react';
import { GET_NEWS, SET_LOADING } from '../actions';
import { CONFIG } from '../api';
import { useNewsContext } from '../context/news_context';

const { PARAMS, BASE_URL, ENDPOINT } = CONFIG;

export const useFetch = () => {
  const [state, dispatch] = useNewsContext();
  const { news, isLoading, query } = state;

  useEffect(() => {
    axios
      .get(`${BASE_URL}${ENDPOINT}${PARAMS}${query}`)
      .then(({ data }) => {
        const { articles } = data;
        dispatch({ type: GET_NEWS, payload: articles });
        dispatch({ type: SET_LOADING, payload: false });
      })
      .catch((error) => {
        dispatch({ type: GET_NEWS, payload: [] });
        dispatch({ type: SET_LOADING, payload: false });
        throw new Error(error);
      });
  }, [query, dispatch]);

  return { news, isLoading };
};
