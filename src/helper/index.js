export const pages = [
  { route: '/', name: 'Indonesia' },
  { route: '/programming', name: 'Programming' },
  { route: '/covid-19', name: 'Covid-19' },
  { route: '/saved', name: 'Saved' },
];

export const truncate = (text, length) =>
  text.length > length ? `${text.substring(0, length)}...` : text;

export const checkDefaultImg = (url) =>
  !!url.match(/(rcom-default|reuters-default)/g);

export const formattedNews = (arr) => {
  const newsPerPages = 5;
  const numberOfPages = Math.ceil(arr.length / newsPerPages);

  const newArray = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * newsPerPages;
    return arr.slice(start, start + newsPerPages);
  });

  return newArray;
};
