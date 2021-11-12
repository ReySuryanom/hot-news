import axios from 'axios';
import { useEffect } from 'react';
import { GET_NEWS, SET_LOADING } from '../reducer/actions';
import { CONFIG } from '../api';
import { useNewsContext } from '../context/newsContext';

const { PARAMS, BASE_URL, ENDPOINT } = CONFIG;

export const useFetch = () => {
  const [state, dispatch] = useNewsContext();
  const { news, isLoading, query } = state;

  useEffect(() => {
    axios
      .get(`${BASE_URL}${ENDPOINT}${PARAMS}${query}`)
      .then(({ data }) => {
        // console.log(data);
        const { articles } = data;
        // console.log(articles);
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
