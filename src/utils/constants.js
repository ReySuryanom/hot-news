import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { checkDefaultImg } from './helpers';

export const regex = /(rcom-default|reuters-default)/g;

export const pages = [
  { route: '/', name: 'Indonesia' },
  { route: '/programming', name: 'Programming' },
  { route: '/covid', name: 'Covid-19' },
  { route: '/saved', name: 'Saved' },
];

export const iconlists = [
  { link: 'https://www.facebook.com/hacktiv8id/', icon: <FaFacebook /> },
  { link: 'https://www.instagram.com/hacktiv8id/', icon: <FaInstagram /> },
  { link: 'https://twitter.com/hacktiv8id', icon: <FaTwitter /> },
  { link: 'https://www.youtube.com/c/hacktiv8', icon: <FaYoutube /> },
];
export const footerlists = [
  {
    header: 'Kategori',
    lists: [
      'Edukasi',
      'Teknologi',
      'Entertainment',
      'Sport',
      'SepakBola',
      'Otomotif',
    ],
  },
  {
    header: 'Jaringan Media',
    lists: ['CNN Indonesia', 'CNBC Indonesia', 'Insertlive', 'Female Daily'],
  },
  {
    header: 'Informasi',
    lists: [
      'Redaksi',
      'Media Siber',
      'Karir',
      'Media Partner',
      'Info Iklan',
      'Disclaimer',
    ],
  },
];

// Styles (Classname utilities)
export const buttonStyle =
  'absolute z-10 w-8 h-8 bg-white border-2 rounded-full border-text-gray top-2 right-2';
export const specialStyle = {
  search: ' h-44',
  default: '',
};
export const articleStyle = {
  aside: 'flex group',
  search: 'flex group',
  headlines: 'w-full group',
  default: 'w-56 group',
};
export const divStyle = {
  aside: 'w-3/6 mb-0.5 relative',
  search: 'overflow-hidden w-5/12 h-44 mb-0.5 relative',
  default: 'overflow-hidden h-32 mb-0.5 relative',
};
export const dlStyle = {
  aside: 'w-3/6 pl-3 flex flex-col',
  search: 'w-3/6 pl-3 flex flex-col',
  headlines: 'relative mx-auto w-11/12 bg-white p-5 -mt-10 shadow-md ',
  default: '',
};
export const dtStyle = {
  search: (search) =>
    `font-medium ${
      search === 'search' ? 'text-xl' : 'text-sm'
    } group-hover:font-bold`,
  default: '',
};
export const justifyFixed = {
  aside: ' justify-between',
  search: ' justify-center bg-text-light w-full pl-10',
  default: '',
};
export const img = (url) =>
  checkDefaultImg(url)
    ? 'border-2 border-primary-light object-cover w-full h-full'
    : 'w-full h-full object-cover';
