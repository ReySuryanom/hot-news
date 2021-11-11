import { regex } from './constants';

export const truncate = (text, length) =>
  text.length > length ? `${text.substring(0, length)}...` : text;

export const checkDefaultImg = (url) => (!!url ? url.match(regex) : false);

export const formattedNews = (arr) => {
  const newsPerPages = 5;
  const numberOfPages = Math.ceil(arr.length / newsPerPages);

  const newArray = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * newsPerPages;
    return arr.slice(start, start + newsPerPages);
  });

  return newArray;
};
