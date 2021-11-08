const API_KEY = process.env.REACT_APP_API_KEY;

export const CONFIG = {
  PARAMS: `?pageSize=12&apiKey=${API_KEY}&q=`,
  BASE_URL: 'https://newsapi.org/v2/',
  ENDPOINT: 'everything',
};
