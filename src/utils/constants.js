import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { checkDefaultImg } from './helpers';

export const regex = /(rcom-default|reuters-default)/g;

export const limitMessage =
  'You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.';

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
export const buttonStyle = {
  style: (type) => {
    const size = type === 'headlines' ? 'w-12 h-12' : 'w-8 h-8';
    return `absolute z-10 bg-white border-2 rounded-full border-text-gray top-2 right-2 ${size}`;
  },
};
export const articleStyle = {
  aside: 'flex group',
  search: 'flex shadow-md group',
  headlines: 'w-full group',
  default: 'w-56 group',
};
export const div1Style = {
  aside: 'w-3/6 mb-0.5 relative ',
  search: 'overflow-hidden w-5/12 h-44 mb-0.5 relative ',
  default: 'overflow-hidden h-32 mb-0.5 relative ',
  headlines: 'relative',
};
export const div2Style = {
  aside: 'w-full mb-0.5 relative ',
  search: 'overflow-hidden w-full h-44 mb-0.5 relative ',
  default: 'overflow-hidden h-32 mb-0.5 relative ',
  headlines: 'relative',
};
export const faSearchStyle = {
  style: (type) => {
    const size = type === 'headlines' ? 'text-4xl' : 'text-xl';
    return `absolute ${size} text-white transform opacity-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition duration-300 ease-in-out group-hover:opacity-100`;
  },
};
export const dlStyle = {
  aside: 'w-3/6 pl-3 flex flex-col ',
  search: 'w-3/6 pl-3 flex flex-col ',
  headlines: 'relative mx-auto w-11/12 bg-white p-5 -mt-10 shadow-md ',
  default: '',
};
export const dtStyle = {
  style: (type) => {
    const style = type === 'search' ? 'text-xl' : 'text-sm';
    return `font-medium ${style} group-hover:text-black transition duration-300 ease-in-out text-gray-800`;
  },
  default: '',
};
export const justifyFixed = {
  aside: ' justify-between',
  search: ' justify-center bg-text-light w-full pl-10',
  default: '',
};
export const specialStyle = {
  search: ' h-44',
  default: '',
};
export const img = (url) =>
  checkDefaultImg(url)
    ? 'border-2 border-primary-light object-cover w-full h-full transition duration-300 ease-in-out group-hover:brightness-50 filter'
    : 'w-full h-full object-cover transition duration-300 ease-in-out group-hover:brightness-50 filter';
