import { Link } from 'react-router-dom';
import {
  SET_LOADING,
  SET_QUERY_SEARCH,
  TOGGLE_NAVBAR,
} from '../reducer/actions';
import { useNewsContext } from '../context/newsContext';
import { pages } from '../utils/constants';
import { Button } from '.';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [state, dispatch] = useNewsContext();
  const [isNavClosed, setIsNavClosed] = useState(true);
  const ulStyle = isNavClosed ? 'hidden' : 'block';
  const navStyle = isNavClosed ? 'h-19' : 'h-50';

  // Toggle untuk berpindah navbar sekaligus memproses data fetching
  const toggleNavbar = (page, name) => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: TOGGLE_NAVBAR, payload: page });
    dispatch({ type: SET_QUERY_SEARCH, payload: name });
  };

  // <nav className='flex justify-between px-12 py-5 text-white bg-gradient-to-r from-primary-dark to-primary-light'>

  return (
    <nav
      className={
        'px-12 py-5 text-white ease-out duration-200 transition-all lg:flex lg:justify-between bg-gradient-to-r from-primary-dark to-primary-light ' +
        navStyle
      }
    >
      <div className='flex justify-between'>
        <h1 className='text-2xl font-extrabold'>HotNews.</h1>
        <Button
          className='lg:hidden'
          onClick={() => setIsNavClosed(!isNavClosed)}
        >
          <FaBars size='1.5rem' />
        </Button>
      </div>
      <ul className={`mt-3 text-xl lg:mt-0 lg:flex lg:space-x-16 ${ulStyle}`}>
        {pages.map(({ route, name }, index) => {
          // Mengecek state halaman untuk styling border bottom di nav list
          const isPageActive = index === state.pages && 'special-list-active';

          return (
            <li
              className={`lg:inline hfidden special-list ${isPageActive}`}
              key={index}
            >
              <Link to={route} onClick={() => toggleNavbar(index, name)}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
