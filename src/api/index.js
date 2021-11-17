// const API_KEY = process.env.REACT_APP_API_KEY;

// Gunakan syntax dibawah, jika api ky diatas sudah melewati batasnya.
const API_KEY = process.env.REACT_APP_API_KEY_2;

export const CONFIG = {
  PARAMS: (size) => `?pageSize=${size}&apiKey=${API_KEY}&q=`,
  BASE_URL: 'https://newsapi.org/v2/',
  ENDPOINT: 'everything',
};
