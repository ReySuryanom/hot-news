import axios from 'axios';
import { useEffect, useState } from 'react';
import { CONFIG } from '../api';

const { PARAMS, BASE_URL, ENDPOINT } = CONFIG;

export const useFetch = () => {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${ENDPOINT}${PARAMS}`)
      .then(({ data }) => {
        const { articles } = data;

        setIsLoading(true);
        setNews(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return { news, isLoading };
};
