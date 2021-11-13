import axios from 'axios';
import { useEffect } from 'react';
import { GET_NEWS, SET_LOADING, SET_MESSAGE } from '../reducer/actions';
import { CONFIG } from '../api';
import { useNewsContext } from '../context/newsContext';
import { limitMessage } from '../utils/constants';

const { PARAMS, BASE_URL, ENDPOINT } = CONFIG;

export const useFetch = () => {
  const [state, dispatch] = useNewsContext();
  const { news, isLoading, query, size } = state;

  useEffect(() => {
    axios
      .get(`${BASE_URL}${ENDPOINT}${PARAMS(size)}${query}`)
      .then(({ data }) => {
        const { articles } = data;

        if (data['totalResults'] === 0) {
          const message =
            'Maaf, kami tidak bisa menemukan berita yang ingin kamu cari.';
          dispatch({ type: GET_NEWS, payload: [] });
          dispatch({ type: SET_MESSAGE, payload: message });
        } else if (data['status'] === 'ok') {
          dispatch({ type: GET_NEWS, payload: articles });
          dispatch({ type: SET_LOADING, payload: false });
        } else {
          const message = data['message'];
          dispatch({ type: SET_MESSAGE, payload: message });
        }
      })
      .catch((error) => {
        const message = error.message;
        const errorMessage = message.match(/(429)/g) ? limitMessage : message;
        dispatch({ type: SET_MESSAGE, payload: errorMessage });
      });
  }, [query, size, dispatch]);

  return { news, isLoading };
};
