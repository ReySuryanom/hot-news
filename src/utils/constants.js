import { checkDefaultImg } from './helpers';

export const pages = [
  { route: '/', name: 'Indonesia' },
  { route: '/programming', name: 'Programming' },
  { route: '/covid', name: 'Covid-19' },
  { route: '/saved', name: 'Saved' },
];

export const regex = /(rcom-default|reuters-default)/g;

// Styles (Classname utilities)
export const img = (url) =>
  checkDefaultImg(url)
    ? 'border-2 border-primary-light object-cover w-full h-full'
    : 'w-full h-full object-cover';
export const special = (search) => (!!search ? ' h-44' : '');
export const article = (aside, search, headlines) =>
  !!aside || !!search ? 'flex' : !!headlines ? 'w-full' : 'w-56';
export const div = (aside, search, headlines) =>
  !!aside
    ? 'w-3/6'
    : !!search
    ? 'overflow-hidden w-5/12 h-44'
    : !headlines && 'overflow-hidden h-32';
export const dl = (aside, search, headlines) =>
  !!aside || !!search
    ? 'w-3/6 pl-3 flex flex-col'
    : !!headlines && 'relative mx-auto w-11/12 bg-white p-5 -mt-10 shadow-md';
export const dt = (search) =>
  `font-medium ${!!search ? 'text-xl' : 'text-sm'} group-hover:font-bold`;
export const button =
  'absolute z-10 w-8 h-8 bg-white border-2 rounded-full border-text-gray top-2 right-2';
export const justifyFixed = (aside, search) =>
  !!aside
    ? ' justify-between'
    : !!search
    ? ' justify-center bg-text-light w-full pl-10'
    : '';
