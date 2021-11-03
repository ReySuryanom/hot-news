const API_KEY = process.env.REACT_APP_API_KEY;

export const CONFIG = {
  PARAMS: `?q=indonesia&pageSize=12&apiKey=${API_KEY}`,
  BASE_URL: 'https://newsapi.org/v2/',
  ENDPOINT: 'everything',
};
