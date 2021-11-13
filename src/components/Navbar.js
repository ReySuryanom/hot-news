import { Link } from 'react-router-dom';
import {
  SET_LOADING,
  SET_QUERY_SEARCH,
  TOGGLE_NAVBAR,
} from '../reducer/actions';
import { useNewsContext } from '../context/newsContext';
import { pages } from '../utils/constants';

export default function Navbar() {
  const [state, dispatch] = useNewsContext();

  // Toggle untuk berpindah navbar sekaligus memproses data fetching
  const toggleNavbar = (page, name) => {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: TOGGLE_NAVBAR, payload: page });
    dispatch({ type: SET_QUERY_SEARCH, payload: name });
  };

  return (
    <nav className='flex justify-between px-12 py-5 text-white bg-gradient-to-r from-primary-dark to-primary-light'>
      <h1 className='text-2xl font-extrabold'>HotNews.</h1>
      <ul className='flex space-x-16 text-xl'>
        {pages.map(({ route, name }, index) => {
          // Mengecek state halaman untuk styling border bottom di nav list
          const isPageActive = index === state.pages && 'special-list-active';

          return (
            <li className={`special-list ${isPageActive}`} key={index}>
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
